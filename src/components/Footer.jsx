import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="bg-black border-t border-gray-800 py-16"
      style={{ fontFamily: '"DM Sans", "Helvetica Neue", Arial, sans-serif' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section with Logo and Columns */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Logo and Description */}
          <div className="lg:col-span-1">
            <span className="text-2xl font-bold text-white">
              Vyom<span className="text-[#ff7b00]">Garud</span>
            </span>
            <p className="text-gray-400 text-sm mt-4 leading-relaxed">
              Military-Grade UAV Systems delivering precision, reliability, and
              excellence.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-3 mt-6">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg text-gray-400 hover:text-[#ff7b00] hover:bg-gray-700 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg text-gray-400 hover:text-[#ff7b00] hover:bg-gray-700 transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg text-gray-400 hover:text-[#ff7b00] hover:bg-gray-700 transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#ff7b00] transition-colors text-sm"
                >
                  Tactical UAVs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#ff7b00] transition-colors text-sm"
                >
                  Surveillance Drones
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#ff7b00] transition-colors text-sm"
                >
                  Combat Systems
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#ff7b00] transition-colors text-sm"
                >
                  AI Autopilot
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#ff7b00] transition-colors text-sm"
                >
                  Ground Control
                </a>
              </li>
            </ul>
          </div>

          {/* Industries Column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Industries
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#ff7b00] transition-colors text-sm"
                >
                  Defense & Military
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#ff7b00] transition-colors text-sm"
                >
                  Border Security
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#ff7b00] transition-colors text-sm"
                >
                  Law Enforcement
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#ff7b00] transition-colors text-sm"
                >
                  Critical Infrastructure
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#ff7b00] transition-colors text-sm"
                >
                  Intelligence Operations
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#ff7b00] transition-colors text-sm"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#ff7b00] transition-colors text-sm"
                >
                  Technical Specs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#ff7b00] transition-colors text-sm"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#ff7b00] transition-colors text-sm"
                >
                  White Papers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#ff7b00] transition-colors text-sm"
                >
                  Training Materials
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-[#ff7b00] transition-colors text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#ff7b00] transition-colors text-sm"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#ff7b00] transition-colors text-sm"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#ff7b00] transition-colors text-sm"
                >
                  Press & Media
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-[#ff7b00] transition-colors text-sm"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#hero"
                  className="text-gray-400 hover:text-[#ff7b00] transition-colors text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#capabilities"
                  className="text-gray-400 hover:text-[#ff7b00] transition-colors text-sm"
                >
                  Capabilities
                </a>
              </li>
              <li>
                <a
                  href="#highlights"
                  className="text-gray-400 hover:text-[#ff7b00] transition-colors text-sm"
                >
                  Highlights
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#ff7b00] transition-colors text-sm"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#ff7b00] transition-colors text-sm"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} VyomGarud. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Precision. Reliability. Excellence.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
