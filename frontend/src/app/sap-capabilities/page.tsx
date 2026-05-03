"use client";
import Link from "next/link";
import s from "@/styles/sap.module.css";
import h from "@/styles/home.module.css";
import {
  IconArrowRight, IconCheck, IconChart, IconShield, IconCog, IconGlobe, IconCloud, IconMail, IconMapPin, IconWhatsApp
} from "@/components/Icons";

export default function SapCapabilitiesPage() {
  return (
    <div className={s.pageWrapper}>
      
      {/* ─── 1. HERO (Split Layout with Image) ─── */}
      <section className={s.heroSection}>
        <div className="container">
          <div className={s.heroGrid}>
            <div className={s.heroContent}>
              <div className={s.accentLine}></div>
              <h1 className={s.heroTitle}>SAP Capabilities</h1>
              <p className={s.heroDesc}>
                Comprehensive SAP consulting, implementation, and support services engineered to accelerate digital transformation, optimise enterprise operations, and maximise technology ROI.
              </p>
              <Link href="/contact-consultation" className={s.heroBtn}>
                Request a consultation
              </Link>
            </div>
            <div className={s.heroVisual}>
              {/* DUMMY IMAGE WIREFRAME */}
              <div className={s.imageWireframe}>
                <span>[ Hero Image Placeholder : Enterprise Office / Tech ]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. EDITORIAL WITH IMAGE ─── */}
      <section className={s.overviewSection}>
        <div className="container">
          <div className={s.editorialGrid}>
            <div className={s.editorialVisual}>
              {/* DUMMY IMAGE WIREFRAME */}
              <div className={`${s.imageWireframe} ${s.wireframeVertical}`}>
                <span>[ Editorial Image : Consultants Meeting ]</span>
              </div>
            </div>
            <div className={s.editorialContent}>
              <h2>Navigating complex SAP landscapes with precision.</h2>
              <p>
                Lednexora delivers end-to-end SAP consulting for global enterprises. Whether you are charting a roadmap to S/4HANA, seeking to extract more value from your existing ECC environment, or requiring specialised managed services, our certified consultants provide the technical depth and business acumen required for success.
              </p>
              <p>
                We do not believe in generic implementations. Every SAP initiative we undertake is strictly aligned with your specific industry context, operational pain points, and strategic objectives. By combining deep functional expertise across core SAP modules with advanced technical capabilities in integration and analytics, we ensure your technology stack serves as a catalyst for business growth.
              </p>
              <Link href="/by-industry-solutions" className={s.textLink}>
                View our industry approach <IconArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. CORE SERVICE PILLARS (Rich Grid) ─── */}
      <section className={s.pillarsSection}>
        <div className="container">
          <div className={s.sectionHeader}>
            <h2>Core SAP Service Pillars</h2>
            <p>Our consulting practice spans the entire SAP lifecycle, delivering targeted solutions across six core domains.</p>
          </div>

          <div className={s.pillarsGrid}>
            {[
              {
                icon: <IconCog />,
                title: "Implementation & Migration",
                desc: "End-to-end delivery of SAP S/4HANA and ECC projects. We support Greenfield, Brownfield, and Bluefield transitions.",
                link: "/sap-consultation",
              },
              {
                icon: <IconShield />,
                title: "Managed Services (AMS)",
                desc: "Reliable, scalable application management services. We provide L2/L3 support and continuous improvement.",
                link: "/contact-consultation",
              },
              {
                icon: <IconChart />,
                title: "Optimisation & Enhancement",
                desc: "Extract maximum value from your existing SAP investment. We streamline workflows and implement custom enhancements.",
                link: "/by-initiative-solutions",
              },
              {
                icon: <IconGlobe />,
                title: "Strategic Advisory",
                desc: "Expert guidance for your technology roadmap. We provide SAP landscape assessments and licensing optimisation.",
                link: "/contact-consultation",
              },
              {
                icon: <IconCloud />,
                title: "Data & Analytics",
                desc: "Transform enterprise data into actionable intelligence. Our capabilities cover SAP BW/4HANA and SAP Analytics Cloud.",
                link: "/sap-capabilities",
              },
              {
                icon: <IconCheck />,
                title: "Technology & Integration",
                desc: "Seamlessly connect your ecosystem. We specialise in BTP, CPI, and integrating SAP with third-party platforms.",
                link: "/sap-capabilities",
              }
            ].map((pillar) => (
              <div key={pillar.title} className={s.pillarCard}>
                <div className={s.pillarTopAccent}></div>
                <div className={s.pillarIcon}>{pillar.icon}</div>
                <h3>{pillar.title}</h3>
                <p>{pillar.desc}</p>
                <Link href={pillar.link} className={s.pillarLink}>Learn more <IconArrowRight /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. DARK BAND: EXPERTISE PORTFOLIO (Like Rimini's Black Band) ─── */}
      <section className={s.darkBandSection}>
        <div className="container">
          <h2>Expert SAP Solutions Portfolio</h2>
          <div className={s.darkBandGrid}>
            <ul className={s.darkBandList}>
              <li>SAP S/4HANA <IconArrowRight /></li>
              <li>SAP ECC &amp; R/3 <IconArrowRight /></li>
              <li>SAP FICO <IconArrowRight /></li>
            </ul>
            <ul className={s.darkBandList}>
              <li>SAP SuccessFactors <IconArrowRight /></li>
              <li>SAP Ariba <IconArrowRight /></li>
              <li>SAP Material Management (MM) <IconArrowRight /></li>
            </ul>
            <ul className={s.darkBandList}>
              <li>SAP Business Technology Platform (BTP) <IconArrowRight /></li>
              <li>SAP Sales &amp; Distribution (SD) <IconArrowRight /></li>
              <li>SAP Analytics Cloud (SAC) <IconArrowRight /></li>
            </ul>
          </div>
        </div>
      </section>

      {/* ─── 5. BUSINESS VALUE / PROOF WITH IMAGE ─── */}
      <section className={s.outcomesSection}>
        <div className="container">
          <div className={s.outcomesGrid}>
            <div className={s.outcomesContent}>
              <div className={s.quoteMark}>&ldquo;</div>
              <h2>Delivering measurable business value</h2>
              <p className={s.outcomesLead}>
                Our SAP engagements are measured by the operational outcomes they produce, not just technical milestones.
              </p>
              <ul className={s.outcomesList}>
                <li>
                  <IconCheck />
                  <div>
                    <strong>Reduced Total Cost of Ownership (TCO)</strong>
                    <span>Through landscape rationalisation and efficient managed services.</span>
                  </div>
                </li>
                <li>
                  <IconCheck />
                  <div>
                    <strong>Accelerated Time-to-Market</strong>
                    <span>Leveraging pre-configured industry templates and agile frameworks.</span>
                  </div>
                </li>
                <li>
                  <IconCheck />
                  <div>
                    <strong>Improved User Adoption</strong>
                    <span>Through intuitive Fiori interfaces and comprehensive change management.</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className={s.outcomesVisual}>
               {/* DUMMY IMAGE WIREFRAME */}
               <div className={`${s.imageWireframe} ${s.wireframeSquare}`}>
                <span>[ Proof Image : Warehouse/Factory or Corporate Success ]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. BRIGHT CTA BAND (Standardised) ─── */}
      <section className={h.ctaBand}>
        <div className="container">
          <div className={h.ctaBandGrid}>
            <div className={h.ctaBandContent}>
              <h2>Experience a better SAP consulting model</h2>
              <p>Connect with our enterprise specialists to discuss how we can support your SAP landscape.</p>
              <div className={h.ctaBandActions}>
                <Link href="/contact-consultation" className={h.btnWhite}>Schedule Consultation <IconArrowRight /></Link>
                <a href="https://wa.me/message/LEDNEXORA" target="_blank" rel="noopener noreferrer" className={h.btnWhatsApp}><IconWhatsApp /> WhatsApp Us</a>
              </div>
            </div>
            <div className={h.ctaInfoCards}>
              <div className={h.ctaInfoCard}>
                <div className={h.ctaInfoIcon}><IconMail /></div>
                <div className={h.ctaInfoText}><strong>Email Us</strong><a href="mailto:sales.accounts@lednexora.com">sales.accounts@lednexora.com</a></div>
              </div>
              <div className={h.ctaInfoCard}>
                <div className={h.ctaInfoIcon}><IconMapPin /></div>
                <div className={h.ctaInfoText}><strong>Our Locations</strong>London, UK &bull; Tamil Nadu, India</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
