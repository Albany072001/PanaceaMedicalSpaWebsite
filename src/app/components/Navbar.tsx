import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router";

const links = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Treatments", path: "/treatments" },
  { label: "Reviews", path: "/reviews" },
  { label: "Contact", path: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Reset scroll state on page change
  useEffect(() => {
    setScrolled(false);
    setOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  // On inner pages, always treat as scrolled (blue background)
  const isBlue = !isHome || scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isBlue ? "bg-[#829BB9] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex flex-col leading-none">
          <span
            className={`text-center ${isBlue ? "text-white" : "text-[#829BB9]"}`}
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.45rem", fontWeight: 600, letterSpacing: "0.02em" }}
          >
            Panacean
          </span>
          <span
            className="tracking-[0.25em] uppercase text-[#ffffff]"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.6rem", fontWeight: 300 }}
          >
            Medical Skincare &amp; Laser Center
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ label, path }) => (
            <li key={label}>
              <Link
                to={path}
                className={`transition-colors duration-200 tracking-wide text-[#ffffff] ${isBlue ? "hover:text-black" : "hover:text-[#829BB9]"} ${pathname === path ? "underline underline-offset-4" : ""}`}
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", fontWeight: 400, letterSpacing: "0.08em" }}
              >
                {label.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>

        {/* Book button */}
        <Link
          to="/contact"
          className={`hidden md:block transition-colors duration-300 px-6 py-2.5 ${isBlue ? "bg-white text-black" : "bg-[#829BB9] text-white"}`}
          style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", letterSpacing: "0.1em" }}
        >
          BOOK NOW
        </Link>

        {/* Mobile toggle */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#829BB9] px-6 pb-8 border-t border-white/10">
          <ul className="flex flex-col gap-5 pt-6">
            {links.map(({ label, path }) => (
              <li key={label}>
                <Link
                  to={path}
                  onClick={() => setOpen(false)}
                  className="text-white hover:text-black transition-colors w-full block"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", letterSpacing: "0.08em" }}
                >
                  {label.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-6 w-full bg-white text-black py-3 block text-center"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", letterSpacing: "0.1em" }}
          >
            BOOK NOW
          </Link>
        </div>
      )}
    </nav>
  );
}
