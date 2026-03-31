import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Zap, Sparkles } from "lucide-react";

const items = [
  { icon: <Lock size={18} />, text: "Stealth Phase" },
  { icon: <Zap size={18} />, text: "Pilot Launch Q2 2026" },
  { icon: <Sparkles size={18} />, text: "Limited Access — Curated Enrollment" },
];

 function Strip() {
  const [paused, setPaused] = useState(false);

  return (
    <div
      className="overflow-hidden border-y bg-[#F1ECE2] py-4"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <motion.div
        className="flex gap-16 whitespace-nowrap"
        animate={{ x: paused ? 0 : ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-2 text-[#6B7F73]">
            {item.icon}
            <span>{item.text}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Strip;