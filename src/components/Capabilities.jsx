import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const capabilities = [
  {
    title: "Surveillance & Reconnaissance",
    description:
      "Advanced ISR systems with real-time data transmission, thermal imaging, and multi-spectral sensors for superior situational awareness.",
    icon: "🛰️",
  },
  {
    title: "Tactical Strike Operations",
    description:
      "Precision-guided munitions delivery with pinpoint accuracy, minimal collateral damage, and autonomous target engagement capabilities.",
    icon: "🎯",
  },
  {
    title: "Border Security & Patrol",
    description:
      "24/7 autonomous patrol systems with AI-powered threat detection, long-endurance flight, and weather-resistant operations.",
    icon: "🛡️",
  },
  {
    title: "Swarm Technology",
    description:
      "Coordinated multi-UAV operations with distributed intelligence, adaptive formation flying, and resilient network architecture.",
    icon: "⚡",
  },
];

const Capabilities = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="capabilities"
      className="py-24 bg-black relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>

      <div
        ref={ref}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Our <span className="text-[#ff7b00]">Capabilities</span>
          </h2>
          <div className="w-24 h-1 bg-[#ff7b00] mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Military-grade solutions engineered for the most demanding
            operational environments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-[#ff7b00] transition-all duration-300 h-full hover:shadow-xl hover:shadow-[#ff7b00]/20 transform hover:-translate-y-2">
                <div className="text-5xl mb-4">{capability.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#ff7b00] transition-colors">
                  {capability.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {capability.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
