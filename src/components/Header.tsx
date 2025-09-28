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
            className="flex items-center"
          >
            <div className="relative group">
              {/* SVG Logo in Circle */}
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                className="w-12 h-12 relative rounded-full overflow-hidden"
                style={{
                  borderRadius: '50%'
                }}
              >
                <img 
                  src="/logo.svg" 
                  alt="Logo" 
                  className="w-full h-full object-cover rounded-full"
                  style={{
                    borderRadius: '50%',
                    filter: 'drop-shadow(0 0 8px rgba(139, 0, 255, 0.6)) drop-shadow(0 0 15px rgba(77, 0, 128, 0.4))'
                  }}
                />
              </motion.div>
              
              {/* Spiritual Pressure Aura */}
              <motion.div
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(139, 0, 255, 0.2) 0%, rgba(77, 0, 128, 0.1) 50%, transparent 70%)',
                  filter: 'blur(2px)',
                  borderRadius: '50%'
                }}
              />
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
