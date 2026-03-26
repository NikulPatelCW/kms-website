/**
 * GitHub Pages build (`npm run build:github` / CI).
 *
 * Repo: https://github.com/NikulPatelCW/kms-website
 * Site: https://nikulpatelcw.github.io/kms-website/
 *
 * Contact form posts to the same `api/` folder as in the repo. The build copies
 * `api/**` into the site output (`.../kms-website/api/contact.php`).
 *
 * Path must match `baseHref` in angular.json (`/kms-website/`).
 *
 * Important: standard GitHub Pages does not execute PHP — the file is only served as static
 * content, so mail() will not run here. To get a working form you still need either:
 * - PHP hosting (same files on a server that runs PHP), and set `contactApiUrl` to that HTTPS URL, or
 * - a serverless form backend (Formspree, etc.).
 */
export const environment = {
  /** Same-origin path as repo `api/contact.php` on GitHub Pages (matches baseHref). */
  contactApiUrl: '/kms-website/api/contact.php',

  /**
   * reCAPTCHA v2 site key — add `nikulpatelcw.github.io` in reCAPTCHA admin.
   * Replace test key for production.
   */
  recaptchaSiteKey: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
};
