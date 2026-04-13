import { motion } from "framer-motion";
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2a8841] text-white px-6 md:px-20 py-16 relative overflow-hidden">

      {/* 🌿 Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#6F8F7D]/30 to-transparent pointer-events-none"></div>

      <div className="grid md:grid-cols-3 gap-10 relative z-10">

        {/* 🔹 Brand */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-serif tracking-wide mb-4">
            DARSHAI
          </h2>

          <p className="text-sm text-white/80 leading-relaxed">
            AI-Native Longevity Protocols, <br />
            Rooted in Heritage
          </p>
        </motion.div>

        {/* 🔹 Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-sm tracking-widest mb-4">NAVIGATE</h3>

          <ul className="space-y-3">
            {["Home", "About", "Services", "Contact"].map((item, i) => (
              <li key={i}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="relative inline-block text-white/90 hover:text-white transition"
                >
                  {item}

                  {/* underline animation */}
                  <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* 🔹 Social + Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-sm tracking-widest mb-4">CONNECT</h3>

          <p className="text-white/80 mb-4">info@darshaigroup.com</p>
          <p className="text-white/80 mb-4">+91-7349171511</p>

          {/* 🌐 Social Icons */}
          <div className="flex gap-4 mt-4">

            {/* LinkedIn */}
            <motion.a
              whileHover={{ scale: 1.2, y: -3 }}
              href="https://www.linkedin.com/company/darshai/"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <FaLinkedinIn />
            </motion.a>

            {/* Instagram */}
            <motion.a
              whileHover={{ scale: 1.2, y: -3 }}
              href="https://www.instagram.com/darshaiofficial?igsh=a3dwZnQwY3R1ejU2"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <FaInstagram />
            </motion.a>

            {/* Facebook */}
            <motion.a
              whileHover={{ scale: 1.2, y: -3 }}
              href="https://www.facebook.com/share/1AoFJHjYes/"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <FaFacebookF />
            </motion.a>

            {/* Twitter */}
            <motion.a
              whileHover={{ scale: 1.2, y: -3 }}
              href="https://twitter.com/DarshaiOffcial"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <FaTwitter />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;