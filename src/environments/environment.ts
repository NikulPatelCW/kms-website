export const environment = {
  /**
   * Local / same-server: relative path (dev server uses proxy.conf.json → PHP).
   * GitHub Pages build uses `environment.github.ts` with an absolute HTTPS URL instead.
   */
  contactApiUrl: '/api/contact.php',

  /**
   * Google reCAPTCHA v2 checkbox (“I'm not a robot”) site key (public).
   * Default: Google’s test key (always passes) — replace with your key from
   * https://www.google.com/recaptcha/admin for production.
   */
  recaptchaSiteKey: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
};
