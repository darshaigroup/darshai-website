import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../utils/animations";

// images
import doctor1 from "../../assets/images/doctor.jpg";
import doctor2 from "../../assets/images/doctor1.png";

const leaders = [
  {
    name: "Miss Veekshitha V",
    role: "FOUNDER & CHIEF WELLNESS OFFICER",
    desc: "Ayurvedic about 5000+ old integrated with AI under her guidance",
    image: doctor2,
  },
  {
    name: "Dr. Renjith N Raj",
    role: "CHIEF DOCTOR",
    desc: "Ayurvedic physician with 5+ years of clinical practice, bridging traditional medicine with modern biomarker analysis",
    image: doctor1,
  },
];

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

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="font-serif text-4xl md:text-5xl text-[#2A4A3A] mb-16"
        >
          Guided by Vision
        </motion.h2>

        {/* Quote Card */}
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

        {/* Leadership Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 gap-10"
        >
          {leaders.map((person, index) => (
            <motion.div key={index} variants={fadeUp}>
              <LeaderCard person={person} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

/* ================= COMPONENT ================= */

function LeaderCard({ person }) {
  return (
    <div className="text-left group cursor-pointer">

      {/* Image Wrapper */}
      <div className="relative overflow-hidden rounded-2xl">

        {/* Image */}
        <img
          src={person.image}
          alt={person.name}
          loading="lazy"
          className="w-full h-[320px] object-cover transition duration-500 group-hover:scale-105"
        />

        {/* GREEN RADIAL OVERLAY (KEY EFFECT) */}
       {/* NEW HOVER OVERLAY */}
<div className="absolute inset-0 bg-gradient-to-t from-[#2A4A3A]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      </div>

      {/* Content */}
      <h3 className="mt-6 text-xl font-serif text-[#2A4A3A]">
        {person.name}
      </h3>

      <p className="text-sm text-[#C9A75B] tracking-wide mt-1">
        {person.role}
      </p>

      <p className="text-[#5F756B] mt-3 leading-relaxed">
        {person.desc}
      </p>
    </div>
  );
}

export default Leadership;