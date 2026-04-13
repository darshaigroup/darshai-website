import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Crown, Building2, RefreshCcw, Package, Calendar, Leaf } from "lucide-react";

const services = [
  {
    title: "Sovereign Protocols",
    icon: <Crown />,
    subtitle: "Biological Sovereignty for the Elite",
    target: "High-Net-Worth Individuals (HNIs) & Elite Performers",
    items: [
      {
        title: "Hyper-Personalized Longevity Retreats",
        desc: "7-day bespoke interventions at exclusive partner Geo-Wellness centers",
      },
      {
        title: "Biological Sovereignty Dashboard + Bio-Hacking Kit",
        desc: " access to real-time longevity score and biomarker tracking (HRV, Sleep, Cortisol)",
      },
      {
        title: "Personalized Luxury Geo-Wellness Experience",
        desc: "Dedicated clinical and operational support for seamless protocol execution",
      },
      {
        title: "Elite Wellness Curation",
        desc: "Precision Ayurvedic therapies (Shirodhara, Abhyanga) mapped to metabolic goals",
      },
    ],
  },

  {
    title: "Corporate Ecology",
    icon: <Building2 />,
    subtitle: "Executive Reset & Team Vitality",
    target: "Tech CEOs, Founders, and High-Stress Executive Teams",
    items: [
      {
        title: "The '2+1' Executive Reset",
        desc: "A specialized 5-day intensive program to reverse burnout and decision fatigue",
      },
      {
        title: "Corporate Longevity Audits",
        desc: "Group biological reporting for leadership teams to optimize cognitive performance",
      },
      {
        title: "Founders' Longevity Circle",
        desc: "Exclusive membership for entrepreneurs under 40 focusing on long-term health span",
      },
    ],
  },

  {
    title: "Maintenance Modules",
    icon: <RefreshCcw />,
    subtitle: "Sustained Wellness at Your Fingertips",
    target: "Post-Protocol Clients & Subscription Users",
    items: [
      {
        title: "Digital Maintenance Plans",
        desc: "Post-retreat diet and lifestyle guidance",
      },
      {
        title: "Vaidhya Video Library",
        desc: "7–10 minute expert-led personalised modules on Ayurvedic science and longevity habits",
      },
      {
        title: "AI-Driven Real-Time Guidance",
        desc: "24/7 chatbot support for daily habit tracking and protocol adjustments",
      },
    ],
  },

  {
    title: "Longevity Prep-Kits",
    icon: <Package />,
    subtitle: "Lab-Validated Wellness at Home",
    target: "D2C E-commerce & Retail Shoppers",
    items: [
      {
        title: "Bio-Validated Herbal Kits",
        desc: "Lab-tested formulations including teas and wellness products for longevity support",
      },
      {
        title: "Neuro-Reset Collection",
        desc: "Targeted kits for stress recovery, deep sleep, and gut-health optimization",
      },
      {
        title: "Precision Unboxing Experience",
        desc: "Includes clinical dossier and self-assessment longevity survey",
      },
    ],
  },

  {
    title: "Precision Tech & Wellness Events",
    icon: <Calendar />,
    subtitle: "Community, Knowledge & Experience",
    target: "Health Enthusiasts & Professional Communities",
    items: [
      {
        title: "Bio-Hacking Workshops",
        desc: "Events showcasing longevity tech and ancient wellness science",
      },
      {
        title: "Pop-Up Geo-Wellness Experiences",
        desc: "Limited wellness activity in major Tech hubs",
      },
      {
        title: "Longevity Summits",
        desc: "Expert panels on the future of Precision Ecology",
      },
      {
        title: "Tech-Hackathons",
        desc: "Events where participants build innovative solutions for longevity challenges",
      },
    ],
  },

  {
    title: "Precision Ecology & Corporate Auditing",
    icon: <Leaf />,
    subtitle: "Environmental Optimization for Organizations",
    target: "Corporate companies & Employees, Tech Parks, Co-working Spaces",
    items: [
      {
        title: "Periodic Office Auditing",
        desc: "Light, air quality & acoustic optimization to reduce stress",
      },
      {
        title: "Biophilic Integration",
        desc: "Nature-based design and plant systems to improve HRV and reduce stress",
      },
      {
        title: "Corporate Nutrition & 'Agni' Auditing",
        desc: "Redesigning food environments with Ayurvedic performance nutrition",
      },
      {
        title: "Occupational Longevity Certification",
        desc: "DARSHAI certification for biologically optimized workplaces",
      },
    ],
  },
];

function Services() {
  const [active, setActive] = useState(0);

  return (
    <motion.section
      id="services"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#fdfdfd] py-16 px-6"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14 mt-10">
          <p className="text-xs tracking-[0.3em] text-[#7A8F84] uppercase mb-2">
            SERVICES
          </p>

          <div className="w-16 h-[1px]  bg-[#C9B37E] mx-auto mb-10"></div>

          <motion.h2
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl md:text-5xl text-[#2A4A3A] mb-4"
          >
            The Six Gears of Precision Wellness
          </motion.h2>

          <p className="text-[#7A8F84] max-w-2xl mx-auto">
            Personalized protocols to corporate transformation —
            designed for modern longevity.
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-6">
          {services.map((service, index) => {
            const isOpen = active === index;

            return (
              <motion.div
                key={index}
                layout
                transition={{
                  layout: {
                    duration: 0.6,
                    type: "spring",
                    stiffness: 120,
                    damping: 18,
                  },
                }}
                className={`rounded-3xl border transition-all duration-500 hover:scale-[1.015] ${isOpen
                    ? "bg-[#F1ECE2] border-[#2A4A3A]/40 shadow-lg"
                    : "bg-[#F9F6F0] border-[#E5DED0]"
                  }`}
              >

                {/* Header */}
                <div
                  onClick={() => setActive(index)}
                  className="flex items-center justify-between p-6 cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#15803d] text-white flex items-center justify-center">
                      {service.icon}
                    </div>

                    <div>
                      <h3 className="text-xl md:text-2xl font-heading text-[#2A4A3A]">
                        {service.title}
                      </h3>

                      <p className="text-sm text-[#7A8F84]">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    ⌄
                  </motion.span>
                </div>

                {/* Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5 }}
                      className="px-6 pb-6 overflow-hidden"
                    >
                      <div className="grid md:grid-cols-2 gap-4 mt-4">

                        {service.items.map((item, i) => (
                          <motion.div
                            key={i}
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.3 }}
                            className="bg-[#F5F1E8] border border-[#E5DED0] rounded-xl p-4"
                          >
                            <p className="text-[#2A4A3A] font-medium text-sm">
                              • {item.title}
                            </p>

                            <p className="text-[#7A8F84] text-xs mt-1">
                              {item.desc}
                            </p>
                          </motion.div>
                        ))}

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

export default Services;