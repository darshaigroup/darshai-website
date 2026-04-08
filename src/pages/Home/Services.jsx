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
        title: "Biological Sovereignty Dashboard",
        desc: "24/7 access to real-time vitality score and biomarker tracking (HRV, Sleep, Cortisol)",
      },
      {
        title: "Concierge Bio-Butler Service",
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
        title: "Corporate Vitality Audits",
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
        desc: "Post-retreat diet and lifestyle guidance delivered through the DARSHAI App",
      },
      {
        title: "Vaidhya Video Library",
        desc: "7–10 minute expert-led modules on Ayurvedic science and longevity habits",
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
        desc: "Limited wellness activations in major tech hubs",
      },
      {
        title: "Longevity Summits",
        desc: "Expert panels on the future of Precision Ecology",
      },
    ],
  },

  {
    title: "Precision Ecology & Corporate Auditing",
    icon: <Leaf />,
    subtitle: "Environmental Optimization for Organizations",
    target: "Corporations, Tech Parks & High-Performance Workspaces",
    items: [
      {
        title: "Circadian Office Auditing",
        desc: "Lighting, air quality & acoustic optimization to reduce stress",
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
        title: "Occupational Vitality Certification",
        desc: "DARSHAI certification for biologically optimized workplaces",
      },
    ],
  },
];

function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="bg-[#F5F1E8] py-16 px-6">
      <div className="max-w-5xl mx-auto">

        {/* 🔹 Heading */}
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.3em] text-[#7A8F84] uppercase mb-2">
            SERVICES
          </p>
 {/* Divider */}
        <div className="w-16 h-[1px] bg-[#C9B37E] mx-auto mb-10"></div>
          <h2 className="font-heading text-4xl md:text-5xl text-[#2A4A3A] mb-4">
            The Six Gears of Precision Wellness
          </h2>

          <p className="text-[#7A8F84] max-w-2xl mx-auto">
            From elite personalized protocols to corporate ecosystem transformation—
            each service tier designed for specific wellness aspirations.
          </p>
        </div>

        {/* 🔹 Cards */}
        <div className="space-y-6">

          {services.map((service, index) => {
            const isOpen = active === index;

            return (
              <motion.div
                key={index}
                layout
                className={`rounded-3xl border transition-all duration-500 ${
                  isOpen
                    ? "bg-[#F1ECE2] border-[#2A4A3A]/40 shadow-md"
                    : "bg-[#F9F6F0] border-[#E5DED0]"
                }`}
              >

                {/* 🔹 Header */}
                <div
                  onClick={() => setActive(index)}
                  className="flex items-center justify-between p-6 cursor-pointer"
                >
                  <div className="flex items-center gap-4">

                    {/* Icon Circle */}
                    <div className="w-12 h-12 rounded-full bg-[#C9A24A] text-white flex items-center justify-center text-xl">
                      {service.icon} 
                    </div>

                    {/* Text */}
                    <div>
                     

                      <h3 className="text-xl md:text-2xl font-heading text-[#2A4A3A]">
                        {service.title}
                      </h3>

                      <p className="text-sm text-[#7A8F84]">
                        {service.subtitle}
                      </p>

                      <p className="text-xs text-[#A3B1A6] mt-1">
                        TARGET: {service.target}
                      </p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className="text-[#2A4A3A]"
                  >
                    ⌄
                  </motion.span>
                </div>

                {/* 🔹 Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="px-6 pb-6"
                    >
                      <div className="grid md:grid-cols-2 gap-4 mt-4">

                        {service.items.map((item, i) => (
                          <div
                            key={i}
                            className="bg-[#F5F1E8] border border-[#E5DED0] rounded-xl p-4"
                          >
                            <p className="text-[#2A4A3A] font-medium text-sm">
                              • {item.title}
                            </p>

                            <p className="text-[#7A8F84] text-xs mt-1">
                              {item.desc}
                            </p>
                          </div>
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
    </section>
  );
}

export default Services;