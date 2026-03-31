import { motion } from "framer-motion";
import heroImg from "../../assets/images/logo.png";

 function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center px-6">
      <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">

        <div>
          <h1 className="font-serif text-5xl leading-tight">
            AI-Native Longevity Protocols
            <span className="text-green-700"> Validated by Heritage</span>
          </h1>

          <p className="mt-4 text-lg opacity-80">
            Reclaim biological sovereignty through Ayurveda and biomarker science.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="bg-green-700 text-white px-6 py-3 rounded-full">
              Get Started
            </button>
            <button className="border px-6 py-3 rounded-full">
              Learn More
            </button>
          </div>
        </div>

        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="rounded-full overflow-hidden"
        >
          <img src={heroImg} alt="hero" />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;