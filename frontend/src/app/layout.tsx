import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";

export const metadata: Metadata = {
  title: {
    default: "Lednexora — Lead The Technology of Tomorrow",
    template: "%s | Lednexora",
  },
  description:
    "Enterprise SAP consulting, Zoho integration, and strategic technology advisory. Serving businesses across the UK, USA, India, and UAE.",
  keywords: [
    "SAP consulting",
    "Zoho services",
    "enterprise technology",
    "digital transformation",
    "Lednexora",
    "IT consulting UK",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Lednexora",
    title: "Lednexora — Lead The Technology of Tomorrow",
    description:
      "Enterprise SAP consulting, Zoho integration, and strategic technology advisory.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
