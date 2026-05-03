import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

/* ── Footer link data ─────────────────────────────────────── */
const companyLinks = [
  { label: "About Lednexora", href: "/about-lednexora" },
  { label: "Insights & Media", href: "/insights-media-updates" },
  { label: "Contact / Consultation", href: "/contact-consultation" },
];

const sapLinks = [
  { label: "SAP Capabilities", href: "/sap-capabilities" },
  { label: "By Initiative Solutions", href: "/sap-by-initiative-solutions" },
  { label: "By Industry Solutions", href: "/sap-by-industry-solutions" },
  { label: "Lednexora SAP Solutions", href: "/lednexora-sap-solutions" },
  { label: "SAP Success Resources", href: "/sap-success-resources" },
  { label: "SAP Consultation", href: "/sap-consultation" },
];

const zohoLinks = [
  { label: "Zoho Services Overview", href: "/zoho-services-overview" },
  { label: "Business Solutions & Packages", href: "/zoho-business-solutions-packages" },
  { label: "Zoho Consultation", href: "/zoho-consultation" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Accessibility Statement", href: "/accessibility-statement" },
];

const socials = [
  { label: "Facebook",  href: "#", path: "M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" },
  { label: "X",         href: "#", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
  { label: "YouTube",   href: "#", path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
  { label: "LinkedIn",  href: "#", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
];

/* ── Component ────────────────────────────────────────────── */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.siteFooter}>
      <div className="container">
        {/* Main grid */}
        <div className={styles.footerMain}>
          {/* Brand column */}
          <div className={styles.footerBrand}>
            <div className={styles.footerLogoWrap}>
              <Image src="/images/logo.png" alt="Lednexora" width={180} height={47} />
            </div>
            <p className={styles.footerBrandText}>
              Leading enterprise technology transformation through SAP consulting, Zoho integration, and strategic advisory services across the UK, USA, India, and UAE.
            </p>
            <div className={styles.footerSocial}>
              {socials.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d={s.path} /></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className={styles.footerColTitle}>Company</h3>
            <ul className={styles.footerList}>
              {companyLinks.map((l) => (
                <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* SAP Services */}
          <div>
            <h3 className={styles.footerColTitle}>SAP Services</h3>
            <ul className={styles.footerList}>
              {sapLinks.map((l) => (
                <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Zoho Services */}
          <div>
            <h3 className={styles.footerColTitle}>Zoho Services</h3>
            <ul className={styles.footerList}>
              {zohoLinks.map((l) => (
                <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className={styles.footerColTitle}>Contact</h3>
            <div className={styles.footerContact}>
              <div className={styles.footerContactItem}>
                <div className={styles.footerContactIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>
                </div>
                <div className={styles.footerContactText}>
                  <strong>London, UK</strong><br />
                  Tamil Nadu, India
                </div>
              </div>
              <div className={styles.footerContactItem}>
                <div className={styles.footerContactIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
                </div>
                <div className={styles.footerContactText}>
                  <a href="mailto:sales.accounts@lednexora.com">sales.accounts@lednexora.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.footerBottom}>
          <span>&copy; {year} LEDNEXORA. All Rights Reserved.</span>
          <div className={styles.footerBottomLinks}>
            {legalLinks.map((l) => (
              <Link key={l.href} href={l.href}>{l.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
