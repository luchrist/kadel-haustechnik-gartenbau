"use client";

import { motion } from "framer-motion";
import {
  Drop,
  HouseLine,
  Lightbulb,
  Plant,
  Robot,
  SquaresFour,
  Wrench,
  type Icon
} from "@phosphor-icons/react";

import { galabau, type GalabauService } from "@/lib/galabau";

/**
 * Startseite, Leistungsübersicht. Der Betrieb verbindet zwei Welten, deshalb
 * werden die Karten in "Rund ums Haus" und "Rund um den Garten" gruppiert.
 * Jede Karte verlinkt auf ihre Leistungsseite und trägt den
 * leistungsspezifischen CTA. Ohne eigenes Foto rendert die Karte eine
 * typografische Fläche mit Icon statt eines unpassenden Platzhalterbildes.
 */
const HAUS_KEYS: string[] = ["haustechnik", "bodenverlegung", "flachdachbegruenung"];

const ICONS: Partial<Record<string, Icon>> = {
  haustechnik: Wrench,
  bodenverlegung: SquaresFour,
  flachdachbegruenung: HouseLine,
  gartenbeleuchtung: Lightbulb,
  teichpflege: Drop,
  maehroboter: Robot
};

const GROUPS = [
  {
    id: "haus",
    title: "Rund ums Haus",
    services: galabau.services.filter((service) => HAUS_KEYS.includes(service.key))
  },
  {
    id: "garten",
    title: "Rund um den Garten",
    services: galabau.services.filter((service) => !HAUS_KEYS.includes(service.key))
  }
].filter((group) => group.services.length > 0);

function ServiceVisual({ service }: { service: GalabauService }) {
  if (service.image) {
    return (
      <img
        src={service.image}
        alt={service.label}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />
    );
  }
  const IconComponent = ICONS[service.key] ?? Plant;
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-stahl-700 via-stahl-800 to-ink transition-transform duration-700 ease-out group-hover:scale-[1.04]">
      <IconComponent size={88} weight="thin" className="text-brand-300/80" aria-hidden="true" />
    </div>
  );
}

export function Leistungen() {
  return (
    <section id="leistungen" className="relative scroll-mt-24 bg-bone py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="border-b border-ink/15 pb-12">
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55">
            <span className="marker" />
            <span>Leistungen</span>
          </div>
          <h2 className="mt-6 font-display text-[32px] leading-[1.05] tracking-tight text-ink sm:text-[40px] md:text-[58px]">
            Haus und Garten, <span className="italic text-brand-500">ein Ansprechpartner.</span>
          </h2>
          <p className="mt-6 max-w-[60ch] text-[15px] leading-relaxed text-ink/70">
            Viele Gewerke im Handwerk und Gartenbau aus einer Hand. Wählen Sie eine Leistung für Details oder starten Sie
            direkt Ihre Anfrage.
          </p>
        </div>

        {GROUPS.map((group) => (
          <div key={group.id} className="mt-14">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-stahl-600">{group.title}</h3>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {group.services.map((service, index) => (
                <motion.a
                  key={service.key}
                  href={`/leistungen/${service.slug}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ type: "spring", stiffness: 110, damping: 22, delay: (index % 3) * 0.06 }}
                  className="group relative overflow-hidden rounded-4xl border border-ink/10 bg-white"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-creme">
                    <ServiceVisual service={service} />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
                    <span className="absolute bottom-4 left-5 font-display text-[24px] tracking-tight text-bone drop-shadow-md md:text-[28px]">
                      {service.label}
                    </span>
                  </div>
                  <div className="flex flex-col gap-4 p-6">
                    <p className="text-[14px] leading-relaxed text-ink/70">{service.teaser}</p>
                    <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-brand-600 transition-colors group-hover:text-brand-700">
                      {service.cta}
                      <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-16 flex flex-col items-start gap-4 rounded-4xl border border-ink/10 bg-creme p-8 md:flex-row md:items-center md:justify-between md:p-10">
          <div>
            <p className="font-display text-[22px] tracking-tight text-ink md:text-[26px]">
              Ihr Anliegen ist nicht dabei?
            </p>
            <p className="mt-2 max-w-[56ch] text-[14px] leading-relaxed text-ink/65">
              Beschreiben Sie es trotzdem. Wir sagen Ihnen ehrlich, ob wir es übernehmen.
            </p>
          </div>
          <a
            href="/projekt-anfragen"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-brand-500 px-8 py-4 text-[14px] font-medium text-bone transition-colors hover:bg-brand-600"
          >
            Anfrage starten
            <span>&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
