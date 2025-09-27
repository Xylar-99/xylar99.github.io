import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-primary/90 backdrop-blur-sm border-b border-secondary"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="relative group">
              {/* Aizen's Spiritual Pressure Effect */}
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 12, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
                className="w-10 h-10 border-2 border-dashed rounded-full"
                style={{
                  borderColor: '#7B2CBF', // Reiatsu Purple
                  background: 'linear-gradient(45deg, #B22222, #7B2CBF, #F77F00)'
                }}
              />
              
              {/* Inner Spiritual Core */}
              <motion.div
                animate={{
                  opacity: [0.8, 1, 0.8],
                  scale: [0.9, 1, 0.9]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-1 rounded-full flex items-center justify-center"
                style={{
                  background: 'radial-gradient(circle, #7B2CBF 0%, #B22222 50%, #0D0D0D 100%)'
                }}
              >
                {/* Aizen's Symbol - A stylized "A" */}
                <span className="text-white text-xs font-bold">蒼</span>
              </motion.div>
              
              {/* Hovering Particles */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    rotate: 360,
                    scale: [0, 1, 0]
                  }}
                  transition={{
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }
                  }}
                  className="absolute w-1 h-1 rounded-full"
                  style={{
                    background: '#7B2CBF',
                    left: `${20 + i * 15}%`,
                    top: `${20 + i * 15}%`,
                  }}
                />
              ))}
            </div>
            
            {/* Name with Aizen styling */}
            <div className="flex flex-col">
              <span 
                className="text-xl font-bold"
                style={{
                  background: 'linear-gradient(135deg, #7B2CBF, #B22222, #F77F00)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 0 6px rgba(123, 44, 191, 0.4))'
                }}
              >
                X99
              </span>
              <span className="text-xs text-muted opacity-75">蒼染 右介</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -2 }}
                className="text-gray-300 hover:text-accent transition-colors duration-300"
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href="https://github.com/Xylar-99"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="text-gray-300 hover:text-accent transition-colors"
            >
              <FaGithub size={20} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/abdelbassat-quaoubai"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="text-gray-300 hover:text-accent transition-colors"
            >
              <FaLinkedin size={20} />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-accent"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-secondary"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-gray-300 hover:text-accent transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="flex space-x-4 mt-4">
              <a
                href="https://github.com/Xylar-99"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/abdelbassat-quaoubai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
