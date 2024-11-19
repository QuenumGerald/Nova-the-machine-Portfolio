import React from 'react';
import { Github, Linkedin, Mail, Code2, Briefcase } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import Header from './components/Header';

function App() {
  const projects = [
    {
      title: "AirScope",
      description: "AirScope Tracker is a web app for real-time flight tracking and live statistics.",
      tech: ["React", "FLights API", "Tailwind CSS"],
      image: "/airscope.png",
      link: "#"
    },
    {
      title: "CryptoDash",
      description: "Interactive and modern app for tracking real-time cryptocurrency information, with a sleek, mobile-friendly design.",
      tech: ["React.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
      image: "/cryptodash.png",
      link: "#"
    },
    {
      title: "SkyScope",
      description: "Web app to explore real-time weather data, with an intuitive interface and interactive features.",
      tech: ["React", "OpenWeather API", "Tailwind CSS"],
      image: "/skyscope.png",
      link: "https://skyscope360.netlify.app/"
    },
    {
      title: "SignaRead PDF",
      description: "An intuitive mobile app for reading, annotating, and signing PDFs directly from your phone.",
      tech: ["Flutter"],
      image: "/signaread.jpg",
      link: "#"
    },
    {
      title: "SportsChain",
      description: "A decentralized platform to invest in sports teams, built with Next.js, Node.js, and Polygon, using Chainlink for real-time data.",
      tech: ["Next.js", "Node.js", "Polygon", "Chainlink"],
      image: "/sportschain.png",
      link: "https://bit.ly/4dbS5rU"
    },
    {
      title: "SecureDocs",
      description: "Decentralized app for secure document management with integrated notarization. Uses Web3Auth, CCIP, and Solidity.",
      tech: ["Solidity", "Web3Auth", "CCIP"],
      image: "/securedocs.png",
      link: "https://bit.ly/3XIOFIC"
    },
    {
      title: "ScanGuard",
      description: "Mobile app for scanning and generating barcodes with wallet integration.",
      tech: ["Flutter"],
      image: "/scanguard.png",
      link: "https://play.google.com/store/apps/details?id=com.monapp.scanguard&pli=1"
    },
    {
      title: "Game2048",
      description: "An interactive graphical version of the classic 2048 puzzle game, featuring smooth animations and modern features.",
      tech: ["Flutter"],
      image: "/2048.png",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header />

      {/* Hero Section */}
      <section className="px-4 py-20 md:py-32 max-w-6xl mx-auto">
        <div className="space-y-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-gray-400 bg-clip-text text-transparent">
            Full Stack Blockchain Developer
          </h1>
          <p className="text-lg md:text-xl text-gray-400">
            Transforming ideas into innovative digital solutions. With advanced expertise in blockchain, mobile apps, and modern technologies.
          </p>
          <div className="flex gap-4">
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium flex items-center gap-2">
              <Mail size={20} /> Contact
            </a>
            <a href="#projects" className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg font-medium flex items-center gap-2">
              <Code2 size={20} /> Projects
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-4 py-20 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <Briefcase className="text-blue-500" />
            Recent Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-4 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/QuenumGerald" className="text-gray-400 hover:text-white transition-colors">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/g%C3%A9rald-quenum-00b965233" className="text-gray-400 hover:text-white transition-colors">
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
