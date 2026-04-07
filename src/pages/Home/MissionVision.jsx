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

        {/* 🔹 SECTION TITLE */}
        <p className="text-xs tracking-[0.3em] text-[#8FAE97] mb-3">
          OUR FOUNDATION
        </p>

        <h2 className="text-4xl md:text-5xl font-serif text-[#2A4A3A] mb-16">
          Mission & Vision
        </h2>

        {/* 🔹 CARDS */}
        <div className="grid md:grid-cols-2 gap-10">

          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative group p-10 rounded-2xl 
                         bg-[#EFE8DC] 
                         shadow-sm 
                         overflow-hidden"
            >

              {/* 🌿 HOVER OVERLAY */}
              <div className="absolute inset-0 
                              bg-[#2A4A3A]/90 
                              flex items-center justify-center 
                              opacity-0 group-hover:opacity-50 
                              transition-all duration-500">

                {/* ICON CENTER */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  className="text-green-900"
                >
                  {item.icon}
                </motion.div>
              </div>

              {/* 🔹 CONTENT */}
              <h3 className="text-2xl font-serif text-[#2A4A3A] mb-4">
                {item.title}
              </h3>

              <p className="text-[#6B7F73] leading-relaxed">
                {item.text}
              </p>  

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default MissionVision;