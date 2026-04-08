import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../utils/animations";
import { Activity, Brain, Shield } from "lucide-react";

const pillars = [
  {
    icon: <Activity size={26} />,
    title: "Clinical Ayurveda",
    desc: "Ancient protocols validated by modern science. We honor the wisdom of doshas.",
    color: "text-[#6B8F78]",
  },
  {
    icon: <Brain size={26} />,
    title: "Bio-Ecology",
    desc: "Understanding your body as a living ecosystem that responds to environment, nutrition, and lifestyle in real-time.",
    color: "text-[#C9A75B]",
  },
  {
    icon: <Shield size={26} />,
    title: "Data-Driven Sovereignty",
    desc: "Your biomarkers, your insights, your control. AI-powered analysis that puts you in the driver's seat of your wellness.",
    color: "text-[#6B8F78]",
  },
];

function Pillars() {
  return (
    <section className="relative bg-[#fdfdfd] py-28 px-6 text-center overflow-hidden">

      {/* 🌿 SOFT BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(201,179,126,0.08),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Top Label */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="tracking-[0.3em] text-sm text-[#7A8F84] mb-4"
        >
          OUR FOUNDATION
        </motion.p>

        {/* Divider */}
        <div className="w-16 h-[1px] bg-[#C9B37E] mx-auto mb-10"></div>

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-5xl text-[#2A4A3A] mb-20"
        >
          Three Pillars of Transformation
        </motion.h2>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-10"
        >
          {pillars.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group rounded-3xl p-8 text-left overflow-hidden
                         backdrop-blur-md bg-white/60 border border-white/40
                         shadow-lg hover:shadow-2xl transition-all duration-500"
            >

              {/* ✨ TOP SHINE EFFECT */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute top-0 left-[-50%] w-[200%] h-full 
                                bg-gradient-to-r from-transparent via-white/30 to-transparent 
                                rotate-12 translate-x-[-100%] group-hover:translate-x-[100%] 
                                transition-transform duration-1000" />
              </div>

              {/* 🌿 BACKGROUND GLOW */}
              <div className="absolute inset-0 bg-gradient-to-br 
                              from-[#15803d]/10 via-transparent to-[#C9A75B]/10 
                              opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Icon */}
              <div className="relative z-10 w-14 h-14 rounded-xl 
                              bg-white/70 backdrop-blur-sm 
                              flex items-center justify-center mb-6
                              border border-white/40 shadow-sm">
                <div className={item.color}>{item.icon}</div>
              </div>

              {/* Title */}
              <h3 className="relative z-10 font-bold text-2xl text-[#2A4A3A] mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-[#55685d] text-[15px] leading-relaxed">
                {item.desc}
              </p>

              {/* Bottom Accent */}
              <div className="relative z-10 mt-6 h-[2px] w-16 
                              bg-gradient-to-r from-[#C9A75B] to-transparent" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Pillars;