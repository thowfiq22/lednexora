"use client";
import Link from "next/link";
import s from "@/styles/about.module.css";
import h from "@/styles/home.module.css";
import { useReveal } from "@/lib/useReveal";
import {
  IconArrowRight, IconCheck,
  IconMail, IconMapPin, IconWhatsApp, IconGlobe, IconShield, IconBank
} from "@/components/Icons";

function Rev({ children, className = "", id = "" }: { children: React.ReactNode; className?: string; id?: string }) {
  const { ref, visible } = useReveal();
  return <section id={id} ref={ref} className={`${s.reveal || ""} ${visible ? s.revealVisible || "" : ""} ${className}`}>{children}</section>;
}

export default function AboutPage() {
  return (
    <>
      {/* ─── 1. HERO — Rimini Full-bleed with Overlap ─── */}
      <section className={s.riminiHero}>
        <div className={s.riminiHeroBg}>
           <div className={s.imageWireframeBg}>
              <span>[ Hero Background Image : Modern Global Office Skyline ]</span>
           </div>
        </div>
        <div className="container">
          <div className={s.riminiHeroCard}>
            <h1 className={s.riminiHeroTitle}>About Lednexora</h1>
            <p className={s.riminiHeroDesc}>
              Meet Lednexora — a global provider of enterprise SAP consulting, Zoho integration services, and strategic technology advisory, dedicated to helping organisations achieve measurable business outcomes.
            </p>
            <Link href="/contact-consultation" className={s.btnPrimary}>Contact us today</Link>
          </div>
        </div>
      </section>

      {/* ─── 2. SECONDARY NAV ─── */}
      <div className={s.subNav}>
         <div className="container">
           <ul className={s.navList}>
             <li><a href="#company" className={s.active}>Company</a></li>
             <li><a href="#leadership">Leadership &amp; Team</a></li>
             <li><a href="#principles">Our Principles</a></li>
           </ul>
         </div>
      </div>

      {/* ─── 3. LONG-FORM NARRATIVE & VIDEO PLACEHOLDER ─── */}
      <Rev className={s.visionSection} id="company">
        <div className="container">
          <div className={s.visionGrid}>
            <div className={s.visionContent}>
              <h2 className={s.visionHeading}>
                20 years of delivering extraordinary enterprise technology excellence
              </h2>
              <p>
                Lednexora was founded with a clear mission: to help enterprises take back control of their technology roadmap. With deep expertise in SAP consulting and Zoho business services, we deliver high-value solutions that drive standardisation, optimisation, and automation across complex organisations.
              </p>
              <p>
                Our approach is simple: understand the business first, then apply the right technology. We don&apos;t sell generic solutions. Every engagement is scoped to the client&apos;s specific industry context, operational challenges, and growth objectives.
              </p>
            </div>
            <div className={s.visionVisual}>
              <div className={s.imageWireframeBg}>
                <span>[ Video/Image : CEO Message or Corporate Culture ]</span>
              </div>
            </div>
          </div>
        </div>
      </Rev>

      {/* ─── 4. STATS ICON STRIP (Rimini style) ─── */}
      <Rev className={s.statsStrip}>
         <div className="container">
           <div className={s.statsFlex}>
             <div className={s.statItem}>
               <div className={s.statIcon}><IconShield /></div>
               <span className={s.statValue}>20+</span>
               <span className={s.statLabel}>Years SAP Experience</span>
             </div>
             <div className={s.statItem}>
               <div className={s.statIcon}><IconGlobe /></div>
               <span className={s.statValue}>4</span>
               <span className={s.statLabel}>Global Locations</span>
             </div>
             <div className={s.statItem}>
               <div className={s.statIcon}><IconBank /></div>
               <span className={s.statValue}>6+</span>
               <span className={s.statLabel}>Industries Served</span>
             </div>
             <div className={s.statItem}>
               <div className={s.statIcon}><IconCheck /></div>
               <span className={s.statValue}>Dual</span>
               <span className={s.statLabel}>SAP &amp; Zoho Platform</span>
             </div>
           </div>
         </div>
      </Rev>

      {/* ─── 5. TEAM HIGHLIGHT ─── */}
      <Rev className={s.teamSection} id="leadership">
         <div className="container">
           <div className={s.teamGrid}>
             <div className={s.teamContent}>
               <h2 className={s.teamHeading}>Home to visionaries and change makers</h2>
               <p className={s.teamDesc}>
                 Today, with a global delivery presence spanning the UK, USA, India, and UAE, our consulting teams serve organisations across banking, retail, manufacturing, CPG, automotive, and service industries. We bring together certified SAP professionals and experienced Zoho specialists.
               </p>
               <Link href="/contact-consultation" className={s.btnPrimary}>Join our team</Link>
             </div>
             <div className={s.teamVisual}>
               <div className={s.imageWireframeBg}>
                  <span>[ Image : Large Corporate Team Photo ]</span>
               </div>
             </div>
           </div>
         </div>
      </Rev>

      {/* ─── 6. CORE VALUES — Clean 4Cs style grid ─── */}
      <Rev className={s.valuesSection} id="principles">
        <div className="container">
          <h2 className={s.valuesHeading}>The Principles of Lednexora</h2>
          <p className={s.valuesIntro}>
            Lednexora&apos;s consulting practice is built on four principles that guide every engagement we take on. These aren&apos;t abstract values — they shape how we scope projects, build teams, and measure success.
          </p>
          <div className={s.riminiValuesGrid}>
            {[
              {
                title: "Precision",
                desc: "Every SAP implementation, every Zoho configuration, every advisory recommendation is scoped with precision. We don't apply generic frameworks — we analyse your specific business context, industry requirements, and operational pain points before recommending a path forward.",
                link: { text: "View our SAP capabilities", href: "/sap-capabilities" },
              },
              {
                title: "Integrity",
                desc: "We recommend what your business needs, not what generates the largest engagement. Our consulting teams are trained to be honest about scope, realistic about timelines, and transparent about costs. When a simpler solution will deliver better outcomes, we say so.",
                link: { text: "Start a consultation", href: "/contact-consultation" },
              },
              {
                title: "Expertise",
                desc: "Our SAP consultants carry deep domain expertise across modules including S/4HANA, ECC, BW, FICO, MM, SD, and PP. Our Zoho specialists cover CRM, Books, Projects, and custom workflow automation. This isn't outsourced generalist support — it's specialised consulting.",
                link: { text: "Explore industry solutions", href: "/sap-by-industry-solutions" },
              },
              {
                title: "Partnership",
                desc: "We don't disappear after go-live. Lednexora positions itself as a long-term technology partner, not a project-based vendor. Our support, managed services, and advisory offerings are designed for ongoing engagement — helping your organisation evolve.",
                link: { text: "Explore Zoho services", href: "/zoho-services-overview" },
              },
            ].map((v) => (
              <div key={v.title} className={s.riminiValueCard}>
                <h3 className={s.riminiValueTitle}>{v.title}</h3>
                <p className={s.riminiValueDesc}>{v.desc}</p>
                <Link href={v.link.href} className={s.riminiValueLink}>{v.link.text} <IconArrowRight /></Link>
              </div>
            ))}
          </div>
        </div>
      </Rev>

      {/* ─── 7. CTA BAND ─── */}
      <section className={h.ctaBand}>
        <div className="container">
          <div className={h.ctaBandGrid}>
            <div className={h.ctaBandContent}>
              <h2>Get in touch</h2>
              <p>Contact us to discuss your SAP, Zoho, or technology consulting requirements. Our team is ready to understand your challenges and propose a clear path forward.</p>
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
