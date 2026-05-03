"use client";
import Link from "next/link";
import s from "@/styles/industry.module.css";
import sapStyles from "@/styles/sap.module.css";
import h from "@/styles/home.module.css";
import { useReveal } from "@/lib/useReveal";
import {
  IconArrowRight, IconBank, IconCart, IconFactory, IconShield, IconChart, IconMail, IconMapPin, IconWhatsApp, IconCog, IconCheck
} from "@/components/Icons";

function Rev({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, visible } = useReveal();
  return <section ref={ref} className={`${s.reveal || ""} ${visible ? s.revealVisible || "" : ""} ${className}`}>{children}</section>;
}

export default function ByIndustrySolutionsPage() {
  return (
    <div style={{ background: '#fff' }}>
      {/* ─── 1. HERO (Standard SAP Split Layout) ─── */}
      <section className={sapStyles.heroSection}>
        <div className="container">
          <div className={sapStyles.heroGrid}>
            <div className={sapStyles.heroContent}>
              <div className={sapStyles.accentLine}></div>
              <h1 className={sapStyles.heroTitle}>Solutions By Industry</h1>
              <p className={sapStyles.heroDesc}>
                Enterprise technology is never one-size-fits-all. We deliver SAP and Zoho implementations precisely engineered for the unique regulatory, supply chain, and operational demands of your specific sector.
              </p>
              <Link href="/contact-consultation" className={sapStyles.heroBtn}>
                Consult an industry expert
              </Link>
            </div>
            <div className={sapStyles.heroVisual}>
              <div className={sapStyles.imageWireframe}>
                <span>[ Hero Image : Global Supply Chain / Industry Context ]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. EDITORIAL OVERVIEW ─── */}
      <Rev className={sapStyles.overviewSection}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className={sapStyles.heroTitle} style={{ fontSize: '2rem' }}>Context is everything.</h2>
            <p className={sapStyles.heroDesc}>
              A manufacturing plant requires a vastly different ERP architecture than a financial institution. Our consulting practice brings deep domain expertise across seven core industries, ensuring that your technology investment actively supports your distinct market position and compliance requirements.
            </p>
          </div>
        </div>
      </Rev>

      {/* ─── 3. INDUSTRY SOLUTION CARDS ─── */}
      <Rev className={s.industrySection}>
        <div className="container">
          <div className={s.sectionHeader}>
            <h2>Industries We Serve</h2>
            <p>Targeted technology solutions built for your operational reality.</p>
          </div>
          
          <div className={s.industryGrid}>
            <div className={s.industryCard}>
              <div className={s.cardIcon}><IconBank /></div>
              <h3 className={s.cardTitle}>Banking</h3>
              <p className={s.cardDesc}>Secure, compliant, and agile SAP architectures that support core banking transformations, real-time analytics, and stringent regulatory reporting.</p>
              <Link href="/contact-consultation" className={s.cardLink}>Explore Banking Solutions <IconArrowRight /></Link>
            </div>
            
            <div className={s.industryCard}>
              <div className={s.cardIcon}><IconShield /></div>
              <h3 className={s.cardTitle}>Non-Banking Financial Services</h3>
              <p className={s.cardDesc}>Tailored technology frameworks for NBFCs, focusing on risk management, rapid loan origination workflows, and financial harmonisation.</p>
              <Link href="/contact-consultation" className={s.cardLink}>Explore NBFC Solutions <IconArrowRight /></Link>
            </div>

            <div className={s.industryCard}>
              <div className={s.cardIcon}><IconCart /></div>
              <h3 className={s.cardTitle}>Retail &amp; E-commerce</h3>
              <p className={s.cardDesc}>Omnichannel inventory management, hyper-personalised customer experiences, and agile supply chain solutions powered by SAP S/4HANA.</p>
              <Link href="/contact-consultation" className={s.cardLink}>Explore Retail Solutions <IconArrowRight /></Link>
            </div>

            <div className={s.industryCard}>
              <div className={s.cardIcon}><IconFactory /></div>
              <h3 className={s.cardTitle}>Manufacturing</h3>
              <p className={s.cardDesc}>End-to-end production planning, predictive maintenance, and shop-floor to top-floor integration using SAP Best Practices for manufacturing.</p>
              <Link href="/contact-consultation" className={s.cardLink}>Explore Manufacturing Solutions <IconArrowRight /></Link>
            </div>

            <div className={s.industryCard}>
              <div className={s.cardIcon}><IconCog /></div>
              <h3 className={s.cardTitle}>Automobile</h3>
              <p className={s.cardDesc}>Accelerating automotive innovation with just-in-time logistics, precision component tracking, and integrated dealer management networks.</p>
              <Link href="/contact-consultation" className={s.cardLink}>Explore Automobile Solutions <IconArrowRight /></Link>
            </div>

            <div className={s.industryCard}>
              <div className={s.cardIcon}><IconChart /></div>
              <h3 className={s.cardTitle}>Service Industry</h3>
              <p className={s.cardDesc}>Service-centric ERP solutions that streamline project management, optimize resource allocation, and enhance field service delivery.</p>
              <Link href="/contact-consultation" className={s.cardLink}>Explore Service Solutions <IconArrowRight /></Link>
            </div>

            <div className={s.industryCard}>
              <div className={s.cardIcon}><IconChart /></div>
              <h3 className={s.cardTitle}>Consumer Packaged Goods (CPG)</h3>
              <p className={s.cardDesc}>Demand-driven supply networks, trade promotion management, and real-time distribution analytics to win in the FMCG marketplace.</p>
              <Link href="/contact-consultation" className={s.cardLink}>Explore CPG Solutions <IconArrowRight /></Link>
            </div>
          </div>
        </div>
      </Rev>

      {/* ─── 4. COMMON CHALLENGES & OUTCOMES ─── */}
      <Rev className={sapStyles.outcomesSection}>
        <div className="container">
          <div className={sapStyles.outcomesGrid}>
            <div className={sapStyles.outcomesContent}>
              <div className={sapStyles.quoteMark}>&ldquo;</div>
              <h2>Built for industry-specific outcomes</h2>
              <p className={sapStyles.outcomesLead}>
                Generic software deployments often fail to address niche industry requirements. Our consultants speak your language and understand your sector&apos;s unique challenges.
              </p>
              <ul className={sapStyles.outcomesList}>
                <li>
                  <IconCheck />
                  <div>
                    <strong>Pre-configured Industry Templates</strong>
                    <span>We accelerate deployment times by utilizing proven SAP and Zoho blueprints tailored to your sector.</span>
                  </div>
                </li>
                <li>
                  <IconCheck />
                  <div>
                    <strong>Regulatory Compliance Built-In</strong>
                    <span>From banking standards to manufacturing safety protocols, compliance is woven into the architecture.</span>
                  </div>
                </li>
                <li>
                  <IconCheck />
                  <div>
                    <strong>Future-Proof Scalability</strong>
                    <span>As your industry evolves, your core enterprise systems are designed to adapt without costly re-implementations.</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className={sapStyles.outcomesVisual}>
               <div className={`${sapStyles.imageWireframe} ${sapStyles.wireframeSquare}`}>
                <span>[ Image : Vertical Industry Use Case ]</span>
              </div>
            </div>
          </div>
        </div>
      </Rev>

      {/* ─── 5. TRUST / PROOF BAND ─── */}
      <Rev className={s.trustStrip}>
        <div className="container">
          <div className={s.trustLabel}>Trusted across industries by global enterprises</div>
          <div className={s.trustFlex}>
            <div className={s.trustLogoPlaceholder}>[ Client Logo 1 ]</div>
            <div className={s.trustLogoPlaceholder}>[ Client Logo 2 ]</div>
            <div className={s.trustLogoPlaceholder}>[ Client Logo 3 ]</div>
            <div className={s.trustLogoPlaceholder}>[ Client Logo 4 ]</div>
            <div className={s.trustLogoPlaceholder}>[ Client Logo 5 ]</div>
          </div>
        </div>
      </Rev>

      {/* ─── 6. BRIGHT CTA BAND (Standardised) ─── */}
      <section className={h.ctaBand}>
        <div className="container">
          <div className={h.ctaBandGrid}>
            <div className={h.ctaBandContent}>
              <h2>Ready to transform your operations?</h2>
              <p>Connect with our industry specialists to discuss how we can support your unique enterprise landscape.</p>
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
