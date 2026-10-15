import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RecruitingForm } from "@/components/RecruitingForm";
import company from "@/config/company";
import { galabau } from "@/lib/galabau";

export const metadata: Metadata = {
  title: `Karriere | ${company.name}`,
  description: `Jobs bei ${company.name} in ${company.address.city}: Haustechnik, Gartenbau und Quereinstieg. In 60 Sekunden bewerben, ohne Lebenslauf.`
};

/** Karriere-Seite: Intro, Stellen und Vorteile neben der 60-Sekunden-Bewerbung. */
export default function KarrierePage() {
  if (!galabau.recruiting.enabled) notFound();

  return (
    <main style={{ overflowX: "clip" }} className="bg-bone">
      <Navbar />

      <section className="bg-ink pt-40 pb-16 md:pt-52 md:pb-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-bone/60">
            <span className="inline-block h-[0.4rem] w-[0.4rem] rounded-full bg-stahl-400" />
            <span>Karriere</span>
          </div>
          <h1 className="mt-6 max-w-3xl font-display text-[36px] leading-[1.0] tracking-tight text-bone sm:text-[46px] md:text-[60px]">
            {galabau.recruiting.headline}
          </h1>
          <p className="mt-5 max-w-[54ch] text-[15px] leading-relaxed text-bone/80 md:text-[16px]">
            {galabau.recruiting.intro}
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-x-10 gap-y-10 px-6 md:px-10">
          <div className="col-span-12 lg:col-span-8">
            <RecruitingForm />
          </div>
          <aside className="col-span-12 lg:col-span-4">
            <div className="rounded-4xl border border-ink/10 bg-white p-7">
              <span className="field-label">Wen wir suchen</span>
              <ul className="mt-2 space-y-2 text-[14px] leading-relaxed text-ink/75">
                {galabau.recruiting.roles.map((role) => (
                  <li key={role}>{role}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-4xl border border-ink/10 bg-creme p-7">
              <span className="field-label">Was Sie erwartet</span>
              <ul className="mt-2 space-y-2 text-[14px] leading-relaxed text-ink/75">
                {galabau.recruiting.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}
