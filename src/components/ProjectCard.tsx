import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Tag from './Tag';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
  githubLink?: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const getTagColor = (tech: string) => {
  switch (tech.toLowerCase()) {
    case 'react':
    case 'react.js':
    case 'next.js':
      return 'bg-sky-500/20 text-sky-300';
    case 'typescript':
      return 'bg-blue-500/20 text-blue-300';
    case 'solidity':
      return 'bg-gray-400/20 text-gray-300';
    case 'web3':
    case 'defi':
    case 'polygon':
    case 'chainlink':
    case 'web3auth':
    case 'ccip':
      return 'bg-purple-500/20 text-purple-300';
    case 'node.js':
      return 'bg-green-500/20 text-green-300';
    case 'flutter':
        return 'bg-cyan-500/20 text-cyan-300';
    case 'ai':
        return 'bg-pink-500/20 text-pink-300';
    default:
      return 'bg-gray-700 text-gray-300';
  }
};


const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tech, image, link, githubLink }) => {
  return (
    <motion.div
      variants={cardVariants}
      className="bg-gray-800/50 rounded-2xl overflow-hidden group border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-400 mb-4 text-sm leading-relaxed h-20">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item) => (
            <Tag key={item} text={item} className={getTagColor(item)} />
          ))}
        </div>
        <div className="flex items-center justify-end gap-4 mt-4">
            {githubLink && (
                 <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <Github size={20} />
                 </a>
            )}
             <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
                View Project <ExternalLink size={16} />
             </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;