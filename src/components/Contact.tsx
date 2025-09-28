import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "abdelbassat.quaoubai@gmail.com",
      link: "mailto:abdelbassat.quaoubai@gmail.com",
      color: "#8b45c1"
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "Connect with me",
      link: "https://linkedin.com/in/abdelbassat-quaoubai",
      color: "#dc2626"
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "View my repositories",
      link: "https://github.com/Xylar-99",
      color: "#9333ea"
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Morocco",
      link: null,
      color: "#7c3aed"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Aizen's Spiritual Energy Background */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Large mystical circle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10">
            <div 
              className="w-96 h-96 border-2 rounded-full"
              style={{
                borderColor: '#8b45c1',
                animation: 'spin 30s linear infinite reverse'
              }}
            >
              <div 
                className="absolute inset-4 border border-red-500 rounded-full opacity-60"
                style={{ animation: 'spin 20s linear infinite' }}
              >
                <div 
                  className="absolute inset-4 border border-purple-400 rounded-full opacity-80"
                  style={{ animation: 'spin 15s linear infinite reverse' }}
                />
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative z-10"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="text-transparent bg-gradient-to-r from-purple-400 to-red-500 bg-clip-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-red-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Connect with me through the spiritual energy of professional networks
          </p>
        </motion.div>

        {/* Aizen's Ego Hands with Circles Design */}
        <div className="relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                className="relative group"
              >
                {/* Outer mystical circle */}
                <div 
                  className="absolute inset-0 rounded-full border opacity-20 group-hover:opacity-60 transition-all duration-500"
                  style={{
                    borderColor: info.color,
                    animation: `spin ${12 + index * 2}s linear infinite`,
                    transform: 'scale(1.1)'
                  }}
                />
                
                {/* Middle circle */}
                <div 
                  className="absolute inset-1 rounded-full border opacity-30 group-hover:opacity-80 transition-all duration-500"
                  style={{
                    borderColor: info.color,
                    animation: `spin ${8 + index}s linear infinite reverse`,
                    transform: 'scale(1.05)'
                  }}
                />

                {/* Main contact circle - Aizen's hand gesture style */}
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    rotateZ: 5,
                    boxShadow: `0 0 25px ${info.color}40`
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="relative w-20 h-20 mx-auto rounded-full border flex flex-col items-center justify-center cursor-pointer transition-all duration-300"
                  style={{
                    borderColor: info.color,
                    background: `radial-gradient(circle, ${info.color}10, transparent 70%)`,
                    boxShadow: `0 0 15px ${info.color}30`
                  }}
                  onClick={() => info.link && window.open(info.link, '_blank')}
                >
                  {/* Inner spiritual energy */}
                  <div 
                    className="absolute inset-2 rounded-full border opacity-50"
                    style={{
                      borderColor: info.color,
                      background: `radial-gradient(circle, ${info.color}15, transparent)`
                    }}
                  />
                  
                  {/* Icon */}
                  <info.icon 
                    className="text-lg transition-all duration-300 group-hover:scale-110" 
                    style={{ color: info.color }}
                  />

                  {/* Aizen's energy particles */}
                  <div className="absolute inset-0">
                    {[...Array(2)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-0.5 h-0.5 rounded-full opacity-60"
                        style={{
                          backgroundColor: info.color,
                          top: `${25 + i * 25}%`,
                          left: `${15 + i * 40}%`,
                          animation: `float ${3 + i}s ease-in-out infinite`,
                          animationDelay: `${i * 0.5}s`
                        }}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Contact info below circle */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-center mt-3"
                >
                  <h4 className="text-xs font-semibold mb-1" style={{ color: info.color }}>
                    {info.label}
                  </h4>
                  {info.link ? (
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-gray-400 hover:text-white transition-colors duration-300 block"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = info.color;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#9ca3af';
                      }}
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-xs text-gray-400">{info.value}</p>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Central Aizen's Power Symbol */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          >
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-red-500 opacity-50 animate-pulse" />
            <div className="absolute inset-0 w-3 h-3 rounded-full border border-purple-400 animate-ping opacity-30" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
