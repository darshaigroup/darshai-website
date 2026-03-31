import React from 'react'

import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";

 function Genesis() {
  return (
    <section
      id="about"
      className="bg-[#F5F1E8] py-24 px-6 text-center"
    >
      <div className="max-w-4xl mx-auto">

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

        {/* Divider Line */}
        <div className="w-16 h-[1px] bg-[#C9B37E] mx-auto mb-10"></div>

        {/* Main Heading */}
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
          className="mt-8 text-lg md:text-xl text-[#5F756B] leading-relaxed"
        >
          Your body is not a machine, it's an ecosystem. DARSHAI bridges the
          ancient wisdom of Ayurveda with the precision of modern biomarker
          science, creating personalized protocols that honor both your heritage
          and your biology.
        </motion.p>

        {/* Paragraph 2 */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 text-lg md:text-xl text-[#7A8F84] leading-relaxed"
        >
          We believe in{" "}
          <span className="text-[#C9B37E] font-medium">
            biological sovereignty
          </span>{" "}
           the right to understand, optimize, and control your own health
          journey through data-driven insights rooted in timeless practices.
        </motion.p>

      </div>
    </section>
  );
}

export default Genesis;