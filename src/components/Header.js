import logoPrimary from "../assets/branding/IIWA-Primary_tp.png";

export function Header() {
  return `
    <header class="site-header">
      <div class="site-container header-inner">

        <a
          class="site-logo"
          href="/"
          data-link
          aria-label="Impact Integrative Wellness Advocates home"
        >
          <img
            src="${logoPrimary}"
            alt="Impact Integrative Wellness Advocates"
          >
        </a>

        <nav class="main-nav" aria-label="Primary navigation">
          <a href="/family-services" data-link>Family Services</a>
          <a href="/legal-nurse-consulting" data-link>
            Legal Nurse Consulting
          </a>
          <a href="/about" data-link>About</a>
          <a href="/contact" data-link>Contact</a>
        </nav>

        <a
          class="header-cta"
          href="/intake"
          data-link
        >
          Let's Get Started
          <span aria-hidden="true">›</span>
        </a>

      </div>
    </header>
  `;
}
