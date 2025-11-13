const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold text-white">
              Vyom<span className="text-[#ff7b00]">Garud</span>
            </span>
            <p className="text-gray-400 text-sm mt-2">
              Military-Grade UAV Systems
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
            <a
              href="#about"
              className="text-gray-400 hover:text-[#ff7b00] transition-colors"
            >
              About
            </a>
            <a
              href="#capabilities"
              className="text-gray-400 hover:text-[#ff7b00] transition-colors"
            >
              Capabilities
            </a>
            <a
              href="#highlights"
              className="text-gray-400 hover:text-[#ff7b00] transition-colors"
            >
              Highlights
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-[#ff7b00] transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} VyomGarud. All rights reserved. |
            Precision. Reliability. Excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
