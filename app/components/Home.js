'use client';

import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FeaturedPropertiesSection from "./Properties";
import FAQSection from "./FAQ";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

// Enhanced Navigation component with glassmorphism
function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on resize or outside click
  useEffect(() => {
    const handleResize = () => setIsMenuOpen(false);
    const handleClickOutside = (e) => {
      if (!e.target.closest('nav')) setIsMenuOpen(false);
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <motion.nav
      className={`bg-black/70 backdrop-blur-xl border-b py-4 px-6 lg:px-16 sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'border-purple-500/20 shadow-lg shadow-purple-500/10' : 'border-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center group">
          <div className="bg-purple-600/80 w-8 h-8 rounded-md flex items-center justify-center mr-2 transition-all duration-300 group-hover:bg-purple-500 group-hover:shadow-md group-hover:shadow-purple-500/30">
            <div className="bg-black w-4 h-4 rounded-sm"></div>
          </div>
          <span className="text-white text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent transition-all duration-300 group-hover:from-pink-500 group-hover:to-purple-400">
            VistaVilla
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {['/', '/about', '/properties'].map((path, index) => (
            <Link
              key={index}
              href={path}
              className="text-white/80 hover:text-white relative group transition-all duration-300"
            >
              {path === '/' ? 'Home' : path.replace('/', '').charAt(0).toUpperCase() + path.slice(2)}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          <Link href="/premium" className="text-white/80 hover:text-white relative group transition-all duration-300">
            Premium Listings
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-purple-400 hover:text-purple-300 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-6">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link href="/contact" className="text-white/90 hover:text-white px-3 py-1.5 rounded-lg backdrop-blur-md bg-white/5 hover:bg-purple-500/20 border border-purple-500/20 transition-all duration-300 hover:shadow-md hover:shadow-purple-500/20">
              Contact Us
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link href="/post-property" className="text-white px-4 py-2 rounded-md transition-all duration-300 shadow-md shadow-purple-500/20 bg-gradient-to-br from-purple-600/80 to-purple-800/80 backdrop-blur-md hover:shadow-lg hover:shadow-purple-500/30 hover:from-purple-500/80 hover:to-purple-700/80">
              Post Property
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden overflow-hidden"
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMenuOpen ? 1 : 0,
          height: isMenuOpen ? 'auto' : 0 
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="pt-4 pb-6 space-y-4">
          {['/', '/about', '/properties', '/premium'].map((path, index) => (
            <Link
              key={index}
              href={path}
              className="block px-4 py-2 text-white/80 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {path === '/' ? 'Home' : 
               path === '/premium' ? 'Premium Listings' :
               path.replace('/', '').charAt(0).toUpperCase() + path.slice(2)}
            </Link>
          ))}

          <div className="mt-8 space-y-4 px-4">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link 
                href="/contact" 
                className="block w-full text-center py-2 text-white/90 hover:text-white rounded-lg backdrop-blur-md bg-white/5 hover:bg-purple-500/20 border border-purple-500/20 transition-all duration-300 hover:shadow-md hover:shadow-purple-500/20"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link 
                href="/post-property" 
                className="block w-full text-center py-2 text-white rounded-md transition-all duration-300 shadow-md shadow-purple-500/20 bg-gradient-to-br from-purple-600/80 to-purple-800/80 backdrop-blur-md hover:shadow-lg hover:shadow-purple-500/30 hover:from-purple-500/80 hover:to-purple-700/80"
                onClick={() => setIsMenuOpen(false)}
              >
                Post Property
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
}

// Enhanced Feature card component with purple glassmorphism
function FeatureCard({ icon, title, index }) {
  return (
    <motion.div
      className="bg-black/40 backdrop-blur-xl p-6 rounded-xl border border-purple-500/20 relative group transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 hover:bg-purple-900/10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="flex justify-between items-start mb-8">
        <div className="bg-purple-500/10 w-12 h-12 rounded-full flex items-center justify-center text-purple-400 group-hover:bg-purple-500/30 transition-colors duration-300 group-hover:shadow-md group-hover:shadow-purple-500/30">
          {icon}
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
          className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors duration-300">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
      </div>
      <h3 className="text-white text-lg font-medium mb-2">{title}</h3>
      <div className="h-px w-full bg-white/10 relative overflow-hidden">
        <div className="absolute left-0 top-0 w-0 h-full bg-gradient-to-r from-purple-500 to-pink-400 transition-all duration-500 group-hover:w-full"></div>
      </div>
    </motion.div>
  );
}

// Enhanced Hero section with purple glassmorphism effects
function HeroSection() {
  return (
    <div className="bg-black text-white relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Purple gradient orbs */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl opacity-50"
        initial={{ scale: 0.9, opacity: 0.2 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl opacity-50"
        initial={{ scale: 1, opacity: 0.5 }}
        animate={{ scale: 0.9, opacity: 0.3 }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-24 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-8 relative z-10">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-purple-200 to-white bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Discover Your Dream Property with VistaVilla
            </motion.h1>
            <motion.p
              className="text-gray-400/90 max-w-lg text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.button
                className="px-6 py-3 bg-white/5 backdrop-blur-xl border border-purple-500/20 text-white rounded-lg hover:bg-purple-900/20 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More
              </motion.button>
              <motion.button
                className="px-6 py-3 bg-gradient-to-br from-purple-600/80 to-purple-800/80 backdrop-blur-xl text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:from-purple-500/80 hover:to-purple-700/80"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                Browse Properties
              </motion.button>
            </motion.div>

            {/* Enhanced Stats with glassmorphism */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              {[
                { value: "200+", label: "Happy Customers" },
                { value: "10k+", label: "Properties Listed" },
                { value: "16+", label: "Years Experience" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-black/40 backdrop-blur-xl p-4 rounded-xl border border-purple-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:bg-purple-900/10 group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                >
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent group-hover:from-pink-300 group-hover:to-purple-400 transition-all duration-300">
                    {stat.value}
                  </h3>
                  <p className="text-gray-400/80 text-sm mt-1 group-hover:text-gray-300/90 transition-colors duration-300">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image Section with enhanced glassmorphism */}
          <motion.div
            className="relative md:h-[600px] w-full transition-all duration-500"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="absolute inset-0 md:-right-16 lg:-right-24 h-full">
              <div className="relative h-full w-full overflow-hidden rounded-l-2xl md:rounded-l-[2rem] border border-purple-500/20 backdrop-blur-lg shadow-xl shadow-purple-500/10 transition-all duration-500">
                <Image
                  src="/hero-image2.svg"
                  alt="Modern blue skyscraper"
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "left center"
                  }}
                  className="h-full w-full opacity-90 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-purple-900/20" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}


// Features section with purple glassmorphism
function FeaturesSection() {
  return (
    <div className="bg-black text-white py-16 relative">
      {/* Purple gradient orbs */}
      <motion.div
        className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-600/20 rounded-full filter blur-3xl opacity-30"
        initial={{ y: 20 }}
        animate={{ y: -20 }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-purple-500/20 rounded-full filter blur-3xl opacity-30"
        initial={{ y: -20 }}
        animate={{ y: 20 }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-white bg-clip-text text-transparent">Our Services</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>,
              title: "Find Your Dream Home"
            },
            {
              icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
              </svg>,
              title: "Unlock Property Value"
            },
            {
              icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
              </svg>,
              title: "Effortless Property Management"
            },
            {
              icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>,
              title: "Smart Investments, Informed Decisions"
            }
          ].map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}



// Testimonials section
function TestimonialsSection() {
  return (
    <div className="bg-black text-white py-16 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>

      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-white bg-clip-text text-transparent">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-400 mx-auto"></div>
        </motion.div>

        <motion.button
          className="px-6 py-3 bg-white/5 backdrop-blur-xl border border-purple-500/20 text-white rounded-lg hover:bg-purple-900/20 items-end transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.98 }}
        >
          View all
        </motion.button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Sarah Johnson",
              role: "Homeowner",
              quote: "VistaVilla helped me find my dream home in just two weeks. Their attention to my specific needs was impressive."
            },
            {
              name: "Michael Chen",
              role: "Property Investor",
              quote: "As an investor, I appreciate their market insights and property valuation. Their team truly understands real estate fundamentals."
            },
            {
              name: "Priya Sharma",
              role: "First-time Buyer",
              quote: "The team guided me through every step of my first home purchase. Their patience and expertise made all the difference."
            }
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-black/40 backdrop-blur-xl p-6 rounded-xl border border-purple-500/20 relative transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400/70">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                </svg>
              </div>
              <p className="text-gray-300 mb-6 italic">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-purple-600/30 flex items-center justify-center text-white font-medium">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="text-white font-medium">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function Homepage() {
  return (
    <main className={`${jakarta.className} bg-black min-h-screen`}>
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <FeaturedPropertiesSection/>
      <TestimonialsSection />
      <FAQSection/>
      
    </main>
  );
}