export interface Referenz {
  id: string;
  /** Short project title, e.g. "Beregnung mit Beleuchtung im Reihenhausgarten". */
  title: string;
  /** Real place name. Never invent one. */
  ort: string;
  /** Must match one of the `label` values in lib/galabau.ts services. */
  leistung: string;
  jahr?: string;
  text: string;
  /** Finished state. Required. */
  afterImage: string;
  /**
   * Before state. OPTIONAL and only ever a genuine before shot of the SAME
   * project. Without it the card renders as a single image instead of a
   * before/after slider, which is the honest fallback.
   */
  beforeImage?: string;
  alt: string;
}

// Nur echte Projekte des Betriebs mit eigenen Fotos. Solange keine vorliegen,
// bleibt die Liste leer und die Referenzen-Sektion blendet sich aus.
export const referenzen: Referenz[] = [];
