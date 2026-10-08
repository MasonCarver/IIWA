import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";

import heroBg from "../assets/home/IIWA-Hero-bg.png";
import medicalReviewImg from "../assets/home/IIWA_Med_Review.png";
import medicalRecordsImg from "../assets/home/IIWA_Medical_Records.png";
import legalImg from "../assets/home/IIWA_Legal.png";

export function Home() {
  return `
    ${Header()}

    <main>

      <!-- =====================================================
           HERO
           ===================================================== -->

      <section
        class="hero"
        style="background-image: url('${heroBg}')"
      >
        <div class="site-container hero-inner">

          <h1>
            Clarity When Care Gets Complicated.
          </h1>

          <p class="hero-subtitle">
            Nurse-led advocacy, medical review, and clinical insight
            for families and legal professionals.
          </p>

          <div class="hero-actions">

            <a
              class="button button--primary"
              href="/family-services"
              data-link
            >
              Explore Family Services
              <span aria-hidden="true">›</span>
            </a>

            <a
              class="button button--secondary"
              href="/legal-nurse-consulting"
              data-link
            >
              Legal Nurse Consulting
              <span aria-hidden="true">›</span>
            </a>

          </div>

        </div>
      </section>


      <!-- =====================================================
           SERVICES OVERVIEW
           ===================================================== -->

      <section class="services-overview">

        <div class="site-container services-inner">

          <header class="services-heading">

            <p class="section-eyebrow">
              HOW WE CAN HELP
            </p>

            <h2>
              Three Ways We Make an Impact
            </h2>

            <span
              class="section-divider"
              aria-hidden="true"
            ></span>

            <p class="services-intro">
              Whether you’re managing care, seeking answers, or building a legal case,
              <br class="desktop-break">
              we provide focused, experienced support.
            </p>

          </header>


          <div class="service-grid">

            <!-- MEDICAL CARE -->

            <article class="service-card">

              <a
                class="service-image"
                href="/family-services"
                data-link
                aria-label="Explore Medical Care Review and Management"
              >
                <img
                  src="${medicalReviewImg}"
                  alt="A nurse reviewing medical information with a patient and family member"
                >
              </a>

              <div class="service-card-content">

                <p class="service-audience">
                  FOR INDIVIDUALS &amp; FAMILIES
                </p>

                <h3>
                  Medical Care<br>
                  Review &amp; Management
                </h3>

                <p class="service-description">
                  Expert guidance to help you understand
                  medical information, explore options,
                  and make informed decisions.
                </p>

                <a
                  class="service-link"
                  href="/family-services"
                  data-link
                >
                  <span>Explore Care Management</span>
                  <span class="service-arrow" aria-hidden="true">→</span>
                </a>

                <span
                  class="service-accent"
                  aria-hidden="true"
                ></span>

              </div>

            </article>


            <!-- MEDICAL MALPRACTICE -->

            <article class="service-card">

              <a
                class="service-image"
                href="/medical-record-review"
                data-link
                aria-label="Explore Medical Record Review"
              >
                <img
                  src="${medicalRecordsImg}"
                  alt="A stack of medical records and patient files"
                >
              </a>

              <div class="service-card-content">

                <p class="service-audience">
                  FOR INDIVIDUALS &amp; FAMILIES
                </p>

                <h3>
                  Medical Malpractice<br>
                  &amp; Loss of a Loved One
                </h3>

                <p class="service-description">
                  Compassionate, experienced support to
                  help you navigate complex medical cases
                  and seek clarity after harm.
                </p>

                <a
                  class="service-link service-link--gold"
                  href="/medical-record-review"
                  data-link
                >
                  <span>Explore Medical Record Review</span>
                  <span class="service-arrow" aria-hidden="true">→</span>
                </a>

                <span
                  class="service-accent service-accent--gold"
                  aria-hidden="true"
                ></span>

              </div>

            </article>


            <!-- LEGAL NURSE CONSULTING -->

            <article class="service-card">

              <a
                class="service-image"
                href="/legal-nurse-consulting"
                data-link
                aria-label="Explore Legal Nurse Consulting"
              >
                <img
                  src="${legalImg}"
                  alt="Balance scales beside a legal reference book"
                >
              </a>

              <div class="service-card-content">

                <p class="service-audience">
                  FOR ATTORNEYS
                </p>

                <h3>
                  Legal Nurse<br>
                  Consulting
                </h3>

                <p class="service-description">
                  Objective, evidence-based insight to
                  support attorneys, insurers, and legal
                  teams in complex medical matters.
                </p>

                <a
                  class="service-link"
                  href="/legal-nurse-consulting"
                  data-link
                >
                  <span>Explore Legal Nurse Consulting</span>
                  <span class="service-arrow" aria-hidden="true">→</span>
                </a>

                <span
                  class="service-accent"
                  aria-hidden="true"
                ></span>

              </div>

            </article>

          </div>

        </div>

      </section>

    </main>

    ${Footer()}
  `;
}
