import { useEffect } from "react";
import { Link, useLocation } from "react-router";

const categories = [
  {
    id: "face-injectables",
    category: "Face / Injectables",
    treatments: [
      { name: "Botox", desc: "Smooths dynamic wrinkles in the forehead, between brows, and around the eyes.", time: "30 min" },
      { name: "Dysport", desc: "A fast-acting neuromodulator that relaxes facial muscles for a natural, refreshed look.", time: "30 min" },
      { name: "Xeomin", desc: "A purified neurotoxin without additives — ideal for patients with sensitivity to other brands.", time: "30 min" },
      { name: "Dermal Fillers", desc: "Hyaluronic acid-based fillers to restore lost volume and smooth deep facial lines.", time: "45 min" },
      { name: "Radiesse", desc: "A calcium-based filler that stimulates collagen for long-lasting lift and volumization.", time: "45 min" },
      { name: "Belotero", desc: "A flexible filler designed for fine lines and delicate areas like the lips and under-eyes.", time: "30 min" },
      { name: "Restylane Kysse", desc: "A lip-specific filler that enhances shape and natural movement for a soft, kissable result.", time: "30 min" },
      { name: "Biostimulators", desc: "Injectable treatments (e.g. Sculptra-type) that stimulate your body's own collagen production over time.", time: "45 min" },
    ],
  },
  {
    id: "face-skin",
    category: "Face / Skin",
    treatments: [
      { name: "Panacean Custom Facial", desc: "A fully personalized facial protocol designed around your skin type, concerns, and goals.", time: "60 min" },
      { name: "Hydrodermabrasion", desc: "Water-assisted exfoliation that deep-cleanses pores and infuses skin with brightening serums simultaneously.", time: "60 min" },
      { name: "HydraFacial MD", desc: "Multi-step medical-grade facial: cleanse, peel, extract, hydrate — zero downtime.", time: "60 min" },
      { name: "Personalized Acne Treatment", desc: "A targeted protocol combining extractions, chemical agents, and LED therapy to clear and prevent breakouts.", time: "60 min" },
      { name: "Dermaplaning", desc: "Manual exfoliation using a sterile blade to remove dead skin and vellus hair for a smooth, luminous complexion.", time: "45 min" },
      { name: "Microdermabrasion", desc: "Mechanical exfoliation that buffs away dull surface cells, improving texture and tone with no downtime.", time: "45 min" },
      { name: "Microneedling", desc: "Controlled micro-injuries stimulate collagen and elastin for firmer, smoother, more even skin.", time: "60 min" },
      { name: "RF Fractional Microneedling", desc: "Combines radiofrequency energy with microneedling for enhanced skin tightening and scar revision.", time: "75 min" },
      { name: "Triniti Plus (Elos Plus)", desc: "A three-step device combo treatment addressing texture, laxity, and pigmentation in one session.", time: "90 min" },
      { name: "LED Therapy", desc: "Targeted light wavelengths that reduce inflammation, stimulate collagen, and accelerate healing.", time: "30 min" },
      { name: "PRP Facial (Vampire)", desc: "Your own platelet-rich plasma is applied post-microneedling to amplify rejuvenation and radiance.", time: "75 min" },
    ],
  },
  {
    id: "chemical-peels",
    category: "Chemical Peels",
    treatments: [
      { name: "Medical Peel", desc: "A customized acid peel selected at consultation based on your skin type and concern — from superficial brightening to deep resurfacing.", time: "30–45 min" },
      { name: "VI Peel", desc: "A powerful medical-grade peel targeting fine lines, acne, hyperpigmentation, melasma, and sun damage with visible results after one treatment.", time: "30 min" },
    ],
  },
  {
    id: "laser-light",
    category: "Laser & Light",
    treatments: [
      { name: "IPL Photofacial", desc: "Intense pulsed light targets sun spots, redness, and uneven tone for a clearer complexion.", time: "30 min" },
      { name: "Fractional CO₂ Laser", desc: "Deep resurfacing for wrinkles, scars, and significant texture irregularities using advanced laser technology.", time: "60–90 min" },
      { name: "Laser Hair Removal", desc: "Permanent reduction of unwanted hair on face and body, suitable for most skin types.", time: "15–60 min" },
      { name: "Vascular Laser", desc: "Eliminates spider veins, broken capillaries, and diffuse rosacea redness precisely and effectively.", time: "30 min" },
      { name: "Acne Scar Revision", desc: "Laser-based resurfacing protocol targeting depressed and textural acne scars for smoother skin.", time: "60 min" },
    ],
  },
  {
    id: "body",
    category: "Body",
    treatments: [
      { name: "RF Skin Tightening", desc: "Radiofrequency energy heats deep tissue to tighten lax skin on the arms, abdomen, and thighs.", time: "45–60 min" },
      { name: "Cellulite Treatment", desc: "Targets the fibrous bands causing skin dimpling for visibly smoother contours.", time: "60 min" },
      { name: "Stretch Mark Therapy", desc: "Laser and microneedling combination to reduce the appearance of stretch marks.", time: "60 min" },
      { name: "Abdominal Contouring", desc: "Non-invasive sculpting protocol for the midsection using radiofrequency and targeted modalities.", time: "45–60 min" },
      { name: "Arm & Thigh Sculpting", desc: "Focused toning and tightening treatments for the upper arms and inner thighs.", time: "45 min" },
    ],
  },
  {
    id: "wellness-iv",
    category: "Wellness / IV Therapy",
    treatments: [
      { name: "Myers' Cocktail IV", desc: "The classic nutrient drip — magnesium, B vitamins, vitamin C — for energy, immunity, and vitality.", time: "45 min" },
      { name: "Glutathione IV", desc: "Brightens skin tone, supports liver detoxification, and combats oxidative stress at the cellular level.", time: "30 min" },
      { name: "NAD+ Therapy", desc: "Anti-aging coenzyme infusion supporting cellular repair, mental clarity, and metabolic function.", time: "60–120 min" },
      { name: "Vitamin C High-Dose IV", desc: "Immune-boosting, collagen-supporting antioxidant infusion delivered directly into the bloodstream.", time: "45 min" },
    ],
  },
  {
    id: "medical",
    category: "Medical",
    treatments: [
      { name: "Functional Medicine Consultation", desc: "A root-cause wellness consultation identifying imbalances in nutrition, hormones, and lifestyle to optimize whole-body health.", time: "60 min" },
      { name: "Mesotherapy", desc: "Micro-injected cocktails of vitamins, enzymes, and medications targeting cellulite, skin rejuvenation, and hair loss.", time: "45 min" },
      { name: "Ultrasound", desc: "Diagnostic medical imaging to support treatment planning and internal health assessments.", time: "30 min" },
      { name: "Skin Tag Removal", desc: "Safe, precise removal of benign skin tags using medical-grade techniques with minimal discomfort.", time: "15–30 min" },
      { name: "Sclerotherapy", desc: "Injectable treatment for varicose and spider veins that causes them to fade and collapse over time.", time: "30–45 min" },
    ],
  },
  {
    id: "massage",
    category: "Massage",
    treatments: [
      { name: "Swedish Massage", desc: "Classic relaxation massage using long, flowing strokes to ease tension and improve circulation.", time: "60–90 min" },
      { name: "Deep Tissue Massage", desc: "Firm pressure targets deeper muscle layers to release chronic tension and postural pain.", time: "60–90 min" },
      { name: "Therapeutic Massage", desc: "Customized massage addressing specific muscular concerns and therapeutic goals.", time: "60 min" },
      { name: "Aromatherapy Massage", desc: "Swedish technique enhanced with essential oils chosen for your mood, stress level, or skin needs.", time: "60–90 min" },
      { name: "Manual Lymphatic Drainage", desc: "Gentle, rhythmic strokes stimulate the lymphatic system to reduce puffiness and support detoxification.", time: "60 min" },
      { name: "Reflexology", desc: "Targeted pressure on points of the feet and hands that correspond to organs and body systems.", time: "45–60 min" },
      { name: "Toning & Anti-Cellulite Massage", desc: "Vigorous massage techniques combined with contouring products to improve skin texture and tone.", time: "60 min" },
      { name: "Auriculotherapy", desc: "Stimulation of specific points on the ear to support pain relief, stress reduction, and systemic balance.", time: "30–45 min" },
    ],
  },
];

