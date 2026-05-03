import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Lednexora — Request a Consultation",
  description:
    "Get in touch with Lednexora's enterprise technology experts. Schedule a consultation for SAP implementation, Zoho integration, or strategic advisory.",
  openGraph: {
    title: "Contact Lednexora — Request a Consultation",
    description:
      "Get in touch with Lednexora's enterprise technology experts. Schedule a consultation for SAP implementation, Zoho integration, or strategic advisory.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
