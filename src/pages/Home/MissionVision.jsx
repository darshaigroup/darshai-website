import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

const data = [
  {
    title: "Our Mission",
    text: `To restore biological sovereignty through the fusion of ancient ecology and modern AI. 
    We solve the crisis of modern burnout by recalibrating the human system.`,
    icon: <Target size={40} />,
  },
  {
    title: "Our Vision",
    text: `To become the global standard for longevity. We are moving toward a future where every 
    high-performer has a "DARSHAI Companion" a digital and physical ecosystem that monitors, 
    corrects, and optimizes their life in real-time.`,
    icon: <Eye size={40} />,
  },
];

function MissionVision() {
  return (
    <section className="py-24 bg-[#F5F1E8] px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* 🔹 CARDS */}
        <div className="grid md:grid-cols-2 gap-10">
          {data.map((item, index) => (
            <motion.div
  key={index}
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: index * 0.2 }}
  className="group p-10 rounded-2xl 
             bg-[#EFE8DC] 
             hover:bg-[#15803d]
             transition-all duration-500 
             relative overflow-hidden"
>

  {/* 🌿 ICON (VISIBLE ALWAYS - FADED) */}
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <div className="text-[#2A4A3A]/10 group-hover:text-[#C9A24A] 
                    opacity-100 group-hover:opacity-100 
                    scale-100 group-hover:scale-110 
                    transition-all duration-500">
      {item.icon}
    </div>
  </div>

  {/* 🔹 CONTENT */}
  <div className="relative z-10 transition-all duration-300">

    <h3 className="text-2xl font-serif text-[#2A4A3A] group-hover:text-white mb-4 transition">
      {item.title}
    </h3>

    <p className="text-[#6B7F73] group-hover:text-white leading-relaxed transition">
      {item.text}
    </p>

  </div>

</motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MissionVision;
