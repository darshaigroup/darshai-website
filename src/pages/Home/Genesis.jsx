import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";


function Genesis() {
  return (
    <section
      id="about"
      className="relative py-40 px-6 text-center overflow-hidden bg-[#F5F1E8]"
    >


      {/* ✨ SOFT GRADIENT DEPTH */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F5F1E8] via-[#F5F1E8]/90 to-[#e2d7bd]" />

      {/* 🌟 CENTER GLOW (Luxury Feel) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(201,179,126,0.12),transparent_60%)]" />

      {/* 🔹 CONTENT */}
      <div className="relative z-10 max-w-3xl mx-auto">

        {/* Small Label */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="tracking-[0.3em] text-sm text-[#7A8F84] mb-4"
        >
          GENESIS
        </motion.p>

        {/* Divider */}
        <div className="w-16 h-[1px] bg-[#C9B37E] mx-auto mb-10"></div>

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-5xl leading-tight text-[#2A4A3A]"
        >
          The Philosophy of{" "}
          <span className="relative inline-block">
            Bio-Ecology
            <span className="absolute left-0 bottom-1 w-full h-2 bg-[#E7DFC8] -z-10"></span>
          </span>
        </motion.h2>

        {/* Paragraph 1 */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 mb-8 text-lg md:text-xl text-[#55685d] leading-relaxed"
        >
          Master your health journey with DARSHAI. We seamlessly integrate the
          5,000-year-old wisdom of Ayurveda with the precision of modern biomarker
          science, delivering personalized protocols engineered for your unique biology.
        </motion.p>

        {/* Paragraph 2 */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 text-lg md:text-xl text-[#55685d] leading-relaxed"
        >
          Reclaim your{" "}
          <span className="text-[#e2ae35] font-medium">
            Biological Sovereignty
          </span>
          . Move beyond guesswork with data-driven insights rooted in heritage,
          designed to help you understand, optimize, and control your vitality.
        </motion.p>
      </div>
    </section>
  );
}

export default Genesis;