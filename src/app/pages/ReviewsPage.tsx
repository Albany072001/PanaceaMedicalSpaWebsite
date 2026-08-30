import { Star } from "lucide-react";
import { Link } from "react-router";

const reviews = [
  {
    name: "Amanda Chen",
    title: "Regular Client since 2021",
    service: "HydraFacial Series",
    rating: 5,
    text: "Serene Medical Spa completely transformed my confidence. Dr. Vasquez took the time to understand exactly what I wanted, and the HydraFacial series gave me the most luminous skin I've had in years. This isn't just a spa — it's a genuine sanctuary.",
    img: "https://images.unsplash.com/photo-1728727217834-b190862837a3?w=80&h=80&fit=crop&auto=format",
  },
  {
    name: "Marcus Torres",
    title: "Body Contouring & IV Therapy Client",
    service: "Body Contouring + IV Therapy",
    rating: 5,
    text: "I was skeptical about non-invasive body contouring, but after just four sessions the results were undeniable. The staff is warm, knowledgeable, and never pushy. The IV wellness therapy has become my monthly ritual — I feel like a different person.",
    img: "https://images.unsplash.com/photo-1661346376364-706a9eac60ab?w=80&h=80&fit=crop&auto=format",
  },
  {
    name: "Priya Sharma",
    title: "Botox & Filler Client",
    service: "Botox & Dermal Fillers",
    rating: 5,
    text: "I was nervous about injectables, but the team walked me through every step. The results are incredibly natural — friends say I look refreshed, not 'done.' The facility itself is stunning, and I always leave feeling completely pampered.",
    img: "https://images.unsplash.com/photo-1643684391140-c5056cfd3436?w=80&h=80&fit=crop&auto=format",
  },
  {
    name: "Sofia Reinholt",
    title: "Laser Treatment Client",
    service: "IPL Photofacial Series",
    rating: 5,
    text: "After struggling with pigmentation for years, the laser treatment series changed everything. The aestheticians are true experts who adjusted my protocol as my skin responded. The attention to detail here is unlike anything I've experienced elsewhere.",
    img: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=80&h=80&fit=crop&auto=format",
  },
  {
    name: "James Whitfield",
    title: "Chemical Peel Client",
    service: "VI Peel",
    rating: 5,
    text: "My first chemical peel and I couldn't be happier. The team was incredibly reassuring and the aftercare instructions were thorough. My skin looks like I turned back the clock 10 years. Already booked my second treatment.",
    img: "https://images.unsplash.com/photo-1488345979593-09db0f85545f?w=80&h=80&fit=crop&auto=format",
  },
  {
    name: "Lucia Fernandez",
    title: "Microneedling Client",
    service: "Microneedling with PRP",
    rating: 5,
    text: "The microneedling with PRP was a game changer for my acne scars. After three sessions my skin texture improved dramatically. Everyone on the team is professional, attentive, and genuinely invested in your results.",
    img: "https://images.unsplash.com/photo-1676302144341-10563603f99a?w=80&h=80&fit=crop&auto=format",
  },
];

export function ReviewsPage() {
  return (
    <div className="bg-white pt-20">
      {/* Hero */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1800&h=600&fit=crop&auto=format"
          alt="Happy client"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55 flex flex-col items-center justify-center text-center px-6">
          <span className="text-[#829BB9] tracking-[0.3em] uppercase block mb-3" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.68rem", fontWeight: 300 }}>Client Stories</span>
          <h1 className="text-white" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 500 }}>What Our Clients Say</h1>
        </div>
      </section>

      {/* Rating summary */}
      <section className="bg-[#EEF4F8] py-12">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center">
          <div>
            <span className="block text-[#12202C]" style={{ fontFamily: "'Playfair Display', serif", fontSize: "3.5rem", fontWeight: 500 }}>4.8</span>
            <div className="flex justify-center gap-1 my-2">
              {[1,2,3,4,5].map(i => <Star key={i} size={16} className="fill-[#829BB9] text-[#829BB9]" />)}
            </div>
            <span className="text-[#607080]" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", fontWeight: 300 }}>Average Rating</span>
          </div>
          <div className="w-px h-16 bg-[#829BB9]/20 hidden md:block" />
          <div>
            <span className="block text-[#12202C]" style={{ fontFamily: "'Playfair Display', serif", fontSize: "3.5rem", fontWeight: 500 }}>98</span>
            <span className="text-[#607080]" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", fontWeight: 300 }}>Verified Google Reviews</span>
          </div>
          <div className="w-px h-16 bg-[#829BB9]/20 hidden md:block" />
          <div>
            <span className="block text-[#12202C]" style={{ fontFamily: "'Playfair Display', serif", fontSize: "3.5rem", fontWeight: 500 }}>100%</span>
            <span className="text-[#607080]" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", fontWeight: 300 }}>Would Recommend</span>
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-[#FAFCFE] border border-[#829BB9]/15 p-8 flex flex-col hover:border-[#829BB9]/40 transition-colors duration-300">
              <div className="flex gap-1 mb-2">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} size={13} className="fill-[#829BB9] text-[#829BB9]" />
                ))}
              </div>
              <span className="text-[#829BB9] mb-4 block" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.68rem", letterSpacing: "0.1em" }}>{r.service.toUpperCase()}</span>
              <p className="text-[#3B3B38] leading-relaxed flex-1 mb-8 italic" style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.98rem", fontWeight: 400 }}>
                "{r.text}"
              </p>
              <div className="flex items-center gap-4 border-t border-[#829BB9]/10 pt-6">
                <div className="w-11 h-11 rounded-full overflow-hidden bg-[#EEF4F8] shrink-0">
                  <img src={r.img} alt={r.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <span className="block text-[#12202C]" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem", fontWeight: 500 }}>{r.name}</span>
                  <span className="text-[#607080]" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", fontWeight: 300 }}>{r.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#829BB9] py-16 text-center px-6">
        <h2 className="text-white mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 500 }}>Join Thousands of Happy Clients</h2>
        <p className="text-white/80 mb-8 max-w-md mx-auto" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", fontWeight: 300 }}>Start your journey with a complimentary consultation.</p>
        <Link to="/contact" className="inline-block bg-white text-black hover:bg-[#12202C] hover:text-white transition-colors duration-300 px-10 py-3.5" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", letterSpacing: "0.12em" }}>
          BOOK YOUR VISIT
        </Link>
      </section>
    </div>
  );
}
