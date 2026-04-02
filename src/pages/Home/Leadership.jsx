import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../utils/animations";

// images
import ceo from "../../assets/images/ceo.png";


function Leadership() {
  return (
    <section className="bg-[#F5F1E8] py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="tracking-[0.3em] text-sm text-[#7A8F84] mb-4"
        >
          LEADERSHIP
        </motion.p>
        
        {/* Divider Line */}
        <div className="w-16 h-[1px] bg-[#C9B37E] mx-auto mb-10"></div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="font-serif text-4xl md:text-5xl text-[#2A4A3A] mb-16"
        >
          Guided by Vision
        </motion.h2>


        {/* Quote */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="bg-white rounded-3xl p-10 mb-20 shadow-md max-w-4xl mx-auto text-left"
        >
          <p className="text-2xl text-[#2A4A3A] leading-relaxed font-serif">
            “True wellness isn't found in a pill or a protocol—it's discovered through understanding the unique ecology of your own body, informed by both ancestral wisdom and cutting-edge science.”
          </p>
        </motion.div>

      </div>
   
  
    <div className="flex flex-col items-center text-center group cursor-pointer relative">

     {/* 🧑 IMAGE + PREMIUM CIRCLE */}
<div className="relative w-[200px] h-[200px] flex items-center justify-center group">

  {/* 🎨 BACKGROUND CIRCLE */}
  <div
    className="absolute inset-0 rounded-full bg-[#15803d]
               transition duration-500 group-hover:scale-105"
  />

  {/* ✨ SOFT GLOW */}
  <div
    className="absolute inset-0 rounded-full bg-[#15803d]/20 blur-2xl"
  />

  {/* 🧑 IMAGE (PERFECT FIT FIX) */}
  <img
    src={ceo}
    alt="veekshitha"
    loading="lazy"
    className="
      relative z-10
      w-[200px] h-[200px]
      object-cover
      rounded-full

      /* 🔥 KEY FIX */
      object-[center_top]

      /* PREMIUM */
      transition duration-500
      group-hover:scale-105
    "
  />

</div>

      {/* 🟢 CONTENT */}
      <div className="mt-12 max-w-xs">

        <h3 className="text-xl font-serif text-[#2A4A3A]">
          Veekshitha V
        </h3>

        <p className="text-sm text-[#C9A75B] tracking-wide mt-1">
          Founder & CEO
        </p>

        <p className="text-[#5F756B] mt-3 leading-relaxed">
         " A Science and Journalism post-graduate and MCJ Silver Jubilee Year Awardee, 
          leading Darshai’s vision and strategic architecture while bridging clinical 
          data with human storytelling ".
        </p>

      </div>
    </div>
     </section>
  );
}

export default Leadership;