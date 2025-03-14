'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaLock, FaMoneyBillWave, FaHome, FaBolt, FaSearch, FaHandshake, FaChartLine, FaUserShield } from "react-icons/fa";
import { Plus_Jakarta_Sans } from "next/font/google";
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function AboutPage() {
  return (
    <div className={`${jakarta.className} bg-black text-white min-h-screen`}>
      {/* Hero Section with Image */}
      <div className="relative overflow-hidden pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-200 to-white bg-clip-text text-transparent">
                Redefining Real Estate Excellence
              </h1>
              <p className="text-gray-400/90 text-lg md:text-xl max-w-3xl mx-auto lg:mx-0">
                Welcome to VistaVilla, your premier destination for seamless property transactions. 
                Whether you're buying, selling, or renting, we empower users and agents with cutting-edge 
                technology and market insights for informed real estate decisions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-2xl overflow-hidden border border-purple-400/20 hover:border-cyan-400/30 transition-all"
            >
             <Image src="/about-us.svg" alt="Modern real estate" width={500} height={500} />

              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: <FaLock className="text-4xl text-purple-400" />,
                title: "Secure Authentication",
                desc: "Military-grade security with Clerk integration ensuring safe access"
              },
              {
                icon: <FaMoneyBillWave className="text-4xl text-purple-400" />,
                title: "Seamless Payments",
                desc: "Razorpay-powered transactions with instant payment verification"
              },
              {
                icon: <FaHome className="text-4xl text-purple-400" />,
                title: "Real-time Listings",
                desc: "PostgreSQL-powered database with live property updates"
              },
              {
                icon: <FaBolt className="text-4xl text-purple-400" />,
                title: "Modern Experience",
                desc: "Next.js 14 & Tailwind CSS for blazing-fast performance"
              },
              {
                icon: <FaSearch className="text-4xl text-purple-400" />,
                title: "Advanced Search",
                desc: "Find your dream property with our powerful search tools"
              },
              {
                icon: <FaHandshake className="text-4xl text-purple-400" />,
                title: "Trusted Partnerships",
                desc: "Collaborate with verified agents and agencies"
              },
              {
                icon: <FaChartLine className="text-4xl text-purple-400" />,
                title: "Market Insights",
                desc: "Access real-time market trends and analytics"
              },
              {
                icon: <FaUserShield className="text-4xl text-purple-400" />,
                title: "User Privacy",
                desc: "Your data is protected with end-to-end encryption"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105"
                whileHover={{ y: -10 }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400/90">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-32 text-center relative">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto px-6"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-200 to-white bg-clip-text text-transparent"
          >
            Start Your Property Journey Today
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400/90 mb-8 text-lg"
          >
            Join thousands of satisfied users transforming their real estate experience
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="/properties"
              className="inline-block px-8 py-4 text-lg bg-black text-white border-2 rounded-2xl border-purple-900/95 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-102 hover:bg-gradient-to-r hover:from-purple-900/20 hover:to-cyan-900/20"
            >
              Explore Listings Now
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}