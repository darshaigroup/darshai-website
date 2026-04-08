import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";
import ceo from "../../assets/images/ceo.png";

function Leadership() {
  return (
    <section className="relative bg-[#F5F1E8] py-28 px-6 overflow-hidden">

      {/* ✨ SOFT GRADIENT DEPTH */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F5F1E8] via-[#F5F1E8]/90 to-[#e2d7bd]" />

      {/* 🌟 CENTER GLOW (Luxury Feel) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(201,179,126,0.12),transparent_60%)]" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">

        {/* Heading */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="tracking-[0.3em] text-sm text-[#7A8F84] mb-4"
        >
          LEADERSHIP
        </motion.p>

        {/* Divider */}
        <div className="w-16 h-[1px] bg-[#C9B37E] mx-auto mb-10"></div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="font-serif text-4xl md:text-5xl text-[#2A4A3A] mb-16"
        >
          Guided by Vision
        </motion.h2>

        {/* 💬 QUOTE CARD (GLASS EFFECT) */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="backdrop-blur-md bg-white/70 border border-white/40 
                     rounded-3xl p-10 mb-24 shadow-xl max-w-4xl mx-auto text-left"
        >
          <p className="text-xl text-[#2A4A3A] leading-relaxed font-normal">
            “True wellness isn't found in a pill or a protocol—it's discovered
            through understanding the unique ecology of your own body,
            informed by both ancestral wisdom and cutting-edge science.”
          </p>
        </motion.div>
      </div>

      {/* 👤 CEO SECTION */}
      <div className="relative z-10 flex flex-col items-center text-center group">

        {/* 🧑 IMAGE WRAPPER */}
        <div className="relative w-[200px] h-[200px] flex items-center justify-center">

          {/* 🌟 OUTER GLOW RING */}
          <div className="absolute inset-0 rounded-full 
                          bg-gradient-to-tr from-[#15803d]/40 via-[#C9A75B]/20 to-transparent 
                          blur-1xl scale-110" />

          {/* 🟢 MAIN CIRCLE */}
          <div className="absolute inset-0 rounded-full bg-[#15803d]" />

          {/* ✨ GLASS OVERLAY */}
          <div className="absolute inset-0 rounded-full 
                          bg-white/10 backdrop-blur-md border border-white/20" />

          {/* 🧑 IMAGE */}
          <motion.img
            src={ceo}
            alt="Veekshitha V"
            loading="lazy"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="
              relative z-10
              w-[200px] h-[200px]
              object-cover object-[center_top]
              rounded-full
              transition duration-500
              group-hover:scale-105
            "
          />

          {/* ✨ FLOATING RING ANIMATION */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="absolute w-[260px] h-[260px] rounded-full 
                       border border-[#C9A75B]/30"
          />
        </div>

        {/* 🟢 CONTENT */}
        <div className="mt-14 max-w-md">

          <h3 className="text-2xl font-serif text-[#2A4A3A]">
            Veekshitha V
          </h3>

          <p className="text-sm text-[#da9901] font-semibold tracking-wide mt-2">
            Founder & CEO
          </p>

          <p className="text-[#5F756B] mt-4 leading-relaxed text-[18px] font-normal">
            A Science and Journalism post-graduate and MCJ Silver Jubilee Year
            Awardee, leading Darshai’s vision and strategic architecture while
            bridging clinical data with human storytelling.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Leadership;