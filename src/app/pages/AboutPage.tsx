import { useState, useEffect } from "react";
import { Link } from "react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import mariangelaImg from "../../imports/Mairangela_s_profile_pic.png";
import gabrielImg from "../../imports/Gabriel_s_profile.png";
import candyImg from "../../imports/Candy_s_profile_pic.png";
import dsc00234 from "../../imports/DSC00234.JPG";
import dsc00323 from "../../imports/DSC00323.JPG";
import dsc00265 from "../../imports/DSC00265.JPG";
import dsc00266 from "../../imports/DSC00266.JPG";
import dsc00245 from "../../imports/DSC00245.JPG";
import pana1_1 from "../../imports/pana1-1.png";

const spaPhotos = [
  { src: dsc00265, alt: "Panacean Medical Spa — interior view" },
  { src: dsc00266, alt: "Panacean Medical Spa — treatment room" },
  { src: dsc00245, alt: "Panacean Medical Spa — spa ambiance" },
  { src: pana1_1, alt: "Panacean Medical Spa — spa experience" },
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
  {
    name: "Dr. Liliana Reina",
    role: "Surgeon from Colombia",
    bio: "Dr. Liliana holds an international certification and is a member of the International Society of Hair Restoration Surgery. With over 35 years of experience, Dr. Liliana specializes in hair restoration surgery and has extensive expertise in helping patients address hair loss.",
    img: null,
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
      <section className="relative h-72 md:h-96 lg:h-[500px] xl:h-[580px] overflow-hidden">
        <img
          src={dsc00234}
          alt="Panacean Medical Spa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" style={{ backdropFilter: "grayscale(1) brightness(0.95)" }} />
      </section>

      {/* Mission */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-[#829BB9] tracking-[0.3em] uppercase block mb-4" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "20px", fontWeight: 300 }}>Who We Are</span>
          <h2 className="text-[#12202C] mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 500, lineHeight: 1.2 }}>A Remedy for the <span className="italic text-[#829BB9]">Body &amp; Soul</span>
          </h2>
          <p className="text-[#607080] mb-5 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.98rem", fontWeight: 300 }}>Founded in 2020 by Mariangela Alvarez , Panacean was born from a simple belief: that great skincare should be both medically rigorous and deeply restorative. Too often, people are forced to choose between clinical effectiveness and a calming experience. We refuse to make that trade-off.</p>
          <p className="text-[#607080] leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.98rem", fontWeight: 300 }}>
            Located in Weston, FL, our center combines board-certified medical expertise with the warmth and attentiveness of a boutique spa — creating a space where you feel genuinely cared for at every step.
          </p>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden">
            <img src={dsc00323} alt="Spa treatment" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-5 -left-5 w-full h-full border border-[#829BB9]/30 -z-10" />
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#EEF4F8] py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14">
            <span className="text-[#829BB9] tracking-[0.3em] uppercase block mb-4" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "20px", fontWeight: 300 }}>What Guides Us</span>
            <h2 className="text-[#12202C]" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 500 }}>Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ title, desc }) => (
              <div key={title} className="bg-white p-7 border-t-2 border-[#829BB9]">
                <h3 className="text-[#12202C] mb-3" style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 500 }}>{title}</h3>
                <p className="text-[#607080] leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", fontWeight: 300 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-14">
          <span className="text-[#829BB9] tracking-[0.3em] uppercase block mb-4" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "20px", fontWeight: 300 }}>The People Behind Panacean</span>
          <h2 className="text-[#12202C]" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 500 }}>Meet Our Team</h2>
        </div>
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-10">
          {team.map(({ name, role, bio, img }) => (
            <div key={name}>
              <div className="aspect-[3/4] overflow-hidden mb-5">
                {img
                ? <img src={img} alt={name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                : <div className="w-full h-full bg-[#EEF4F8] flex items-center justify-center"><span className="text-[#829BB9]/40" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", letterSpacing: "0.1em" }}>PHOTO COMING SOON</span></div>
              }
              </div>
              <h3 className="text-[#12202C] mb-1" style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 500 }}>{name}</h3>
              <span className="text-[#829BB9] block mb-3" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", letterSpacing: "0.08em" }}>{role.replace("Electrologist", "Laser Technician").toUpperCase()}</span>
              <p className="text-[#607080] leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "18px", fontWeight: 300 }}>{bio.replace("11 in aesthetics", "17 in aesthetics").replace("Electrologist", "Laser Technician").replace("25+ years", "30 years")}</p>
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
            <span className="text-[#829BB9] tracking-[0.3em] uppercase block mb-3" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "20px", fontWeight: 300 }}>Our Space</span>
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
