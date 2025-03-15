'use client';
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function PropertyDetailsModal({ property, onClose }) {
  return (
    <AnimatePresence>
      {property && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-xl z-50 flex items-start pt-20 pb-8 justify-center p-4 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            className="bg-black/80 backdrop-blur-xl rounded-2xl border border-purple-500/20 max-w-3xl w-full relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background effects */}
            <motion.div
              className="absolute top-1/3 left-1/4 w-64 h-64 bg-purple-600/20 rounded-full filter blur-3xl opacity-20"
              animate={{ y: [-20, 20] }}
              transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
            />

            <div className="relative">
              <button
                onClick={onClose}
                className="sticky top-0 z-50 ml-auto mr-4 mt-4 p-2 hover:bg-purple-500/20 rounded-full transition-colors backdrop-blur-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="relative h-64">
                <Image
                  src={property.image}
                  alt={property.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              </div>

              <div className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{property.name}</h2>
                    <div className="flex items-center text-purple-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-base">{property.location}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold mb-2">{property.price}</div>
                    <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm">
                      {property.bhk}
                    </span>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 text-base">{property.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-black/40 p-4 rounded-xl border border-purple-500/20">
                    <h4 className="text-purple-400 mb-2 text-sm font-semibold">Property Features</h4>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>• 2500 sq.ft built-up area</li>
                      <li>• 3 Balconies</li>
                      <li>• Modular Kitchen</li>
                      <li>• Smart Home System</li>
                    </ul>
                  </div>
                  <div className="bg-black/40 p-4 rounded-xl border border-purple-500/20">
                    <h4 className="text-purple-400 mb-2 text-sm font-semibold">Amenities</h4>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>• Swimming Pool</li>
                      <li>• 24/7 Security</li>
                      <li>• Gymnasium</li>
                      <li>• Power Backup</li>
                    </ul>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm">
                  Contact Owner
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
export default function FeaturedPropertiesSection() {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const properties = [
    {
      id: 1,
      name: "Luxury Sky Villa",
      location: "Mumbai, Bandra",
      bhk: "3 BHK",
      price: "₹4.2 Cr",
      description: "Modern 3BHK apartment with panoramic city views and premium amenities",
      image: "/property1.jpg"
    },
    {
      id: 2,
      name: "Serene Hillside Villa",
      location: "Pune, Kothrud",
      bhk: "4 BHK",
      price: "₹3.8 Cr",
      description: "Spacious villa nestled in the hills with private garden and pool",
      image: "/property2.jpg"
    },
    {
      id: 3,
      name: "Urban Studio Loft",
      location: "Bangalore, Koramangala",
      bhk: "1 BHK",
      price: "₹1.2 Cr",
      description: "Contemporary studio loft in prime location with smart home features",
      image: "/property3.jpg"
    }
  ];

  return (
    <div className="bg-black text-white py-16 relative">
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
          className="mb-12 flex justify-between items-end"
        >
          <div id="properties">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-white bg-clip-text text-transparent">
              Featured Properties
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-400"></div>
          </div>
          <Link
            href="/properties"
            className="px-6 py-3 bg-gradient-to-br from-purple-600/80 to-purple-800/80 text-white rounded-md hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:from-purple-500/80 hover:to-purple-700/80"
          >
            View All Properties
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              className="bg-black/40 backdrop-blur-xl rounded-xl border border-purple-500/20 overflow-hidden hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="relative h-60">
                <Image
                  src={property.image}
                  alt={property.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{property.name}</h3>
                <div className="flex items-center text-gray-400 text-sm mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {property.location}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm">
                    {property.bhk}
                  </span>
                  <span className="text-lg font-semibold">{property.price}</span>
                </div>

                <p className="text-gray-400 mb-5">{property.description}</p>

                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedProperty(property);
                  }}
                  className="w-full px-4 py-2 text-center bg-white/5 backdrop-blur-md border border-purple-500/20 rounded-md hover:bg-purple-900/20 transition-all duration-300 hover:shadow-md hover:shadow-purple-500/20"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}

          <PropertyDetailsModal
            property={selectedProperty}
            onClose={() => setSelectedProperty(null)}
          />
        </div>
      </div>
    </div>
  );
}