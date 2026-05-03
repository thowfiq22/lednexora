"use client";
import Link from "next/link";
import Image from "next/image";
import s from "@/styles/home.module.css";
import { IconBolt, IconGlobe, IconDiamond, IconChart, IconCheck, IconArrowRight, IconShield, IconUsers, IconCog, IconBank, IconFactory, IconCart, IconRefresh, IconTrending, IconCloud, IconMail, IconMapPin, IconAward, IconWhatsApp } from "@/components/Icons";
import { useReveal } from "@/lib/useReveal";

function Rev({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, visible } = useReveal();
  return <section ref={ref} className={`${s.reveal} ${visible ? s.revealVisible : ""} ${className}`}>{children}</section>;
}

export default function Home() {
  return (
    <>
      {/* ─── 1. HERO ─── */}
      <section className={s.hero}>
        {/* Animated orbs + network dots (right side visual energy) */}
        <div className={s.heroGlow}>
          <div className={`${s.heroOrb} ${s.heroOrb1}`} />
          <div className={`${s.heroOrb} ${s.heroOrb2}`} />
          <div className={`${s.heroOrb} ${s.heroOrb3}`} />
          <div className={`${s.heroDot} ${s.heroDot1}`} />
          <div className={`${s.heroDot} ${s.heroDot2}`} />
          <div className={`${s.heroDot} ${s.heroDot3}`} />
          <div className={`${s.heroDot} ${s.heroDot4}`} />
          <div className={`${s.heroDot} ${s.heroDot5}`} />
        </div>
        <div className={`container ${s.heroInner}`}>
          <span className={s.heroBadge}>SAP Consulting &amp; Zoho Services</span>
          <h1 className={s.heroTitle}>Strategic Technology Consulting for Enterprise Growth</h1>
          <p className={s.heroSubtitle}>We help businesses unlock their potential with SAP solutions, Zoho integration, and expert advisory — delivering measurable outcomes across the UK, USA, India, and UAE.</p>
          <div className={s.heroActions}>
            <Link href="/contact-consultation" className={s.btnWhite}>Get Consultation <IconArrowRight /></Link>
            <Link href="/sap-capabilities" className={s.btnOutlineWhite}>Explore SAP Services</Link>
          </div>
          <div className={s.heroProof}>
            <div className={s.heroProofItem}><span className={s.heroProofLabel}>20+ Years SAP Experience</span><span className={s.heroProofSub}>Deep domain expertise</span></div>
            <div className={s.heroProofItem}><span className={s.heroProofLabel}>Global Delivery Presence</span><span className={s.heroProofSub}>UK, USA, India &amp; UAE</span></div>
            <div className={s.heroProofItem}><span className={s.heroProofLabel}>Certified SAP Professionals</span><span className={s.heroProofSub}>Qualified consulting team</span></div>
          </div>
        </div>
        <div className={s.heroFade} />
      </section>

      {/* ─── 2. TRUST STRIP ─── */}
      <div className={s.trustStrip}>
        <div className="container">
          <p className={s.trustLabel}>Trusted by organisations across industries</p>
          <div className={s.trustLogos}>
            {["Client Logo","Partner Proof","Certification","Client Logo","Partner Badge"].map((t,i) => (
              <div key={i} className={s.trustPlaceholder}>{t}</div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── 3. SERVICE PATHWAYS — Rimini Interactive Style ─── */}
      <Rev className={s.section}>
        <div className="container">
          <div className={s.sectionHeader}>
            <h2>Software we support &amp; services we provide</h2>
            <p className={s.sectionSubtitle}>Strategic consulting and implementation across SAP, Zoho, and business transformation.</p>
          </div>
          <div className={s.riminiServiceGrid}>
            <div className={s.riminiServiceBg}>
              <div className={s.imageWireframeBg}>
                <span>[ Background Image : Team Collaborating / Office ]</span>
              </div>
            </div>
            <div className={s.riminiServiceCards}>
              {[
                { title: "SAP Services", text: "End-to-end SAP consulting from strategy through implementation and optimisation.", href: "/sap-capabilities" },
                { title: "Zoho Services", text: "Zoho implementation, bookkeeping support, and business process automation.", href: "/zoho-services-overview" },
                { title: "Strategic Consulting", text: "Business transformation advisory, technology roadmaps, and project delivery.", href: "/about-lednexora" },
                { title: "Insights", text: "Articles, media updates, and SAP/Zoho knowledge resources.", href: "/insights-media-updates" },
              ].map((c) => (
                <Link key={c.title} href={c.href} className={s.riminiCard}>
                  <h3 className={s.riminiCardTitle}>{c.title}</h3>
                  <p className={s.riminiCardText}>{c.text}</p>
                  <div className={s.riminiCardIcon}><IconArrowRight /></div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Rev>

      {/* ─── 4. WHY LEDNEXORA — dark proof band ─── */}
      <Rev className={s.whyBand}>
        <div className="container">
          <div className={s.whyTop}>
            <span className={s.labelText}>Why Lednexora</span>
            <h2>A Trusted Enterprise Technology Partner</h2>
            <p className={s.whySubtitle}>With decades of combined experience, we deliver SAP and Zoho solutions that drive real business outcomes for organisations worldwide.</p>
          </div>
          <div className={s.whyStats}>
            {[
              { value: "20+", label: "Years SAP Experience" },
              { value: "4", label: "Global Offices" },
              { value: "50+", label: "Certified Professionals" },
              { value: "100%", label: "Client Focus" },
            ].map((st) => (
              <div key={st.label} className={s.whyStat}>
                <div className={s.whyStatValue}>{st.value}</div>
                <div className={s.whyStatLabel}>{st.label}</div>
              </div>
            ))}
          </div>
          <div className={s.whyValues}>
            {[
              { icon: <IconAward />, title: "Deep SAP Expertise", text: "Domain knowledge across SAP modules and versions." },
              { icon: <IconGlobe />, title: "Global Delivery", text: "UK, USA, India, and UAE serving clients internationally." },
              { icon: <IconCog />, title: "End-to-End Model", text: "Strategy through implementation, support, and optimisation." },
              { icon: <IconShield />, title: "Certified Team", text: "Qualified consultants ensuring quality and compliance." },
            ].map((v) => (
              <div key={v.title} className={s.whyValue}>
                <div className={s.whyValueIcon}>{v.icon}</div>
                <div className={s.whyValueTitle}>{v.title}</div>
                <p className={s.whyValueText}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Rev>

      {/* ─── 4B. METHODOLOGY CHEVRON ─── */}
      <Rev className={s.chevronSection}>
        <div className="container">
          <div className={s.sectionHeader}>
            <h2>The Lednexora Pathway to Transformation</h2>
            <p className={s.sectionSubtitle}>A proven methodology to accelerate time-to-value and ensure sustainable enterprise growth.</p>
          </div>
          <div className={s.chevronContainer}>
            <div className={s.chevronStep}>
              <div className={s.chevronArrow}>1</div>
              <h3 className={s.chevronTitle}>Assess & Align</h3>
              <p className={s.chevronText}>We evaluate your current enterprise landscape, identify capability gaps, and align technology solutions with your core business objectives.</p>
            </div>
            <div className={s.chevronStep}>
              <div className={s.chevronArrow}>2</div>
              <h3 className={s.chevronTitle}>Implement & Migrate</h3>
              <p className={s.chevronText}>Seamless execution using agile frameworks to ensure smooth platform transitions, whether migrating to S/4HANA or integrating Zoho.</p>
            </div>
            <div className={s.chevronStep}>
              <div className={s.chevronArrow}>3</div>
              <h3 className={s.chevronTitle}>Optimise & Support</h3>
              <p className={s.chevronText}>Continuous enhancement and reliable AMS to extract maximum ROI from your existing and newly deployed software investments.</p>
            </div>
          </div>
        </div>
      </Rev>

      {/* ─── 5. SAP PREVIEW ─── */}
      <Rev className={s.section}>
        <div className="container">
          <div className={s.previewGrid}>
            <div className={s.previewContent}>
              <span className={s.labelText}>SAP Services</span>
              <h2>Comprehensive SAP Consulting &amp; Support</h2>
              <p>We specialise in implementing, optimising, and supporting SAP S/4HANA and ECC solutions — helping enterprises modernise their business processes and drive digital transformation.</p>
              <div className={s.previewFeatures}>
                {["Strategy & Advisory","Implementation & Migration","Optimisation & Support","S/4HANA Transformation","Project Delivery"].map((f) => (
                  <div key={f} className={s.previewFeature}><IconCheck />{f}</div>
                ))}
              </div>
              <Link href="/sap-capabilities" className={s.btnAccent}>Explore SAP Capabilities <IconArrowRight /></Link>
            </div>
            <div className={s.previewVisual}>
              <div className={s.imageWireframeBg} style={{height: '450px'}}>
                <span>[ Image: Corporate Office / Analytics Dashboard ]</span>
              </div>
            </div>
          </div>
        </div>
      </Rev>

      {/* ─── 6. ZOHO PREVIEW ─── */}
      <Rev className={`${s.section} ${s.sectionAlt}`}>
        <div className="container">
          <div className={`${s.previewGrid} ${s.previewGridReverse}`}>
            <div className={s.previewContent}>
              <span className={s.labelText}>Zoho Services</span>
              <h2>Zoho Integration &amp; Business Support</h2>
              <p>From Zoho CRM implementation to outsourced bookkeeping and BPO support, we help UK and international businesses streamline operations with Zoho&apos;s powerful suite of tools.</p>
              <div className={s.previewFeatures}>
                {["Zoho CRM & Apps Setup","Bookkeeping & BPO","Workflow Automation","Ongoing Support"].map((f) => (
                  <div key={f} className={s.previewFeature}><IconCheck />{f}</div>
                ))}
              </div>
              <Link href="/zoho-services-overview" className={s.btnAccent}>Explore Zoho Services <IconArrowRight /></Link>
            </div>
            <div className={s.previewVisual}>
               <div className={s.imageWireframeBg} style={{height: '450px'}}>
                <span>[ Image: Business Team using Zoho CRM ]</span>
              </div>
            </div>
          </div>
        </div>
      </Rev>

      {/* ─── 6B. TESTIMONIAL EDITORIAL BLOCK ─── */}
      <Rev className={s.testimonialSection}>
        <div className="container">
          <div className={s.sectionHeader}>
            <h2>See why global enterprises trust Lednexora</h2>
          </div>
          <div className={s.testimonialGrid}>
            <div className={s.testimonialContent}>
              <div className={s.quoteIcon}>&ldquo;</div>
              <p className={s.testimonialText}>
                Lednexora acts as a true extension of our IT operations. Their deep SAP expertise and rapid response times mean our critical systems are always optimized, allowing us to focus on innovation rather than maintenance.
              </p>
              <div className={s.testimonialAuthor}>
                <span className={s.authorName}>Enterprise CIO</span>
                <span className={s.authorRole}>Global Manufacturing Client</span>
              </div>
            </div>
            <div className={s.testimonialImage}>
              <div className={s.imageWireframeBg}>
                <span>[ Image: Executive in Modern Tech Facility ]</span>
              </div>
            </div>
          </div>
        </div>
      </Rev>

      {/* ─── 7. INDUSTRY — enterprise solutions matrix ─── */}
      <Rev className={s.industryBand}>
        <div className="container">
          <div className={s.industryTop}>
            <span className={s.labelText}>Industries & Initiatives</span>
            <h2>Solutions Across Industries &amp; Initiatives</h2>
            <p className={s.industryTopSub}>We deliver SAP and consulting solutions tailored to your industry challenges and business transformation goals.</p>
          </div>
          <div className={s.industryGrid}>
            {[
              { icon: <IconBank />, title: "Banking & Financial Services", text: "SAP solutions for compliance, reporting, and financial operations." },
              { icon: <IconFactory />, title: "Manufacturing", text: "Streamline production, supply chain, and quality management." },
              { icon: <IconCart />, title: "Retail & Consumer Goods", text: "End-to-end solutions for retail operations and customer engagement." },
              { icon: <IconRefresh />, title: "Digital Transformation", text: "Modernise legacy systems and accelerate business innovation." },
              { icon: <IconTrending />, title: "Business Optimisation", text: "Improve efficiency, reduce costs, and drive measurable outcomes." },
              { icon: <IconCloud />, title: "Cloud & Infrastructure", text: "Migrate and manage SAP workloads in the cloud." },
            ].map((c) => (
              <div key={c.title} className={s.industryCell}>
                <div className={s.industryCellIcon}>{c.icon}</div>
                <h3 className={s.industryCellTitle}>{c.title}</h3>
                <p className={s.industryCellText}>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Rev>

      {/* ─── 8. PROOF BLOCK — premium credential grid ─── */}
      <Rev className={`${s.section} ${s.sectionAlt}`}>
        <div className="container">
          <div className={s.sectionHeader}>
            <span className={s.labelText}>Why Trust Us</span>
            <h2>Proven Enterprise Expertise</h2>
          </div>
          <div className={s.proofGrid}>
            <div className={s.proofHighlight}>
              <span className={s.proofHighlightLabel}>Our Commitment</span>
              <div className={s.proofHighlightTitle}>Enterprise-grade consulting you can rely on</div>
              <p className={s.proofHighlightDesc}>Every engagement is backed by certified professionals, proven methodologies, and a commitment to measurable outcomes.</p>
            </div>
            <div className={s.proofStats}>
              {[
                { icon: <IconAward />, label: "20+ Years SAP Experience", desc: "Deep domain expertise across modules and versions" },
                { icon: <IconGlobe />, label: "Global Delivery Presence", desc: "Teams in the UK, USA, India & UAE" },
                { icon: <IconShield />, label: "Certified SAP Professionals", desc: "Qualified consulting team ensuring compliance" },
                { icon: <IconDiamond />, label: "SAP & Zoho Service Expertise", desc: "Dual-platform capability and integration" },
              ].map((st) => (
                <div key={st.label} className={s.proofStat}>
                  <div className={s.proofStatIcon}>{st.icon}</div>
                  <div className={s.proofStatLabel}>{st.label}</div>
                  <p className={s.proofStatDesc}>{st.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={s.proofCerts}>
            <p className={s.proofCertsLabel}>Certifications &amp; partnerships — awaiting final assets</p>
            <div className={s.trustLogos}>
              {["SAP Certified","Partner Badge","ISO Compliance","Industry Award"].map((t,i) => (
                <div key={i} className={s.trustPlaceholder}>{t}</div>
              ))}
            </div>
          </div>
        </div>
      </Rev>

      {/* ─── 9. INSIGHTS PREVIEW ─── */}
      <Rev className={s.section}>
        <div className="container">
          <div className={s.sectionHeader}>
            <span className={s.labelText}>Knowledge</span>
            <h2>Latest Insights &amp; Resources</h2>
            <p className={s.sectionSubtitle}>Stay informed with articles, guides, and media updates from our enterprise consulting team.</p>
          </div>
          <div className={s.insightsGrid}>
            {[
              { img: "/images/insight-1.png", badge: "Article", title: "The Future of SAP S/4HANA Migration", excerpt: "Key considerations for enterprises planning their migration to S/4HANA in 2026 and beyond." },
              { img: "/images/insight-2.png", badge: "Insight", title: "Why Cloud-First ERP Matters for Modern Enterprises", excerpt: "How cloud-native ERP strategies are reshaping operational efficiency and agility." },
              { img: "/images/insight-3.png", badge: "Guide", title: "Building a Strategic IT Roadmap for 2026", excerpt: "A practical framework for aligning technology investments with business goals." },
            ].map((a) => (
              <Link key={a.title} href="/insights-media-updates" className={s.insightCard}>
                <div className={s.insightImage}>
                  <Image src={a.img} alt={a.title} width={400} height={200} />
                  <span className={s.insightBadge}>{a.badge}</span>
                </div>
                <div className={s.insightBody}>
                  <h3 className={s.insightTitle}>{a.title}</h3>
                  <p className={s.insightExcerpt}>{a.excerpt}</p>
                  <span className={s.insightLink}>Read more <IconArrowRight /></span>
                </div>
              </Link>
            ))}
          </div>
          <div className={s.insightsViewAll}>
            <Link href="/insights-media-updates" className={s.btnAccent}>View All Insights <IconArrowRight /></Link>
          </div>
        </div>
      </Rev>

      {/* ─── 10. CONTACT CTA BAND ─── */}
      <section className={s.ctaBand}>
        <div className="container">
          <div className={s.ctaBandGrid}>
            <div className={s.ctaBandContent}>
              <h2>Let&apos;s Build Your Technology Future</h2>
              <p>Whether you need SAP consulting, Zoho support, or strategic advisory — our team is ready to help.</p>
              <div className={s.ctaBandActions}>
                <Link href="/contact-consultation" className={s.btnWhite}>Schedule Consultation <IconArrowRight /></Link>
                <a href="https://wa.me/message/LEDNEXORA" target="_blank" rel="noopener noreferrer" className={s.btnWhatsApp}><IconWhatsApp /> WhatsApp Us</a>
              </div>
            </div>
            <div className={s.ctaInfoCards}>
              <div className={s.ctaInfoCard}>
                <div className={s.ctaInfoIcon}><IconMail /></div>
                <div className={s.ctaInfoText}><strong>Email Us</strong><a href="mailto:sales.accounts@lednexora.com">sales.accounts@lednexora.com</a></div>
              </div>
              <div className={s.ctaInfoCard}>
                <div className={s.ctaInfoIcon}><IconMapPin /></div>
                <div className={s.ctaInfoText}><strong>Our Locations</strong>London, UK &bull; Tamil Nadu, India</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
