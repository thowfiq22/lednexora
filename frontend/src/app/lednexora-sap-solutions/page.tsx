"use client";
import Link from "next/link";
import sapStyles from "@/styles/sap.module.css";
import h from "@/styles/home.module.css";
import iniStyles from "@/styles/initiative.module.css";
import { useReveal } from "@/lib/useReveal";
import {
  IconArrowRight, IconCog, IconCloud, IconDatabase, IconShield, IconChart, IconCheck, IconMail, IconMapPin, IconWhatsApp
} from "@/components/Icons";

function Rev({ children, className = "", style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const { ref, visible } = useReveal();
  return <section ref={ref} className={`${sapStyles.reveal || ""} ${visible ? sapStyles.revealVisible || "" : ""} ${className}`} style={style}>{children}</section>;
}

export default function LednexoraSapSolutionsPage() {
  return (
    <div className={sapStyles.pageWrapper}>
      
      {/* ─── 1. HERO (Standard SAP Split Layout) ─── */}
      <section className={sapStyles.heroSection}>
        <div className="container">
          <div className={sapStyles.heroGrid}>
            <div className={sapStyles.heroContent}>
              <div className={sapStyles.accentLine}></div>
              <h1 className={sapStyles.heroTitle}>Lednexora SAP Solutions</h1>
              <p className={sapStyles.heroDesc}>
                Proprietary SAP accelerators, managed services, and custom frameworks designed to reduce implementation risks and accelerate time-to-value for global enterprises.
              </p>
              <Link href="/contact-consultation" className={sapStyles.heroBtn}>
                Explore our solutions
              </Link>
            </div>
            <div className={sapStyles.heroVisual}>
              <div className={sapStyles.imageWireframe}>
                <span>[ Hero Image : Enterprise Architecture / Server Room ]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. LEDNEXORA POSITIONING ─── */}
      <Rev className={sapStyles.overviewSection}>
        <div className="container">
          <div className={sapStyles.editorialGrid}>
            <div className={sapStyles.editorialVisual}>
               <div className={`${sapStyles.imageWireframe} ${sapStyles.wireframeVertical}`}>
                <span>[ Editorial Image : Lednexora Team Collaborating ]</span>
              </div>
            </div>
            <div className={sapStyles.editorialContent}>
              <h2>Bridging the gap between standard SAP and your unique business.</h2>
              <p>
                While standard SAP provides a robust foundation, true enterprise agility requires solutions tailored to the edge cases of your business model. Lednexora SAP Solutions are a suite of proprietary frameworks, pre-configured industry templates, and managed service models developed from decades of collective consulting experience.
              </p>
              <p>
                We have codified our best practices into deployable solutions. Whether you need rapid data migration tools, custom Fiori user interfaces, or a dedicated Application Management Service (AMS) team, our solutions are designed to plug directly into your existing SAP landscape with minimal disruption and maximum ROI.
              </p>
              <Link href="/sap-consultation" className={sapStyles.textLink}>
                Speak with a solution architect <IconArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </Rev>

      {/* ─── 3. PROPRIETARY SERVICE PILLARS ─── */}
      <Rev className={sapStyles.pillarsSection}>
        <div className="container">
          <div className={sapStyles.sectionHeader}>
            <h2>Our Core Solution Offerings</h2>
            <p>Accelerators and managed services built exclusively by Lednexora.</p>
          </div>

          <div className={sapStyles.pillarsGrid}>
            <div className={sapStyles.pillarCard}>
              <div className={sapStyles.pillarTopAccent}></div>
              <div className={sapStyles.pillarIcon}><IconDatabase /></div>
              <h3>Data Harmonisation Toolkit</h3>
              <p>Pre-built extraction and transformation tools designed to rapidly cleanse and migrate legacy master data into SAP S/4HANA with zero downtime.</p>
            </div>
            
            <div className={sapStyles.pillarCard}>
              <div className={sapStyles.pillarTopAccent}></div>
              <div className={sapStyles.pillarIcon}><IconCloud /></div>
              <h3>Cloud Integration Framework</h3>
              <p>Robust middleware configurations utilising SAP BTP and CPI to seamlessly connect your SAP core with third-party SaaS platforms and legacy applications.</p>
            </div>

            <div className={sapStyles.pillarCard}>
              <div className={sapStyles.pillarTopAccent}></div>
              <div className={sapStyles.pillarIcon}><IconChart /></div>
              <h3>Executive Analytics Dashboards</h3>
              <p>Ready-to-deploy SAP Analytics Cloud (SAC) templates that provide immediate, C-level visibility into supply chain performance and financial KPIs.</p>
            </div>

            <div className={sapStyles.pillarCard}>
              <div className={sapStyles.pillarTopAccent}></div>
              <div className={sapStyles.pillarIcon}><IconShield /></div>
              <h3>Lednexora AMS (Application Management)</h3>
              <p>Comprehensive L2/L3 support and continuous system monitoring, ensuring your SAP landscape operates at peak performance post-go-live.</p>
            </div>

            <div className={sapStyles.pillarCard}>
              <div className={sapStyles.pillarTopAccent}></div>
              <div className={sapStyles.pillarIcon}><IconCog /></div>
              <h3>Custom Fiori UX Development</h3>
              <p>Modernising legacy SAP GUI transactions with role-based, intuitive Fiori applications that drastically improve user adoption and productivity.</p>
            </div>

            <div className={sapStyles.pillarCard}>
              <div className={sapStyles.pillarTopAccent}></div>
              <div className={sapStyles.pillarIcon}><IconCheck /></div>
              <h3>Landscape Health Check</h3>
              <p>A rigorous, diagnostic audit of your existing SAP environment to identify security vulnerabilities, licensing inefficiencies, and optimisation opportunities.</p>
            </div>
          </div>
        </div>
      </Rev>

      {/* ─── 4. DELIVERY MODEL (Reused from Initiative) ─── */}
      <Rev className={iniStyles.processSection} style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className={sapStyles.sectionHeader} style={{ textAlign: 'center', margin: '0 auto 4rem' }}>
            <h2>The Lednexora Delivery Model</h2>
            <p>A structured approach to deploying our proprietary solutions.</p>
          </div>
          <div className={iniStyles.processGrid}>
            <div className={iniStyles.processStep}>
              <div className={iniStyles.stepNumber}>1</div>
              <h3 className={iniStyles.stepTitle}>Assess</h3>
              <p className={iniStyles.stepDesc}>We evaluate your landscape to determine which Lednexora accelerators will yield the highest ROI.</p>
            </div>
            <div className={iniStyles.processStep}>
              <div className={iniStyles.stepNumber}>2</div>
              <h3 className={iniStyles.stepTitle}>Configure</h3>
              <p className={iniStyles.stepDesc}>Our architects tailor the pre-built solutions to match your exact business requirements.</p>
            </div>
            <div className={iniStyles.processStep}>
              <div className={iniStyles.stepNumber}>3</div>
              <h3 className={iniStyles.stepTitle}>Deploy</h3>
              <p className={iniStyles.stepDesc}>Rapid deployment using agile methodologies, ensuring minimal disruption to business operations.</p>
            </div>
            <div className={iniStyles.processStep}>
              <div className={iniStyles.stepNumber}>4</div>
              <h3 className={iniStyles.stepTitle}>Support</h3>
              <p className={iniStyles.stepDesc}>Ongoing Application Management Services (AMS) to maintain stability and continuous improvement.</p>
            </div>
          </div>
        </div>
      </Rev>

      {/* ─── 5. BUSINESS VALUE OUTCOMES ─── */}
      <Rev className={sapStyles.outcomesSection} style={{ background: '#ffffff' }}>
        <div className="container">
          <div className={sapStyles.outcomesGrid}>
            <div className={sapStyles.outcomesContent}>
              <div className={sapStyles.quoteMark}>&ldquo;</div>
              <h2>Accelerating the path to enterprise value.</h2>
              <p className={sapStyles.outcomesLead}>
                Our proprietary solutions are not just technical tools; they are strategic assets designed to compress project timelines and reduce total cost of ownership.
              </p>
              <ul className={sapStyles.outcomesList}>
                <li>
                  <IconCheck />
                  <div>
                    <strong>Reduced Implementation Risk</strong>
                    <span>By utilizing proven, pre-tested frameworks instead of building from scratch.</span>
                  </div>
                </li>
                <li>
                  <IconCheck />
                  <div>
                    <strong>Faster Time-to-Value</strong>
                    <span>Accelerators cut months off standard deployment timelines.</span>
                  </div>
                </li>
                <li>
                  <IconCheck />
                  <div>
                    <strong>Predictable IT Spend</strong>
                    <span>Fixed-cost managed service (AMS) models ensure stable budgeting without surprise overruns.</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className={sapStyles.outcomesVisual}>
               <div className={`${sapStyles.imageWireframe} ${sapStyles.wireframeSquare}`}>
                <span>[ Proof Image : Analytics Dashboard / Executive Success ]</span>
              </div>
            </div>
          </div>
        </div>
      </Rev>

      {/* ─── 6. BRIGHT CTA BAND (Standardised) ─── */}
      <section className={h.ctaBand}>
        <div className="container">
          <div className={h.ctaBandGrid}>
            <div className={h.ctaBandContent}>
              <h2>Ready to deploy Lednexora Solutions?</h2>
              <p>Discuss your enterprise challenges with our consulting team and discover how our accelerators can transform your SAP landscape.</p>
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
