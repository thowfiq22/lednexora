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

export default function ZohoServicesOverviewPage() {
  return (
    <div className={zohoStyles.pageWrapper}>
      
      {/* ─── 1. HERO ─── */}
      <section className={zohoStyles.zohoHero} style={{ textAlign: 'center', minHeight: '60vh' }}>
        <div className="container">
          <div className={zohoStyles.heroContent} style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className={zohoStyles.heroBadge} style={{ margin: '0 auto 1.5rem auto' }}>About Us</div>
            <h1 className={zohoStyles.heroTitle} style={{ fontSize: '3rem', marginBottom: '2rem' }}>
              Leading innovation through technology with vision and purpose.
            </h1>
            <div className={zohoStyles.grid6Container} style={{ gridTemplateColumns: '1fr 1fr', gap: '2rem', textAlign: 'left', marginTop: '3rem' }}>
              <div className={zohoStyles.grid6Card} style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}>
                <h3 style={{ color: '#fff', fontSize: '1.5rem' }}>Zoho BPO Division</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', lineHeight: 1.6 }}>
                  We manage your daily bookkeeping operations as a trusted BPO partner, simplifying tax filing for your accountants and delivering real-time profitability and financial insights for management, all powered by a single, reliable Zoho source of truth.
                </p>
              </div>
              <div className={zohoStyles.grid6Card} style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}>
                <h3 style={{ color: '#fff', fontSize: '1.5rem' }}>Zoho Consulting Division</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', lineHeight: 1.6 }}>
                  We offer end-to-end implementation, secure data migration, and on-demand consulting to ensure your enterprise architecture is perfectly aligned with your strategic business goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. HOW IT WORKS FLOWCHART ─── */}
      <Rev className={zohoStyles.flowchartSection}>
        <div className="container">
          <div className={zohoStyles.sectionHeader}>
            <h2>How it works</h2>
            <p>Our structured, risk-averse methodology for engaging, scoping, and delivering enterprise solutions.</p>
          </div>

          <div className={zohoStyles.flowchartContainer}>
            
            {/* Pre-Engagement */}
            <div className={zohoStyles.flowRow}>
              <div className={zohoStyles.flowBadge}>1. Pre-Engagement</div>
              <div className={zohoStyles.flowSteps}>
                <div className={`${zohoStyles.flowStep} ${zohoStyles.flowStepPrimary}`}>Client Enquiry</div>
                <div className={zohoStyles.flowArrow}>→</div>
                <div className={zohoStyles.flowStep}>Gather Client Requirements</div>
                <div className={zohoStyles.flowArrow}>→</div>
                <div className={zohoStyles.flowStep}>Obtain Historical Bookkeeping</div>
                <div className={zohoStyles.flowArrow}>→</div>
                <div className={zohoStyles.flowStep}>Get Accountant Contact</div>
                <div className={zohoStyles.flowArrow}>→</div>
                <div className={zohoStyles.flowStep}>Define RACI Matrix</div>
              </div>
            </div>

            {/* Scoping */}
            <div className={zohoStyles.flowRow}>
              <div className={zohoStyles.flowBadge}>2. Scoping</div>
              <div className={zohoStyles.flowSteps}>
                <div className={`${zohoStyles.flowStep} ${zohoStyles.flowStepPrimary}`}>Deal Sizing</div>
                <div className={zohoStyles.flowArrow}>→</div>
                <div className={zohoStyles.flowStep}>Prepare Statement of Work</div>
                <div className={zohoStyles.flowArrow}>→</div>
                <div className={zohoStyles.flowStep}>Statement of Work Sign</div>
                <div className={zohoStyles.flowArrow}>→</div>
                <div className={zohoStyles.flowStep}>Approval Required</div>
              </div>
            </div>

            {/* Delivery */}
            <div className={zohoStyles.flowRow}>
              <div className={zohoStyles.flowBadge}>3. Delivery</div>
              <div className={zohoStyles.flowSteps}>
                <div className={`${zohoStyles.flowStep} ${zohoStyles.flowStepPrimary}`}>Onboarding</div>
                <div className={zohoStyles.flowArrow}>→</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <div className={zohoStyles.flowStep}>Implementation</div>
                  <div className={zohoStyles.flowStep}>Migration</div>
                </div>
                <div className={zohoStyles.flowArrow}>→</div>
                <div className={`${zohoStyles.flowStep} ${zohoStyles.flowStepPrimary}`}>Execution</div>
                <div className={zohoStyles.flowArrow}>→</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <div className={zohoStyles.flowStep}>Initiate Bookkeeping &amp; Reporting</div>
                  <div className={zohoStyles.flowStep}>Provide Consulting Support</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Rev>

      {/* ─── 3. GLOBAL CTA BAND ─── */}
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
