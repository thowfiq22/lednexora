"use client";
import React from "react";
import Link from "next/link";
import zohoStyles from "@/styles/zoho.module.css";
import h from "@/styles/home.module.css";
import { useReveal } from "@/lib/useReveal";
import { IconArrowRight, IconCheck } from "@/components/Icons";

function Rev({ children, className = "", style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const { ref, visible } = useReveal();
  return <section ref={ref} className={`${zohoStyles.reveal || ""} ${visible ? zohoStyles.revealVisible || "" : ""} ${className}`} style={style}>{children}</section>;
}

export default function ZohoPackagesPage() {
  return (
    <div className={zohoStyles.pageWrapper}>
      
      {/* ─── 1. HERO ─── */}
      <section className={zohoStyles.zohoHero} style={{ textAlign: 'center' }}>
        <div className="container">
          <div className={zohoStyles.heroContent} style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className={zohoStyles.heroBadge} style={{ margin: '0 auto 1.5rem auto' }}>Zoho Solutions &amp; Pricing</div>
            <h1 className={zohoStyles.heroTitle}>Transparent service models for enterprise growth.</h1>
            <p className={zohoStyles.heroDesc}>
              Whether you need a rapid deployment, complex custom API integration, or ongoing managed services (BPO), Lednexora offers structured, predictable packages designed specifically for mid-market and enterprise requirements.
            </p>
            <a href="#packages" className={zohoStyles.heroBtn} style={{ margin: '0 auto' }}>
              View our service models <IconArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* ─── 2. PRICING CARDS (3-COLUMN) ─── */}
      <Rev className={zohoStyles.packagesSection}>
        <div className="container" id="packages">
          <div className={zohoStyles.sectionHeader}>
            <h2>Service Models</h2>
            <p>We do not believe in hidden costs. Choose a structured service model that perfectly aligns with your implementation requirements and operational scale.</p>
          </div>

          <div className={zohoStyles.pricingCardsGrid}>
            
            {/* Quick Start */}
            <div className={zohoStyles.pricingCardCol}>
              <h3>Rapid Deployment</h3>
              <p>Best for SMBs looking to implement standard Zoho One modules quickly and correctly.</p>
              <div className={zohoStyles.pricingAmount}>£3,500<span> / Starting</span></div>
              <ul className={zohoStyles.pricingList}>
                <li><IconCheck /> Initial discovery &amp; mapping</li>
                <li><IconCheck /> CRM, Books &amp; Desk setup</li>
                <li><IconCheck /> Standard data import (10k)</li>
                <li><IconCheck /> 2 half-day team training</li>
              </ul>
              <Link href="/zoho-consultation" className={zohoStyles.btnPricing}>Get Started</Link>
            </div>

            {/* Custom Enterprise */}
            <div className={`${zohoStyles.pricingCardCol} ${zohoStyles.pricingCardPopular}`}>
              <div className={zohoStyles.popularBadge}>Most Popular</div>
              <h3>Enterprise Architecture</h3>
              <p>For complex organisations requiring bespoke workflows, low-code development, and deep integrations.</p>
              <div className={zohoStyles.pricingAmount}>Custom<span> / Scope</span></div>
              <ul className={zohoStyles.pricingList}>
                <li><IconCheck /> Deep technical discovery</li>
                <li><IconCheck /> Custom Creator applications</li>
                <li><IconCheck /> Third-party API integrations</li>
                <li><IconCheck /> Advanced Deluge scripting</li>
                <li><IconCheck /> Role-based security audits</li>
              </ul>
              <Link href="/zoho-consultation" className={`${zohoStyles.btnPricing} ${zohoStyles.btnPricingPopular}`}>Consult an Architect</Link>
            </div>

            {/* Managed BPO */}
            <div className={zohoStyles.pricingCardCol}>
              <h3>Managed Services (BPO)</h3>
              <p>Ongoing administration, bookkeeping, and process outsourcing using your Zoho suite.</p>
              <div className={zohoStyles.pricingAmount}>Retained<span> / Monthly</span></div>
              <ul className={zohoStyles.pricingList}>
                <li><IconCheck /> Zoho Books bookkeeping</li>
                <li><IconCheck /> Daily data entry &amp; mgmt</li>
                <li><IconCheck /> Workflow continuous opt.</li>
                <li><IconCheck /> Guaranteed support SLAs</li>
              </ul>
              <Link href="/zoho-consultation" className={zohoStyles.btnPricing}>Discuss Retainer</Link>
            </div>

          </div>
        </div>
      </Rev>

      {/* ─── 3. DETAILED COMPARISON TABLE ─── */}
      <Rev className={zohoStyles.compareSection}>
        <div className="container">
          <div className={zohoStyles.sectionHeader}>
            <h2>Compare our deliverables</h2>
            <p>Understand exactly what technical capabilities are included in each tier.</p>
          </div>
          <div className={zohoStyles.compareTableWrapper}>
            <table className={zohoStyles.compareTable}>
              <thead>
                <tr>
                  <th>Features &amp; Deliverables</th>
                  <th>Rapid Deployment</th>
                  <th>Enterprise Architecture</th>
                  <th>Managed BPO</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Standard App Configuration (CRM, Books)</td>
                  <td><IconCheck /></td>
                  <td><IconCheck /></td>
                  <td><IconCheck /></td>
                </tr>
                <tr>
                  <td>Data Migration</td>
                  <td>Up to 10k records</td>
                  <td>Unlimited / Complex Relational</td>
                  <td>Ongoing entry</td>
                </tr>
                <tr>
                  <td>Custom API &amp; Webhooks</td>
                  <td><span className={zohoStyles.missing}>—</span></td>
                  <td><IconCheck /></td>
                  <td><span className={zohoStyles.missing}>—</span></td>
                </tr>
                <tr>
                  <td>Custom Creator Applications</td>
                  <td><span className={zohoStyles.missing}>—</span></td>
                  <td><IconCheck /></td>
                  <td><span className={zohoStyles.missing}>—</span></td>
                </tr>
                <tr>
                  <td>Dedicated Solution Architect</td>
                  <td><span className={zohoStyles.missing}>—</span></td>
                  <td><IconCheck /></td>
                  <td><IconCheck /></td>
                </tr>
                <tr>
                  <td>Support SLA Response Time</td>
                  <td>48 Hours</td>
                  <td>12 Hours</td>
                  <td>4 Hours (Priority)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Rev>

      {/* ─── 4. IMPLEMENTATION TIMELINE ─── */}
      <Rev className={zohoStyles.timelineSection}>
        <div className="container">
          <div className={zohoStyles.sectionHeader}>
            <h2>Our Delivery Methodology</h2>
            <p>We use a structured, risk-averse agile approach for all Enterprise rollouts.</p>
          </div>
          <div className={zohoStyles.timelineGrid}>
            <div className={zohoStyles.timelineStep}>
              <div className={zohoStyles.timelineNumber}>1</div>
              <h4>Discovery &amp; Blueprint</h4>
              <p>We map your existing processes, identify bottlenecks, and document a strict technical blueprint.</p>
            </div>
            <div className={zohoStyles.timelineStep}>
              <div className={zohoStyles.timelineNumber}>2</div>
              <h4>Data Architecture</h4>
              <p>Cleansing, formatting, and migrating your legacy data to ensure a pristine foundation in Zoho.</p>
            </div>
            <div className={zohoStyles.timelineStep}>
              <div className={zohoStyles.timelineNumber}>3</div>
              <h4>Custom Development</h4>
              <p>Building out API connections, Deluge scripts, and bespoke Creator interfaces.</p>
            </div>
            <div className={zohoStyles.timelineStep}>
              <div className={zohoStyles.timelineNumber}>4</div>
              <h4>Training &amp; Handover</h4>
              <p>Comprehensive onboarding sessions for your staff to ensure 100% adoption.</p>
            </div>
          </div>
        </div>
      </Rev>

      {/* ─── 5. PORTFOLIO / CASE STUDIES (Dark Bento Box Layout) ─── */}
      <Rev className={zohoStyles.portfolioSection}>
        <div className="container">
          <div className={zohoStyles.sectionHeader}>
            <h2 style={{ color: '#fff' }}>Featured Implementations</h2>
            <p style={{ color: '#94a3b8' }}>Real-world examples of our complex Enterprise Architecture work.</p>
          </div>
          
          <div className={zohoStyles.bentoGrid}>
            <div className={`${zohoStyles.bentoItem} ${zohoStyles.bentoLarge}`}>
              <div className={zohoStyles.bentoImage} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1586528116311-ad8ed7c80a30?q=80&w=2070&auto=format&fit=crop)' }} />
              <div className={zohoStyles.bentoContent}>
                <div className={zohoStyles.bentoCategory}>Creator &amp; API Integration</div>
                <h3>National Logistics Network</h3>
                <p>We built a custom Zoho Creator application to manage a fleet of 150+ vehicles, integrating directly with legacy tracking hardware via custom APIs, reducing manual data entry by 85%.</p>
              </div>
            </div>

            <div className={`${zohoStyles.bentoItem} ${zohoStyles.bentoTall}`}>
              <div className={zohoStyles.bentoImage} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop)' }} />
              <div className={zohoStyles.bentoContent}>
                <div className={zohoStyles.bentoCategory}>Zoho One</div>
                <h3>Financial Services Migration</h3>
                <p>Migrated 10 years of legacy data from Salesforce to Zoho CRM, implementing FCA-compliant role-based controls.</p>
              </div>
            </div>

            <div className={`${zohoStyles.bentoItem}`}>
              <div className={zohoStyles.bentoImage} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1974&auto=format&fit=crop)' }} />
              <div className={zohoStyles.bentoContent}>
                <div className={zohoStyles.bentoCategory}>Zoho Desk</div>
                <h3>Retail Support Desk</h3>
                <p>Automated ticketing and omnichannel support for a high-volume UK ecommerce retailer.</p>
              </div>
            </div>
          </div>
        </div>
      </Rev>

      {/* ─── 6. FAQ SECTION ─── */}
      <Rev className={zohoStyles.faqSection}>
        <div className="container">
          <div className={zohoStyles.sectionHeader}>
            <h2>Pricing &amp; Scope FAQs</h2>
            <p>Common questions about engaging with Lednexora.</p>
          </div>
          <div className={zohoStyles.faqContainer}>
            <div className={zohoStyles.faqItem}>
              <div className={zohoStyles.faqQuestion}>Are there any hidden licensing fees? <span>+</span></div>
              <div className={zohoStyles.faqAnswer}>No. Our pricing covers Lednexora's implementation, development, and consulting services. Your Zoho One or individual application licenses are purchased directly from Zoho Corp separately.</div>
            </div>
            <div className={zohoStyles.faqItem}>
              <div className={zohoStyles.faqQuestion}>How is the Enterprise Architecture scoped? <span>+</span></div>
              <div className={zohoStyles.faqAnswer}>We begin with a paid discovery phase to map your technical requirements. Following this, we provide a fixed-price statement of work (SOW) guaranteeing delivery within budget.</div>
            </div>
            <div className={zohoStyles.faqItem}>
              <div className={zohoStyles.faqQuestion}>Can we switch to a BPO retainer later? <span>+</span></div>
              <div className={zohoStyles.faqAnswer}>Absolutely. Many of our Enterprise Architecture clients transition to a Managed BPO retainer once the system is live to handle day-to-day administration and bookkeeping.</div>
            </div>
          </div>
        </div>
      </Rev>

      {/* ─── 7. GLOBAL CTA BAND ─── */}
      <section className={h.ctaBand}>
        <div className="container">
          <div className={h.ctaBandGrid}>
            <div className={h.ctaBandContent}>
              <h2>Ready to scope your Zoho project?</h2>
              <p>Connect with our technical architects to discuss your integration requirements, audit your current setup, or request a detailed proposal.</p>
              <div className={h.ctaBandActions}>
                <Link href="/zoho-consultation" className={h.btnWhite}>Schedule Technical Scoping <IconArrowRight /></Link>
              </div>
            </div>
            <div className={h.ctaInfoCards}>
              <div className={h.ctaInfoCard}>
                <div className={h.ctaInfoIcon}><IconCheck /></div>
                <div className={h.ctaInfoText}><strong>Fixed Pricing</strong>Transparent scopes and timelines</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
