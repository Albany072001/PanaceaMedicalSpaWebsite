import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  {
    name: "Amanda Chen",
    title: "Regular Client since 2021",
    avatar:
      "https://images.unsplash.com/photo-1728727217834-b190862837a3?w=80&h=80&fit=crop&auto=format",
    rating: 5,
    text: "Serene Medical Spa completely transformed my confidence. Dr. Vasquez took the time to understand exactly what I wanted, and the HydraFacial series gave me the most luminous skin I've had in years. This isn't just a spa — it's a genuine sanctuary.",
  },
  {
    name: "Marcus Torres",
    title: "Body Contouring & IV Therapy Client",
    avatar:
      "https://images.unsplash.com/photo-1661346376364-706a9eac60ab?w=80&h=80&fit=crop&auto=format",
    rating: 5,
    text: "I was skeptical about non-invasive body contouring, but after just four sessions the results were undeniable. The staff is warm, knowledgeable, and never pushy. The IV wellness therapy has become my monthly ritual — I feel like a different person.",
  },
  {
    name: "Priya Sharma",
    title: "Botox & Filler Client",
    avatar:
      "https://images.unsplash.com/photo-1643684391140-c5056cfd3436?w=80&h=80&fit=crop&auto=format",
    rating: 5,
    text: "I was nervous about injectables, but the team walked me through every step. The results are incredibly natural — friends say I look refreshed, not 'done.' The facility itself is stunning, and I always leave feeling completely pampered.",
  },
  {
    name: "Sofia Reinholt",
    title: "Laser Treatment Client",
    avatar:
      "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=80&h=80&fit=crop&auto=format",
    rating: 5,
    text: "After struggling with pigmentation for years, the laser treatment series changed everything. The aestheticians are true experts who adjusted my protocol as my skin responded. The attention to detail here is unlike anything I've experienced elsewhere.",
  },
];

export function ReviewsSection() {
  const [idx, setIdx] = useState(0);
  const visible = 3;
  const max = reviews.length - visible;

  const prev = () => setIdx((i) => Math.max(i - 1, 0));
  const next = () => setIdx((i) => Math.min(i + 1, max));

  const shown = reviews.slice(idx, idx + visible);

  return (
    <section
      id="reviews"
      className="py-24 md:py-32 bg-[#F7F4EF]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <div>
            <span
              className="tracking-[0.3em] uppercase block mb-5 text-[#000000]"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.68rem",
                fontWeight: 300,
              }}
            >
              Client Stories
            </span>
            <h2
              className="text-[#1A1A18] leading-tight"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                fontWeight: 500,
                lineHeight: 1.2,
              }}
            >
              Transformations That{" "}
              <span className="italic text-[#829BB9]">
                Speak for Themselves
              </span>
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={prev}
              disabled={idx === 0}
              className="w-10 h-10 border border-[#3B5447]/30 flex items-center justify-center text-[#3B5447] hover:bg-[#3B5447] hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              disabled={idx >= max}
              className="w-10 h-10 border border-[#3B5447]/30 flex items-center justify-center text-[#3B5447] hover:bg-[#3B5447] hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Cards — desktop shows 3, mobile shows 1 */}
        <div className="grid md:grid-cols-3 gap-6">
          {shown.map((r) => (
            <div
              key={r.name}
              className="bg-[#FDFBF8] p-8 border border-[#3B5447]/08 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: r.rating }).map(
                  (_, i) => (
                    <Star
                      key={i}
                      size={13}
                      className="fill-[#C4965A] text-[#C4965A]"
                    />
                  ),
                )}
              </div>
              <p
                className="text-[#3B3B38] leading-relaxed flex-1 mb-8"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1rem",
                  fontWeight: 400,
                  fontStyle: "italic",
                }}
              >
                "{r.text}"
              </p>
              <div className="flex items-center gap-4 border-t border-[#3B5447]/10 pt-6">
                <div className="w-11 h-11 rounded-full overflow-hidden bg-[#EDE9E3] shrink-0">
                  <img
                    src={r.avatar}
                    alt={r.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span
                    className="block text-[#1A1A18]"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.88rem",
                      fontWeight: 500,
                    }}
                  >
                    {r.name}
                  </span>
                  <span
                    className="text-[#6B6860]"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.72rem",
                      fontWeight: 300,
                    }}
                  >
                    {r.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google rating badge */}
        <div className="mt-12 flex items-center gap-3">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star
                key={i}
                size={14}
                className="fill-[#C4965A] text-[#C4965A]"
              />
            ))}
          </div>
          <span
            className="text-[#6B6860]"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.82rem",
              fontWeight: 300,
            }}
          >
            4.8 average · 98 verified Google reviews
          </span>
        </div>
      </div>
    </section>
  );
}