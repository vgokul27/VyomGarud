import { motion } from "framer-motion";
import { Radar, Shield, Target, Cpu } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-start bg-black overflow-hidden py-20"
      style={{ fontFamily: '"DM Sans", "Helvetica Neue", Arial, sans-serif' }}
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0">
        {/* Main Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>

        {/* Animated Scanning Lines */}
        <motion.div
          animate={{ y: ["0%", "100%"] }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ff7b00]/10 to-transparent h-32"
        ></motion.div>

        {/* Radar Sweep Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#ff7b00]/0 via-[#ff7b00]/20 to-[#ff7b00]/0"
              style={{
                clipPath: "polygon(50% 50%, 50% 0%, 100% 50%)",
              }}
            ></div>
          </motion.div>

          {/* Concentric Circles */}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full border border-[#ff7b00]/20"
          ></motion.div>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{
              repeat: Infinity,
              duration: 2.5,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute inset-[15%] rounded-full border border-[#ff7b00]/15"
          ></motion.div>
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute inset-[30%] rounded-full border border-[#ff7b00]/10"
          ></motion.div>
        </div>

        {/* Floating Data Points */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#ff7b00] rounded-full shadow-lg shadow-[#ff7b00]/50"
        ></motion.div>
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-1/3 right-1/4 w-2 h-2 bg-[#ff7b00] rounded-full shadow-lg shadow-[#ff7b00]/50"
        ></motion.div>
        <motion.div
          animate={{
            x: [0, 120, 0],
            y: [0, -70, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            repeat: Infinity,
            duration: 7,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-[#ff7b00] rounded-full shadow-lg shadow-[#ff7b00]/50"
        ></motion.div>

        {/* HUD Elements */}
        <div className="absolute top-30 right-15 text-[#ff7b00]/40 font-mono text-xs hidden lg:block">
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <p>SYSTEM: ACTIVE</p>
            <p>STATUS: OPERATIONAL</p>
            <p>TRACKING: ENABLED</p>
          </motion.div>
        </div>
        <div className="absolute bottom-20 right-20 text-[#ff7b00]/40 font-mono text-xs hidden lg:block">
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 2, delay: 1 }}
          >
            <p>LAT: 28.7041° N</p>
            <p>LONG: 77.1025° E</p>
            <p>ALT: 5000 FT</p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* Drone Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <div className="relative inline-block">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
              ></motion.div>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Next Generation{" "}
            <span className="text-[#ff7b00]">Military Grade</span> UAV Systems
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-base md:text-lg text-white mb-8 leading-relaxed max-w-4xl font-medium font-stretch-ultra-expanded tracking-wider"
          >
            Delivering cutting-edge drone technology that combines precision
            engineering with advanced autonomous capabilities. Built for defense
            and security organizations that demand unmatched reliability and
            performance.
          </motion.p>

          {/* Feature Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            <div className="flex items-center gap-2 bg-gray-900/50 px-3 py-2 rounded-lg border-2 border-gray-800 hover:border-[#ff7b00] hover:bg-gray-900/70 transition-all duration-300 transform hover:scale-110">
              <Shield className="w-4 h-4 text-[#ff7b00]" />
              <span className="text-gray-300 text-xs font-medium tracking-wider">
                Military-Grade
              </span>
            </div>
            <div className="flex items-center gap-2 bg-gray-900/50 px-3 py-2 rounded-lg border-2 border-gray-800 hover:border-[#ff7b00] hover:bg-gray-900/70 transition-all duration-300 transform hover:scale-110">
              <Target className="w-4 h-4 text-[#ff7b00]" />
              <span className="text-gray-300 text-xs font-medium tracking-wider">
                Precision Strike
              </span>
            </div>
            <div className="flex items-center gap-2 bg-gray-900/50 px-3 py-2 rounded-lg border-2 border-gray-800 hover:border-[#ff7b00] hover:bg-gray-900/70 transition-all duration-300 transform hover:scale-110">
              <Cpu className="w-4 h-4 text-[#ff7b00]" />
              <span className="text-gray-300 text-xs font-medium tracking-wider">
                AI-Powered
              </span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#capabilities"
              className="bg-orange-500 text-white px-6 py-3 rounded-4xl font-semibold hover:bg-white hover:text-black transition-all transform hover:scale-105 flex items-center justify-center gap-2 text-sm tracking-wide"
            >
              <Radar className="w-4 h-4" />
              Explore Capabilities
            </a>
            <a
              href="#contact"
              className="border-2 border-gray-600 text-white px-6 py-3 rounded-4xl font-semibold hover:border-[#ff7b00] transition-all flex items-center justify-center gap-2 text-sm tracking-wide"
            >
              <Shield className="w-4 h-4" />
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 border-2 border-gray-600 rounded-full flex justify-center"
        >
          <div className="w-1 h-2 bg-[#ff7b00] rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
