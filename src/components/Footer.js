import footerLogo from "../assets/branding/IIWA-Primary_Black_tp.png";

export function Footer() {
  return `
    <footer class="site-footer">
      <div class="site-container footer-inner">

        <p class="footer-copyright">
          © 2026 Impact Integrative Wellness Advocates
        </p>

        <nav class="footer-links" aria-label="Footer navigation">
          <a href="/sitemap" data-link>Sitemap</a>
          <a href="/privacy" data-link>Privacy</a>
          <a href="/terms" data-link>Terms</a>
        </nav>

        <img
          class="footer-logo"
          src="${footerLogo}"
          alt="Impact Integrative Wellness Advocates"
        >

      </div>
    </footer>
  `;
}
