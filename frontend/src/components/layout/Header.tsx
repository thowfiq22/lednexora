"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import s from "./Header.module.css";
import { IconBolt, IconDiamond, IconChart, IconGlobe, IconShield, IconUsers, IconArrowRight } from "@/components/Icons";

/* ── SVG helpers ──────────────────────────────────────────── */
function ChevronDown() {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>;
}
function ArrowRight16() {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width={14} height={14}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>;
}
function IconTarget() {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>;
}
function IconFactory() {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"/></svg>;
}
function IconChat() {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"/></svg>;
}
function IconPackage() {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"/></svg>;
}

/* ── Social data ──────────────────────────────────────────── */
const socials = [
  { label: "Facebook",  href: "#", path: "M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" },
  { label: "X",         href: "#", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
  { label: "YouTube",   href: "#", path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
  { label: "LinkedIn",  href: "#", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
];

/* ── Component ────────────────────────────────────────────── */
export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); setOpenDropdown(null); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const toggle = (name: string) => setOpenDropdown((p) => (p === name ? null : name));
  const isActive = (href: string) => pathname === href || pathname === href + "/";
  const isSapActive = pathname.startsWith("/sap") || pathname.startsWith("/lednexora-sap");
  const isZohoActive = pathname.startsWith("/zoho");

  return (
    <>
      {/* ─── Top Bar ─── */}
      <div className={s.topBar}>
        <div className={`container ${s.topBarInner}`}>
          <div className={s.topBarLeft}>
            <span className={s.topBarItem}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>
              UK, USA, India &amp; UAE
            </span>
            <a href="mailto:sales.accounts@lednexora.com" className={s.topBarItem}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
              sales.accounts@lednexora.com
            </a>
          </div>
          <div className={s.topBarSocial}>
            {socials.map((sc) => (
              <a key={sc.label} href={sc.href} aria-label={sc.label} target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d={sc.path} /></svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Main Header ─── */}
      <header className={`${s.siteHeader} ${scrolled ? s.scrolled : ""}`} id="site-header">
        <div className={`container ${s.headerInner}`}>
          <Link href="/" className={s.siteLogo} aria-label="Lednexora Home">
            <Image src="/images/logo.png" alt="Lednexora — Lead The Technology of Tomorrow" width={200} height={52} priority />
          </Link>

          <nav className={`${s.mainNav} ${menuOpen ? s.open : ""}`} aria-label="Main navigation">
            <ul className={s.navList}>
              <li className={s.navItem}>
                <Link href="/" className={`${s.navLink} ${isActive("/") ? s.active : ""}`}>Home</Link>
              </li>
              <li className={s.navItem}>
                <Link href="/about-lednexora" className={`${s.navLink} ${isActive("/about-lednexora") ? s.active : ""}`}>About</Link>
              </li>

              {/* ── SAP MEGA MENU ── */}
              <li className={`${s.navItem} ${openDropdown === "sap" ? s.open : ""}`}>
                <button className={`${s.navLink} ${isSapActive ? s.active : ""}`} onClick={() => toggle("sap")} aria-expanded={openDropdown === "sap"} type="button">
                  SAP Services <ChevronDown />
                </button>
                <div className={`${s.mega} ${s.megaSap}`}>
                  <div className={s.megaInner}>
                    {/* Left intro */}
                    <div className={s.megaIntro}>
                      <div>
                        <div className={s.megaIntroTitle}>SAP Services</div>
                        <div className={s.megaIntroDesc}>End-to-end SAP consulting, implementation, and support for enterprise transformation.</div>
                      </div>
                      <Link href="/sap-consultation" className={s.megaIntroCta}>SAP Consultation <ArrowRight16 /></Link>
                    </div>
                    {/* Center links */}
                    <div className={s.megaLinks}>
                      {[
                        { href: "/sap-capabilities",           icon: <IconBolt />,    title: "SAP Capabilities",       desc: "Comprehensive SAP service overview" },
                        { href: "/sap-by-initiative-solutions", icon: <IconTarget />,  title: "By Initiative Solutions", desc: "Solutions by business initiative" },
                        { href: "/sap-by-industry-solutions",   icon: <IconFactory />, title: "By Industry Solutions",  desc: "Industry-specific SAP consulting" },
                        { href: "/lednexora-sap-solutions",     icon: <IconDiamond />, title: "Lednexora SAP Solutions", desc: "Our focused SAP service offerings" },
                        { href: "/sap-success-resources",       icon: <IconChart />,   title: "SAP Success Resources",  desc: "Proof, resources & credibility" },
                        { href: "/sap-consultation",           icon: <IconChat />,    title: "SAP Consultation",       desc: "Request a SAP consultation" },
                      ].map((l) => (
                        <Link key={l.href} href={l.href} className={s.megaLink}>
                          <span className={s.megaLinkIcon}>{l.icon}</span>
                          <span className={s.megaLinkText}>
                            <span className={s.megaLinkTitle}>{l.title}</span>
                            <span className={s.megaLinkDesc}>{l.desc}</span>
                          </span>
                        </Link>
                      ))}
                    </div>
                    {/* Right highlight */}
                    <div className={s.megaHighlight}>
                      <span className={s.megaHighlightLabel}>Featured</span>
                      <div className={s.megaHighlightTitle}>Strategic SAP Advisory</div>
                      <div className={s.megaHighlightDesc}>Expert-led SAP strategy, roadmap planning, and transformation guidance for enterprise organisations.</div>
                      <Link href="/sap-consultation" className={s.megaHighlightCta}>Get Started <ArrowRight16 /></Link>
                    </div>
                  </div>
                </div>
              </li>

              {/* ── ZOHO MEGA MENU ── */}
              <li className={`${s.navItem} ${openDropdown === "zoho" ? s.open : ""}`}>
                <button className={`${s.navLink} ${isZohoActive ? s.active : ""}`} onClick={() => toggle("zoho")} aria-expanded={openDropdown === "zoho"} type="button">
                  Zoho Services <ChevronDown />
                </button>
                <div className={`${s.mega} ${s.megaZoho}`}>
                  <div className={s.megaInner}>
                    {/* Left intro */}
                    <div className={s.megaIntro}>
                      <div>
                        <div className={s.megaIntroTitle}>Zoho Services</div>
                        <div className={s.megaIntroDesc}>Zoho consulting, bookkeeping, BPO support, and business automation for UK and international businesses.</div>
                      </div>
                      <Link href="/zoho-consultation" className={s.megaIntroCta}>Zoho Consultation <ArrowRight16 /></Link>
                    </div>
                    {/* Right links */}
                    <div className={s.megaLinks}>
                      {[
                        { href: "/zoho-services-overview",           icon: <IconGlobe />,   title: "Zoho Services Overview",       desc: "Zoho consulting & support services" },
                        { href: "/zoho-business-solutions-packages", icon: <IconPackage />,  title: "Business Solutions & Packages", desc: "Zoho packages & service models" },
                        { href: "/zoho-consultation",                icon: <IconChat />,     title: "Zoho Consultation",             desc: "Request a Zoho consultation" },
                      ].map((l) => (
                        <Link key={l.href} href={l.href} className={s.megaLink}>
                          <span className={s.megaLinkIcon}>{l.icon}</span>
                          <span className={s.megaLinkText}>
                            <span className={s.megaLinkTitle}>{l.title}</span>
                            <span className={s.megaLinkDesc}>{l.desc}</span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </li>

              <li className={s.navItem}>
                <Link href="/insights-media-updates" className={`${s.navLink} ${isActive("/insights-media-updates") ? s.active : ""}`}>Insights</Link>
              </li>
              <li className={s.navItem}>
                <Link href="/contact-consultation" className={`${s.navLink} ${isActive("/contact-consultation") ? s.active : ""}`}>Contact</Link>
              </li>
            </ul>

            <div className={s.headerCta}>
              <Link href="/contact-consultation" className={s.ctaBtn}>
                Get Consultation <IconArrowRight />
              </Link>
            </div>
          </nav>

          <button className={`${s.mobileToggle} ${menuOpen ? s.active : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen} type="button">
            <span /><span /><span />
          </button>
        </div>
      </header>

      <div className={`${s.navOverlay} ${menuOpen ? s.active : ""}`} onClick={() => setMenuOpen(false)} aria-hidden="true" />
    </>
  );
}