export function TreatmentsPage() {
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
          src="https://images.unsplash.com/photo-1643684391140-c5056cfd3436?w=1800&h=600&fit=crop&auto=format"
          alt="Facial treatment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55 flex flex-col items-center justify-center text-center px-6">
          <span className="text-[#829BB9] tracking-[0.3em] uppercase block mb-3" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.68rem", fontWeight: 300 }}>Explore the Menu</span>
          <h1 className="text-white" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 500 }}>All Treatments</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14 max-w-3xl mx-auto px-6 text-center">
        <p className="text-[#607080] leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem", fontWeight: 300 }}>
          A full menu of medical-grade treatments spanning face, body, laser, wellness, and more. All protocols are supervised by our board-certified medical team and customized to your skin type and goals.
        </p>
      </section>

      {/* Treatment categories */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-20 space-y-16">
        {categories.map(({ id, category, treatments }) => (
          <div key={category} id={id} className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-[#12202C] shrink-0" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", fontWeight: 500 }}>{category}</h2>
              <div className="flex-1 h-px bg-[#829BB9]/20" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {treatments.map(({ name, desc, time }) => (
                <div key={name} className="p-6 bg-[#EEF4F8] hover:bg-[#829BB9]/10 transition-colors duration-300 cursor-pointer">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-[#12202C]" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", fontWeight: 500 }}>{name}</h3>
                    <span className="text-[#829BB9] shrink-0 ml-2" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.68rem", fontWeight: 300 }}>{time}</span>
                  </div>
                  <p className="text-[#607080] leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", fontWeight: 300 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Note */}
      <section className="bg-[#12202C] py-14 px-6 text-center">
        <p className="text-white/70 max-w-xl mx-auto mb-6" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", fontWeight: 300 }}>
          Pricing varies by treatment area, protocol, and individual assessment. All pricing is discussed during your complimentary consultation.
        </p>
        <Link to="/contact" className="inline-block bg-[#829BB9] hover:bg-white text-white hover:text-black border border-transparent hover:border-[#829BB9] transition-colors duration-300 px-10 py-3.5" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", letterSpacing: "0.12em" }}>
          SCHEDULE A CONSULTATION
        </Link>
      </section>
    </div>
  );
}
