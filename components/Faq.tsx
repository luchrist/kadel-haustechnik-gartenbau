"use client";

import { useState } from "react";

import company from "@/config/company";
import { galabau } from "@/lib/galabau";

/**
 * Allgemeine Fragen vor der Anfrage. Handwerkskunden zögern meist bei Preis,
 * Auftragsgröße und Erreichbarkeit, deshalb stehen genau diese Punkte hier.
 * Leistungsspezifische Fragen liegen auf den Leistungsseiten (lib/galabau.ts).
 */
const FRAGEN = [
  {
    q: "Übernehmen Sie auch kleine Aufträge?",
    a: "Ja. Eine einzelne Reparatur gehört genauso dazu wie eine komplette Gartenanlage. Beschreiben Sie Ihr Anliegen kurz, gern mit Fotos, dann können wir es schnell einordnen."
  },
  {
    q: "Was kostet das?",
    a: `Das hängt vom Zustand vor Ort, vom Material und vom Aufwand ab. Der Anfrage-Assistent zeigt bei Flächen- und Meterangaben eine grobe, unverbindliche Orientierung. Einen verbindlichen Preis nennen wir erst nach der Besichtigung.`
  },
  {
    q: "Kann ich Arbeiten an Haus und Garten zusammen beauftragen?",
    a: "Genau das ist unsere Stärke. Ob Bodenverlegung und Gartenzaun oder Beregnung mit Beleuchtung: Sie haben einen Ansprechpartner statt mehrerer Betriebe, die sich untereinander abstimmen müssen."
  },
  {
    q: "Bieten Sie auch Wartung an?",
    a: "Ja. Haustechnische und elektrotechnische Wartungen, Beregnungsanlagen, Teichpflege und Mähroboter betreuen wir auf Wunsch regelmäßig."
  },
  {
    q: "In welchem Gebiet sind Sie unterwegs?",
    a: `Unser Schwerpunkt liegt in ${galabau.serviceArea.centerCity} und den umliegenden Gemeinden. Mit dem PLZ-Schnellcheck weiter unten sehen Sie sofort, ob Ihr Ort dazugehört.`
  },
  {
    q: "Wie erreiche ich Sie am schnellsten?",
    a: `Über den Anfrage-Assistenten mit Fotos, telefonisch unter ${company.contact.phone}${
      company.contact.email ? ` oder per E-Mail an ${company.contact.email}` : ""
    }. Termine vergeben wir nach Vereinbarung.`
  }
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="fragen" className="relative scroll-mt-24 bg-bone py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-x-10 gap-y-12">
          <div className="col-span-12 lg:col-span-4">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55">
              <span className="marker" />
              <span>Häufige Fragen</span>
            </div>
            <h2 className="mt-6 font-display text-[32px] leading-[1.05] tracking-tight text-ink sm:text-[40px] md:text-[54px]">
              Kurz und <span className="italic text-brand-500">ehrlich beantwortet.</span>
            </h2>
            <a
              href="/projekt-anfragen"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-brand-500 px-8 py-4 text-[14px] font-medium text-bone transition-colors hover:bg-brand-600"
            >
              Anfrage starten
              <span>&rarr;</span>
            </a>
          </div>

          <div className="col-span-12 lg:col-span-8">
            <ul className="border-t border-ink/15">
              {FRAGEN.map((entry, index) => {
                const expanded = open === index;
                return (
                  <li key={entry.q} className="border-b border-ink/15">
                    <button
                      type="button"
                      aria-expanded={expanded}
                      onClick={() => setOpen(expanded ? null : index)}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    >
                      <span className="font-display text-[19px] tracking-tight text-ink md:text-[22px]">{entry.q}</span>
                      <span
                        aria-hidden="true"
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink/20 text-[18px] text-ink/70 transition-transform duration-300 ${
                          expanded ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>
                    {expanded ? (
                      <p className="max-w-[68ch] pb-7 text-[15px] leading-relaxed text-ink/70">{entry.a}</p>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
