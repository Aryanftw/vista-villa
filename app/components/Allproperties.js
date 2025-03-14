'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function PropertiesListingSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    location: "",
    bhk: "",
    type: "",
    status: ""
  });

  const [filteredProperties, setFilteredProperties] = useState([]);

  const properties = [
    {
      id: 1,
      name: "Luxury Sky Villa",
      location: "Mumbai",
      bhk: "3",
      price: "₹4.2 Cr",
      description: "Modern 3BHK apartment with panoramic city views and premium amenities",
      image: "/property1.jpg",
      type: "apartment",
      status: "ready"
    },
    {
      id: 2,
      name: "Serene Hillside Villa",
      location: "Pune",
      bhk: "4",
      price: "₹3.8 Cr",
      description: "Spacious villa nestled in the hills with private garden and pool",
      image: "/property2.jpg",
      type: "villa",
      status: "ready"
    },
    {
      id: 3,
      name: "Urban Studio Loft",
      location: "Bangalore",
      bhk: "1",
      price: "₹1.2 Cr",
      description: "Contemporary studio loft in prime location with smart home features",
      image: "/property3.jpg",
      type: "penthouse",
      status: "under-construction"
    },
    {
      id: 4,
      name: "Golden Valley Estate",
      location: "Mumbai",
      bhk: "5",
      price: "₹8.5 Cr",
      description: "Luxurious 5BHK estate with private beach access",
      image: "/property4.jpg",
      type: "villa",
      status: "ready"
    },
    {
      id: 5,
      name: "Ocean View Penthouse",
      location: "Mumbai",
      bhk: "3",
      price: "₹5.5 Cr",
      description: "Luxurious penthouse with stunning ocean views",
      image: "/property5.jpg",
      type: "penthouse",
      status: "ready"
    },
    {
      id: 6,
      name: "Green Valley Apartment",
      location: "Bangalore",
      bhk: "2",
      price: "₹2.2 Cr",
      description: "Eco-friendly apartment with lush green surroundings",
      image: "/property6.jpg",
      type: "apartment",
      status: "under-construction"
    }
  ];

  useEffect(() => {
    const results = properties.filter((property) => {
      const matchesSearch =
        property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesFilters =
        (!filters.location || property.location === filters.location) &&
        (!filters.bhk || property.bhk === filters.bhk) &&
        (!filters.type || property.type === filters.type) &&
        (!filters.status || property.status === filters.status);

      return matchesSearch && matchesFilters;
    });

    setFilteredProperties(results);
  }, [searchTerm, filters]);

  return (
    <div className={`${jakarta.className}bg-black text-white py-16 relative`}>
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
        {/* Search and Filters Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search properties..."
                className="w-full px-6 py-3 bg-black/40 backdrop-blur-xl rounded-lg border border-purple-500/20 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex gap-4 flex-wrap">
              <select
                className="px-4 py-2 bg-black/40 backdrop-blur-xl rounded-lg border border-purple-500/20 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
              >
                <option value="">All Locations</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Pune">Pune</option>
                <option value="Bangalore">Bangalore</option>
              </select>

              <select
                className="px-4 py-2 bg-black/40 backdrop-blur-xl rounded-lg border border-purple-500/20 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                value={filters.bhk}
                onChange={(e) => setFilters({ ...filters, bhk: e.target.value })}
              >
                <option value="">All BHK</option>
                <option value="1">1 BHK</option>
                <option value="2">2 BHK</option>
                <option value="3">3 BHK</option>
                <option value="4">4 BHK</option>
                <option value="5">5 BHK</option>
              </select>

              <select
                className="px-4 py-2 bg-black/40 backdrop-blur-xl rounded-lg border border-purple-500/20 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                value={filters.type}
                onChange={(e) => setFilters({ ...filters, type: e.target.value })}
              >
                <option value="">All Types</option>
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
                <option value="penthouse">Penthouse</option>
              </select>
            </div>
          </div>

          {/* Title and View All button */}
          <div className="flex justify-between items-end">
            <div>
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-white bg-clip-text text-transparent">
                Premium Properties
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-400"></div>
            </div>
            <Link
              href="/properties"
              className="px-6 py-3 bg-gradient-to-br from-purple-600/80 to-purple-800/80 text-white rounded-md hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:from-purple-500/80 hover:to-purple-700/80"
            >
              View All Properties
            </Link>
          </div>
        </motion.div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property, index) => (
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
                <h3 className="text-xl  mb-2">{property.name}</h3>
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
                    {property.bhk} BHK
                  </span>
                  <span className="text-lg font-semibold">{property.price}</span>
                </div>

                <p className="text-gray-400 mb-5">{property.description}</p>

                <Link
                  href={`/properties/${property.id}`}
                  className="w-full px-4 py-2 text-center bg-white/5 backdrop-blur-md border border-purple-500/20 rounded-md hover:bg-purple-900/20 transition-all duration-300 hover:shadow-md hover:shadow-purple-500/20"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No results message */}
        {filteredProperties.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            No properties found matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
}