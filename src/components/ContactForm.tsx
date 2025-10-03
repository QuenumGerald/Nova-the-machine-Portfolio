import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const ContactForm = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50 max-w-2xl w-full"
    >
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-gray-700/50 border border-gray-600/50 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="bg-gray-700/50 border border-gray-600/50 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>
        <textarea
          placeholder="Your Message"
          rows={5}
          className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all mb-6"
        ></textarea>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 hover:bg-blue-700 w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-blue-600/20"
        >
          Send Message <Send size={18} />
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;