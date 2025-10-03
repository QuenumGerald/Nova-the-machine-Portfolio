import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Code2, ArrowRight } from 'lucide-react';
import GridBackground from './GridBackground';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-4 overflow-hidden">
      <GridBackground />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 space-y-8 max-w-4xl"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          Full Stack Blockchain Developer
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto"
        >
          Transforming ideas into innovative digital solutions. With advanced expertise in blockchain, mobile apps, and modern technologies.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 shadow-lg shadow-blue-600/20"
          >
            <Mail size={22} />
            Contact Me
          </motion.a>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-800 hover:bg-gray-700 px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 group"
          >
            <Code2 size={22} />
            View My Work
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </motion.div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-900 to-transparent" />
    </section>
  );
};

export default Hero;