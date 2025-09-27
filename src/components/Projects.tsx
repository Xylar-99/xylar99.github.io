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
    <section id="projects" className="py-20 px-4 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
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
            <span className="text-accent">Solo</span> <span className="text-white">Projects</span>
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {soloProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-primary rounded-lg border border-gray-700 overflow-hidden card-hover reiatsu-pulse"
              >
                <div className="relative h-48 bg-gradient-to-br from-accent/20 to-highlight/20 flex items-center justify-center">
                  <div className="flex space-x-4">
                    {project.icons.map((Icon, iconIndex) => (
                      <Icon key={iconIndex} className="text-4xl text-accent" />
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-3 text-white">{project.title}</h4>
                  <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-accent mb-2">Key Features:</h5>
                    <ul className="text-sm text-gray-400 space-y-1">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start">
                          <span className="text-accent mr-2">•</span>
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
                          className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full border border-accent/30"
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
            <span className="text-highlight">Team</span> <span className="text-white">Projects</span>
          </h3>
          <div className="grid lg:grid-cols-1 gap-8">
            {teamProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-primary rounded-lg border border-gray-700 overflow-hidden card-hover reiatsu-pulse"
              >
                <div className="relative h-48 bg-gradient-to-br from-highlight/20 to-zanpakuto/20 flex items-center justify-center">
                  <div className="flex space-x-4">
                    {project.icons.map((Icon, iconIndex) => (
                      <Icon key={iconIndex} className="text-4xl text-highlight" />
                    ))}
                  </div>
                  <div className="absolute top-4 right-4 bg-highlight/20 text-highlight px-3 py-1 rounded-full text-sm border border-highlight/30">
                    Team Project
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-3 text-white">{project.title}</h4>
                  <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>

                  <div className="mb-6">
                    <h5 className="text-sm font-semibold text-highlight mb-3">My Contributions:</h5>
                    <ul className="text-sm text-gray-400 space-y-1">
                      {project.myContributions.map((contribution, contributionIndex) => (
                        <li key={contributionIndex} className="flex items-start">
                          <span className="text-highlight mr-2">✓</span>
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
                          className="px-3 py-1 bg-highlight/20 text-highlight text-sm rounded-full border border-highlight/30"
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
