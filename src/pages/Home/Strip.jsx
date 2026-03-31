import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Zap, Sparkles } from "lucide-react";

const items = [
  { icon: <Lock size={18} />, text: "Stealth Phase" },
  { icon: <Zap size={18} />, text: "Pilot Launch June 2026" },
  { icon: <Sparkles size={18} />, text: "Limited Access — Quick Enrollment" },
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
        key={paused ? "paused" : "running"} // 🔥 forces reset
        initial={{ x: "100%" }}
        animate={{ x: paused ? "0%" : "-100%" }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: paused ? 0 : Infinity,
          repeatType: "loop",
          repeatDelay: 1, // ✅ 1 sec gap before restart
        }}
      >
        {items.map((item, i) => (
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