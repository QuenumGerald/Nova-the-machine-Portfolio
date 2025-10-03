import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between md:flex-row gap-8">
          <div className="flex items-center gap-3">
            <Logo />
            <div className='flex flex-col'>
                <span className="text-xl font-bold text-gray-100">
                Gérald Quenum
                </span>
                <p className="text-sm text-gray-400">Full Stack Blockchain Developer</p>
            </div>
          </div>
          <div className="flex gap-6">
            <a href="https://github.com/QuenumGerald" className="text-gray-400 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/g%C3%A9rald-quenum-00b965233" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:geraldquenum9@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Gérald Quenum. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;