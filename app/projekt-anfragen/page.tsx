import type { Metadata } from "next";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProjektAssistent } from "@/components/ProjektAssistent";
import company from "@/config/company";
import { galabau } from "@/lib/galabau";
import { buildWhatsappHref } from "@/lib/service-area";

export const metadata: Metadata = {
  title: `Anfrage starten | ${company.name}`,
  description: `Anfrage für Haustechnik, Elektro, Böden oder Gartenbau bei ${company.name} in ${company.address.city}: Anliegen, Fotos, Kostenrahmen in wenigen Schritten.`
};

export default function ProjektAnfragenPage() {
  const whatsappHref = buildWhatsappHref(galabau.serviceArea.centerCity);
  // Ohne gepflegte Zeiten (alle Tage "geschlossen") wäre eine Zeitenliste
  // irreführend. Handwerkstermine laufen ohnehin nach Vereinbarung.
  const hasOfficeHours = company.officeHours.some((entry) => entry.hours !== "Geschlossen");

  return (
    <main style={{ overflowX: "clip" }} className="bg-bone">
      <Navbar />

      <section className="bg-ink pt-40 pb-16 md:pt-52 md:pb-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-bone/60">
            <span className="inline-block h-[0.4rem] w-[0.4rem] rounded-full bg-stahl-400" />
            <span>Anfrage-Assistent</span>
          </div>
          <h1 className="mt-6 max-w-3xl font-display text-[36px] leading-[1.0] tracking-tight text-bone sm:text-[46px] md:text-[60px]">
            Anfrage starten<span className="text-brand-300">.</span>
          </h1>
          <p className="mt-5 max-w-[54ch] text-[15px] leading-relaxed text-bone/80 md:text-[16px]">
            Acht kurze Schritte statt Telefon-Pingpong. Ob Reparatur im Haus oder neue Anlage im Garten: Am Ende
            wissen Sie, ob Ihr Ort in unserem Einsatzgebiet liegt, und wir haben alles für eine belastbare Antwort.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-x-10 gap-y-10 px-6 md:px-10">
          <div className="col-span-12 lg:col-span-8">
            <ProjektAssistent />
          </div>
          <aside className="col-span-12 lg:col-span-4">
            <div className="rounded-4xl border border-ink/10 bg-white p-7">
              <span className="field-label">Lieber direkt sprechen?</span>
              <a
                href={company.contact.phoneLink || "#"}
                className="mt-1 block font-display text-[24px] tracking-tight text-ink hover:text-brand-600"
              >
                {company.contact.phone}
              </a>
              <p className="mt-3 text-[13px] leading-relaxed text-ink/60">
                {hasOfficeHours
                  ? company.officeHours.map((entry) => `${entry.day}: ${entry.hours}`).join(" · ")
                  : "Termine nach Vereinbarung"}
              </p>
              {company.contact.email ? (
                <a
                  href={`mailto:${company.contact.email}`}
                  className="mt-2 block text-[13px] text-ink/70 underline decoration-ink/20 underline-offset-4 hover:text-ink"
                >
                  {company.contact.email}
                </a>
              ) : null}
              {whatsappHref ? (
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-full border border-brand-500 px-6 py-3 text-[13px] font-medium text-brand-700 transition-colors hover:bg-brand-50"
                >
                  Per WhatsApp fragen
                </a>
              ) : null}
            </div>

            <div className="mt-6 rounded-4xl border border-ink/10 bg-creme p-7">
              <span className="field-label">Warum so viele Fragen?</span>
              <p className="mt-1 text-[13px] leading-relaxed text-ink/65">
                Jede Antwort erspart eine Rückfrage. Mit Fotos und ein paar Eckdaten können wir meist direkt einen
                Termin vor Ort vorschlagen, statt erst dreimal zu telefonieren.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}
