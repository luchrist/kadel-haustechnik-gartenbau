"use client";

import { motion } from "framer-motion";

import { galabau } from "@/lib/galabau";

/**
 * Ablauf einer Anfrage, vom kleinen Reparaturauftrag bis zur Gartenanlage.
 * Was Besucher vor der Anfrage wissen wollen, ist, wie es danach weitergeht,
 * deshalb endet die Sektion auf dem Anfrage-CTA.
 */
const SCHRITTE = [
  {
    title: "Anfrage",
    text: "Sie schildern kurz, worum es geht, ob defekte Technik im Haus oder neue Beregnung im Garten. Fotos sparen die erste Runde Rückfragen."
  },
  {
    title: "Rückmeldung",
    text: "Wir melden uns, klären offene Punkte und sagen ehrlich, ob der Auftrag zu uns passt."
  },
  {
    title: "Besichtigung vor Ort",
    text: "Bei größeren Arbeiten sehen wir uns alles vor Ort an: Zugang, Anschlüsse, Untergrund. Erst danach reden wir über verbindliche Preise."
  },
  {
    title: "Angebot",
    text: "Nachvollziehbar nach Positionen, mit Material und Mengen. Rückfragen sind ausdrücklich erwünscht."
  },
  {
    title: "Ausführung und Wartung",
    text: "Saubere Ausführung und Einweisung in die Technik. Beregnung, Teich oder Mähroboter warten wir auf Wunsch regelmäßig."
  }
];

export function Arbeitsweise() {
  const facts = [
    galabau.company.foundedYear ? { label: "Gegründet", value: galabau.company.foundedYear } : null,
    galabau.company.teamSize ? { label: "Team", value: galabau.company.teamSize } : null,
    galabau.company.machines ? { label: "Ausstattung", value: galabau.company.machines } : null
  ].filter((fact): fact is { label: string; value: string } => fact !== null);

  return (
    <section id="ablauf" className="relative scroll-mt-24 bg-ink py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-x-10 gap-y-14">
          <div className="col-span-12 lg:col-span-5">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-bone/55">
              <span className="inline-block h-[0.4rem] w-[0.4rem] rounded-full bg-stahl-400" />
              <span>Ablauf</span>
            </div>
            <h2 className="mt-6 font-display text-[32px] leading-[1.05] tracking-tight text-bone sm:text-[40px] md:text-[54px]">
              Von der Anfrage <span className="italic text-brand-300">bis zur Übergabe.</span>
            </h2>
            <p className="mt-6 max-w-[50ch] text-[15px] leading-relaxed text-bone/75">
              Ob kleine Reparatur oder größere Anlage: Sie wissen an jedem Punkt, was als Nächstes passiert und woran
              Sie sind. Haus und Garten bleiben dabei in einer Hand.
            </p>

            {facts.length > 0 ? (
              <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">
                {facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/45">{fact.label}</dt>
                    <dd className="mt-2 font-display text-[22px] tracking-tight text-bone">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            ) : null}

            {galabau.trust.seals.length > 0 ? (
              <ul className="mt-10 flex flex-wrap gap-2">
                {galabau.trust.seals.map((seal) => (
                  <li
                    key={seal.label}
                    title={seal.note}
                    className="rounded-full border border-stahl-400/40 bg-stahl-400/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-stahl-200"
                  >
                    {seal.label}
                  </li>
                ))}
              </ul>
            ) : null}

            <a
              href="/projekt-anfragen"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-brand-500 px-8 py-4 text-[14px] font-medium text-bone transition-colors hover:bg-brand-400"
            >
              Jetzt Anfrage starten
              <span>&rarr;</span>
            </a>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-bone/50">
              {galabau.assistant.responsePromise}
            </p>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <ol className="relative border-l border-bone/15 pl-8 md:pl-10">
              {SCHRITTE.map((schritt, index) => (
                <motion.li
                  key={schritt.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ type: "spring", stiffness: 110, damping: 22, delay: index * 0.05 }}
                  className="relative pb-10 last:pb-0"
                >
                  <span className="absolute -left-[calc(2rem+1px)] flex h-[1.9rem] w-[1.9rem] -translate-x-1/2 items-center justify-center rounded-full bg-brand-500 font-mono text-[11px] text-bone md:-left-[calc(2.5rem+1px)]">
                    {index + 1}
                  </span>
                  <h3 className="font-display text-[21px] tracking-tight text-bone md:text-[24px]">{schritt.title}</h3>
                  <p className="mt-2 max-w-[54ch] text-[14px] leading-relaxed text-bone/65">{schritt.text}</p>
                </motion.li>
              ))}
            </ol>

            {galabau.trust.usps.length > 0 ? (
              <ul className="mt-4 grid gap-4 sm:grid-cols-3">
                {galabau.trust.usps.map((usp) => (
                  <li key={usp.label} className="rounded-4xl border border-bone/12 bg-bone/[0.04] p-6">
                    <h3 className="font-display text-[17px] tracking-tight text-bone">{usp.label}</h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-bone/60">{usp.text}</p>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
