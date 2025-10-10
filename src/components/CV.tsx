import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const CV: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  // A4 dimensions in pixels at 96 DPI (standard web DPI)
  const A4_WIDTH = 794; // 210mm
  const A4_HEIGHT = 1123; // 297mm

  const downloadSVG = () => {
    if (!svgRef.current) return;
    
    const svgData = new XMLSerializer().serializeToString(svgRef.current);
    const blob = new Blob([svgData], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Abdelbassat_Quaoubai_CV.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="cv" className="py-32 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-wide">
            Curriculum Vitae
          </h2>
          <div className="w-24 h-px bg-[#cc8899] mx-auto mb-6"></div>
          <button
            onClick={downloadSVG}
            className="px-8 py-3 border border-[#cc8899] text-[#cc8899] hover:bg-[#cc8899] hover:text-white transition-all duration-300 tracking-widest text-sm uppercase font-light"
          >
            Download CV
          </button>
        </motion.div>

        {/* CV Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="shadow-2xl" style={{ maxWidth: '100%', overflow: 'auto' }}>
            <svg
              ref={svgRef}
              width={A4_WIDTH}
              height={A4_HEIGHT}
              viewBox={`0 0 ${A4_WIDTH} ${A4_HEIGHT}`}
              xmlns="http://www.w3.org/2000/svg"
              style={{ background: '#FFFFFF', maxWidth: '100%', height: 'auto' }}
            >
              {/* Background */}
              <rect width={A4_WIDTH} height={A4_HEIGHT} fill="#FFFFFF" />

              {/* Header Section with Accent Color */}
              <rect x="0" y="0" width={A4_WIDTH} height="180" fill="#282727" />
              <rect x="0" y="180" width={A4_WIDTH} height="4" fill="#cc8899" />

              {/* Name */}
              <text
                x={A4_WIDTH / 2}
                y="80"
                fill="#FFFFFF"
                fontSize="48"
                fontWeight="300"
                textAnchor="middle"
                fontFamily="'Playfair Display', serif"
              >
                ABDELBASSAT QUAOUBAI
              </text>

              {/* Title */}
              <text
                x={A4_WIDTH / 2}
                y="120"
                fill="#cc8899"
                fontSize="20"
                fontWeight="300"
                textAnchor="middle"
                fontFamily="'Inter', sans-serif"
                letterSpacing="3"
              >
                BACKEND DEVELOPER
              </text>

              {/* Contact Info */}
              <text
                x={A4_WIDTH / 2}
                y="155"
                fill="#FFFFFF"
                fontSize="14"
                textAnchor="middle"
                fontFamily="'Inter', sans-serif"
                fontWeight="300"
              >
                abdelbassat.quaoubai99@gmail.com  |  Morocco  |  github.com/Xylar-99
              </text>

              {/* Main Content Area */}
              <g transform="translate(60, 220)">
                
                {/* PROFILE Section */}
                <text x="0" y="0" fill="#282727" fontSize="22" fontWeight="400" fontFamily="'Playfair Display', serif">
                  PROFILE
                </text>
                <line x1="0" y1="8" x2="120" y2="8" stroke="#cc8899" strokeWidth="2" />
                
                <text x="0" y="40" fill="#333333" fontSize="13" fontWeight="300" fontFamily="'Inter', sans-serif">
                  <tspan x="0" dy="0">Backend developer passionate about crafting scalable systems with clean</tspan>
                  <tspan x="0" dy="20">architecture. Student at 1337 (42 Network), focused on building elegant</tspan>
                  <tspan x="0" dy="20">solutions through peer learning and project-based education.</tspan>
                </text>

                {/* EDUCATION Section */}
                <text x="0" y="140" fill="#282727" fontSize="22" fontWeight="400" fontFamily="'Playfair Display', serif">
                  EDUCATION
                </text>
                <line x1="0" y1="148" x2="140" y2="148" stroke="#cc8899" strokeWidth="2" />
                
                {/* 1337 School */}
                <text x="0" y="180" fill="#cc8899" fontSize="16" fontWeight="400" fontFamily="'Inter', sans-serif">
                  1337 Coding School
                </text>
                <text x="0" y="200" fill="#666666" fontSize="12" fontWeight="300" fontFamily="'Inter', sans-serif">
                  42 Network  |  2023 - Present
                </text>
                <text x="0" y="225" fill="#333333" fontSize="12" fontWeight="300" fontFamily="'Inter', sans-serif">
                  <tspan x="0" dy="0">• Peer-to-peer learning methodology with project-based curriculum</tspan>
                  <tspan x="0" dy="18">• Focus on system programming, algorithms, and software architecture</tspan>
                  <tspan x="0" dy="18">• Collaborative projects emphasizing code quality and best practices</tspan>
                </text>

                {/* TECHNICAL SKILLS Section */}
                <text x="0" y="320" fill="#282727" fontSize="22" fontWeight="400" fontFamily="'Playfair Display', serif">
                  TECHNICAL SKILLS
                </text>
                <line x1="0" y1="328" x2="200" y2="328" stroke="#cc8899" strokeWidth="2" />
                
                {/* Skills Grid */}
                <g transform="translate(0, 360)">
                  {/* Languages */}
                  <text x="0" y="0" fill="#cc8899" fontSize="13" fontWeight="500" fontFamily="'Inter', sans-serif">
                    Languages:
                  </text>
                  <text x="100" y="0" fill="#333333" fontSize="13" fontWeight="300" fontFamily="'Inter', sans-serif">
                    C/C++, TypeScript, JavaScript
                  </text>

                  {/* Backend */}
                  <text x="0" y="25" fill="#cc8899" fontSize="13" fontWeight="500" fontFamily="'Inter', sans-serif">
                    Backend:
                  </text>
                  <text x="100" y="25" fill="#333333" fontSize="13" fontWeight="300" fontFamily="'Inter', sans-serif">
                    Node.js, REST APIs, Microservices
                  </text>

                  {/* DevOps */}
                  <text x="0" y="50" fill="#cc8899" fontSize="13" fontWeight="500" fontFamily="'Inter', sans-serif">
                    DevOps:
                  </text>
                  <text x="100" y="50" fill="#333333" fontSize="13" fontWeight="300" fontFamily="'Inter', sans-serif">
                    Docker, Docker Compose, Nginx
                  </text>

                  {/* Databases */}
                  <text x="0" y="75" fill="#cc8899" fontSize="13" fontWeight="500" fontFamily="'Inter', sans-serif">
                    Databases:
                  </text>
                  <text x="100" y="75" fill="#333333" fontSize="13" fontWeight="300" fontFamily="'Inter', sans-serif">
                    MariaDB, PostgreSQL
                  </text>

                  {/* Other */}
                  <text x="0" y="100" fill="#cc8899" fontSize="13" fontWeight="500" fontFamily="'Inter', sans-serif">
                    Other:
                  </text>
                  <text x="100" y="100" fill="#333333" fontSize="13" fontWeight="300" fontFamily="'Inter', sans-serif">
                    Linux, Socket Programming, OAuth
                  </text>
                </g>

                {/* PROJECTS Section */}
                <text x="0" y="505" fill="#282727" fontSize="22" fontWeight="400" fontFamily="'Playfair Display', serif">
                  PROJECTS
                </text>
                <line x1="0" y1="513" x2="120" y2="513" stroke="#cc8899" strokeWidth="2" />

                {/* Project 1: Inception */}
                <g transform="translate(0, 545)">
                  <text x="0" y="0" fill="#cc8899" fontSize="15" fontWeight="500" fontFamily="'Inter', sans-serif">
                    Inception - Docker Infrastructure
                  </text>
                  <text x="0" y="20" fill="#666666" fontSize="11" fontWeight="300" fontFamily="'Inter', sans-serif" fontStyle="italic">
                    Docker • Docker Compose • Nginx • MariaDB • WordPress
                  </text>
                  <text x="0" y="42" fill="#333333" fontSize="12" fontWeight="300" fontFamily="'Inter', sans-serif">
                    <tspan x="0" dy="0">• Built complete containerized infrastructure using Docker Compose</tspan>
                    <tspan x="0" dy="18">• Orchestrated multiple services with custom network configuration</tspan>
                    <tspan x="0" dy="18">• Implemented secure communication between containers</tspan>
                  </text>
                </g>

                {/* Project 2: OneServe */}
                <g transform="translate(0, 655)">
                  <text x="0" y="0" fill="#cc8899" fontSize="15" fontWeight="500" fontFamily="'Inter', sans-serif">
                    OneServe - Custom HTTP/1.1 Server
                  </text>
                  <text x="0" y="20" fill="#666666" fontSize="11" fontWeight="300" fontFamily="'Inter', sans-serif" fontStyle="italic">
                    C++ • HTTP/1.1 • Epoll • Socket Programming • Group Project
                  </text>
                  <text x="0" y="42" fill="#333333" fontSize="12" fontWeight="300" fontFamily="'Inter', sans-serif">
                    <tspan x="0" dy="0">• Developed high-performance web server from scratch in C++</tspan>
                    <tspan x="0" dy="18">• Implemented epoll-based event system for handling concurrent connections</tspan>
                    <tspan x="0" dy="18">• Created custom configuration parser and routing system</tspan>
                  </text>
                </g>

                {/* Project 3: ft_transcendence */}
                <g transform="translate(0, 765)">
                  <text x="0" y="0" fill="#cc8899" fontSize="15" fontWeight="500" fontFamily="'Inter', sans-serif">
                    ft_transcendence - Full-Stack Platform
                  </text>
                  <text x="0" y="20" fill="#666666" fontSize="11" fontWeight="300" fontFamily="'Inter', sans-serif" fontStyle="italic">
                    TypeScript • Node.js • Microservices • WebSocket • OAuth • Group Project
                  </text>
                  <text x="0" y="42" fill="#333333" fontSize="12" fontWeight="300" fontFamily="'Inter', sans-serif">
                    <tspan x="0" dy="0">• Architected microservices-based platform with authentication system</tspan>
                    <tspan x="0" dy="18">• Implemented real-time communication using WebSocket</tspan>
                    <tspan x="0" dy="18">• Developed OAuth integration for secure user management</tspan>
                  </text>
                </g>

              </g>

              {/* Footer */}
              <line x1="60" y1={A4_HEIGHT - 50} x2={A4_WIDTH - 60} y2={A4_HEIGHT - 50} stroke="#cc8899" strokeWidth="1" />
              <text
                x={A4_WIDTH / 2}
                y={A4_HEIGHT - 25}
                fill="#999999"
                fontSize="10"
                textAnchor="middle"
                fontFamily="'Inter', sans-serif"
                fontWeight="300"
              >
                Created with passion for clean code and elegant systems
              </text>

            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CV;