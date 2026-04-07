import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../utils/animations";
import { Activity, Brain, Shield } from "lucide-react";

const pillars = [
  {
    icon: <Activity size={28} />,
    title: "Clinical Ayurveda",
    desc: "Ancient protocols validated by modern science. We honor the wisdom of doshas, rasayanas, and constitutional medicine.",
    color: "text-[#6B8F78]",
  },
  {
    icon: <Brain size={28} />,
    title: "Bio-Ecology",
    desc: "Understanding your body as a living ecosystem that responds to environment, nutrition, and lifestyle in real-time.",
    color: "text-[#C9A75B]",
  },
  {
    icon: <Shield size={28} />,
    title: "Data-Driven Sovereignty",
    desc: "Your biomarkers, your insights, your control. AI-powered analysis that puts you in the driver's seat of your wellness.",
    color: "text-[#6B8F78]",
  },
];

 function Pillars() {
  return (
    <section className="bg-[#fcfcfc] py-24 px-6 text-center">
      <div className="max-w-7xl mx-auto">

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

        {/* Divider Line */}
        <div className="w-16 h-[1px] bg-[#C9B37E] mx-auto mb-10"></div>

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-5xl text-[#2A4A3A] mb-16"
        >
          Three Pillars of Transformation
        </motion.h2>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {pillars.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="bg-[#F1ECE2] rounded-3xl p-8 text-left shadow-sm hover:shadow-md transition duration-300"
            >
              
              {/* Icon Box */}
              <div className="w-14 h-14 rounded-xl bg-[#E9E4D8] flex items-center justify-center mb-6">
                <div className={item.color}>{item.icon}</div>
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl text-[#2A4A3A] mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[#55685d] text-lg leading-relaxed">
                {item.desc}
              </p>

              {/* Bottom Accent Line */}
              <div className="mt-6 h-[2px] w-16 bg-[#D8CFBA]"></div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Pillars;