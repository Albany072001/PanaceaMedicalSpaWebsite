import { Link } from "react-router";

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#F7F4EF]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-center">
        {/* Image side */}
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1720118509152-2df877673bee?w=800&h=1000&fit=crop&auto=format"
              alt="Tranquil spa ambiance with candles and serene lighting"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative offset border */}
          <div className="absolute -bottom-5 -right-5 w-full h-full border border-[#C4965A]/40 -z-10" />
          {/* Stats badge */}
          <div className="absolute -bottom-6 left-6 text-[#F7F4EF] px-8 py-5 bg-[#829bb9]">
            <span
              className="block"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "2rem",
                fontWeight: 500,
              }}
            >25+</span>
            <span
              className="block tracking-widest uppercase text-[#ffffff]"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.65rem",
                fontWeight: 300,
              }}
            >
              Years of Excellence
            </span>
          </div>
        </div>

        {/* Text side */}
        <div className="md:pl-8">
          <span
            className="tracking-[0.3em] uppercase block mb-5 text-[#000000]"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.68rem",
              fontWeight: 300,
            }}
          >
            About Us
          </span>
          <h2
            className="text-[#1A1A18] mb-6 leading-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 500,
              lineHeight: 1.2,
            }}
          >
            A Sanctuary Rooted in
            <span className="italic text-[#829BB9]">
              {" "}
              Science & Serenity
            </span>
          </h2>
          <p
            className="text-[#6B6860] mb-5 leading-relaxed"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.98rem",
              fontWeight: 300,
            }}
          >Panacean Medical Skin Care and Laser Center is a medical spa in Weston, Florida. We offer innovative aesthetic solutions for every skin type. Our Mission is focused on preventive and corrective skin care treatments to rejuvenate the body and face. Our practice guides clients through the maze of non-surgical treatment options to provide a customized treatment plan.</p>
          <p
            className="text-[#6B6860] mb-10 leading-relaxed"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.98rem",
              fontWeight: 300,
            }}
          >Our primary goal is a natural result with a brief recovery. Elevate your senses and find your perfect Panacean.</p>

          {/* Divider row */}
          <div className="flex gap-8 mb-10 border-t border-[#3B5447]/15 pt-8">
            {[
              { stat: "8,000+", label: "Happy Clients" },
              { stat: "40+", label: "Treatments Offered" },
              { stat: "12", label: "Award Wins" },
            ].map(({ stat, label }) => (
              <div key={label}>
                <span
                  className="block text-[#829bb9]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.6rem",
                    fontWeight: 500,
                  }}
                >
                  {stat}
                </span>
                <span
                  className="tracking-wide text-[#706e5d]"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.72rem",
                    fontWeight: 300,
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>

          <Link
            to="/about"
            className="inline-block bg-[#829BB9] hover:bg-white text-white hover:text-black border border-transparent hover:border-[#829BB9] transition-colors duration-300 px-8 py-3.5"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.78rem",
              letterSpacing: "0.12em",
            }}
          >
            READ MORE ABOUT US
          </Link>
        </div>
      </div>
    </section>
  );
}