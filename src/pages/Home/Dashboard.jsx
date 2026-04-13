import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../utils/animations";
import { Activity, Droplet, Sun, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

function Dashboard() {
  const [progress, setProgress] = useState(0);

  // simulate real-time progress animation
  useEffect(() => {
    let value = 0;
    const interval = setInterval(() => {
      value += 1;
      setProgress(value);
      if (value >= 75) clearInterval(interval);
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#234B36] py-28 px-6 text-white relative overflow-hidden">

      {/* subtle noise / dots effect */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,_#ffffff_1px,_transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-6xl mx-auto text-center relative z-10">

        {/* Header */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="tracking-[0.3em] text-sm text-[#9FB3A8] mb-4"
        >
          TECHNOLOGY
        </motion.p>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="font-serif text-4xl md:text-5xl mb-6"
        >
          Your DARSHAI Companion
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="text-[#BFD1C8] text-lg mb-16"
        >
          Real-time AI analysis of your biomarkers, environmental factors, and lifestyle patterns
        </motion.p>

        {/* Dashboard Card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="bg-[#2F5B44]/70 backdrop-blur-xl border border-[#3D6B55] rounded-3xl p-8 text-left shadow-xl"
        >

          {/* Top */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-2xl font-serif">Wellness Dashboard</h3>
              <p className="text-[#A9C0B5] text-sm">Real-time insights • Updated daily</p>
            </div>

            <span className="bg-[#3F6E57] px-4 py-1 rounded-full text-sm">
              Active
            </span>
          </div>

          <hr className="border-[#3D6B55] mb-8" />

          {/* Stats */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="grid md:grid-cols-4 gap-6"
          >

            {/* Card 1 */}
            <StatCard
              icon={<Activity />}
              title="Vitality Score"
              value="87%"
              change="+12%"
            />

            {/* Card 2 */}
            <StatCard
              icon={<Droplet />}
              title="Hydration"
              value="Optimal"
              change="Stable"
            />

            {/* Card 3 */}
            <StatCard
              icon={<Sun />}
              title="Energy Level"
              value="High"
              change="+8%"
            />

            {/* Card 4 */}
            <StatCard
              icon={<TrendingUp />}
              title="Progress"
              value="On Track"
              change="+15%"
            />

          </motion.div>

          {/* Progress Section */}
          <div className="mt-10 bg-[#2A4F3D] p-6 rounded-2xl">
            <div className="flex justify-between mb-2 text-sm text-[#A9C0B5]">
              <span>Today's Protocol Completion</span>
              <span>6 of 8 tasks</span>
            </div>

            <div className="w-full bg-[#3A6B54] h-2 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 2 }}
                className="h-full bg-gradient-to-r from-[#C9A75B] to-[#E0C88A]"
              />
            </div>
          </div>

          {/* Bottom Tags */}
          <div className="flex flex-wrap gap-3 mt-8">
            {[
              "Biomarker Tracking",
              "Environmental Analysis",
              "Personalized Protocols",
              "AI Insights",
            ].map((tag, i) => (
              <span
                key={i}
                className="px-4 py-2 border border-[#3D6B55] rounded-full text-sm text-[#BFD1C8]"
              >
                {tag}
              </span>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}

/* ================== COMPONENT ================== */

function StatCard({ icon, title, value, change }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -5 }}
      className="bg-[#2A4F3D] p-6 rounded-2xl border border-[#3D6B55]"
    >
      <div className="text-[#C9A75B] mb-3">{icon}</div>
      <p className="text-sm text-[#A9C0B5]">{title}</p>
      <h4 className="text-xl mt-1">{value}</h4>
      <p className="text-sm text-[#BFD1C8] mt-1">{change}</p>
    </motion.div>
  );
}

export default Dashboard;