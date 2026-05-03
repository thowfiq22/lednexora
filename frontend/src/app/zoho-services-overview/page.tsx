"use client";
import React from "react";
import Link from "next/link";
import zohoStyles from "@/styles/zoho.module.css";
import h from "@/styles/home.module.css";
import { useReveal } from "@/lib/useReveal";
import { IconArrowRight, IconCheck, IconUsers, IconDatabase, IconCloud, IconBolt } from "@/components/Icons";

function Rev({ children, className = "", style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const { ref, visible } = useReveal();
  return <section ref={ref} className={`${zohoStyles.reveal || ""} ${visible ? zohoStyles.revealVisible || "" : ""} ${className}`} style={style}>{children}</section>;
}

export default function ZohoServicesOverviewPage() {
  return (
    <div className={zohoStyles.pageWrapper}>
      
      {/* ─── 1. HERO ─── */}
      <section className={zohoStyles.zohoHero} style={{ textAlign: 'left', padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div className={zohoStyles.heroContent} style={{ maxWidth: '600px', margin: 0 }}>
              <div className={zohoStyles.heroBadge} style={{ marginBottom: '1.5rem' }}>About Us</div>
              <h1 className={zohoStyles.heroTitle} style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>
                Leading innovation through technology with vision and purpose.
              </h1>
              <p className={zohoStyles.heroDesc} style={{ fontSize: '1.125rem', marginBottom: '2.5rem' }}>
                We bridge the gap between complex enterprise operations and intuitive, scalable software. Whether you need ongoing BPO management or bespoke Zoho architecture, we are your dedicated digital partner.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="#how-it-works" className={zohoStyles.heroBtn}>
                  See How It Works <IconArrowRight />
                </a>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className={zohoStyles.grid6Card} style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)', padding: '2rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <IconUsers /> Zoho BPO Division
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', lineHeight: 1.6, marginTop: '1rem' }}>
                  We manage your daily bookkeeping operations as a trusted BPO partner, simplifying tax filing for your accountants and delivering real-time profitability and financial insights for management, all powered by a single, reliable Zoho source of truth.
                </p>
              </div>
              <div className={zohoStyles.grid6Card} style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)', padding: '2rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <IconDatabase /> Zoho Consulting Division
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', lineHeight: 1.6, marginTop: '1rem' }}>
                  We offer end-to-end implementation, secure data migration, and on-demand consulting to ensure your enterprise architecture is perfectly aligned with your strategic business goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. LOGO STRIP (Improvised Trust) ─── */}
      <section className={zohoStyles.logoStrip}>
        <div className="container">
          <p>Trusted by enterprises across the UK, UAE, and India</p>
          <div className={zohoStyles.logoGrid}>
            <span>TATA</span>
            <span>Unilever</span>
            <span>Emirates</span>
            <span>Barclays</span>
            <span>AstraZeneca</span>
          </div>
        </div>
      </section>

      {/* ─── 3. CAPABILITIES GRID (Improvised context) ─── */}
      <Rev className={zohoStyles.grid6Section}>
        <div className="container">
          <div className={zohoStyles.sectionHeader}>
            <h2>End-to-End Enterprise Value</h2>
            <p>We do more than just configure software. We engineer resilient business processes.</p>
          </div>
          <div className={zohoStyles.grid6Container}>
            <div className={zohoStyles.grid6Card}>
              <div className={zohoStyles.grid6Icon}><IconDatabase /></div>
              <h3>FCA-Compliant Bookkeeping</h3>
              <p>Strict financial data integrity using Zoho Books, ensuring complete audit readiness and automated tax submissions.</p>
            </div>
            <div className={zohoStyles.grid6Card}>
              <div className={zohoStyles.grid6Icon}><IconBolt /></div>
              <h3>Custom API Integration</h3>
              <p>We build seamless bridges between your legacy ERPs and the Zoho ecosystem using custom Deluge scripting.</p>
            </div>
            <div className={zohoStyles.grid6Card}>
              <div className={zohoStyles.grid6Icon}><IconCloud /></div>
              <h3>Lossless Data Migration</h3>
              <p>Secure transition of millions of records from Salesforce, Hubspot, or Xero into your new Zoho architecture.</p>
            </div>
          </div>
        </div>
      </Rev>

      {/* ─── 4. HOW IT WORKS VERTICAL TIMELINE ─── */}
      <Rev className={zohoStyles.verticalFlowSection} id="how-it-works">
        <div className="container">
          <div className={zohoStyles.sectionHeader}>
            <h2>How it works</h2>
            <p>Our structured, risk-averse methodology for engaging, scoping, and delivering enterprise solutions.</p>
          </div>

          <div className={zohoStyles.verticalFlowContainer}>
            
            {/* Step 1: Pre-Engagement */}
            <div className={zohoStyles.vFlowStep}>
              <div className={zohoStyles.vFlowIcon}>1</div>
              <div className={zohoStyles.vFlowCard}>
                <h3>Pre-Engagement <span>Discovery</span></h3>
                <div className={zohoStyles.vFlowList}>
                  <div className={zohoStyles.vFlowSubStep}><IconCheck /> Client Enquiry</div>
                  <div className={zohoStyles.vFlowSubStep}><IconCheck /> Gather Client Requirements</div>
                  <div className={zohoStyles.vFlowSubStep}><IconCheck /> Obtain Historical Bookkeeping</div>
                  <div className={zohoStyles.vFlowSubStep}><IconCheck /> Get Accountant Contact</div>
                  <div className={zohoStyles.vFlowSubStep}><IconCheck /> Define RACI Matrix</div>
                </div>
              </div>
            </div>

            {/* Step 2: Scoping */}
            <div className={zohoStyles.vFlowStep}>
              <div className={zohoStyles.vFlowIcon}>2</div>
              <div className={zohoStyles.vFlowCard}>
                <h3>Scoping <span>Commercials</span></h3>
                <div className={zohoStyles.vFlowList}>
                  <div className={zohoStyles.vFlowSubStep}><IconCheck /> Deal Sizing</div>
                  <div className={zohoStyles.vFlowSubStep}><IconCheck /> Prepare Statement of Work</div>
                  <div className={zohoStyles.vFlowSubStep}><IconCheck /> Statement of Work Sign</div>
                  <div className={zohoStyles.vFlowSubStep}><IconCheck /> Approval Required</div>
                </div>
              </div>
            </div>

            {/* Step 3: Delivery */}
            <div className={zohoStyles.vFlowStep}>
              <div className={zohoStyles.vFlowIcon}>3</div>
              <div className={zohoStyles.vFlowCard}>
                <h3>Delivery <span>Execution</span></h3>
                <div className={zohoStyles.vFlowList}>
                  <div className={zohoStyles.vFlowSubStep}><IconCheck /> Onboarding</div>
                  
                  {/* Branching parallel tasks */}
                  <div className={zohoStyles.vFlowBranch}>
                    <div className={zohoStyles.vFlowSubStep}><IconCheck /> Implementation</div>
                    <div className={zohoStyles.vFlowSubStep}><IconCheck /> Migration</div>
                  </div>
                  
                  <div className={zohoStyles.vFlowSubStep}><IconCheck /> Execution</div>
                  
                  {/* Branching final paths */}
                  <div className={zohoStyles.vFlowBranch}>
                    <div className={zohoStyles.vFlowSubStep}><IconCheck /> Initiate Bookkeeping &amp; Reporting</div>
                    <div className={zohoStyles.vFlowSubStep}><IconCheck /> Provide Consulting Support</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Rev>

      {/* ─── 5. EXPERT TESTIMONIAL (Improvised) ─── */}
      <Rev className={zohoStyles.expertSection}>
        <div className="container">
          <div className={zohoStyles.expertCard}>
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" alt="Client Testimonial" className={zohoStyles.expertAvatar} />
            <div className={zohoStyles.expertContent}>
              <div className={zohoStyles.expertQuote}>
                Lednexora didn't just configure software; they fundamentally re-architected how our sales and operations communicate. We replaced 4 disjointed tools with a single, highly customised Zoho instance.
              </div>
              <div style={{ marginTop: '2rem' }}>
                <h3>Sarah Jenkins</h3>
                <h4>Operations Director, UK Logistics Ltd</h4>
                <div style={{ display: 'flex', gap: '4px', color: '#f59e0b', marginTop: '0.5rem' }}>
                  ★ ★ ★ ★ ★
                </div>
              </div>
            </div>
          </div>
        </div>
      </Rev>

      {/* ─── 6. GLOBAL CTA BAND ─── */}
      <section className={h.ctaBand}>
        <div className="container">
          <div className={h.ctaBandGrid}>
            <div className={h.ctaBandContent}>
              <h2>Ready to scope your project?</h2>
              <p>Connect with our technical architects to discuss your integration requirements or audit your current setup.</p>
              <div className={h.ctaBandActions}>
                <Link href="/zoho-business-solutions-packages" className={h.btnPrimary} style={{ background: '#fff', color: '#0ea5e9' }}>
                  View Pricing Packages
                </Link>
                <Link href="/zoho-consultation" className={h.btnWhite}>
                  Schedule Consultation <IconArrowRight />
                </Link>
              </div>
            </div>
            <div className={h.ctaInfoCards}>
              <div className={h.ctaInfoCard}>
                <div className={h.ctaInfoIcon}><IconCheck /></div>
                <div className={h.ctaInfoText}><strong>Transparent Scoping</strong>Clear timelines &amp; deliverables</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
