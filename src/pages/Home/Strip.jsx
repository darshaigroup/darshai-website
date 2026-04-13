import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Zap, Sparkles } from "lucide-react";

const items = [
  { icon: <Lock size={20} />, text: "Stealth Phase" },
  { icon: <Zap size={20} />, text: "Pilot Launch - Coming Soon" },
  { icon: <Sparkles size={20} />, text: "Limited Access — Quick Enrollment" },
];

function Strip() {
  const [paused, setPaused] = useState(false);

  return (
    <div
      className="overflow-hidden border-y bg-[#15803d] py-5"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <motion.div
        className="flex gap-20 whitespace-nowrap"
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
          <div key={i} className="flex items-center gap-3 text-[#fcfafa]">

            {/* 🔥 ANIMATED ICON */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                y: [0, -4, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3, // stagger effect
              }}
              className="relative flex items-center justify-center"
            >
              {/* ✨ GLOW BACKGROUND */}
              <div className="absolute w-8 h-8 bg-white/20 rounded-full blur-md"></div>

              {/* ICON */}
              <div className="relative z-10 text-white">
                {item.icon}
              </div>
            </motion.div>

            {/* TEXT */}
            <span className="text-xl font-medium font-serif tracking-wide">
              {item.text}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Strip;