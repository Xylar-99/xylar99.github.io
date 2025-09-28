import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaDocker, FaServer, FaGamepad } from 'react-icons/fa';
import { SiCplusplus, SiMongodb, SiSocketdotio, SiNginx, SiRedis, SiDocker, SiNodedotjs } from 'react-icons/si';

const Projects: React.FC = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Inception - Docker Infrastructure",
      description: "Complete containerized infrastructure setup using Docker Compose. Built a multi-service environment with WordPress, MariaDB, and Nginx, all running in custom Docker containers with proper networking and volume management.",
      image: "/api/placeholder/600/400",
      technologies: ["Docker", "Docker Compose", "Nginx", "MariaDB", "WordPress", "Linux"],
      icons: [SiDocker, SiNginx],
      github: "https://github.com/Xylar-99/inception",
      demo: null,
      highlights: [
        "Custom Docker images from scratch",
        "Multi-container orchestration",
        "Secure networking configuration",
        "Volume persistence management"
      ]
    }
  ];

  const teamProjects = [
    {
      id: 1,
      title: "OneServe - Custom HTTP/1.1 Server (Team Project)",
      description: "High-performance HTTP web server built from scratch in C++ as a team project. My specific responsibilities included creating the core server architecture, implementing configuration file parsing system, developing connection handling, and setting up the epoll-based event system.",
      image: "/api/placeholder/600/400",
      technologies: ["C++", "HTTP/1.1", "Epoll", "Socket Programming", "Config Parsing", "Linux"],
      icons: [SiCplusplus, FaServer],
      github: "https://github.com/Xylar-99/OneServe__A-Custom-HTTP-1.1-Server",
      demo: null,
      myContributions: [
        "Core server architecture & initialization",
        "Configuration file parsing implementation", 
        "Connection handler & client management",
        "Epoll-based event handling system",
        "Socket setup & network communication"
      ],
      teamResponsibilities: [
        "HTTP request/response processing",
        "CGI script execution & handling",
        "Static file serving & routing",
        "Error handling & status codes"
      ]
    },
    {
      id: 2,
      title: "ft_transcendence - Full-Stack Platform (Team Project)",
      description: "Complete full-stack web application with microservices architecture. My role focused on backend microservices including authentication system, user management, and real-time chat functionality with WebSocket integration and secure user data management.",
      image: "/api/placeholder/600/400",
      technologies: ["TypeScript", "Node.js", "Microservices", "WebSocket", "OAuth", "JWT", "Database"],
      icons: [FaGamepad, SiNodedotjs, SiSocketdotio],
      github: "https://github.com/Xylar-99/user-management-system",
      demo: null,
      myContributions: [
        "Authentication microservice (login/signup)",
        "OAuth integration (Google, social logins)",
        "User management & profile system",
        "Real-time chat with WebSocket",
        "Group messaging & message deletion",
        "Secure user data management",
        "Microservices architecture design"
      ],
      teamResponsibilities: [
        "Frontend UI/UX development",
        "Game logic & mechanics",
        "Frontend game interface",
        "Client-side routing & components",
        "Responsive design implementation"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4" style={{
      background: 'linear-gradient(135deg, #1a1a1a 0%, #2d1b69 30%, #dc2626 70%, #1a1a1a 100%)'
    }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-transparent bg-gradient-to-r from-purple-400 to-red-500 bg-clip-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-red-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A showcase of my individual work and team collaborations from 1337 School, 
            demonstrating proficiency in system programming, web development, and containerization.
          </p>
        </motion.div>

        {/* Solo Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-2xl lg:text-3xl font-semibold mb-8 text-center">
            <span style={{ color: '#dc2626' }}>Solo</span> <span className="text-white">Projects</span>
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {soloProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-black/80 rounded-lg border border-purple-500/50 overflow-hidden card-hover"
                style={{ 
                  boxShadow: '0 0 30px rgba(220, 38, 38, 0.2), 0 0 60px rgba(139, 69, 193, 0.1)' 
                }}
              >
                <div className="relative h-48 flex items-center justify-center" style={{
                  background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.2) 0%, rgba(139, 69, 193, 0.2) 100%)'
                }}>
                  <div className="flex space-x-4">
                    {project.icons.map((Icon, iconIndex) => (
                      <Icon key={iconIndex} className="text-4xl" style={{ color: '#dc2626' }} />
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-3 text-white">{project.title}</h4>
                  <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                  <div className="mb-4">
                    <h5 className="text-sm font-semibold mb-2" style={{ color: '#dc2626' }}>Key Features:</h5>
                    <ul className="text-sm text-gray-400 space-y-1">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start">
                          <span style={{ color: '#dc2626' }} className="mr-2">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm rounded-full border"
                          style={{
                            backgroundColor: 'rgba(220, 38, 38, 0.2)',
                            color: '#dc2626',
                            borderColor: 'rgba(220, 38, 38, 0.3)'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-300"
                    >
                      <FaGithub className="mr-2" />
                      Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-2xl lg:text-3xl font-semibold mb-8 text-center">
            <span style={{ color: '#9333ea' }}>Team</span> <span className="text-white">Projects</span>
          </h3>
          <div className="grid lg:grid-cols-1 gap-8">
            {teamProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-black/80 rounded-lg border border-purple-500/50 overflow-hidden card-hover"
                style={{ 
                  boxShadow: '0 0 30px rgba(192, 192, 192, 0.1), 0 0 60px rgba(139, 69, 193, 0.1)' 
                }}
              >
                <div className="relative h-48 flex items-center justify-center" style={{
                  background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.2) 0%, rgba(192, 192, 192, 0.2) 100%)'
                }}>
                  <div className="flex space-x-4">
                    {project.icons.map((Icon, iconIndex) => (
                      <Icon key={iconIndex} className="text-4xl" style={{ color: '#9333ea' }} />
                    ))}
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-sm border" style={{
                    backgroundColor: 'rgba(147, 51, 234, 0.2)',
                    color: '#9333ea',
                    borderColor: 'rgba(147, 51, 234, 0.3)'
                  }}>
                    Team Project
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-3 text-white">{project.title}</h4>
                  <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>

                  <div className="mb-6">
                    <h5 className="text-sm font-semibold mb-3" style={{ color: '#9333ea' }}>My Contributions:</h5>
                    <ul className="text-sm text-gray-400 space-y-1">
                      {project.myContributions.map((contribution, contributionIndex) => (
                        <li key={contributionIndex} className="flex items-start">
                          <span style={{ color: '#9333ea' }} className="mr-2">✓</span>
                          {contribution}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm rounded-full border"
                          style={{
                            backgroundColor: 'rgba(147, 51, 234, 0.2)',
                            color: '#9333ea',
                            borderColor: 'rgba(147, 51, 234, 0.3)'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-300"
                    >
                      <FaGithub className="mr-2" />
                      Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Xylar-99"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-3 reiatsu-button text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            <FaGithub className="mr-2" />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
