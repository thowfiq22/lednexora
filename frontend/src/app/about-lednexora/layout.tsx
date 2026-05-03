import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Lednexora — Enterprise Technology Consulting",
  description:
    "Learn about Lednexora — a global provider of SAP consulting, Zoho integration, and strategic technology advisory. 20+ years of expertise across the UK, USA, India, and UAE.",
  openGraph: {
    title: "About Lednexora — Enterprise Technology Consulting",
    description:
      "Global SAP consulting, Zoho integration, and strategic technology advisory. Serving enterprises across banking, retail, manufacturing, and more.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
