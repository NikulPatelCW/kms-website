<?php
declare(strict_types=1);

/**
 * Contact form endpoint for KMS website.
 * Deploy on PHP hosting. Angular may POST from:
 * - Same origin: /api/contact.php
 * - GitHub Pages (static): absolute URL in environment.github.ts — CORS is open (*).
 */

header('Content-Type: application/json; charset=utf-8');

$allowedOrigin = '*';
header('Access-Control-Allow-Origin: ' . $allowedOrigin);
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$raw = file_get_contents('php://input');
$input = json_decode($raw ?? '', true);

if (!is_array($input)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid request body. Expected JSON.']);
    exit;
}

function str_clean(?string $value, int $maxLength): string
{
    $s = trim((string) $value);
    $s = strip_tags($s);
    if (strlen($s) > $maxLength) {
        $s = substr($s, 0, $maxLength);
    }
    return $s;
}

$fullName = str_clean($input['fullName'] ?? '', 120);
$email = str_clean($input['email'] ?? '', 254);
$phone = str_clean($input['phone'] ?? '', 40);
$message = str_clean($input['message'] ?? '', 5000);
$recaptchaToken = str_clean($input['recaptchaToken'] ?? '', 4000);

$errors = [];

$nameLen = function_exists('mb_strlen') ? mb_strlen($fullName, 'UTF-8') : strlen($fullName);
if ($fullName === '' || $nameLen < 2) {
    $errors['fullName'] = 'Please enter your full name (at least 2 characters).';
}

if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = 'Please enter a valid email address.';
}

if ($phone === '' || !preg_match('/^[0-9+\s().-]{8,40}$/u', $phone)) {
    $errors['phone'] = 'Please enter a valid phone number (8–40 digits/symbols).';
}

if ($errors !== []) {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'Please correct the errors below and try again.',
        'errors' => $errors,
    ]);
    exit;
}

// --- Google reCAPTCHA v2 (server-side) ---
if ($recaptchaToken === '') {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'Please complete "I\'m not a robot" and try again.',
        'errors' => ['recaptcha' => 'Please tick the reCAPTCHA box.'],
    ]);
    exit;
}

$recaptchaSecret = getenv('RECAPTCHA_SECRET_KEY') ?: '';
if ($recaptchaSecret === '' && is_readable(__DIR__ . '/recaptcha.secret.php')) {
    $loaded = include __DIR__ . '/recaptcha.secret.php';
    if (is_string($loaded)) {
        $recaptchaSecret = trim($loaded);
    }
}
// Pair with test site key in dev; set RECAPTCHA_SECRET_KEY or recaptcha.secret.php in production.
if ($recaptchaSecret === '') {
    $recaptchaSecret = '6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe';
}

$verifyPayload = http_build_query([
    'secret' => $recaptchaSecret,
    'response' => $recaptchaToken,
    'remoteip' => $_SERVER['REMOTE_ADDR'] ?? '',
]);

$verifyContext = stream_context_create([
    'http' => [
        'method' => 'POST',
        'header' => "Content-Type: application/x-www-form-urlencoded\r\nContent-Length: " . strlen($verifyPayload),
        'content' => $verifyPayload,
        'timeout' => 10,
    ],
]);

$verifyRaw = @file_get_contents('https://www.google.com/recaptcha/api/siteverify', false, $verifyContext);
$verifyJson = is_string($verifyRaw) ? json_decode($verifyRaw, true) : null;

if (!is_array($verifyJson) || empty($verifyJson['success'])) {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'reCAPTCHA verification failed. Please try again.',
        'errors' => ['recaptcha' => 'Verification expired or failed. Please tick the box again.'],
    ]);
    exit;
}

$recipients = 'nikul.patel@oplinnovate.com, keyur.tala@oplinnovate.com';
$subject = 'KMS Website — Contact: ' . $fullName;

$body = "New contact form submission\r\n\r\n";
$body .= "Full name: {$fullName}\r\n";
$body .= "Email: {$email}\r\n";
$body .= "Phone: {$phone}\r\n";
$body .= "Message:\r\n" . ($message !== '' ? $message : '(none)') . "\r\n";
$body .= "\r\n---\r\nSubmitted (UTC): " . gmdate('Y-m-d H:i:s') . "\r\n";
$body .= "IP: " . ($_SERVER['REMOTE_ADDR'] ?? 'unknown') . "\r\n";

// From should typically match your hosting domain for deliverability; Reply-To is the visitor.
$fromAddress = 'noreply@kms-advisors.com';
$headers = implode("\r\n", [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: KMS Website <' . $fromAddress . '>',
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . PHP_VERSION,
]);

$sent = @mail($recipients, $subject, $body, $headers);

if ($sent) {
    echo json_encode([
        'success' => true,
        'message' => 'Thank you. Your message has been sent successfully. We will get back to you soon.',
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'We could not send your message right now. Please try again later or contact us by phone or email.',
    ]);
}
