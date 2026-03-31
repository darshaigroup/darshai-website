import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/images/logo.png"; // change if needed

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // close menu on click
  };

  const navItems = ["Home", "About", "Services", "Contact"];

  return (
    <nav
     className={`fixed w-full z-50 transition-all duration-300 
  bg-[#F1ECE2]/90 backdrop-blur-md 
  ${scrolled ? "shadow-md" : ""}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* 🔹 LOGO */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Darshai Logo"
            className="w-[50px] sm:w-[px] md:w-[40px] lg:w-[48px] 
               h-auto object-contain transition-all duration-300"
          />
        </div>

        {/* 🔹 DESKTOP MENU */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
          <a
      key={item}
      href={`#${item.toLowerCase()}`}
      className="relative group text-[#2A4A3A] transition-colors duration-300"
    >
      <span className="inline-block transition-all duration-300 group-hover:-translate-y-1 group-hover:text-[#C9A75B]">
        {item}
      </span>
    </a>
          ))}
        </div>

        {/* 🔹 DESKTOP BUTTON */}
        <button
          onClick={scrollToContact}
          className="hidden md:block bg-[#15803d] text-white px-5 py-2 rounded-full hover:bg-[#35644d] transition"
        >
          Join Waitlist
        </button>

        {/* 🔹 MOBILE MENU BUTTON */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(true)}>
            <FaBars size={22} />
          </button>
        </div>
      </div>

      {/* 📱 MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 w-full h-screen bg-white z-50 flex flex-col p-6"
          >
            {/* ❌ CLOSE BUTTON */}
            <div className="flex justify-end">
              <button onClick={() => setMenuOpen(false)}>
                <FaTimes size={24} />
              </button>
            </div>

            {/* 🔹 MENU ITEMS */}
            <div className="flex flex-col items-center gap-8 mt-16 text-xl">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-[#15803d] hover:text-[#8FAE97] transition"
                >
                  {item}
                </a>
              ))}

              {/* 🔹 CTA */}
              <button
                onClick={scrollToContact}
                className="bg-[#15803d] text-white px-6 py-3 rounded-full mt-6"
              >
                Join Waitlist
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}