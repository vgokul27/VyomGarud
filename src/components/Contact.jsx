import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry. We will contact you shortly.");
    setFormData({ name: "", email: "", organization: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="py-24 bg-black relative overflow-hidden"
      style={{ fontFamily: '"DM Sans", "Helvetica Neue", Arial, sans-serif' }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-black"></div>

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
          <h2 className="text-5xl font-bold text-white mb-4">
            Get In <span className="text-[#ff7b00]">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-[#ff7b00] mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to discuss your defense and security requirements? Contact us
            today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-300 mb-2 font-semibold"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#ff7b00] transition-colors"
                  
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-300 mb-2 font-semibold"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#ff7b00] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="organization"
                  className="block text-gray-300 mb-2 font-semibold"
                >
                  Organization
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#ff7b00] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300 mb-2 font-semibold"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#ff7b00] transition-colors resize-none"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-52 bg-[#ff7b00] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#e66f00] transition-all transform hover:scale-105 shadow-lg shadow-[#ff7b00]/50"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#ff7b00]/10 p-3 rounded-lg mr-4">
                    <Mail className="w-6 h-6 text-[#ff7b00]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <p className="text-gray-400">contact@vyomgarud.com</p>
                    <p className="text-gray-400">sales@vyomgarud.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#ff7b00]/10 p-3 rounded-lg mr-4">
                    <Phone className="w-6 h-6 text-[#ff7b00]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Phone</h4>
                    <p className="text-gray-400">+91 XXX XXX XXXX</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#ff7b00]/10 p-3 rounded-lg mr-4">
                    <MapPin className="w-6 h-6 text-[#ff7b00]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Headquarters
                    </h4>
                    <p className="text-gray-400">India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Follow Us On : </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-gray-800 p-3 rounded-lg text-gray-400 hover:text-[#ff7b00] hover:bg-gray-700 transition-all duration-300"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-3 rounded-lg text-gray-400 hover:text-[#ff7b00] hover:bg-gray-700 transition-all duration-300"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-3 rounded-lg text-gray-400 hover:text-[#ff7b00] hover:bg-gray-700 transition-all duration-300"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
