import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

// All your real projects from GitHub
const projects = [
  {
    id: 1,
    title: 'CPP Modules',
    subtitle: 'C++ Mastery Journey',
    description: '10 modules covering C++ fundamentals to advanced concepts. Deep dive into OOP, memory management, templates, and STL.',
    technologies: ['C++', 'OOP', 'Templates', 'STL', 'Memory Management'],
    github: 'https://github.com/Xylar-99/CPP',
    type: 'solo' as const,
    image: 'https://web-assets.esetstatic.com/tn/-x700/wls/2025/03-25/ida-free-analisis-malware-c/ida-free-analisis-malware-cpp.jpeg',
  },
  {
    id: 2,
    title: 'Inception',
    subtitle: 'Docker Infrastructure',
    description: 'Containerization project orchestrating NGINX, WordPress, MariaDB, and Redis. Built with custom Dockerfiles and Docker Compose.',
    technologies: ['Docker', 'Docker Compose', 'Nginx', 'MariaDB', 'WordPress', 'Redis', 'PHP'],
    github: 'https://github.com/Xylar-99/INCEPTION',
    type: 'solo' as const,
    image: '/images/docker.png'
  },
  {
    id: 3,
    title: 'OneServe',
    subtitle: 'Custom HTTP/1.1 Server',
    description: 'A high-performance web server built from the ground up in C++. Every line of code crafted with the precision of a master swordsman, implementing epoll-based event systems and configuration parsing.',
    technologies: ['C++', 'HTTP/1.1', 'Epoll', 'Socket Programming', 'Linux'],
    github: 'https://github.com/Xylar-99/OneServe__A-Custom-HTTP-1.1-Server',
    type: 'group' as const,
    image: '/images/webserv.png'
  },
  {
    id: 4,
    title: 'ft_transcendence',
    subtitle: 'Full-Stack Platform',
    description: 'A complete microservices architecture demonstrating the art of system design. Authentication, user management, and real-time communication working in perfect harmony.',
    technologies: ['TypeScript', 'Node.js', 'Fastify', 'REST API', 'SQLite', 'JWT'],
    github: 'https://github.com/Xylar-99/user-management-system',
    type: 'group' as const,
    image: '/images/pingpong.png'
  },
];

const projectContributions: Record<string, string> = {
  'OneServe': 'HTTP/1.1 parsing • Connection management • Server logic',
  'ft_transcendence': 'Authentication • User management • Backend API',
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <div className="section-line">
            <div className="line"></div>
            <span className="section-tag">Projects</span>
            <div className="line"></div>
          </div>
          <p className="section-subtitle">Each project, a step toward perfection</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="projects-footer-line"
        ></motion.div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: index * 0.1 }}
    className="project-card-new"
  >
    <div className="project-image-wrapper">
      <img src={project.image} alt={project.title} className="project-image" />
      <div className="project-image-overlay">
        <span className={`type-badge ${project.type === 'solo' ? 'solo' : 'group'}`}>
          {project.type}
        </span>
      </div>
    </div>

    <div className="project-content">
      <div className="project-top">
        <span className="project-subtitle-new">{project.subtitle}</span>
      </div>

      <h3 className="project-name">{project.title}</h3>
      
      <p className="project-desc">{project.description}</p>

      {project.type === 'group' && projectContributions[project.title] && (
        <div className="my-contribution">
          <span className="contrib-icon">👤</span>
          <span className="contrib-text">{projectContributions[project.title]}</span>
        </div>
      )}

      <div className="project-stack">
        {project.technologies.map((tech) => (
          <span key={tech} className="stack-item">{tech}</span>
        ))}
      </div>

      <a 
        href={project.github} 
        target="_blank" 
        rel="noopener noreferrer"
        className="project-btn"
      >
        <FaGithub />
        <span>View Code</span>
      </a>
    </div>
  </motion.article>
);

export default Projects;
