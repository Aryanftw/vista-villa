'use client';

import { motion } from "framer-motion";

export default function FAQSection() {
  const faqs = [
    {
      question: "How do I list a property on this platform?",
      answer: "To list a property, sign in to your account, navigate to the 'Add Property' section, fill in the details (price, location, images, etc.), and submit your listing. Once approved, it will be visible to potential buyers/renters."
    },
    {
      question: " Is my payment secure on this platform?",
      answer: "Yes! We use Razorpay for secure payment processing, ensuring end-to-end encryption and fraud protection for all transactions."
    },
    {
      question: "Can I schedule property visits before making a decision?",
      answer: "Absolutely! You can request a property visit by clicking the 'Schedule a Visit' button on a listing. The owner/agent will confirm the date and time."
    },
    {
      question: " Do I need to create an account to browse listings?",
      answer: "No, browsing is open to all users. However, to save properties, schedule visits, or make transactions, you’ll need to create a free account."
    },
    {
      question: "What types of properties can I find here?",
      answer: "Our platform features residential homes, apartments, commercial properties, plots, and rental spaces across various locations."
    },
    {
      question: "How do I contact the property owner or agent?",
      answer: "Each listing includes a 'Contact Owner/Agent' button. Once logged in, you can send messages directly or request a call back."
    }
  ];

  return (
    <div className="bg-black text-white py-16 relative overflow-hidden">
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
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-white bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-black/40 backdrop-blur-xl p-6 rounded-xl border border-purple-500/20 group transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex items-start">
                <div className="bg-purple-500/10 w-8 h-8 rounded-full flex items-center justify-center mr-4 text-purple-400 group-hover:bg-purple-500/30 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                  <div className="h-px w-full bg-white/10 mb-4 relative overflow-hidden">
                    <div className="absolute left-0 top-0 w-0 h-full bg-gradient-to-r from-purple-500 to-pink-400 transition-all duration-500 group-hover:w-full"></div>
                  </div>
                  <p className="text-gray-400/90 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}