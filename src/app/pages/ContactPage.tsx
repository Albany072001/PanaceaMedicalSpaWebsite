import { useState } from "react";
import { MapPin, Phone, Mail, Clock, CalendarCheck } from "lucide-react";

const hours = [
  { day: "Monday – Friday", time: "9:00 AM – 6:00 PM" },
  { day: "Saturday", time: "10:00 AM – 2:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="bg-white pt-20">
      {/* Hero */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1676302144341-10563603f99a?w=1800&h=500&fit=crop&auto=format"
          alt="Spa reception"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55 flex flex-col items-center justify-center text-center px-6">
          <span className="text-[#829BB9] tracking-[0.3em] uppercase block mb-3" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.68rem", fontWeight: 300 }}>Get in Touch</span>
          <h1 className="text-white" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 500 }}>Contact Us</h1>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 grid md:grid-cols-2 gap-14">
        {/* Info */}
        <div>
          <span className="text-[#829BB9] tracking-[0.3em] uppercase block mb-4" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.68rem", fontWeight: 300 }}>Find Us</span>
          <h2 className="text-[#12202C] mb-8" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 500, lineHeight: 1.2 }}>We'd Love to <span className="italic text-[#829BB9]">Hear From You</span></h2>

          <div className="space-y-6 mb-10">
            <div className="flex items-start gap-4">
              <MapPin size={16} className="text-[#829BB9] mt-0.5 shrink-0" />
              <div>
                <span className="block text-[#12202C] mb-0.5" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", fontWeight: 500 }}>Our Location</span>
                <address className="not-italic text-[#607080] leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", fontWeight: 300 }}>
                  167 Weston Road<br />Weston, FL 33326
                </address>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone size={16} className="text-[#829BB9] mt-0.5 shrink-0" />
              <div>
                <span className="block text-[#12202C] mb-0.5" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", fontWeight: 500 }}>Phone</span>
                <span className="text-[#607080]" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", fontWeight: 300 }}>954.937.6193</span>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail size={16} className="text-[#829BB9] mt-0.5 shrink-0" />
              <div>
                <span className="block text-[#12202C] mb-0.5" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", fontWeight: 500 }}>Email</span>
                <span className="text-[#607080]" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", fontWeight: 300 }}>info@panaceanmedspa.com</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="border-t border-[#829BB9]/15 pt-8">
            <h3 className="text-[#12202C] mb-5" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 500 }}>Hours of Operation</h3>
            <ul className="space-y-3 mb-4">
              {hours.map(({ day, time }) => (
                <li key={day} className="flex justify-between">
                  <span className="text-[#12202C]" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", fontWeight: 400 }}>{day}</span>
                  <span className="text-[#607080]" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", fontWeight: 300 }}>{time}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-[#607080]">
                <Clock size={13} className="text-[#829BB9]" />
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", fontWeight: 300 }}>Holiday hours may vary</span>
              </div>
              <div className="flex items-center gap-2 text-[#607080]">
                <CalendarCheck size={13} className="text-[#829BB9]" />
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", fontWeight: 300 }}>By appointment only</span>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div>
          <span className="text-[#829BB9] tracking-[0.3em] uppercase block mb-4" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.68rem", fontWeight: 300 }}>Request an Appointment</span>
          <h2 className="text-[#12202C] mb-8" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 500 }}>Book a Consultation</h2>

          {sent ? (
            <div className="bg-[#EEF4F8] border border-[#829BB9]/30 p-10 text-center">
              <div className="w-12 h-12 bg-[#829BB9] flex items-center justify-center mx-auto mb-4">
                <CalendarCheck size={22} className="text-white" />
              </div>
              <h3 className="text-[#12202C] mb-2" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", fontWeight: 500 }}>Request Received</h3>
              <p className="text-[#607080]" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem", fontWeight: 300 }}>Thank you! A member of our team will reach out within 24 hours to confirm your appointment.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[#12202C] mb-2" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", letterSpacing: "0.08em" }}>FULL NAME</label>
                  <input
                    required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-[#829BB9]/25 focus:border-[#829BB9] outline-none px-4 py-3 bg-white transition-colors"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem" }}
                    placeholder="Jane Smith"
                  />
                </div>
                <div>
                  <label className="block text-[#12202C] mb-2" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", letterSpacing: "0.08em" }}>PHONE</label>
                  <input
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    className="w-full border border-[#829BB9]/25 focus:border-[#829BB9] outline-none px-4 py-3 bg-white transition-colors"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem" }}
                    placeholder="(954) 000-0000"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[#12202C] mb-2" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", letterSpacing: "0.08em" }}>EMAIL</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-[#829BB9]/25 focus:border-[#829BB9] outline-none px-4 py-3 bg-white transition-colors"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem" }}
                  placeholder="jane@email.com"
                />
              </div>
              <div>
                <label className="block text-[#12202C] mb-2" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", letterSpacing: "0.08em" }}>SERVICE INTERESTED IN</label>
                <select
                  value={form.service}
                  onChange={e => setForm({ ...form, service: e.target.value })}
                  className="w-full border border-[#829BB9]/25 focus:border-[#829BB9] outline-none px-4 py-3 bg-white transition-colors text-[#607080]"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem" }}
                >
                  <option value="">Select a service…</option>
                  <option value="General Consultation">General Consultation</option>
                  <optgroup label="─── Face / Injectables ───">
                    <option>Botox</option>
                    <option>Dysport</option>
                    <option>Xeomin</option>
                    <option>Dermal Fillers</option>
                    <option>Radiesse</option>
                    <option>Belotero</option>
                    <option>Restylane Kysse</option>
                    <option>Biostimulators</option>
                  </optgroup>
                  <optgroup label="─── Face / Skin ───">
                    <option>Panacean Custom Facial</option>
                    <option>Hydrodermabrasion</option>
                    <option>HydraFacial MD</option>
                    <option>Personalized Acne Treatment</option>
                    <option>Dermaplaning</option>
                    <option>Microdermabrasion</option>
                    <option>Microneedling</option>
                    <option>RF Fractional Microneedling</option>
                    <option>Triniti Plus (Elos Plus)</option>
                    <option>LED Therapy</option>
                    <option>PRP Facial (Vampire)</option>
                  </optgroup>
                  <optgroup label="─── Chemical Peels ───">
                    <option>Medical Peel</option>
                    <option>VI Peel</option>
                  </optgroup>
                  <optgroup label="─── Laser & Light ───">
                    <option>IPL Photofacial</option>
                    <option>Fractional CO₂ Laser</option>
                    <option>Laser Hair Removal</option>
                    <option>Vascular Laser</option>
                    <option>Acne Scar Revision</option>
                  </optgroup>
                  <optgroup label="─── Body ───">
                    <option>RF Skin Tightening</option>
                    <option>Cellulite Treatment</option>
                    <option>Stretch Mark Therapy</option>
                    <option>Abdominal Contouring</option>
                    <option>Arm &amp; Thigh Sculpting</option>
                  </optgroup>
                  <optgroup label="─── Wellness / IV Therapy ───">
                    <option>{"Myers' Cocktail IV"}</option>
                    <option>Glutathione IV</option>
                    <option>NAD+ Therapy</option>
                    <option>Vitamin C High-Dose IV</option>
                  </optgroup>
                  <optgroup label="─── Medical ───">
                    <option>Functional Medicine Consultation</option>
                    <option>Mesotherapy</option>
                    <option>Ultrasound</option>
                    <option>Skin Tag Removal</option>
                    <option>Sclerotherapy</option>
                  </optgroup>
                  <optgroup label="─── Massage ───">
                    <option>Swedish Massage</option>
                    <option>Deep Tissue Massage</option>
                    <option>Therapeutic Massage</option>
                    <option>Aromatherapy Massage</option>
                    <option>Manual Lymphatic Drainage</option>
                    <option>Reflexology</option>
                    <option>Toning &amp; Anti-Cellulite Massage</option>
                    <option>Auriculotherapy</option>
                  </optgroup>
                </select>
              </div>
              <div>
                <label className="block text-[#12202C] mb-2" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", letterSpacing: "0.08em" }}>MESSAGE (OPTIONAL)</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  className="w-full border border-[#829BB9]/25 focus:border-[#829BB9] outline-none px-4 py-3 bg-white transition-colors resize-none"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem" }}
                  placeholder="Tell us about your skin concerns or goals…"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#829BB9] hover:bg-white text-white hover:text-black border border-transparent hover:border-[#829BB9] transition-colors duration-300 py-4"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", letterSpacing: "0.14em" }}
              >
                REQUEST APPOINTMENT
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
