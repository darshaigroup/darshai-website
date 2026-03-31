import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../utils/animations";

const steps = [
  {
    number: "1",
    title: "Assessment",
    desc: "Initial consultation & testing",
  },
  {
    number: "2",
    title: "Protocol",
    desc: "Personalized plan creation",
  },
  {
    number: "3",
    title: "Monitoring",
    desc: "Continuous AI tracking",
  },
  {
    number: "4",
    title: "Optimization",
    desc: "Ongoing refinement",
  },
];

 function Services() {
  return (
    <section  id="services" className="bg-[#F5F1E8] py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Container Card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="bg-[#F1ECE2] rounded-3xl p-10 border border-[#E0D8C5]"
        >

          {/* Title */}
          <h2 className="text-center font-serif text-2xl md:text-3xl text-[#2A4A3A] mb-12">
            Your Journey with DARSHAI
          </h2>

          {/* Steps */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="flex flex-col md:flex-row items-center justify-between gap-10"
          >

            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="flex items-center"
              >

                {/* Step Block */}
                <div className="text-center">

                  {/* Circle Number */}
                  <div className="w-14 h-14 rounded-full bg-[#15803d] text-white flex items-center justify-center text-lg font-medium mx-auto mb-4">
                    {step.number}
                  </div>

                  {/* Title */}
                  <h3 className="text-[#2A4A3A] font-medium">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#7A8F84] text-sm mt-1">
                    {step.desc}
                  </p>
                </div>

                {/* Arrow (except last item) */}
                {index !== steps.length - 1 && (
    <div className="hidden md:block absolute right-[-35px] top-7 transform -translate-y-1/2 text-[#15803d] text-xl">
      →
    </div>
  )}

              </motion.div>
            ))}

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}

export default Services;