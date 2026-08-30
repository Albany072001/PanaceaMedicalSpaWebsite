import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CalendarCheck,
  Instagram,
  Facebook,
} from "lucide-react";

const hours = [
  { day: "Monday – Friday", time: "9:00 AM – 6:00 PM" },
  { day: "Saturday", time: "10:00 AM – 2:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#0F0F0D] text-[#F7F4EF]"
    >
      {/* Top CTA banner */}

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="mb-5">
            <span
              className="block text-[#F7F4EF] text-left"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.3rem",
                fontWeight: 600,
              }}
            >
              Panacean
            </span>
            <span
              className="tracking-[0.2em] uppercase text-[#829bb9] text-right"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.58rem",
                fontWeight: 300,
              }}
            >
              A remedy for the soul & body
            </span>
          </div>
          <p
            className="text-[#6B6860] leading-relaxed mb-6"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.85rem",
              fontWeight: 300,
            }}
          >
            Blending medical excellence with holistic wellness
            since 2020.
          </p>
          <div className="flex gap-3">
            <a
              href="#"
              className="w-9 h-9 border border-white/10 flex items-center justify-center text-[#6B6860] hover:text-[#829BB9] hover:border-[#829BB9]/40 transition-colors"
            >
              <Instagram size={15} />
            </a>
            <a
              href="#"
              className="w-9 h-9 border border-white/10 flex items-center justify-center text-[#6B6860] hover:text-[#829BB9] hover:border-[#829BB9]/40 transition-colors"
            >
              <Facebook size={15} />
            </a>
          </div>
        </div>

        {/* Hours */}
        <div>
          <h4
            className="tracking-[0.2em] uppercase mb-5 text-[#829bb9]"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.65rem",
              fontWeight: 300,
            }}
          >
            Hours of Operation
          </h4>
          <ul className="space-y-3">
            {hours.map(({ day, time }) => (
              <li key={day} className="flex flex-col">
                <span
                  className="text-[#F7F4EF]"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.82rem",
                    fontWeight: 400,
                  }}
                >
                  {day}
                </span>
                <span
                  className="text-[#6B6860]"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.78rem",
                    fontWeight: 300,
                  }}
                >
                  {time}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-2 text-[#6B6860]">
            <div className="flex items-start gap-2">
              <Clock size={13} className="mt-0.5 shrink-0 text-[#829BB9]" />
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", fontWeight: 300 }}>
                Holiday hours may vary
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CalendarCheck size={13} className="mt-0.5 shrink-0 text-[#829BB9]" />
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", fontWeight: 300 }}>
                By appointment only
              </span>
            </div>
          </div>
        </div>

        {/* Address */}
        <div>
          <h4
            className="tracking-[0.2em] uppercase mb-5 text-[#829bb9]"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.65rem",
              fontWeight: 300,
            }}
          >
            Our Location
          </h4>
          <div className="flex items-start gap-2.5 mb-4">
            <MapPin
              size={14}
              className="mt-0.5 shrink-0 text-[#829BB9]"
            />
            <address
              className="not-italic text-[#6B6860] leading-relaxed"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.85rem",
                fontWeight: 300,
              }}
            >
              167 Weston Road, Weston FL, 33326
              <br />
              <br />
            </address>
          </div>
          <a
            href="#"
            className="hover:underline text-[#829bb9] -mt-2 block"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.75rem",
              letterSpacing: "0.08em",
            }}
          >
            GET DIRECTIONS →
          </a>
        </div>

        {/* Contact */}
        <div>
          <h4
            className="tracking-[0.2em] uppercase mb-5 text-[#829bb9]"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.65rem",
              fontWeight: 300,
            }}
          >
            Contact Us
          </h4>
          <ul className="space-y-4">
            <li>
              <div className="flex items-center gap-2.5">
                <Phone
                  size={13}
                  className="text-[#829BB9] shrink-0"
                />
                <span
                  className="text-[#6B6860]"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.85rem",
                    fontWeight: 300,
                  }}
                >
                  954.937.6193
                </span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2.5">
                <Mail
                  size={13}
                  className="text-[#829BB9] shrink-0"
                />
                <span
                  className="text-[#6B6860]"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.85rem",
                    fontWeight: 300,
                  }}
                >
                  info@panaceanmedspa.com
                </span>
              </div>
            </li>
          </ul>
          <div className="mt-7">
            <p
              className="text-[#6B6860] mb-4"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.78rem",
                fontWeight: 300,
              }}
            >
              Prefer to message us?
            </p>
            <button
              className="w-full border border-white text-white hover:bg-[#829BB9] hover:text-black hover:border-[#829BB9] transition-colors duration-300 py-2.5"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.72rem",
                letterSpacing: "0.12em",
              }}
            >
              SEND A MESSAGE
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 px-6 md:px-10 py-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        <span
          className="text-[#6B6860]"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.72rem",
            fontWeight: 300,
          }}
        >
          © 2026 Serene Medical Spa. All rights reserved.
        </span>
        <div className="flex gap-6">
          {[
            "Privacy Policy",
            "Terms of Service",
            "Accessibility",
          ].map((link) => (
            <a
              key={link}
              href="#"
              className="text-[#6B6860] hover:text-[#829BB9] transition-colors"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.72rem",
                fontWeight: 300,
              }}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}