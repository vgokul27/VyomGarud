import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const highlights = [
  {
    stat: "99.9%",
    label: "Mission Success Rate",
    description: "Unmatched reliability in critical operations",
  },
  {
    stat: "24/7",
    label: "Autonomous Operations",
    description: "Round-the-clock surveillance and response",
  },
  {
    stat: "<10cm",
    label: "Precision Accuracy",
    description: "Millimeter-level targeting precision",
  },
];

const Highlights = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="highlights"
      className="py-24 bg-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#ff7b00]/10 via-gray-900 to-gray-900"></div>

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
            Performance <span className="text-[#ff7b00]">Highlights</span>
          </h2>
          <div className="w-24 h-1 bg-[#ff7b00] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center group"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border-2 border-gray-800 rounded-2xl p-8 hover:border-[#ff7b00] transition-all duration-300 hover:shadow-xl hover:shadow-[#ff7b00]/20">
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-3xl lg:text-6xl font-bold text-[#ff7b00] mb-4"
                >
                  {highlight.stat}
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {highlight.label}
                </h3>
                <p className="text-gray-400">{highlight.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional feature bullets */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-black/50 backdrop-blur-sm border-2 border-orange-500 rounded-xl p-8 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-[#ff7b00] text-2xl mb-2">⚡</div>
                <h4 className="text-white font-semibold mb-1">AI-Powered</h4>
                <p className="text-gray-400 text-sm">
                  Advanced machine learning algorithms
                </p>
              </div>
              <div>
                <div className="text-[#ff7b00] text-2xl mb-2">🔒</div>
                <h4 className="text-white font-semibold mb-1">Secure</h4>
                <p className="text-gray-400 text-sm">
                  Military-grade encryption
                </p>
              </div>
              <div>
                <div className="text-[#ff7b00] text-2xl mb-2">🌐</div>
                <h4 className="text-white font-semibold mb-1">Connected</h4>
                <p className="text-gray-400 text-sm">
                  Real-time data integration
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Highlights;
