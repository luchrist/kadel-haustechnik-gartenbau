export interface GalleryItem {
  src: string;
  alt: string;
}

// Nur echte Fotos des Betriebs, die weder als Leistungsbild (lib/galabau.ts)
// noch als Referenz (lib/referenzen-data.ts) laufen. Die Galerie filtert
// Dubletten heraus und blendet sich aus, solange weniger als drei eigene
// Bilder vorliegen. Aktuell gibt es keine eigenen Fotos im Bildpool.
export const galleryItems: GalleryItem[] = [];
