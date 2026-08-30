import { Link } from "react-router";
import { Sparkles, Droplets, Zap, Sun, HandHeart, Star } from "lucide-react";

const services = [
  {
    id: "botox-fillers",
    icon: Sparkles,
    title: "Botox & Fillers",
    desc: "Neurotoxins and brand-name dermal fillers — Botox, Dysport, Xeomin, Radiesse, Belotero, and more — precisely placed to smooth lines and restore natural-looking volume.",
    tag: "Most Popular",
  },
  {
    id: "facials-skin-rejuvenation",
    icon: Droplets,
    title: "Facials & Skin Rejuvenation",
    desc: "From custom facials and hydrodermabrasion to microneedling, RF fractional treatments, LED therapy, and PRP — a full menu of medical-grade facial services for every skin concern.",
    tag: null,
  },
  {
    id: "laser-treatments",
    icon: Zap,
    title: "Laser Treatments",
    desc: "IPL, fractional CO₂, vascular laser, hair removal, and acne scar revision — advanced light-based technologies customized to your skin type and goals.",
    tag: null,
  },
  {
    id: "chemical-peels",
    icon: Sun,
    title: "Chemical Peels",
    desc: "Medical-grade peels — including the VI Peel — tailored at consultation to address pigmentation, acne, fine lines, and sun damage with visible results.",
    tag: null,
  },
  {
    id: "massage",
    icon: HandHeart,
    title: "Massage",
    desc: "Swedish, deep tissue, lymphatic drainage, aromatherapy, reflexology, anti-cellulite, and more — therapeutic techniques to complement your aesthetic journey.",
    tag: null,
  },
  {
    id: "iv-wellness-therapy",
    icon: Star,
    title: "IV Wellness Therapy",
    desc: "Physician-supervised nutrient infusions — Myers' Cocktail, Glutathione, NAD+, and Vitamin C — to restore energy, immunity, and cellular vitality from within.",
    tag: null,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#1b1b17]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="max-w-xl mb-16">
          <span
            className="tracking-[0.3em] uppercase block mb-5 text-[#ffffff]"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.68rem", fontWeight: 300 }}
          >Areas of Expertise</span>
          <h2
            className="text-[#F7F4EF] leading-tight"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 500, lineHeight: 1.2 }}
          >
            What We{" "}
            <span className="italic text-[#829BB9]">Specialize In</span>
          </h2>
          <p
            className="text-[#6B6860] mt-5 max-w-sm"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem", fontWeight: 300, lineHeight: 1.7 }}
          >
            A curated selection of our core service categories — each one a gateway to a deeper menu of medical-grade treatments.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {services.map(({ id, icon: Icon, title, desc, tag }) => (
            <Link
              key={title}
              to={`/services#${id}`}
              className="bg-[#1A1A18] p-8 group hover:bg-[#829BB9]/10 transition-colors duration-300 relative cursor-pointer block"
            >
              {tag && (
                <span
                  className="absolute top-6 right-6 bg-[#829BB9] text-white px-2.5 py-0.5"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.6rem", letterSpacing: "0.1em" }}
                >
                  {tag.toUpperCase()}
                </span>
              )}
              <div className="mb-5 w-10 h-10 flex items-center justify-center border border-[#829BB9]/40 group-hover:border-[#829BB9] transition-colors">
                <Icon size={18} className="text-[#829BB9]" />
              </div>
              <h3
                className="text-[#F7F4EF] mb-3"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 500 }}
              >
                {title}
              </h3>
              <p
                className="text-[#6B6860] leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem", fontWeight: 300 }}
              >
                {desc}
              </p>
              <div className="mt-6 flex items-center gap-2 group-hover:gap-3 transition-all">
                <span
                  className="text-[#829bb9]"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", letterSpacing: "0.1em" }}
                >
                  LEARN MORE
                </span>
                <span className="text-sm text-[#829bb9]">→</span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <Link
            to="/treatments"
            className="inline-block border border-white text-[#fdfdfd] hover:bg-[#829BB9] hover:text-black hover:border-[#829BB9] transition-colors duration-300 px-10 py-3.5"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", letterSpacing: "0.12em" }}
          >
            VIEW ALL TREATMENTS
          </Link>
        </div>
      </div>
    </section>
  );
}
