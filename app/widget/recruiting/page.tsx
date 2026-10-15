import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { RecruitingForm } from "@/components/RecruitingForm";
import { WidgetChrome } from "@/components/WidgetChrome";
import company from "@/config/company";
import { galabau } from "@/lib/galabau";

export const metadata: Metadata = {
  title: `Bewerbung | ${company.name}`,
  robots: { index: false }
};

/** Recruiting-Widget: die 60-Sekunden-Bewerbung als embeddable Seite. */
export default function WidgetRecruitingPage() {
  if (!galabau.recruiting.enabled) notFound();
  return (
    <WidgetChrome>
      <RecruitingForm variant="widget" />
    </WidgetChrome>
  );
}
