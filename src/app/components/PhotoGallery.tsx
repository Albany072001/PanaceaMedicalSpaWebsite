import { useState } from "react";
import { X } from "lucide-react";
import dsc00284 from "../../imports/DSC00284.JPG";
import dsc00300 from "../../imports/DSC00300.JPG";
import dsc00309 from "../../imports/DSC00309.JPG";

const photos = [
  { url: dsc00284, alt: "Panacean Medical Spa — treatment moment", tag: "Our Space", tall: true },
  { url: dsc00300, alt: "Panacean Medical Spa — client experience", tag: "Our Space", tall: false },
  { url: dsc00309, alt: "Panacean Medical Spa — spa environment", tag: "Our Space", tall: false },
];

export function PhotoGallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section className="bg-[#12202C] py-20 px-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <span
            className="text-[#829BB9] tracking-[0.3em] uppercase block mb-3"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.68rem", fontWeight: 300 }}
          >
            Our Space & Results
          </span>
          <h2
            className="text-white"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 500, lineHeight: 1.2 }}
          >
            Moments from{" "}
            <span className="italic text-[#829BB9]">Panacean</span>
          </h2>
        </div>
        <p
          className="text-white/50 max-w-xs"
          style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", fontWeight: 300, lineHeight: 1.7 }}
        >
          Real clients, real results. A glimpse into the care and environment we create every day.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-3">
        {photos.map((photo, i) => (
          <div
            key={i}
            className="relative group overflow-hidden cursor-pointer"
            onClick={() => setLightbox(i)}
          >
            <img
              src={photo.url}
              alt={photo.alt}
              className="w-full h-72 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-[#12202C]/0 group-hover:bg-[#12202C]/50 transition-all duration-400 flex items-end p-4">
              <span
                className="text-white/0 group-hover:text-white/90 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.68rem", letterSpacing: "0.1em" }}
              >
                {photo.tag.toUpperCase()}
              </span>
            </div>
            <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-[#829BB9] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-6 text-white/60 hover:text-white transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={28} />
          </button>
          <div className="max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <img
              src={photos[lightbox].url}
              alt={photos[lightbox].alt}
              className="w-full max-h-[80vh] object-contain"
            />
            <div className="flex items-center gap-3 mt-4">
              <span
                className="text-[#829BB9]"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.68rem", letterSpacing: "0.12em" }}
              >
                {photos[lightbox].tag.toUpperCase()}
              </span>
              <div className="flex-1 h-px bg-white/10" />
              <span
                className="text-white/40"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.68rem" }}
              >
                {lightbox + 1} / {photos.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
