'use client';

import { motion } from "framer-motion";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarker } from "react-icons/fa";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
export default function ContactSection() {
  return (
    <div className={`${jakarta.className} bg-black text-white py-16 relative overflow-hidden`}>
      {/* Background effects */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-64 h-64 bg-purple-600/20 rounded-full filter blur-3xl opacity-30"
        initial={{ y: 20 }}
        animate={{ y: -20 }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-purple-500/20 rounded-full filter blur-3xl opacity-30"
        initial={{ y: -20 }}
        animate={{ y: 20 }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-200 to-white bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-black/40 backdrop-blur-xl p-8 rounded-xl border border-purple-500/20"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                <input 
                  type="text" 
                  className="w-full bg-black/20 border border-purple-500/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-black/20 border border-purple-500/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <input 
                  type="text" 
                  className="w-full bg-black/20 border border-purple-500/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea 
                  rows="4"
                  className="w-full bg-black/20 border border-purple-500/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-200 to-white text-black py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-black/40 backdrop-blur-xl p-8 rounded-xl border border-purple-500/20">
              <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-purple-300 to-white bg-clip-text text-transparent">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-purple-500/10 w-10 h-10 rounded-full flex items-center justify-center mr-4 text-purple-400">
                    <FaPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-200">Phone</h4>
                    <p className="text-gray-400">+91 9408744422</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-500/10 w-10 h-10 rounded-full flex items-center justify-center mr-4 text-purple-400">
                    <FaEnvelope className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-200">Email</h4>
                    <p className="text-gray-400">ap890383@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-500/10 w-10 h-10 rounded-full flex items-center justify-center mr-4 text-purple-400">
                    <FaMapMarker className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-200">Address</h4>
                    <p className="text-gray-400">-</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-purple-500/20">
                <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-purple-300 to-white bg-clip-text text-transparent">
                  Follow Us
                </h3>
                <div className="flex space-x-6">
                  {[
                    { icon: FaTwitter, color: "hover:text-[#1DA1F2]" },
                    { icon: FaFacebook, color: "hover:text-[#1877F2]" },
                    { icon: FaInstagram, color: "hover:text-[#E4405F]" },
                    { icon: FaLinkedin, color: "hover:text-[#0A66C2]" }
                  ].map((SocialIcon, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      className={`text-gray-400 hover:text-purple-400 ${SocialIcon.color} transition-colors`}
                      whileHover={{ scale: 1.1 }}
                    >
                      <SocialIcon.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}