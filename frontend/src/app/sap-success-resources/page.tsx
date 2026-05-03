"use client";
import Link from "next/link";
import sapStyles from "@/styles/sap.module.css";
import h from "@/styles/home.module.css";
import { useReveal } from "@/lib/useReveal";
import {
  IconArrowRight, IconChart, IconShield, IconCheck, IconMail, IconMapPin, IconWhatsApp, IconAward
} from "@/components/Icons";

function Rev({ children, className = "", style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const { ref, visible } = useReveal();
  return <section ref={ref} className={`${sapStyles.reveal || ""} ${visible ? sapStyles.revealVisible || "" : ""} ${className}`} style={style}>{children}</section>;
}

export default function SapSuccessResourcesPage() {
  return (
    <div className={sapStyles.pageWrapper}>
      
      {/* ─── 1. HERO (Standard SAP Split Layout) ─── */}
      <section className={sapStyles.heroSection}>
        <div className="container">
          <div className={sapStyles.heroGrid}>
            <div className={sapStyles.heroContent}>
              <div className={sapStyles.accentLine}></div>
              <h1 className={sapStyles.heroTitle}>SAP Success &amp; Resources</h1>
              <p className={sapStyles.heroDesc}>
                Explore our repository of SAP insights, thought leadership, and verified proof points that demonstrate our commitment to delivering tangible enterprise value.
              </p>
              <Link href="/contact-consultation" className={sapStyles.heroBtn}>
                Discuss your next project
              </Link>
            </div>
            <div className={sapStyles.heroVisual}>
              <div className={sapStyles.imageWireframe}>
                <span>[ Hero Image : Corporate Library / Analytics Graph ]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. RESOURCE INTRO ─── */}
      <Rev className={sapStyles.overviewSection} style={{ background: '#ffffff' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className={sapStyles.heroTitle} style={{ fontSize: '2rem' }}>Knowledge driven by experience.</h2>
            <p className={sapStyles.heroDesc} style={{ marginBottom: 0 }}>
              Successful SAP implementations are built on rigorous methodology and deep industry knowledge. We continuously publish whitepapers, case studies, and technical updates to help IT leaders navigate the complexities of S/4HANA migration, cloud integration, and enterprise automation.
            </p>
          </div>
        </div>
      </Rev>

      {/* ─── 3. FEATURED RESOURCES (Reusing Home Insights Pattern) ─── */}
      <Rev className={sapStyles.pillarsSection} style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className={h.sectionHeader}>
            <h2 className={h.sectionTitle}>Featured Insights &amp; Case Studies</h2>
            <p className={h.sectionDesc}>Actionable intelligence for your SAP landscape.</p>
          </div>
          <div className={h.insightsGrid}>
            
            <div className={h.insightCard}>
              <div className={h.insightImage}>
                <div style={{ background: '#0e2d5a', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.875rem' }}>
                  [ Whitepaper Image ]
                </div>
              </div>
              <div className={h.insightBody}>
                <div className={h.insightMeta}>Whitepaper</div>
                <h3 className={h.insightTitle}>Navigating the S/4HANA Transition</h3>
                <p className={h.insightExcerpt}>A comprehensive guide for CIOs evaluating Greenfield vs. Brownfield migration strategies and calculating long-term TCO.</p>
                <div className={h.insightLink}>Download PDF <IconArrowRight /></div>
              </div>
            </div>

            <div className={h.insightCard}>
              <div className={h.insightImage}>
                <div style={{ background: '#0e2d5a', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.875rem' }}>
                  [ Case Study Image ]
                </div>
              </div>
              <div className={h.insightBody}>
                <div className={h.insightMeta}>Case Study</div>
                <h3 className={h.insightTitle}>Global Retailer Inventory Optimisation</h3>
                <p className={h.insightExcerpt}>How Lednexora implemented SAP CAR and S/4HANA to provide real-time inventory visibility across 500+ global storefronts.</p>
                <div className={h.insightLink}>Read Case Study <IconArrowRight /></div>
              </div>
            </div>

            <div className={h.insightCard}>
              <div className={h.insightImage}>
                <div style={{ background: '#0e2d5a', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.875rem' }}>
                  [ Technical Brief Image ]
                </div>
              </div>
              <div className={h.insightBody}>
                <div className={h.insightMeta}>Technical Brief</div>
                <h3 className={h.insightTitle}>Securing Your SAP BTP Ecosystem</h3>
                <p className={h.insightExcerpt}>Best practices for securing middleware connections, API endpoints, and identity management within the SAP Business Technology Platform.</p>
                <div className={h.insightLink}>Read Article <IconArrowRight /></div>
              </div>
            </div>

          </div>
        </div>
      </Rev>

      {/* ─── 4. SUCCESS METRICS / PROOF BLOCK ─── */}
      <Rev className={sapStyles.outcomesSection} style={{ background: '#ffffff', borderTop: '1px solid #e9ecef' }}>
        <div className="container">
          <div className={sapStyles.outcomesGrid}>
            <div className={sapStyles.outcomesVisual}>
               <div className={`${sapStyles.imageWireframe} ${sapStyles.wireframeVertical}`} style={{ minHeight: '400px' }}>
                <span>[ Proof Image : Team Celebrating / KPI Dashboard ]</span>
              </div>
            </div>
            <div className={sapStyles.outcomesContent}>
              <div className={sapStyles.quoteMark}>&ldquo;</div>
              <h2>Proof in performance.</h2>
              <p className={sapStyles.outcomesLead}>
                Our consulting engagements are strictly measured by the quantifiable success they deliver to our clients. 
              </p>
              <ul className={sapStyles.outcomesList}>
                <li>
                  <IconShield />
                  <div>
                    <strong>100% Go-Live Success Rate</strong>
                    <span>Every SAP initiative we have architected has reached successful production deployment without critical rollbacks.</span>
                  </div>
                </li>
                <li>
                  <IconAward />
                  <div>
                    <strong>Certified Expertise</strong>
                    <span>[TODO: Insert Official Partner / Certification Text] Our consultants hold advanced certifications across all core SAP modules and BTP architectures.</span>
                  </div>
                </li>
                <li>
                  <IconChart />
                  <div>
                    <strong>Measurable ROI</strong>
                    <span>Our proprietary accelerators consistently reduce implementation timelines and drive faster adoption rates across global user bases.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Rev>

      {/* ─── 5. BRIGHT CTA BAND (Standardised) ─── */}
      <section className={h.ctaBand}>
        <div className="container">
          <div className={h.ctaBandGrid}>
            <div className={h.ctaBandContent}>
              <h2>Looking for specific SAP resources?</h2>
              <p>Connect with our consulting team to request custom case studies, benchmark reports, or to discuss your upcoming SAP initiative.</p>
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
