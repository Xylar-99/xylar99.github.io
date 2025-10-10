import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaDocker } from 'react-icons/fa';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-4 relative">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 border rounded-full" style={{ borderColor: 'rgba(204, 136, 153, 0.2)' }}></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 border rounded-full" style={{ borderColor: 'rgba(204, 136, 153, 0.2)' }}></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 relative"
        >
          <div className="flex items-center mb-4">
            <div className="h-1 w-16" style={{ background: 'linear-gradient(to right, #cc8899, transparent)' }}></div>
            <span className="mx-4 font-mono text-sm px-3 py-1 border rounded animate-pulse" style={{ color: '#cc8899', borderColor: 'rgba(204, 136, 153, 0.5)' }}>01.</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">About Me</h2>
            <div className="flex-1 ml-4 h-px" style={{ background: 'linear-gradient(to right, rgba(204, 136, 153, 0.5), transparent)' }}></div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 relative"
          >
            {/* Corner decoration */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border-l-2 border-t-2" style={{ borderColor: 'rgba(204, 136, 153, 0.5)' }}></div>
            
            <div className="relative pl-6 border-l-2 group" style={{ borderColor: '#cc8899' }}>
              <div className="absolute -left-1 top-0 w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#cc8899' }}></div>
              <p className="text-gray-400 text-lg leading-relaxed">
                I'm <span className="text-white font-semibold px-2 py-1 rounded" style={{ background: 'linear-gradient(to right, rgba(204, 136, 153, 0.1), transparent)' }}>Abdelbassat Quaoubai</span>, a passionate backend developer 
                studying at <span className="font-semibold" style={{ color: '#cc8899' }}>1337</span>, part of the global 42 Network. My journey in software 
                development is driven by a deep fascination with system architecture and performance optimization.
              </p>
            </div>

            <div className="relative pl-6 border-l-2 group" style={{ borderColor: 'rgba(204, 136, 153, 0.7)' }}>
              <div className="absolute -left-1 top-0 w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'rgba(204, 136, 153, 0.7)', animationDelay: '0.5s' }}></div>
              <p className="text-gray-400 text-lg leading-relaxed">
                At 1337, I've honed my skills in <span className="font-semibold" style={{ color: 'rgba(204, 136, 153, 0.9)' }}>C++ programming</span>, 
                <span className="font-semibold" style={{ color: 'rgba(204, 136, 153, 0.9)' }}> containerization</span>, and 
                <span className="font-semibold" style={{ color: 'rgba(204, 136, 153, 0.9)' }}> system-level development</span>. The peer-to-peer learning 
                environment has taught me not just how to code, but how to think like an engineer.
              </p>
            </div>

            <div className="relative pl-6 border-l-2 group" style={{ borderColor: 'rgba(204, 136, 153, 0.5)' }}>
              <div className="absolute -left-1 top-0 w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'rgba(204, 136, 153, 0.5)', animationDelay: '1s' }}></div>
              <p className="text-gray-400 text-lg leading-relaxed">
                I specialize in building robust backend systems, working with <span style={{ color: 'rgba(204, 136, 153, 0.8)' }}>Docker</span> for containerization, 
                and creating high-performance applications. My focus is on writing clean, efficient code 
                that scales.
              </p>
            </div>

            {/* Bottom decoration */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-r-2 border-b-2" style={{ borderColor: 'rgba(204, 136, 153, 0.5)' }}></div>
          </motion.div>

          {/* Right - Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <InfoCard
              icon={<FaGraduationCap />}
              title="Education"
              text="1337 (42 Network)"
              description="Project-based peer-to-peer learning"
              index={0}
            />
            <InfoCard
              icon={<FaCode />}
              title="Core Expertise"
              text="Backend Development"
              description="C++, System Programming, Architecture"
              index={1}
            />
            <InfoCard
              icon={<FaDocker />}
              title="Technologies"
              text="Modern DevOps"
              description="Docker, Nginx, Git, Linux"
              index={2}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
  description: string;
  index: number;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, text, description, index }) => (
  <div 
    className="group relative p-6 rounded-lg border-2 transition-all duration-300 overflow-hidden"
    style={{ borderColor: '#374151', backgroundColor: '#282727' }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = '#cc8899';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = '#374151';
    }}
  >
    {/* Animated line */}
    <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full transition-all duration-500" style={{ background: 'linear-gradient(to bottom, #cc8899, rgba(204, 136, 153, 0.6))' }}></div>
    <div className="absolute bottom-0 right-0 w-0 h-1 group-hover:w-full transition-all duration-500" style={{ background: 'linear-gradient(to left, #cc8899, rgba(204, 136, 153, 0.6))' }}></div>
    
    {/* Glowing effect on hover */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300" style={{ background: 'linear-gradient(to bottom right, rgba(204, 136, 153, 0.05), transparent)' }}></div>
    
    <div className="flex items-start space-x-4 relative z-10">
      <div className="text-3xl transition-all duration-300 group-hover:scale-110" style={{ color: '#cc8899' }}>
        {icon}
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider mb-1 font-mono" style={{ color: '#cc8899' }}>{title}</p>
        <h4 className="text-xl font-semibold text-white mb-1">{text}</h4>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>

    {/* Corner accents */}
    <div 
      className="absolute top-2 right-2 w-8 h-8 border-t border-r transition-colors duration-300"
      style={{ borderColor: 'rgba(204, 136, 153, 0.3)' }}
      onMouseEnter={(e) => {
        if (e.currentTarget.parentElement) {
          e.currentTarget.style.borderColor = '#cc8899';
        }
      }}
    ></div>
    <div 
      className="absolute bottom-2 left-2 w-8 h-8 border-b border-l transition-colors duration-300"
      style={{ borderColor: 'rgba(204, 136, 153, 0.3)' }}
      onMouseEnter={(e) => {
        if (e.currentTarget.parentElement) {
          e.currentTarget.style.borderColor = '#cc8899';
        }
      }}
    ></div>
  </div>
);

export default About;
