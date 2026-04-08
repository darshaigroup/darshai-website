import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../utils/animations";
import { Lightbulb, Users, Building2 } from "lucide-react";

const roadmap = [
  {
    phase: "PHASE 1",
    title: "Concept & Research",
    date: "March 2026",
    desc: "Deep research into Ayurvedic protocols and biomarker science. Building foundational AI models.",
    icon: <Lightbulb />,
    active: true, 
    color: "bg-[#15803d]",
  },
  {
    phase: "PHASE 2",
    title: "Pilot Launch",
    date: "June 2026 ",
    desc: "Curated group of 25 participants for beta testing. Real-world validation of protocols.",
    icon: <Users />,
    active: false,
     color: "bg-[#15803d]",
  },
  {
    phase: "PHASE 3",
    title: "Pre-Launch",
    date: "2026 ",
    desc: "Enterprise wellness programs. Scaling to organizations committed to employee wellbeing.",
    icon: <Building2 />,
    active: false,
     color: "bg-[#15803d]",
  },
];

 function Journey() {
  return (
    <section className="bg-[#fffdfd] py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="text-center tracking-[0.3em] text-sm text-[#7A8F84] mb-4"
        >
          JOURNEY
        </motion.p>
        {/* Divider Line */}
        <div className="w-16 h-[1px] bg-[#C9B37E] mx-auto mb-10"></div>


        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="text-center font-serif text-4xl md:text-5xl text-[#2A4A3A] mb-20"
        >
          Evolution Roadmap
        </motion.h2>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-10 top-0 bottom-0 w-[2px] bg-[#D8CFBA]" />

          {/* Items */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="space-y-16"
          >
            {roadmap.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="flex items-start gap-10"
              >

                {/* Icon */}
                <div
                  className={`w-20 h-20 flex items-center justify-center rounded-2xl text-white ${item.color} relative z-10`}
                >
                  {item.icon}
                </div>

                {/* Card */}
                <div
                  className={`flex-1 rounded-2xl p-8 border ${
                    item.active
                      ? "border-[#C9A75B] bg-[#EFE8D9]"
                      : "border-[#E0D8C5] bg-[#F1ECE2]"
                  }`}
                >
                  {/* Top Row */}
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-[#181b19] tracking-wide">
                      {item.phase}
                    </span>

                    {/* ACTIVE BADGE (ONLY PHASE 1) */}
                    {item.active && (
                      <span className="bg-[#15803d] text-white px-4 py-1 rounded-full text-sm">
                        Active
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-3xl  text-[#010202]  mb-2">
                    {item.title}
                  </h3>

                  {/* Date */}
                  <p className="font-normal text-[#000000] text-semibold mb-4">{item.date}</p>

                  {/* Description */}
                  <p className="font-normal text-[#020202]  text-semibold leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Journey;