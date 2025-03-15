'use client'
import { Plus_Jakarta_Sans } from "next/font/google";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

// Enhanced Navigation component with glassmorphism
export default function Navigation() {
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
      className={`${jakarta.className} bg-black/70 backdrop-blur-xl border-b py-4 px-6 lg:px-16 sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'border-purple-500/20 shadow-lg shadow-purple-500/10' : 'border-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center group">
          <div className="bg-purple-600/80 w-8 h-8 rounded-md flex items-center justify-center mr-2 transition-all duration-300 group-hover:bg-purple-500 group-hover:shadow-md group-hover:shadow-purple-500/30">
            <div className="bg-black w-4 h-4 rounded-sm"></div>
          </div>
          <span className=" text-xl font-bold ">
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