"use client";
import Link from "next/link";
import s from "@/styles/initiative.module.css";
import h from "@/styles/home.module.css";
import sapStyles from "@/styles/sap.module.css";
import { useReveal } from "@/lib/useReveal";
import {
  IconArrowRight, IconGlobe, IconBolt, IconChart, IconCheck, IconCog, IconTrending, IconRefresh, IconCloud, IconMail, IconMapPin, IconWhatsApp, IconDiamond
} from "@/components/Icons";

function Rev({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, visible } = useReveal();
  return <section ref={ref} className={`${s.reveal || ""} ${visible ? s.revealVisible || "" : ""} ${className}`}>{children}</section>;
}

export default function ByInitiativeSolutionsPage() {
  return (
    <>
      {/* ─── 1. HERO (Standard SAP Split Layout) ─── */}
      <section className={sapStyles.heroSection}>
        <div className="container">
          <div className={sapStyles.heroGrid}>
            <div className={sapStyles.heroContent}>
              <div className={sapStyles.accentLine}></div>
              <h1 className={sapStyles.heroTitle}>Solutions By Initiative</h1>
              <p className={sapStyles.heroDesc}>
                Aligning enterprise technology with your strategic business goals. Whether you are driving complete digital transformation or targeting specific operational bottlenecks, our SAP and Zoho solutions deliver measurable outcomes.
              </p>
              <Link href="/contact-consultation" className={sapStyles.heroBtn}>
                Discuss your initiative
              </Link>
            </div>
            <div className={sapStyles.heroVisual}>
              <div className={sapStyles.imageWireframe}>
                <span>[ Hero Image : Strategic IT Planning ]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. CATEGORY OVERVIEW ─── */}
      <Rev className={s.introSection}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className={s.introHeading}>Reach Your Goals In The Digital Age</h2>
            <p className={s.introText}>
              We do not believe in deploying software simply for the sake of modernisation. Every solution must solve a clear business problem. By categorising our enterprise expertise into core business initiatives, we help you identify the exact technological pathway required to achieve your desired state — from eliminating manual processes to full-scale SAP S/4HANA migrations.
            </p>
          </div>
        </div>
      </Rev>

      {/* ─── 3. USE-CASE STYLE SOLUTION CARDS ─── */}
      <Rev className={s.initiativeSection}>
        <div className="container">
          <div className={s.sectionHeader}>
            <h2>Strategic Business Initiatives</h2>
            <p>Explore how our technology consulting targets specific operational outcomes.</p>
          </div>

          {/* Category 1: Core Transformation */}
          <div className={s.initiativeCategory}>
            <h3 className={s.categoryTitle}>Core Digital Transformation</h3>
            <div className={s.cardsGrid}>
              <div className={s.solutionCard}>
                <div className={s.cardIcon}><IconGlobe /></div>
                <h4 className={s.cardTitle}>ERP SAP Implementation &amp; Rollout</h4>
                <p className={s.cardDesc}>End-to-end SAP implementation and rollout of projects across international branches, ensuring global standardisation with local compliance.</p>
              </div>
              <div className={s.solutionCard}>
                <div className={s.cardIcon}><IconCloud /></div>
                <h4 className={s.cardTitle}>S/4HANA Transformation</h4>
                <p className={s.cardDesc}>Secure migration and implementation of SAP S/4HANA, transitioning your enterprise to a next-generation intelligent ERP platform.</p>
              </div>
              <div className={s.solutionCard}>
                <div className={s.cardIcon}><IconDiamond /></div>
                <h4 className={s.cardTitle}>Business Transformation</h4>
                <p className={s.cardDesc}>Overhaul inefficient business operations, transforming legacy structures into agile, responsive business models using enterprise technology.</p>
              </div>
            </div>
          </div>

          {/* Category 2: Process Optimization */}
          <div className={s.initiativeCategory}>
            <h3 className={s.categoryTitle}>Process Optimisation &amp; Automation</h3>
            <div className={s.cardsGrid}>
              <div className={s.solutionCard}>
                <div className={s.cardIcon}><IconCheck /></div>
                <h4 className={s.cardTitle}>Standardisation</h4>
                <p className={s.cardDesc}>Apply SAP Best Practices to standardise disparate processes such as accounting, procurement, inventory, and production planning across your organisation.</p>
              </div>
              <div className={s.solutionCard}>
                <div className={s.cardIcon}><IconCog /></div>
                <h4 className={s.cardTitle}>Automation (RPA)</h4>
                <p className={s.cardDesc}>Deploy RPA bots to capture invoice data, validate against purchase orders, and trigger approvals, drastically reducing manual intervention.</p>
              </div>
              <div className={s.solutionCard}>
                <div className={s.cardIcon}><IconRefresh /></div>
                <h4 className={s.cardTitle}>Process Improvements &amp; Elimination</h4>
                <p className={s.cardDesc}>Eliminate paper-based processes and administrative bottlenecks. We use technology to cut costs, reduce human error, and enhance operational efficiency.</p>
              </div>
            </div>
          </div>

          {/* Category 3: Insights & Modernization */}
          <div className={s.initiativeCategory}>
            <h3 className={s.categoryTitle}>Insights, Modernisation &amp; Quick Wins</h3>
            <div className={s.cardsGrid}>
              <div className={s.solutionCard}>
                <div className={s.cardIcon}><IconChart /></div>
                <h4 className={s.cardTitle}>Advanced Analytics</h4>
                <p className={s.cardDesc}>Unlock the value of your enterprise data with comprehensive analytical reports and real-time dashboards to drive informed decision-making.</p>
              </div>
              <div className={s.solutionCard}>
                <div className={s.cardIcon}><IconTrending /></div>
                <h4 className={s.cardTitle}>Modernisation &amp; Harmonisation</h4>
                <p className={s.cardDesc}>Develop the latest user interface dashboards (Fiori) and harmonise reference, transaction, and master data across all business functions.</p>
              </div>
              <div className={s.solutionCard}>
                <div className={s.cardIcon}><IconBolt /></div>
                <h4 className={s.cardTitle}>Low-Hanging Solutions</h4>
                <p className={s.cardDesc}>Identify and implement rapid-deployment solutions and process tweaks that deliver immediate ROI without requiring multi-year transformation projects.</p>
              </div>
            </div>
          </div>
        </div>
      </Rev>

      {/* ─── 4. ENGAGEMENT PROCESS ─── */}
      <Rev className={s.processSection}>
        <div className="container">
          <div className={s.sectionHeader}>
            <h2>Our Engagement Pathway</h2>
            <p>How we move your initiative from concept to continuous improvement.</p>
          </div>
          <div className={s.processGrid}>
            <div className={s.processStep}>
              <div className={s.stepNumber}>1</div>
              <h3 className={s.stepTitle}>Discovery</h3>
              <p className={s.stepDesc}>We analyse your current pain points and define the exact scope of the business initiative.</p>
            </div>
            <div className={s.processStep}>
              <div className={s.stepNumber}>2</div>
              <h3 className={s.stepTitle}>Strategy</h3>
              <p className={s.stepDesc}>We map the technological pathway, whether it involves SAP implementation, Zoho automation, or bespoke analytics.</p>
            </div>
            <div className={s.processStep}>
              <div className={s.stepNumber}>3</div>
              <h3 className={s.stepTitle}>Execution</h3>
              <p className={s.stepDesc}>Our certified consultants deploy the solution using agile frameworks to ensure rapid time-to-value.</p>
            </div>
            <div className={s.processStep}>
              <div className={s.stepNumber}>4</div>
              <h3 className={s.stepTitle}>Optimisation</h3>
              <p className={s.stepDesc}>Post go-live, we provide ongoing support and fine-tuning to ensure the initiative delivers sustainable ROI.</p>
            </div>
          </div>
        </div>
      </Rev>

      {/* ─── 5. CTA BAND ─── */}
      <section className={h.ctaBand}>
        <div className="container">
          <div className={h.ctaBandGrid}>
            <div className={h.ctaBandContent}>
              <h2>Ready to execute your next initiative?</h2>
              <p>Discuss your enterprise challenges with our consulting team and discover how Lednexora can accelerate your business transformation.</p>
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
    </>
  );
}
