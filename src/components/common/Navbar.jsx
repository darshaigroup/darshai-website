import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 50);
    });
  }, []);

  return (
    <nav className={`fixed w-full z-50 ${scrolled ? "bg-white shadow" : ""}`}>
      <div className="max-w-7xl mx-auto flex justify-between p-4">
        <h1 className="font-serif text-xl">DARSHAI</h1>

        <div className="flex gap-6">
          {["home", "about", "services", "contact"].map((item) => (
            <a key={item} href={`#${item}`} className="hover:text-green-700">
              {item}
            </a>
          ))}
        </div>

        <button className="bg-green-700 text-white px-4 py-2 rounded-full">
          Join Waitlist
        </button>
      </div>
    </nav>
  );
}