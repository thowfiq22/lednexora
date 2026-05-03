import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SAP Capabilities & Consulting Services",
  description:
    "Lednexora provides comprehensive SAP consulting, from S/4HANA implementation and migration to managed services, optimization, and strategic advisory.",
  openGraph: {
    title: "SAP Capabilities & Consulting Services | Lednexora",
    description:
      "Lednexora provides comprehensive SAP consulting, from S/4HANA implementation and migration to managed services, optimization, and strategic advisory.",
  },
};

export default function SapCapabilitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
