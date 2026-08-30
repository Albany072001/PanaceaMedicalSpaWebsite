import { useState, useEffect } from "react";
import { Link } from "react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import mariangelaImg from "../../imports/Mairangela_s_profile_pic.png";
import gabrielImg from "../../imports/Gabriel_s_profile.png";
import candyImg from "../../imports/Candy_s_profile_pic.png";
import pana1 from "../../imports/pana1.png";
import pana2 from "../../imports/pana2.png";
import pana3 from "../../imports/pana3.png";

const spaPhotos = [
  { src: pana1, alt: "Panacean Medical Spa — interior view" },
  { src: pana2, alt: "Panacean Medical Spa — treatment room" },
  { src: pana3, alt: "Panacean Medical Spa — spa ambiance" },
];

const team = [
  {
    name: "Mariangela Alvarez, Founder",
    role: "Medical Assistant · Facial Specialist · Electrologist & Tattoo Artist",
    bio: "With 30+ years in medicine and 11 in aesthetics, Mariangela is a facial specialist, tattoo artist, electrologist, and medical assistant dedicated to non-surgical body and face treatments. As founder of Panacean, she continuously seeks the best training and expertise to help clients achieve their personal aesthetic goals.",
    img: mariangelaImg,
  },
  {
    name: "Dr. Gabriel Alvarez",
    role: "Medical Director",
    bio: "American-trained, double board-certified physician with 25+ years of practice between Boston and Miami. As Medical Director of Panacean, he leads the team in delivering cutting-edge skin care for face, neck, and body. Born in Venezuela, he brings a unique cultural perspective to patient care — and a personal passion for nutrition, active living, and meditation.",
    img: gabrielImg,
  },
  {
    name: "Candy Garcia",
    role: "Registered Nurse",
    bio: "A Medical Doctor and Radiologist from Venezuela turned Functional Medicine advocate, Candy brings a prevention-first philosophy to Panacean. Fascinated by each patient's unique genetics and bio-medical makeup, she works one-on-one to help clients reach optimal body and mind function — her definition of a truly blissful life.",
    img: candyImg,
  },
];

const values = [
  { title: "Clinical Excellence", desc: "Every treatment is grounded in evidence-based medicine and performed only by trained medical professionals." },
  { title: "Personalized Care", desc: "No two clients are alike. We design every protocol around your unique skin, goals, and lifestyle." },
  { title: "Natural Results", desc: "We believe in enhancing what you have — not changing who you are. Subtlety is our signature." },
  { title: "Ongoing Support", desc: "Your journey doesn't end at checkout. We provide follow-up care and long-term skin management plans." },
];

function SpaCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent(i => (i + 1) % spaPhotos.length), 4500);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent(i => (i - 1 + spaPhotos.length) % spaPhotos.length);
  const next = () => setCurrent(i => (i + 1) % spaPhotos.length);

  return (
    <div className="relative overflow-hidden rounded-none">
      <div className="aspect-[16/9] relative">
        {spaPhotos.map((photo, i) => (
          <img
            key={i}
            src={photo.src}
            alt={photo.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
          />
        ))}
      </div>
      {/* Arrows */}
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-[#829BB9] text-white p-2.5 transition-colors duration-300">
        <ChevronLeft size={20} />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-[#829BB9] text-white p-2.5 transition-colors duration-300">
        <ChevronRight size={20} />
      </button>
      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {spaPhotos.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`h-0.5 transition-all duration-400 ${i === current ? "w-8 bg-[#829BB9]" : "w-4 bg-white/60"}`} />
        ))}
      </div>
    </div>
  );
}

export function AboutPage() {
  return (
    <div className="bg-white pt-20">
      {/* Hero */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1720118509152-2df877673bee?w=1800&h=600&fit=crop&auto=format"
          alt="Serene spa interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6">
          <span className="tracking-[0.3em] uppercase block mb-3 text-[#f9f9f9]" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.68rem", fontWeight: 300 }}>Our Story</span>
          <h1 className="text-white" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 500 }}>About Panacean</h1>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-[#829BB9] tracking-[0.3em] uppercase block mb-4" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.68rem", fontWeight: 300 }}>Who We Are</span>
          <h2 className="text-[#12202C] mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 500, lineHeight: 1.2 }}>A Remedy for the <span className="italic text-[#829BB9]">Body &amp; Soul</span>
          </h2>
          <p className="text-[#607080] mb-5 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.98rem", fontWeight: 300 }}>Founded in 2020 by Mariangela Alvarez , Panacean was born from a simple belief: that great skincare should be both medically rigorous and deeply restorative. Too often, people are forced to choose between clinical effectiveness and a calming experience. We refuse to make that trade-off.</p>
          <p className="text-[#607080] leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.98rem", fontWeight: 300 }}>
            Located in Weston, FL, our center combines board-certified medical expertise with the warmth and attentiveness of a boutique spa — creating a space where you feel genuinely cared for at every step.
          </p>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1696841212541-449ca29397cc?w=700&h=900&fit=crop&auto=format" alt="Spa treatment" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-5 -left-5 w-full h-full border border-[#829BB9]/30 -z-10" />
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#EEF4F8] py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14">
            <span className="text-[#829BB9] tracking-[0.3em] uppercase block mb-4" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.68rem", fontWeight: 300 }}>What Guides Us</span>
            <h2 className="text-[#12202C]" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 500 }}>Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ title, desc }) => (
              <div key={title} className="bg-white p-7 border-t-2 border-[#829BB9]">
                <h3 className="text-[#12202C] mb-3" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 500 }}>{title}</h3>
                <p className="text-[#607080] leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", fontWeight: 300 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-14">
          <span className="text-[#829BB9] tracking-[0.3em] uppercase block mb-4" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.68rem", fontWeight: 300 }}>The People Behind Panacean</span>
          <h2 className="text-[#12202C]" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 500 }}>Meet Our Team</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {team.map(({ name, role, bio, img }) => (
            <div key={name}>
              <div className="aspect-[3/4] overflow-hidden mb-5">
                <img src={img} alt={name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
              <h3 className="text-[#12202C] mb-1" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 500 }}>{name}</h3>
              <span className="text-[#829BB9] block mb-3" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", letterSpacing: "0.08em" }}>{role.toUpperCase()}</span>
              <p className="text-[#607080] leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", fontWeight: 300 }}>{bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}

      {/* CTA */}
      <section className="py-20 px-6">
        {/* Gallery carousel */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-8">
            <span className="text-[#829BB9] tracking-[0.3em] uppercase block mb-3" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.68rem", fontWeight: 300 }}>Our Space</span>
            <h2 className="text-[#12202C]" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 500 }}>Inside Panacean</h2>
          </div>
          <SpaCarousel />
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-[#12202C] mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 500 }}>Ready to Experience Panacean?</h2>
          <p className="text-[#607080] mb-8 max-w-md mx-auto" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", fontWeight: 300 }}>Book a complimentary consultation and let us design a plan tailored to your skin.</p>
          <Link to="/contact" className="inline-block bg-[#829BB9] hover:bg-white hover:text-black text-white border border-transparent hover:border-[#829BB9] transition-colors duration-300 px-10 py-3.5" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", letterSpacing: "0.12em" }}>
            BOOK A CONSULTATION
          </Link>
        </div>
      </section>
    </div>
  );
}
