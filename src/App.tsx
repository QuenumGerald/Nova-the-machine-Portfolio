import React from 'react';
import { Github, Linkedin, Mail, Code2, Briefcase } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import Header from './components/Header';

function App() {
  const projects = [
    {
      title: "CryptoDash",
      description: "Application interactive et moderne pour suivre en temps réel les principales informations sur les cryptomonnaies, avec un design épuré et adapté aux mobiles.",
      tech: ["React.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1615778976371-5de7b0319c2d?auto=format&fit=crop&q=80&w=1600",
      link: "#"
    },
    {
      title: "Sky Scope",
      description: "Application Web pour explorer des données météorologiques en temps réel, avec une interface intuitive et des fonctionnalités interactives.",
      tech: ["React", "OpenWeather API", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1518085564515-699aed7e53fa?auto=format&fit=crop&q=80&w=1600",
      link: "https://skyscope360.netlify.app/"
    },
    {
      title: "SignaRead PDF",
      description: "Application intuitive pour lire, annoter et signer des documents PDF directement depuis un appareil mobile. Elle facilite la gestion et l'édition des fichiers PDF.",
      tech: ["Flutter"],
      image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=1600",
      link: "#"
    },
    {
      title: "SportsChain",
      description: "Une plateforme décentralisée permettant d'investir dans des équipes sportives. Conçue avec Next.js, Node.js et Polygon, elle utilise Chainlink pour fournir des données en temps réel.",
      tech: ["Next.js", "Node.js", "Polygon", "Chainlink"],
      image: "https://images.unsplash.com/photo-1557797899-21bcb19e8ba6?auto=format&fit=crop&q=80&w=1600",
      link: "https://bit.ly/4dbS5rU"
    },
    {
      title: "SecureDocs",
      description: "Application décentralisée pour la gestion sécurisée de documents avec notarisation intégrée. Utilise Web3Auth, CCIP et Solidity.",
      tech: ["Solidity", "Web3Auth", "CCIP"],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1600",
      link: "https://bit.ly/3XIOFIC"
    },
    {
      title: "ScanGuard",
      description: "Application mobile pour scanner et générer des codes-barres avec intégration d'un portefeuille.",
      tech: ["Flutter"],
      image: "https://images.unsplash.com/photo-1526378722296-810d7d6e068f?auto=format&fit=crop&q=80&w=1600",
      link: "#"
    },
    {
      title: "Game2048",
      description: "Reprise graphique et interactive du célèbre jeu de puzzle 2048, avec des animations fluides et des fonctionnalités modernes.",
      tech: ["Flutter"],
      image: "https://images.unsplash.com/photo-1619984907449-0d51e452eb0b?auto=format&fit=crop&q=80&w=1600",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header />

      {/* Hero Section */}
      <section className="px-4 py-20 md:py-32 max-w-6xl mx-auto">
        <div className="space-y-6 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Développeur Full Stack Blockchain
          </h1>
          <p className="text-xl text-gray-400">
            Transformez vos idées en solutions numériques innovantes. Avec une expertise avancée en blockchain, applications mobiles, et technologies modernes.
          </p>
          <div className="flex gap-4">
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium flex items-center gap-2">
              <Mail size={20} /> Contact
            </a>
            <a href="#projects" className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg font-medium flex items-center gap-2">
              <Code2 size={20} /> Projets
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-4 py-20 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <Briefcase className="text-blue-500" />
            Projets Récents
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-4 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Contactez-moi</h2>
          <div className="flex justify-center gap-6">
            <a href="https://github.com" className="text-gray-400 hover:text-white transition-colors">
              <Github size={28} />
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={28} />
            </a>
            <a href="mailto:geraldquenum9@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={28} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
