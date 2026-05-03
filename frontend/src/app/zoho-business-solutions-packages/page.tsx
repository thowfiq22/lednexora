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
      <section className={zohoStyles.zohoHero}>
        <div className="container">
          <div className={zohoStyles.heroContent}>
            <div className={zohoStyles.heroBadge}>Zoho Solutions &amp; Pricing</div>
            <h1 className={zohoStyles.heroTitle}>Transparent service models for enterprise growth.</h1>
            <p className={zohoStyles.heroDesc}>
              Whether you need a rapid deployment, complex custom API integration, or ongoing managed services (BPO), Lednexora offers structured, predictable packages designed specifically for mid-market and enterprise requirements.
            </p>
            <a href="#packages" className={zohoStyles.heroBtn}>
              View our service models <IconArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* ─── 2. PACKAGES / PRICING (Modern Sticky Layout) ─── */}
      <Rev className={zohoStyles.packagesSection} style={{ scrollMarginTop: '80px' }}>
        <div className="container" id="packages">
          <div className={zohoStyles.stickyLayout}>
            <div className={zohoStyles.stickySidebar}>
              <h2>Service Models</h2>
              <p>We do not believe in hidden costs. Choose a structured service model that perfectly aligns with your implementation requirements and operational scale.</p>
            </div>
            
            <div className={zohoStyles.stickyContent}>
              {/* Quick Start */}
              <div className={zohoStyles.horizontalPricingCard}>
                <div className={zohoStyles.pricingHeader}>
                  <div className={zohoStyles.pricingTitleWrap}>
                    <h3>Rapid Deployment</h3>
                    <p>Best for SMBs looking to implement standard Zoho One modules quickly and correctly.</p>
                  </div>
                  <div className={zohoStyles.pricingPriceTag}>
                    <div className={zohoStyles.pricingPrice}>£3,500<span>Starting From</span></div>
                  </div>
                </div>
                <div className={zohoStyles.pricingBody}>
                  <ul className={zohoStyles.pricingFeatures}>
                    <li><IconCheck /> Initial discovery &amp; mapping</li>
                    <li><IconCheck /> CRM, Books &amp; Desk setup</li>
                    <li><IconCheck /> Standard data import (10k)</li>
                    <li><IconCheck /> 2 half-day team training</li>
                  </ul>
                  <div className={zohoStyles.pricingAction}>
                    <Link href="/zoho-consultation" className={zohoStyles.pricingBtn} aria-label="Request Proposal">
                      <IconArrowRight />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Custom Enterprise */}
              <div className={zohoStyles.horizontalPricingCard} style={{ borderColor: '#0ea5e9' }}>
                <div className={zohoStyles.pricingHeader}>
                  <div className={zohoStyles.pricingTitleWrap}>
                    <h3>Enterprise Architecture</h3>
                    <p>For complex organisations requiring bespoke workflows, low-code development, and deep integrations.</p>
                  </div>
                  <div className={zohoStyles.pricingPriceTag}>
                    <div className={zohoStyles.pricingPrice}>Custom<span>Project Scope</span></div>
                  </div>
                </div>
                <div className={zohoStyles.pricingBody}>
                  <ul className={zohoStyles.pricingFeatures}>
                    <li><IconCheck /> Deep technical discovery</li>
                    <li><IconCheck /> Custom Creator applications</li>
                    <li><IconCheck /> Third-party API integrations</li>
                    <li><IconCheck /> Advanced Deluge scripting</li>
                  </ul>
                  <div className={zohoStyles.pricingAction}>
                    <Link href="/zoho-consultation" className={zohoStyles.pricingBtn} aria-label="Consult an Architect">
                      <IconArrowRight />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Managed BPO */}
              <div className={zohoStyles.horizontalPricingCard}>
                <div className={zohoStyles.pricingHeader}>
                  <div className={zohoStyles.pricingTitleWrap}>
                    <h3>Managed Services (BPO)</h3>
                    <p>Ongoing administration, bookkeeping, and process outsourcing using your Zoho suite.</p>
                  </div>
                  <div className={zohoStyles.pricingPriceTag}>
                    <div className={zohoStyles.pricingPrice}>Retained<span>Monthly SLA</span></div>
                  </div>
                </div>
                <div className={zohoStyles.pricingBody}>
                  <ul className={zohoStyles.pricingFeatures}>
                    <li><IconCheck /> Zoho Books bookkeeping</li>
                    <li><IconCheck /> Daily data entry &amp; mgmt</li>
                    <li><IconCheck /> Workflow optimisation</li>
                    <li><IconCheck /> Guaranteed support SLAs</li>
                  </ul>
                  <div className={zohoStyles.pricingAction}>
                    <Link href="/zoho-consultation" className={zohoStyles.pricingBtn} aria-label="Discuss Retainer">
                      <IconArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Rev>

      {/* ─── 3. PORTFOLIO / CASE STUDIES (Dark Bento Box Layout) ─── */}
      <Rev className={zohoStyles.portfolioSection}>
        <div className="container">
          <h2>Featured Implementations</h2>
          
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

      {/* ─── 4. GLOBAL CTA BAND ─── */}
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
