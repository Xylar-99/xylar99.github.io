import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-[#cc8899]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo - Aizen style */}
          <div className="flex items-center">
            <a href="#home" className="relative group">
              <span className="text-2xl font-light tracking-widest text-white">
                QUAOUBAI
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-px bg-[#cc8899] group-hover:w-full transition-all duration-500"></div>
            </a>
          </div>

          {/* Desktop Navigation - Minimalist */}
          <nav className="hidden md:flex space-x-10">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-gray-300 hover:text-white transition-colors duration-300 text-sm tracking-wider uppercase font-light group"
              >
                <span className="relative">
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#cc8899] group-hover:w-full transition-all duration-300"></span>
                </span>
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="https://github.com/Xylar-99"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#cc8899] transition-all duration-300"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#cc8899] transition-all duration-300"
            >
              <FaLinkedin size={18} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white">
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-[#cc8899]/20">
          <nav className="px-4 pt-4 pb-6 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-[#cc8899]/10 rounded transition-all duration-300"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
