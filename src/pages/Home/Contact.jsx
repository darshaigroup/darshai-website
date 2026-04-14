import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import { fadeUp } from "../../utils/animations";

const cards = [
  {
    type: "phone",
    title: "LET'S TALK",
    icon: FaPhoneAlt,
    value: "+91 7349171511",
    link: "tel:+917349171511",
  },
  {
    type: "address",
    title: "VISIT OUR OFFICE",
    icon: FaMapMarkerAlt,
    value:
      "K-tech Innovation Hub (CIF), 3rd Floor, Plama Center, Bejai-Kapikad Rd, Mangaluru, Karnataka",
    link: "https://maps.app.goo.gl/pLnRnbEZzQfk9iXN9",

  },
  {
    type: "email",
    title: "E-MAIL US",
    icon: FaEnvelope,
    value: "info@darshai.com",
    link: "mailto:info@darshai.com",
  },
];

function Contact() {
  return (
    <section id="contact" className="bg-[#f8f0e1] py-24 px-6 text-center">
      
      <div className="max-w-5xl mx-auto">

        {/* LABEL */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="tracking-[0.3em] text-sm text-[#7A8F84] mb-4"
        >
          CONTACT
        </motion.p>

        {/* DIVIDER */}
        <div className="w-16 h-[1px] bg-[#C9B37E] mx-auto mb-10"></div>

        {/* HEADING */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-5xl text-[#2A4A3A]"
        >
          Get in{" "}
          <span className="relative inline-block">
            Touch
            <span className="absolute left-0 bottom-1 w-full h-2 bg-[#E7DFC8] -z-10"></span>
          </span>
        </motion.h2>
      </div>

      {/* CARDS SECTION */}
      <div className="mt-16 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {cards.map((card, index) => (
          <motion.div
            key={card.type}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="group relative rounded-3xl p-8 text-center cursor-pointer
            bg-white/80 backdrop-blur-md
            border border-[#E8E3D9]
            shadow-[0_10px_30px_rgba(0,0,0,0.05)]
            transition-all duration-500 ease-in-out
            hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(21,128,61,0.15)]"
          >

            {/* SOFT GLOW EFFECT */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 
                            bg-gradient-to-br from-[#15803d]/5 via-transparent to-[#C9A75B]/10" />

            {/* ICON */}
            <div
              className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 
              bg-[#F5F1E8] text-[#15803d]
              transition-all duration-300 
              group-hover:bg-[#15803d] group-hover:text-white"
            >
              <card.icon className="text-2xl" />
            </div>

            {/* TITLE */}
            <h3 className="relative z-10 text-lg font-semibold text-[#2A4A3A] mb-3 tracking-wide">
              {card.title}
            </h3>

            {/* VALUE */}
            <p className="relative z-10 text-sm text-[#5F756B] leading-relaxed">
              {(card.type === "email" || card.type === "address" || card.type === "phone") ? (
                <a
                  href={card.link}
                  target={card.type === "address" ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="hover:text-[#15803d] transition underline-offset-4 hover:underline"
                >
                  {card.value}
                </a>
              ) : (
                card.value
              )}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Contact;