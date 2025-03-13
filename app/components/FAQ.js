'use client';

import { motion } from "framer-motion";

export default function FAQSection() {
  const faqs = [
    {
      question: "How does VistaVilla ensure property authenticity?",
      answer: "Every listing undergoes rigorous verification including legal checks, physical inspections, and documentation review by our expert team."
    },
    {
      question: "What makes your pricing strategy different?",
      answer: "Our AI-powered valuation system considers 50+ market factors to provide fair, real-time pricing recommendations for both buyers and sellers."
    },
    {
      question: "How secure are my property documents?",
      answer: "We use bank-grade encryption and blockchain technology to store all documents securely, with multi-factor authentication access."
    },
    {
      question: "Can I schedule virtual property tours?",
      answer: "Yes, our platform offers 360° virtual tours with live agent guidance and AR furniture visualization for remote viewing."
    },
    {
      question: "What post-purchase support do you offer?",
      answer: "Our concierge service assists with everything from interior design recommendations to utility setups and maintenance contracts."
    },
    {
      question: "How do you handle legal verification?",
      answer: "Our in-house legal team conducts complete title checks, approval verifications, and compliance audits for every transaction."
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