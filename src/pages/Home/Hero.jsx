import { motion } from "framer-motion";
import heroImg from "../../assets/images/hero.png";
import analysis from "../../assets/images/analysis.png";
import meter from "../../assets/images/meter.png";
import heartRate from "../../assets/images/heartRate.png";




function Hero() {

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center px-6 bg-[#F5F1E8]">
      <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto items-center">

        {/* 🔹 LEFT CONTENT */}
        <div>
          <h1 className="font-serif text-5xl leading-tight text-[#2A4A3A]">
            AI-Native Longevity Protocols
            <span className="text-[#15803d]"> Validated by Heritage</span>
          </h1>

          <p className="mt-4 text-lg text-[#6B7F73]">
            Reclaim biological sovereignty through Ayurveda and biomarker science.
          </p>

          <div className="mt-6 flex gap-4">
            <button
              onClick={scrollToContact}
              className="bg-[#15803d] text-white px-6 py-3 rounded-full 
                         transition-all duration-300 
                         hover:bg-[#35644d] hover:scale-105 shadow-md"
            >
              Let's Talk
            </button>

            <button
              onClick={scrollToAbout}
              className="border border-[#8FAE97] px-6 py-3 rounded-full 
                         text-[#2A4A3A] 
                         transition-all duration-300 
                         hover:bg-[#E8E3D9] hover:scale-105"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* 🔹 RIGHT VISUAL */}
        <motion.div className="relative flex items-center justify-center">

          {/* ✨ SOFT GLOW */}
          <div className="absolute w-[420px] h-[420px] md:w-[520px] md:h-[520px] 
                          rounded-full bg-[#8FAE97]/20 blur-[120px] opacity-50" />

          {/* 🌿 SECOND GLOW */}
          <div className="absolute w-[300px] h-[300px] 
                          rounded-full bg-[#C9A75B]/20 blur-[100px] opacity-40" />

          {/* 🔵 ROTATING RING */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="absolute w-[380px] h-[380px] md:w-[460px] md:h-[460px] 
                       rounded-full border border-[#8FAE97]/20"
          />

          {/* ✨ INNER RING */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
            className="absolute w-[340px] h-[340px] md:w-[420px] md:h-[420px] 
                       rounded-full border border-dashed border-[#C9A75B]/20"
          />

          {/* 🟢 MAIN IMAGE */}
          <motion.div
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="w-[280px] h-[280px] md:w-[360px] md:h-[360px] 
                       rounded-full overflow-hidden relative z-10"
          >
            <img
              src={heroImg}
              alt="hero"
              className="w-full h-full object-cover 
                         brightness-105 contrast-105"
            />
          </motion.div>

          {/* 🌫 EDGE GLOW */}
          <div className="absolute w-[300px] h-[300px] md:w-[380px] md:h-[380px] 
                          rounded-full pointer-events-none
                          shadow-[0_0_120px_40px_rgba(143,174,151,0.15)]" />

          {/* 🔵 LEFT FLOAT */}
          {/* <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute left-[-120px] top-[18%]"
          >
            <div className="relative w-80 h-44">
              <img
                src={analysis}
                className="w-full h-full object-cover rounded-lg opacity-90"
              />
              <div className="absolute inset-0 
                              bg-gradient-to-r from-transparent via-transparent to-[#F5F1E8] opacity-60" />
             
            </div>
          </motion.div> */}

          {/* 🟢 BOTTOM FLOAT */}
          {/* <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="absolute bottom-[-40px] left-[0%]"
          >
            <div className="relative w-60 h-30">
              <img
                src={meter}
                className="w-full h-full object-cover rounded-lg opacity-90"
              />
             
            </div>
          </motion.div> */}

          {/* 🟡 RIGHT FLOAT */}
          {/* <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute right-[-120px] top-[28%]"
          >
            <div className="relative w-40 h-24">
              <img
                src={heartRate}
                className="w-full h-full object-cover rounded-lg opacity-90"
              />
              <div className="absolute inset-0 
                              bg-gradient-to-b from-transparent via-transparent to-[#F5F1E8] opacity-60" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-[10px] text-white/80">Health</p>
                <p className="text-lg font-semibold text-white">120</p>
              </div>
            </div>
          </motion.div> */}

          {/* 🌿 FLOATING PARTICLES */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6 }}
            className="absolute top-10 right-10 w-2 h-2 bg-[#C9A75B] rounded-full opacity-60"
          />

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="absolute bottom-10 left-10 w-2 h-2 bg-[#8FAE97] rounded-full opacity-60"
          />

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;