import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router";

const slides = [
  {
    url: "https://images.unsplash.com/photo-1730288951113-9cc087c14b83?w=1800&h=900&fit=crop&auto=format",
    alt: "Close up of natural skin with spots and freckles",
    heading: "Restore Your Radiance",
    sub: "Advanced treatments for spots, scars, and uneven skin tone",
  },
  {
    url: "https://images.unsplash.com/photo-1670201203208-055d6d79db4a?w=1800&h=900&fit=crop&auto=format",
    alt: "Person applying skincare serum to their face",
    heading: "Skin Care for Every Skin",
    sub: "Inclusive, medical-grade treatments tailored to every tone and concern",
  },
  {
    url: "https://images.unsplash.com/photo-1700760933574-9f0f4ea9aa3b?w=1800&h=900&fit=crop&auto=format",
    alt: "Laser hair removal treatment being performed on a leg",
    heading: "Precision Laser Treatments",
    sub: "State-of-the-art laser technology for lasting, visible results",
  },
  {
    url: "https://images.unsplash.com/photo-1731515067388-d5df113d4326?w=1800&h=900&fit=crop&auto=format",
    alt: "Woman receiving LED blue light therapy anti-aging treatment",
    heading: "Turn Back Time",
    sub: "Non-surgical anti-aging procedures expertly administered by our medical team",
  },
  {
    url: "https://images.unsplash.com/photo-1606214554814-e8a9f97bdbb0?w=1800&h=900&fit=crop&auto=format",
    alt: "Water splash representing hydration and wellness infusion",
    heading: "Revitalize from Within",
    sub: "Customized IV wellness infusions to restore energy, immunity, and vitality",
  },
];

export function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = useCallback(
    (idx: number) => {
      if (transitioning) return;
      setTransitioning(true);
      setTimeout(() => {
        setCurrent(idx);
        setTransitioning(false);
      }, 350);
    },
    [transitioning],
  );

  const next = useCallback(
    () => goTo((current + 1) % slides.length),
    [current, goTo],
  );
  const prev = useCallback(
    () => goTo((current - 1 + slides.length) % slides.length),
    [current, goTo],
  );

  useEffect(() => {
    const timer = setInterval(next, 5500);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section
      id="home"
      className="relative h-screen min-h-[600px] overflow-hidden"
    >
      {/* Image */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${transitioning ? "opacity-0" : "opacity-100"}`}
      >
        <img
          src={slide.url}
          alt={slide.alt}
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/55" />
      </div>

      {/* Text content */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center text-center px-6 transition-all duration-700 ${
          transitioning
            ? "opacity-0 translate-y-2"
            : "opacity-100 translate-y-0"
        }`}
      >
        <span
          className="tracking-[0.35em] uppercase mb-5 block text-[#ffffff]"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.72rem",
            fontWeight: 300,
          }}
        >Panacean</span>
        <h1
          className="text-white mb-5 leading-tight max-w-3xl"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
            fontWeight: 500,
            lineHeight: 1.15,
          }}
        >
          {slide.heading}
        </h1>
        <p
          className="text-white/80 mb-10 max-w-md"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1.05rem",
            fontWeight: 300,
            letterSpacing: "0.02em",
            textShadow: "0 1px 10px rgba(0,0,0,0.8)",
          }}
        >
          {slide.sub}
        </p>
        <div className="flex gap-4">
          <Link
            to="/contact"
            className="bg-[#829BB9] hover:bg-white text-white hover:text-[#829BB9] transition-colors duration-300 px-8 py-3.5"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.78rem",
              letterSpacing: "0.12em",
            }}
          >
            BOOK A CONSULTATION
          </Link>
          <Link
            to="/services"
            className="bg-[#829BB9] hover:bg-white text-white hover:text-[#829BB9] transition-colors duration-300 px-8 py-3.5"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.78rem",
              letterSpacing: "0.12em",
            }}
          >
            EXPLORE SERVICES
          </Link>
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 transition-all p-2.5 rounded-full"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 transition-all p-2.5 rounded-full"
      >
        <ChevronRight size={22} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-0.5 transition-all duration-400 ${i === current ? "w-8 bg-[#829BB9]" : "w-4 bg-[#829BB9]/50"}`}
          />
        ))}
      </div>
    </section>
  );
}