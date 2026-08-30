import { Outlet, useLocation } from "react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Root() {
  const { pathname } = useLocation();
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }} className="bg-white">
      <Navbar />
      <main key={pathname}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
