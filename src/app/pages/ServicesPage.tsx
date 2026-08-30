import { useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Sparkles, Droplets, Zap, Sun, Heart, Star, Stethoscope, HandHeart } from "lucide-react";

const services = [
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
    id: "massage",
    treatmentAnchor: "massage",
    icon: HandHeart,
    title: "Massage",
    description: "Therapeutic and relaxation massage techniques to relieve tension, support circulation, and complement your aesthetic treatments.",
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
          src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1800&h=600&fit=crop&auto=format"
          alt="Spa services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55 flex flex-col items-center justify-center text-center px-6">
          <span className="text-[#829BB9] tracking-[0.3em] uppercase block mb-3" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.68rem", fontWeight: 300 }}>Service Categories</span>
          <h1 className="text-white" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 500 }}>What to Expect</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 max-w-3xl mx-auto px-6 text-center">
        <p className="text-[#607080] leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem", fontWeight: 300 }}>
          Each category below covers a distinct area of care — from injectables and facials to laser, wellness, and beyond. Browse what resonates, then use <span className="text-[#829BB9]">See All Treatments</span> to explore the full menu of individual options within that category.
        </p>
        <p className="text-[#829BB9]/70 mt-4" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", fontWeight: 300, letterSpacing: "0.04em" }}>
          All protocols are supervised by our board-certified medical team and personalized to your skin type and goals.
        </p>
      </section>

      {/* Services grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-20">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map(({ id, treatmentAnchor, icon: Icon, title, description }) => (
            <div key={title} id={id} className="border border-[#829BB9]/20 p-8 hover:border-[#829BB9] transition-colors duration-300 group scroll-mt-24 flex flex-col">
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
      <section className="bg-[#EEF4F8] py-16 text-center px-6">
        <h2 className="text-[#12202C] mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 500 }}>Not Sure Where to Start?</h2>
        <p className="text-[#607080] mb-8 max-w-md mx-auto" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", fontWeight: 300 }}>Schedule a complimentary skin consultation and our experts will guide you to the right treatments.</p>
        <Link to="/contact" className="inline-block bg-[#829BB9] hover:bg-white text-white hover:text-black border border-transparent hover:border-[#829BB9] transition-colors duration-300 px-10 py-3.5" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", letterSpacing: "0.12em" }}>
          BOOK A FREE CONSULTATION
        </Link>
      </section>
    </div>
  );
}
