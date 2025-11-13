import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Shield, Zap } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cards = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precision Engineering",
      description:
        "VyomGarud is at the forefront of military-grade UAV systems, delivering cutting-edge drone technology that combines precision engineering with advanced autonomous capabilities.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Mission-Critical Solutions",
      description:
        "Our mission is to provide defense and security organizations with reliable, high-performance unmanned aerial systems that exceed the most demanding operational requirements.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation & Reliability",
      description:
        "Built on a foundation of innovation, reliability, and precision, VyomGarud delivers solutions that protect, inform, and empower mission-critical operations worldwide.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="about"
      className="py-24 bg-slate-900 relative overflow-hidden"
      style={{ fontFamily: '"DM Sans", "Helvetica Neue", Arial, sans-serif' }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>

      <div
        ref={ref}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-[#ff7b00]">VyomGarud</span>
          </h2>
          <div className="w-24 h-1 bg-[#ff7b00] mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl font-semibold mx-auto">
            Leading the future of military-grade unmanned aerial systems
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="group"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 h-full hover:border-[#ff7b00] transition-all duration-300 hover:shadow-xl hover:shadow-[#ff7b00]/10">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-16 h-16 bg-gradient-to-br from-[#ff7b00] to-[#ff9933] rounded-lg flex items-center justify-center mb-4 text-white group-hover:shadow-xl group-hover:shadow-[#ff7b00]/50 transition-shadow duration-300"
                >
                  {card.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#ff7b00] transition-colors duration-300">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed text-sm group-hover:text-white">
                  {card.description}
                </p>

                {/* Decorative bottom line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.4 }}
                  className="h-0.5 bg-gradient-to-r from-[#ff7b00] to-transparent mt-4"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <div className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6 md:p-8 text-center shadow-2xl">
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Trusted by defense organizations worldwide,{" "}
              <span className="text-[#ff7b00] font-semibold">VyomGarud</span>{" "}
              combines cutting-edge technology with unmatched reliability to
              deliver UAV systems that redefine operational excellence.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;