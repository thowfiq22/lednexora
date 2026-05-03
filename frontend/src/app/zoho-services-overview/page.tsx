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
      <section className={zohoStyles.zohoHero} style={{ textAlign: 'center', padding: '8rem 0 10rem 0' }}>
        <div className="container">
          <div className={zohoStyles.heroContent} style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className={zohoStyles.heroBadge} style={{ margin: '0 auto 1.5rem auto' }}>About Us</div>
            <h1 className={zohoStyles.heroTitle} style={{ marginBottom: '1.5rem' }}>
              Leading innovation through technology with vision and purpose.
            </h1>
            <p className={zohoStyles.heroDesc} style={{ fontSize: '1.25rem', marginBottom: '2.5rem', margin: '0 auto 2.5rem auto', maxWidth: '650px' }}>
              We bridge the gap between complex enterprise operations and intuitive, scalable software. Whether you need ongoing BPO management or bespoke Zoho architecture, we are your dedicated digital partner.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <a href="#divisions" className={zohoStyles.heroBtn}>
                Explore Our Divisions <IconArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 1.5 THE DIVISIONS (Modern Section) ─── */}
      <section id="divisions" style={{ marginTop: '-6rem', position: 'relative', zIndex: 10, paddingBottom: '4rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            
            {/* BPO Division */}
            <div style={{ 
              background: '#fff', 
              borderRadius: '24px', 
              padding: '3rem', 
              boxShadow: '0 20px 40px rgba(0,0,0,0.08)', 
              border: '1px solid rgba(0,0,0,0.05)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              transition: 'transform 0.3s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ 
                width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(14,165,233,0.1)', 
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0ea5e9'
              }}>
                <IconUsers />
              </div>
              <h2 style={{ fontSize: '2rem', color: '#0f172a', fontWeight: 800 }}>Zoho BPO Division</h2>
              <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.7 }}>
                We manage your daily bookkeeping operations as a trusted BPO partner. We simplify tax filing for your accountants and deliver real-time profitability and financial insights for management, all powered by a single, reliable Zoho source of truth.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '1rem 0 0 0', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0f172a', fontWeight: 600 }}>
                  <span style={{ color: '#0ea5e9' }}>✓</span> Daily Bookkeeping Operations
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0f172a', fontWeight: 600 }}>
                  <span style={{ color: '#0ea5e9' }}>✓</span> Automated Tax Filing Prep
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0f172a', fontWeight: 600 }}>
                  <span style={{ color: '#0ea5e9' }}>✓</span> Real-Time Management Insights
                </li>
              </ul>
            </div>

            {/* Consulting Division */}
            <div style={{ 
              background: '#fff', 
              borderRadius: '24px', 
              padding: '3rem', 
              boxShadow: '0 20px 40px rgba(0,0,0,0.08)', 
              border: '1px solid rgba(0,0,0,0.05)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              transition: 'transform 0.3s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ 
                width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(16,185,129,0.1)', 
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981'
              }}>
                <IconDatabase />
              </div>
              <h2 style={{ fontSize: '2rem', color: '#0f172a', fontWeight: 800 }}>Zoho Consulting Division</h2>
              <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.7 }}>
                We offer end-to-end implementation, secure data migration, and on-demand consulting to ensure your enterprise architecture is perfectly aligned with your strategic business goals.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '1rem 0 0 0', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0f172a', fontWeight: 600 }}>
                  <span style={{ color: '#10b981' }}>✓</span> End-to-End Implementation
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0f172a', fontWeight: 600 }}>
                  <span style={{ color: '#10b981' }}>✓</span> Secure Data Migration
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0f172a', fontWeight: 600 }}>
                  <span style={{ color: '#10b981' }}>✓</span> On-Demand Architecture Consulting
                </li>
              </ul>
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

const testimonials = [
  {
    quote: "With Lednexora, we have confidence that our Zoho systems are in expert hands. That trust allows our team to focus on enabling the business rather than worrying about software support.",
    author: "ALEX CHIU",
    title: "IT MANAGER\nUK MANUFACTURING CORP",
    image: "https://images.unsplash.com/photo-1504917595217-d4ce5eb96714?q=80&w=1600&auto=format&fit=crop"
  },
  {
    quote: "The scope of support covers our entire custom architecture. We have experienced faster time to solution and zero hesitation in resolving complex integration issues.",
    author: "SARAH JENKINS",
    title: "OPERATIONS DIRECTOR\nLOGISTICS LTD",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop"
  },
  {
    quote: "Their team didn't just implement Zoho; they re-engineered our daily bookkeeping. The BPO division handles everything flawlessly, saving our accountants hours of manual work.",
    author: "DAVID MOORE",
    title: "CFO\nTECH RETAILERS GROUP",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop"
  }
];

function TestimonialSlider() {
  const [current, setCurrent] = React.useState(0);
  const t = testimonials[current];

  return (
    <div style={{ background: '#fff', color: '#000', padding: '6rem 0' }}>
      <div className="container">
        <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '4rem', color: '#000' }}>Hear what our clients have to say</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          
          <div style={{ position: 'relative', display: 'flex', gap: '2rem' }}>
            <button onClick={() => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))} style={{ background: 'none', border: 'none', fontSize: '2rem', cursor: 'pointer', color: '#ccc' }}>
              &lsaquo;
            </button>
            <div style={{ flex: 1, borderLeft: '4px solid #fcd34d', paddingLeft: '2rem', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-40px', left: '10px', fontSize: '6rem', color: '#fcd34d', fontFamily: 'serif', lineHeight: 1 }}>
                “
              </div>
              <p style={{ fontSize: '1.5rem', lineHeight: 1.6, fontWeight: 500, marginBottom: '2rem', position: 'relative', zIndex: 2 }}>
                {t.quote}
              </p>
              <p style={{ fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.1em', color: '#666', textTransform: 'uppercase', whiteSpace: 'pre-line' }}>
                — {t.author}<br/>{t.title}
              </p>
              <div style={{ marginTop: '3rem' }}>
                <a href="#" style={{ display: 'inline-block', background: '#fcd34d', color: '#000', padding: '1rem 2rem', fontWeight: 700, textDecoration: 'none' }}>
                  Read story
                </a>
              </div>
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <img src={t.image} alt={t.author} style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
            <button onClick={() => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))} style={{ position: 'absolute', right: '-40px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', fontSize: '2rem', cursor: 'pointer', color: '#ccc' }}>
              &rsaquo;
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

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

      {/* ─── 5. EXPERT TESTIMONIAL (Rimini Style) ─── */}
      <TestimonialSlider />

      {/* ─── 6. GLOBAL CTA BAND ─── */}
      <section className={h.ctaBand}>
        <div className="container">
          <div className={h.ctaBandGrid}>
            <div className={h.ctaBandContent}>
              <h2>Ready to scope your project?</h2>
              <p>Connect with our technical architects to discuss your integration requirements or audit your current setup.</p>
              <div className={h.ctaBandActions}>
                <Link href="/zoho-business-solutions-packages" className={h.btnWhite}>
                  View Pricing Packages
                </Link>
                <Link href="/zoho-consultation" className={`${h.btnWhite} ${h.btnOutline}`}>
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
