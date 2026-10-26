import { useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Sparkles, Droplets, Zap, Sun, Heart, Star, Stethoscope } from "lucide-react";

function HairFollicleIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="3.5" y1="13.5" x2="20.5" y2="13.5" />
      <path d="M8 13.5 C8 11 7 8 8.5 6" />
      <path d="M12 13.5 C12 10.5 11 8 12.5 5.5" />
      <path d="M16 13.5 C16 11 15 8 16.5 6" />
      <circle cx="8" cy="16.5" r="0.5" fill="currentColor" stroke="none" />
      <circle cx="12" cy="17" r="0.5" fill="currentColor" stroke="none" />
      <circle cx="16" cy="16.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

type IconComponent = React.ComponentType<{ size?: number; className?: string }>;

const services: { id: string; treatmentAnchor: string; icon: IconComponent; title: string; description: string; tag?: string }[] = [
  {
    id: "botox-fillers",
    treatmentAnchor: "face-injectables",
    icon: Sparkles,
    title: "Botox & Fillers",
    description: "Precision-placed neurotoxin and hyaluronic acid treatments to smooth lines, restore volume, and refresh your appearance — all while keeping results looking completely natural.",
  },
  {
    id: "facials-skin-rejuvenation",
    treatmentAnchor: "face-skin",
    icon: Droplets,
    title: "Facials & Skin Rejuvenation",
    description: "A comprehensive menu of medical-grade facial treatments — from deep-cleansing and exfoliation to advanced collagen-stimulating therapies — customized for every skin type.",
  },
  {
    id: "laser-treatments",
    treatmentAnchor: "laser-light",
    icon: Zap,
    title: "Laser Treatments",
    description: "Advanced laser technology targeting pigmentation, redness, texture, and unwanted hair. Customized wavelengths for every skin type and concern.",
  },
  {
    id: "chemical-peels",
    treatmentAnchor: "chemical-peels",
    icon: Sun,
    title: "Chemical Peels",
    description: "Physician-formulated acid peels that reveal smoother, more even, luminous skin beneath the surface — tailored to your skin type and concern at consultation.",
  },
  {
    id: "body-contouring",
    treatmentAnchor: "body",
    icon: Heart,
    title: "Body Contouring",
    description: "Non-invasive skin-tightening and sculpting treatments using the latest radiofrequency technology — no surgery, no downtime, measurable results.",
  },
  {
    id: "iv-wellness-therapy",
    treatmentAnchor: "wellness-iv",
    icon: Star,
    title: "IV Wellness Therapy",
    description: "Physician-supervised intravenous nutrient infusions formulated to boost energy, strengthen immunity, accelerate recovery, and restore cellular hydration from within.",
  },
  {
    id: "medical",
    treatmentAnchor: "medical",
    icon: Stethoscope,
    title: "Medical",
    description: "Physician-led diagnostics and injectable therapies addressing root-cause wellness, vein health, and skin concerns.",
  },
  {
    id: "hair-transplant",
    treatmentAnchor: "hair-transplant",
    icon: HairFollicleIcon,
    title: "Hair Transplant",
    description: "Minimally invasive follicular unit extraction (FUE) by our medical team — restoring natural hairlines and density with lasting, natural-looking results and minimal downtime.",
    tag: "New",
  },
];

export function ServicesPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    }
  }, [hash]);

  return (
    <div className="bg-white pt-20">
      {/* Hero */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1552046122-03184de85e08?w=1800&h=600&fit=crop&auto=format"
          alt="Hand reaching toward spa skincare products"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/45 flex flex-col items-center justify-center text-center px-6" style={{ backdropFilter: "grayscale(1) brightness(0.72)" }}>
          <span className="text-[#829BB9] tracking-[0.3em] uppercase block mb-3" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", fontWeight: 300, textShadow: "0 1px 8px rgba(0,0,0,0.85)" }}>Service Categories</span>
          <h1 className="text-white" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 500, textShadow: "0 2px 12px rgba(0,0,0,0.8)" }}>What to Expect</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 max-w-3xl mx-auto px-6 text-center">
        <p className="text-[#607080] leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.15rem", fontWeight: 300 }}>
          Each category below covers a distinct area of care — from injectables and facials to laser, wellness, and beyond. Browse what resonates, then use <span className="text-[#829BB9]">See All Treatments</span> to explore the full menu of individual options within that category.
        </p>
        <p className="text-[#829BB9]/70 mt-4" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", fontWeight: 300, letterSpacing: "0.04em" }}>
          All protocols are supervised by our board-certified medical team and personalized to your skin type and goals.
        </p>
      </section>

      {/* Services grid — 3 columns on large screens for balanced 9-card layout */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-20">
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map(({ id, treatmentAnchor, icon: Icon, title, description, tag }) => (
            <div key={title} id={id} className="border border-[#829BB9]/20 p-8 hover:border-[#829BB9] transition-colors duration-300 group scroll-mt-24 flex flex-col relative">
              {tag && (
                <span
                  className="absolute top-5 right-5 bg-[#829BB9] text-white px-2.5 py-0.5"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.6rem", letterSpacing: "0.1em" }}
                >
                  {tag.toUpperCase()}
                </span>
              )}
              <div className="flex items-start gap-5 mb-5">
                <div className="w-11 h-11 flex items-center justify-center border border-[#829BB9]/40 group-hover:border-[#829BB9] group-hover:bg-[#829BB9] transition-all duration-300 shrink-0">
                  <Icon size={18} className="text-[#829BB9] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-[#12202C] self-center" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", fontWeight: 500 }}>{title}</h3>
              </div>
              <p className="text-[#607080] leading-relaxed flex-1" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.92rem", fontWeight: 300 }}>{description}</p>
              <Link to={`/treatments#${treatmentAnchor}`} className="mt-6 flex items-center gap-2 text-[#829BB9] group-hover:gap-3 transition-all self-start" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", letterSpacing: "0.1em" }}>
                SEE ALL TREATMENTS →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#12202C] py-16 text-center px-6">
        <h2 className="text-white mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 500 }}>Not Sure Where to Start?</h2>
        <p className="text-white/70 mb-8 max-w-md mx-auto" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", fontWeight: 300 }}>Schedule a complimentary skin consultation and our experts will guide you to the right treatments.</p>
        <Link to="/contact" className="inline-block bg-[#829BB9] hover:bg-white text-white hover:text-black border border-transparent hover:border-[#829BB9] transition-colors duration-300 px-10 py-3.5" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", letterSpacing: "0.12em" }}>
          BOOK A FREE CONSULTATION
        </Link>
      </section>
    </div>
  );
}
