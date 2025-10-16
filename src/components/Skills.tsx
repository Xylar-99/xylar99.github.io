import React from 'react';
import { motion } from 'framer-motion';
import { SiNodedotjs, SiFastify, SiDocker, SiNginx } from 'react-icons/si';

const skills = [
  { 
    name: "Node.js", 
    icon: SiNodedotjs, 
    level: 85,
  },
  { 
    name: "Fastify", 
    icon: SiFastify, 
    level: 80,
  },
  { 
    name: "Docker", 
    icon: SiDocker, 
    level: 80,
  },
  { 
    name: "Web Server", 
    icon: SiNginx, 
    level: 70,
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section skills">
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
            <span className="section-tag">Skills</span>
            <div className="line"></div>
          </div>
          <p className="section-subtitle">Technologies I work with</p>
        </motion.div>

        <div className="skills-circles">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="skill-circle-wrapper"
            >
              <div className="skill-circle">
                <div className="skill-circle-logo">
                  <skill.icon className="skill-circle-icon" />
                </div>
                <div className="skill-circle-percent">
                  {skill.level}%
                </div>
              </div>
              <div className="skill-circle-name">{skill.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
