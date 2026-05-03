"use client";
import React from "react";
import Link from "next/link";
import zohoStyles from "@/styles/zoho.module.css";
import h from "@/styles/home.module.css";
import { useReveal } from "@/lib/useReveal";
import {
  IconArrowRight, IconCheck, IconCloud, IconUsers, IconBolt, IconDatabase, IconTrending
} from "@/components/Icons";

function Rev({ children, className = "", style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const { ref, visible } = useReveal();
  return <section ref={ref} className={`${zohoStyles.reveal || ""} ${visible ? zohoStyles.revealVisible || "" : ""} ${className}`} style={style}>{children}</section>;
}

export default function ZohoServicesOverviewPage() {
  return (
    <div className={zohoStyles.pageWrapper}>
      
      {/* ─── 1. HERO WITH FORM ─── */}
      <section className={zohoStyles.zohoHero}>
        <div className="container">
          <div className={zohoStyles.heroGrid}>
            <div className={zohoStyles.heroContent} style={{ textAlign: 'left', margin: 0 }}>
              <div className={zohoStyles.heroBadge}>Zoho Integration &amp; Consulting</div>
              <h1 className={zohoStyles.heroTitle} style={{ fontSize: '3.5rem' }}>Growth Through Digital Transformation.</h1>
              <p className={zohoStyles.heroDesc} style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
                Lednexora helps UK enterprises unlock the full potential of the Zoho ecosystem. We specialise in seamless implementations and custom Zoho Creator applications.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', color: '#fff', fontSize: '1.1rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>✓ UK-based enterprise architects</li>
                <li>✓ Certified Zoho Creator developers</li>
              </ul>
            </div>
            
            <div className={zohoStyles.heroFormCard}>
              <h3>Request a Consultation</h3>
              <p>Discuss your Zoho requirements with our UK team.</p>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className={zohoStyles.formGroup}>
                  <label>Full Name</label>
                  <input type="text" placeholder="John Doe" />
                </div>
                <div className={zohoStyles.formGroup}>
                  <label>Work Email</label>
                  <input type="email" placeholder="john@company.com" />
                </div>
                <div className={zohoStyles.formGroup}>
                  <label>Company Size</label>
                  <select>
                    <option>1-50 Employees</option>
                    <option>51-200 Employees</option>
                    <option>201+ Employees</option>
                  </select>
                </div>
                <button type="submit" className={zohoStyles.formSubmit}>Get Started</button>
                <div className={zohoStyles.formDisclaimer}>
                  By submitting, you agree to our Privacy Policy and consent to be contacted regarding our services.
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. LOGO STRIP ─── */}
      <section className={zohoStyles.logoStrip}>
        <div className="container">
          <p>Trusted by enterprises across the UK &amp; UAE</p>
          <div className={zohoStyles.logoGrid}>
            <span>TATA</span>
            <span>Unilever</span>
            <span>Emirates</span>
            <span>Barclays</span>
            <span>AstraZeneca</span>
          </div>
        </div>
      </section>

      {/* ─── 3. VALUE PROP & STAT ─── */}
      <Rev className={zohoStyles.statSection}>
        <div className="container">
          <div className={zohoStyles.statContainer}>
            <div className={zohoStyles.statImage}>
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" alt="Team meeting" style={{ width: '100%', borderRadius: '16px' }} />
            </div>
            <div className={zohoStyles.statText}>
              <div className={zohoStyles.statHighlight}>80%<span>Reduction in manual data entry</span></div>
              <h2>Forecast the future, overcome the data siloes.</h2>
              <p>When you transition from fragmented legacy applications to the unified Zoho ecosystem, you establish a single source of truth. We ensure your sales, finance, and operations teams share the exact same real-time data.</p>
            </div>
          </div>
        </div>
      </Rev>

      {/* ─── 4. PLATFORM FEATURES (TABS LAYOUT) ─── */}
      <Rev className={zohoStyles.tabsSection}>
        <div className="container">
          <div className={zohoStyles.sectionHeader}>
            <h2>A simple, yet powerful Ecosystem</h2>
            <p>We deploy the right applications to solve your specific business challenges.</p>
          </div>
          <div className={zohoStyles.tabsLayout}>
            <div className={zohoStyles.tabsSidebar}>
              <div className={`${zohoStyles.tabItem} ${zohoStyles.tabItemActive}`}>
                <h4>Zoho One Implementation</h4>
                <p>Deploy the operating system for business with 45+ integrated apps.</p>
              </div>
              <div className={zohoStyles.tabItem}>
                <h4>Zoho Creator Development</h4>
                <p>Bespoke low-code applications for your unique logic.</p>
              </div>
              <div className={zohoStyles.tabItem}>
                <h4>Third-Party API Integration</h4>
                <p>Connect Zoho seamlessly to your legacy ERPs.</p>
              </div>
              <div className={zohoStyles.tabItem}>
                <h4>Data Migration</h4>
                <p>Secure, lossless migration from Salesforce or Hubspot.</p>
              </div>
            </div>
            <div className={zohoStyles.tabImage}>
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" alt="Dashboard interface" />
            </div>
          </div>
        </div>
      </Rev>

      {/* ─── 5. 6-CARD GRID ─── */}
      <Rev className={zohoStyles.grid6Section}>
        <div className="container">
          <div className={zohoStyles.sectionHeader}>
            <h2>Accelerate digital transformation</h2>
            <p>Our Zoho architects deliver rapid value across your entire organisation.</p>
          </div>
          <div className={zohoStyles.grid6Container}>
            <div className={zohoStyles.grid6Card}>
              <div className={zohoStyles.grid6Icon}><IconTrending /></div>
              <h3>Sales Automation</h3>
              <p>Streamline your pipeline with Zoho CRM, automated lead routing, and strict blueprint enforcements.</p>
            </div>
            <div className={zohoStyles.grid6Card}>
              <div className={zohoStyles.grid6Icon}><IconDatabase /></div>
              <h3>Finance &amp; Books</h3>
              <p>Integrate Zoho Books for automated invoicing, FCA-compliant reporting, and seamless tax submissions.</p>
            </div>
            <div className={zohoStyles.grid6Card}>
              <div className={zohoStyles.grid6Icon}><IconUsers /></div>
              <h3>HR &amp; People</h3>
              <p>Manage your workforce effectively with Zoho People, automating onboarding, leave, and appraisals.</p>
            </div>
            <div className={zohoStyles.grid6Card}>
              <div className={zohoStyles.grid6Icon}><IconBolt /></div>
              <h3>Custom Workflows</h3>
              <p>We write advanced Deluge scripts to automate complex multi-stage approvals across different departments.</p>
            </div>
            <div className={zohoStyles.grid6Card}>
              <div className={zohoStyles.grid6Icon}><IconCloud /></div>
              <h3>Cloud Security</h3>
              <p>Implement strict role-based access controls, data encryption, and IP restrictions to protect your IP.</p>
            </div>
            <div className={zohoStyles.grid6Card}>
              <div className={zohoStyles.grid6Icon}><IconCheck /></div>
              <h3>Managed Support</h3>
              <p>Ongoing BPO services and retained technical support to ensure your system evolves with your business.</p>
            </div>
          </div>
        </div>
      </Rev>

      {/* ─── 6. EXPERT TESTIMONIAL ─── */}
      <Rev className={zohoStyles.expertSection}>
        <div className="container">
          <div className={zohoStyles.expertCard}>
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" alt="Sarah Jenkins" className={zohoStyles.expertAvatar} />
            <div className={zohoStyles.expertContent}>
              <div className={zohoStyles.expertQuote}>
                Lednexora didn't just configure software; they fundamentally re-architected how our sales and operations communicate. We replaced 4 disjointed tools with a single, highly customised Zoho One instance.
              </div>
              <div style={{ marginTop: '2rem' }}>
                <h3>Sarah Jenkins</h3>
                <h4>Operations Director, UK Logistics Ltd</h4>
                <div style={{ display: 'flex', gap: '4px', color: '#f59e0b' }}>
                  ★ ★ ★ ★ ★
                </div>
              </div>
            </div>
          </div>
        </div>
      </Rev>

      {/* ─── 7. FAQ SECTION ─── */}
      <Rev className={zohoStyles.faqSection}>
        <div className="container">
          <div className={zohoStyles.sectionHeader}>
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about our Zoho implementation process.</p>
          </div>
          <div className={zohoStyles.faqContainer}>
            <div className={zohoStyles.faqItem}>
              <div className={zohoStyles.faqQuestion}>How long does a typical Zoho One implementation take? <span>+</span></div>
              <div className={zohoStyles.faqAnswer}>A standard implementation for an SMB takes between 4 to 6 weeks. For larger enterprise deployments requiring custom Zoho Creator apps and legacy data migration, timelines typically range from 3 to 5 months.</div>
            </div>
            <div className={zohoStyles.faqItem}>
              <div className={zohoStyles.faqQuestion}>Can you migrate our data from Salesforce? <span>+</span></div>
            </div>
            <div className={zohoStyles.faqItem}>
              <div className={zohoStyles.faqQuestion}>Do you provide training for our staff? <span>+</span></div>
            </div>
          </div>
        </div>
      </Rev>

      {/* ─── 8. GLOBAL CTA BAND ─── */}
      <section className={h.ctaBand}>
        <div className="container">
          <div className={h.ctaBandGrid}>
            <div className={h.ctaBandContent}>
              <h2>Ready to optimise your workflows?</h2>
              <p>Connect with our Zoho specialists to discuss your integration requirements, audit your current setup, or request a custom Creator development scope.</p>
              <div className={h.ctaBandActions}>
                <Link href="/zoho-consultation" className={h.btnWhite}>Schedule Zoho Consultation <IconArrowRight /></Link>
              </div>
            </div>
            <div className={h.ctaInfoCards}>
              <div className={h.ctaInfoCard}>
                <div className={h.ctaInfoIcon}><IconCheck /></div>
                <div className={h.ctaInfoText}><strong>Certified Experts</strong>Guaranteed implementation standards</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
