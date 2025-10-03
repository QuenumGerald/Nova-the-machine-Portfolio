import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Search } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import Header from './components/Header';
import Hero from './components/Hero';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const projects = useMemo(() => [
    {
        title: "ElizaDAO",
        description: "A collaborative project with Arbitrum for the Trailblazer AI program. An innovative AI-powered DAO with autonomous treasury management, smart contract governance, and automated grant distribution.",
        tech: ["Solidity", "Web3", "AI", "Node.js"],
        image: "/elizadao.png",
        link: "https://github.com/QuenumGerald/eliza-dao",
        githubLink: "https://github.com/QuenumGerald/eliza-dao"
      },
      {
        title: "Alchemix-Holyheld",
        description: "A collaborative project with Alchemix and Holyheld, integrating self-repaying DeFi loans with card payments for seamless financial operations.",
        tech: ["React", "TypeScript", "DeFi", "Web3"],
        image: "/alchemix.png",
        link: "https://alchemix-holyheld.netlify.app/"
      },
      {
        title: "ICE Node Dashboard",
        description: "A blockchain explorer on Avalanche for tracking transactions, smart contracts, and wallet activities in real-time.",
        tech: ["React", "Web3", "Railway", "TypeScript"],
        image: "/icenode.png",
        link: "https://ice-front-production.up.railway.app/"
      },
      {
        title: "STONFi Insights",
        description: "A monitoring dashboard for STON.fi pools, providing real-time analytics for DeFi liquidity providers and traders.",
        tech: ["React", "Web3", "DeFi Analytics", "TypeScript"],
        image: "/stonfi.png",
        link: "https://stonfi-insights.netlify.app/"
      },
      {
        title: "RumpView",
        description: "A web dashboard for tracking token deposits, balances, and transaction history on the Rumpel platform.",
        tech: ["Next.js", "Web3", "DeFi Analytics", "TypeScript"],
        image: "/rumpview.png",
        link: "https://rumpview.netlify.app"
      },
      {
        title: "SecureDocs",
        description: "Decentralized app for secure document management with integrated notarization. Uses Web3Auth, CCIP, and Solidity.",
        tech: ["Solidity", "Web3Auth", "CCIP"],
        image: "/securedocs.png",
        link: "https://bit.ly/3XIOFIC"
      },
  ], []);

  const filteredProjects = useMemo(() => {
    if (!searchQuery) return projects;
    return projects.filter(p =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [searchQuery, projects]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header />
      <main>
        <Hero />

        <section id="projects" className="px-4 py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">My Work</h2>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">A selection of my projects showcasing my skills in blockchain, web development, and mobile apps.</p>
            </div>

            <div className="mb-12 max-w-lg mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-gray-800/50 border border-gray-700/50 rounded-full py-3 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              </div>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence>
                {filteredProjects.map((project) => (
                  <motion.div key={project.title} layout>
                    <ProjectCard {...project} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        <section id="contact" className="px-4 py-20 bg-gray-800/20">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Get In Touch</h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">Have a project in mind or just want to say hi? Feel free to reach out.</p>
                </div>
                <div className="flex justify-center mb-12">
                    <ContactForm />
                </div>
                <div className="flex justify-center gap-8">
                    <motion.a href="https://github.com/QuenumGerald" whileHover={{ y: -4 }} className="text-gray-400 hover:text-white transition-colors">
                        <Github size={32} />
                    </motion.a>
                    <motion.a href="https://www.linkedin.com/in/g%C3%A9rald-quenum-00b965233" whileHover={{ y: -4 }} className="text-gray-400 hover:text-white transition-colors">
                        <Linkedin size={32} />
                    </motion.a>
                    <motion.a href="mailto:geraldquenum9@gmail.com" whileHover={{ y: -4 }} className="text-gray-400 hover:text-white transition-colors">
                        <Mail size={32} />
                    </motion.a>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;