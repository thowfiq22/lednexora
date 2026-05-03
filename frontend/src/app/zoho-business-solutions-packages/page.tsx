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
            <div className={zohoStyles.heroBadge} style={{ margin: '0 auto 1.5rem auto' }}>Zoho BPO &amp; Consulting Packages</div>
            <h1 className={zohoStyles.heroTitle}>Leading innovation through technology with vision and purpose.</h1>
            <p className={zohoStyles.heroDesc}>
              At LEDNEXORA Zoho BPO Division, we manage your daily bookkeeping operations as a trusted BPO partner, simplifying tax filing and delivering real-time profitability insights. At our Consulting Division, we offer implementation, data migration &amp; on-demand consulting.
            </p>
            <a href="#packages" className={zohoStyles.heroBtn} style={{ margin: '0 auto' }}>
              View our service models <IconArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* ─── 2. PROBLEM / SOLUTION / OUTCOME (4-Column) ─── */}
      <Rev className={zohoStyles.packagesSection} style={{ paddingBottom: '4rem' }}>
        <div className="container">
          <div className={zohoStyles.sectionHeader}>
            <h2>Why outsource to Lednexora?</h2>
            <p>Transforming complex accounting burdens into reliable, audit-ready financial insights.</p>
          </div>
          
          <div className={zohoStyles.psGrid}>
            <div className={zohoStyles.psCard}>
              <h3>Problem</h3>
              <ul className={zohoStyles.psList}>
                <li>High-Cost, Time-Intensive In-House Bookkeeping</li>
                <li>Incomplete records &amp; documentation</li>
                <li>Manual errors &amp; data corrections</li>
                <li>Poor financial visibility</li>
                <li>Inefficient cash flow tracking</li>
                <li>Growing statutory requirements</li>
                <li>Low investor/bank confidence</li>
              </ul>
            </div>
            <div className={zohoStyles.psCard}>
              <h3>Business Impact</h3>
              <ul className={zohoStyles.psList}>
                <li>High overhead costs</li>
                <li>Tax errors, penalties, audit stress</li>
                <li>High stress &amp; effort to accountant</li>
                <li>Weak decision-making</li>
                <li>Liquidity issues, payment delays</li>
                <li>Regulatory exposure</li>
              </ul>
            </div>
            <div className={zohoStyles.psCard}>
              <h3>LEDNEXORA Solution</h3>
              <ul className={zohoStyles.psList}>
                <li>Cost-effective Zoho BPO model</li>
                <li>Structured, evidence-based bookkeeping</li>
                <li>Verified, double-checked entries</li>
                <li>Real-time dashboards &amp; reports</li>
                <li>Receivable/Payable tracking (bank recon)</li>
                <li>Audit-ready monthly closing process</li>
                <li>Transparent financial statements</li>
              </ul>
            </div>
            <div className={zohoStyles.psCard}>
              <h3>Business Outcome</h3>
              <ul className={zohoStyles.psList}>
                <li>Time &amp; cost saving, top quality</li>
                <li>Reduced compliance risk</li>
                <li>Faster, accurate tax filing</li>
                <li>Confident strategic decisions</li>
                <li>Stronger cash flow control</li>
                <li>Full regulatory compliance</li>
                <li>Stronger stakeholder trust</li>
              </ul>
            </div>
          </div>
        </div>
      </Rev>

      {/* ─── 3. STATS STRIP ─── */}
      <Rev className={zohoStyles.statsStrip}>
        <div className="container">
          <div className={zohoStyles.statsGrid}>
            <div className={zohoStyles.statItem}>
              <h4>20+</h4>
              <p>Pre Sales</p>
            </div>
            <div className={zohoStyles.statItem}>
              <h4>12+</h4>
              <p>Projects Delivery</p>
            </div>
            <div className={zohoStyles.statItem}>
              <h4>98%</h4>
              <p>Client Satisfaction</p>
            </div>
            <div className={zohoStyles.statItem}>
              <h4>4+</h4>
              <p>Countries Covered</p>
            </div>
          </div>
        </div>
      </Rev>

      {/* ─── 4. SERVICE PILLARS (5-Column) ─── */}
      <Rev className={zohoStyles.packagesSection} style={{ paddingBottom: '4rem', paddingTop: '6rem' }}>
        <div className="container">
          <div className={zohoStyles.sectionHeader}>
            <h2>Our Core Competencies</h2>
            <p>From strategic roadmaps to day-to-day operations.</p>
          </div>
          
          <div className={zohoStyles.pillarsGrid}>
            <div className={zohoStyles.pillarCard}>
              <h3 style={{ color: '#0ea5e9' }}>Strategy</h3>
              <ul className={zohoStyles.pillarList}>
                <li>Business Needs Analysis</li>
                <li>Process Optimization</li>
                <li>Business Case Development</li>
                <li>Industry Best Practices</li>
                <li>Digital Transformation Strategy</li>
                <li>Solution Roadmap Development</li>
              </ul>
            </div>
            <div className={zohoStyles.pillarCard}>
              <h3 style={{ color: '#10b981' }}>Advisory</h3>
              <ul className={zohoStyles.pillarList}>
                <li>Cutover and Data Migration</li>
                <li>Governance Framework</li>
                <li>Training and Support</li>
                <li>Performance Metrics</li>
              </ul>
            </div>
            <div className={zohoStyles.pillarCard}>
              <h3 style={{ color: '#f59e0b' }}>Project Delivery</h3>
              <ul className={zohoStyles.pillarList}>
                <li>Zoho Project Management</li>
                <li>Project Planning and Execution</li>
              </ul>
            </div>
            <div className={zohoStyles.pillarCard}>
              <h3 style={{ color: '#ef4444' }}>Consulting</h3>
              <ul className={zohoStyles.pillarList}>
                <li>Finance – Books, Billing, Expense</li>
                <li>HR – Payroll, People</li>
                <li>Logistics – Commerce, Inventory</li>
                <li>Collaboration &amp; API Integrations</li>
                <li>Legal – Sign, Contracts</li>
                <li>Document Management System</li>
              </ul>
            </div>
            <div className={zohoStyles.pillarCard}>
              <h3 style={{ color: '#8b5cf6' }}>Technology</h3>
              <ul className={zohoStyles.pillarList}>
                <li>Bookkeeping – Day to Day Operations</li>
                <li>Customer Service Desk Feature</li>
              </ul>
            </div>
          </div>
        </div>
      </Rev>

      {/* ─── 5. FULL PRICING TABLE (5-TIER) ─── */}
      <Rev className={zohoStyles.compareSection} style={{ paddingTop: '2rem' }}>
        <div className="container" id="packages">
          <div className={zohoStyles.sectionHeader}>
            <h2>Zoho BPO Pricing Plans</h2>
            <p>Transparent bookkeeping and managed service packages based on transaction volume.</p>
          </div>
          <div className={zohoStyles.pricingTableWrapper}>
            <table className={zohoStyles.pricingTable}>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Standard<span>Startups</span></th>
                  <th>Professional<span>Small Businesses</span></th>
                  <th>Premium<span>Growing Companies</span></th>
                  <th>Elite<span>Scaling Businesses</span></th>
                  <th>Ultimate<span>High-Volume Enterprises</span></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Monthly Price (In GBP)</td>
                  <td className={zohoStyles.pricingPriceBig}>£20</td>
                  <td className={zohoStyles.pricingPriceBig}>£50</td>
                  <td className={zohoStyles.pricingPriceBig}>£75</td>
                  <td className={zohoStyles.pricingPriceBig}>£150</td>
                  <td className={zohoStyles.pricingPriceBig}>£500</td>
                </tr>
                <tr>
                  <td>Transactions / Month</td>
                  <td>Up to 50</td>
                  <td>Up to 100</td>
                  <td>Up to 500</td>
                  <td>Up to 1,000</td>
                  <td>Up to 10,000</td>
                </tr>
                <tr>
                  <td>Consulting Included</td>
                  <td><span className={zohoStyles.missing}>✕</span></td>
                  <td><span className={zohoStyles.missing}>✕</span></td>
                  <td><span className={zohoStyles.missing}>✕</span></td>
                  <td><IconCheck /> Basic</td>
                  <td><IconCheck /> Full</td>
                </tr>
                <tr>
                  <td>Support Channels</td>
                  <td>Email</td>
                  <td>Email</td>
                  <td>Email + Chat</td>
                  <td>Email + Chat + Voice</td>
                  <td>Email + Chat + Voice</td>
                </tr>
                <tr>
                  <td>Support for Accountant Queries</td>
                  <td><span className={zohoStyles.missing}>✕</span></td>
                  <td><span className={zohoStyles.missing}>✕</span></td>
                  <td><IconCheck /> On Request</td>
                  <td><IconCheck /> On Request</td>
                  <td><IconCheck /> On Request</td>
                </tr>
                <tr>
                  <td>Dedicated Point of Contact</td>
                  <td><span className={zohoStyles.missing}>✕</span></td>
                  <td><span className={zohoStyles.missing}>✕</span></td>
                  <td><span className={zohoStyles.missing}>✕</span></td>
                  <td><IconCheck /></td>
                  <td><IconCheck /></td>
                </tr>
                <tr>
                  <td>Implementation &amp; Migration Support</td>
                  <td><IconCheck /> On Request</td>
                  <td><IconCheck /> On Request</td>
                  <td><IconCheck /> On Request</td>
                  <td><IconCheck /> On Request</td>
                  <td><IconCheck /> On Request</td>
                </tr>
                <tr>
                  <td>Trial Period</td>
                  <td>14 Days Free</td>
                  <td>14 Days Free</td>
                  <td>14 Days Free</td>
                  <td>30 Days Free</td>
                  <td>30 Days Free</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Rev>

      {/* ─── 6. PORTFOLIO / CASE STUDIES (Real Data) ─── */}
      <Rev className={zohoStyles.portfolioSection}>
        <div className="container">
          <div className={zohoStyles.sectionHeader}>
            <h2 style={{ color: '#fff' }}>Featured Implementations</h2>
            <p style={{ color: '#94a3b8' }}>Real-world examples of our complex Enterprise Architecture work.</p>
          </div>
          
          <div className={zohoStyles.bentoGrid}>
            <div className={`${zohoStyles.bentoItem} ${zohoStyles.bentoLarge}`}>
              <div className={zohoStyles.bentoImage} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1974&auto=format&fit=crop)' }} />
              <div className={zohoStyles.bentoContent}>
                <div className={zohoStyles.bentoCategory}>CRM, Projects &amp; Books</div>
                <h3>Compliance Company</h3>
                <p>Implemented Zoho CRM, Zoho Projects, and Zoho Books for two organizations; customized workflows and automated integrations, and supported day-to-day bookkeeping transactions including invoicing and expense management.</p>
                <p style={{ marginTop: '1rem', fontStyle: 'italic', color: '#7dd3fc !important' }}>3 Resources; 1 Onshore Agile Project Manager, 3 Offshore bookkeeping expertise.</p>
              </div>
            </div>

            <div className={`${zohoStyles.bentoItem} ${zohoStyles.bentoTall}`}>
              <div className={zohoStyles.bentoImage} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop)' }} />
              <div className={zohoStyles.bentoContent}>
                <div className={zohoStyles.bentoCategory}>BPO / Operations</div>
                <h3>SAP BTP / Tech Provider</h3>
                <p>Handled bookkeeping operations for both Indian and Dubai entities, managing day-to-day financial transactions including accounts payable/receivable, expense tracking, bank reconciliations, and journal entries in compliance with regional accounting standards.</p>
                <p style={{ marginTop: '1rem', fontStyle: 'italic', color: '#7dd3fc !important' }}>4 Resources: Time &amp; Material Engagement Offshore.</p>
              </div>
            </div>

            <div className={`${zohoStyles.bentoItem}`}>
              <div className={zohoStyles.bentoImage} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1586528116311-ad8ed7c80a30?q=80&w=2070&auto=format&fit=crop)' }} />
              <div className={zohoStyles.bentoContent}>
                <div className={zohoStyles.bentoCategory}>Migration to Zoho</div>
                <h3>App Developers</h3>
                <p>Migrated from Xero to Zoho Books, ensuring complete transfer of financial data. Supported daily operations, consulting, and post-migration stabilization.</p>
                <p style={{ marginTop: '1rem', fontStyle: 'italic', color: '#7dd3fc !important' }}>2 Onshore Experts, 2 Offshore Resources.</p>
              </div>
            </div>
            
            <div className={`${zohoStyles.bentoItem}`}>
              <div className={zohoStyles.bentoImage} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop)' }} />
              <div className={zohoStyles.bentoContent}>
                <div className={zohoStyles.bentoCategory}>Books Implementation</div>
                <h3>SAP Consulting Firm</h3>
                <p>Implemented Zoho Books for an IT Service company in India and Dubai region. Supported daily operations and resolved post-migration accounting challenges.</p>
                <p style={{ marginTop: '1rem', fontStyle: 'italic', color: '#7dd3fc !important' }}>3 Offshore resources on fixed hours.</p>
              </div>
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
