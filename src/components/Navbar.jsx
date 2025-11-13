import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navLinks = [
    { href: "#hero", label: "Home", id: "hero" },
    { href: "#about", label: "About", id: "about" },
    { href: "#capabilities", label: "Capabilities", id: "capabilities" },
    { href: "#highlights", label: "Highlights", id: "highlights" },
    { href: "#contact", label: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => ({
        id: link.id,
        element: document.getElementById(link.id),
      }));

      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const offsetTop = section.element.offsetTop;
          if (scrollPosition >= offsetTop) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 w-full backdrop-blur-sm border-b border-gray-800 px-6 py-4 shadow-md z-50"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Company Logo/Name - Left Side */}
          <div className="flex items-center">
            <a
              href="#hero"
              className="text-2xl font-bold text-white hover:text-[#ff7b00] transition"
            >
              Vyom<span className="text-[#ff7b00] font-bold">Garud</span>
            </a>
          </div>

          {/* Desktop Navigation - Right Side */}
          <ul className="hidden md:flex space-x-8 text-md font-semibold">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`transition-colors cursor-pointer ${
                    activeSection === link.id
                      ? "text-[#ff7b00]"
                      : "text-gray-300 hover:text-[#ff7b00]"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl focus:outline-none text-gray-300 hover:text-[#ff7b00]"
            onClick={() => setIsOpen(true)}
          >
            <Menu />
          </button>
        </div>
      </motion.nav>

      {/* Sidebar for Mobile */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Background Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsOpen(false)}
            ></motion.div>

            {/* Sidebar Panel */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 left-0 w-64 h-full bg-gray-800 text-white shadow-lg flex flex-col p-6 z-50"
            >
              {/* Close Button */}
              <div className="flex justify-between items-center mb-8">
                <div className="text-2xl font-bold text-white">
                  Vyom<span className="text-[#ff7b00]">Garud</span>
                </div>
                <button
                  className="text-2xl text-gray-300 hover:text-[#ff7b00]"
                  onClick={() => setIsOpen(false)}
                >
                  <X />
                </button>
              </div>

              {/* Sidebar Links */}
              <ul className="space-y-6 text-lg">
                {navLinks.map((link) => (
                  <motion.li
                    key={link.href}
                    whileHover={{ scale: 1.1 }}
                    className="cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    <a
                      href={link.href}
                      className={`transition-colors ${
                        activeSection === link.id
                          ? "text-[#ff7b00]"
                          : "text-gray-300 hover:text-[#ff7b00]"
                      }`}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Sidebar Footer */}
              <div className="mt-auto pt-6 border-t border-gray-700">
                <p className="text-gray-400 text-sm text-center">
                  Military-Grade UAV Systems
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
