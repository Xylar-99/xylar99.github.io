import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiCplusplus, 
  SiDocker, 
  SiGit, 
  SiLinux, 
  SiNginx, 
  SiMysql,
  SiMongodb,
  SiRedis,
  SiNodedotjs,
  SiTypescript,
  SiReact,
  SiTailwindcss
} from 'react-icons/si';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Backend & Systems",
      icon: SiCplusplus,
      skills: [
        { name: "C++", icon: SiCplusplus, level: 90 },
        { name: "C", icon: SiCplusplus, level: 85 },
        { name: "System Programming", icon: SiLinux, level: 80 },
        { name: "Linux", icon: SiLinux, level: 85 }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: SiDocker,
      skills: [
        { name: "Docker", icon: SiDocker, level: 85 },
        { name: "Git", icon: SiGit, level: 90 },
        { name: "Nginx", icon: SiNginx, level: 75 },
        { name: "Shell Scripting", icon: SiLinux, level: 80 }
      ]
    },
    {
      title: "Databases",
      icon: SiMysql,
      skills: [
        { name: "MySQL", icon: SiMysql, level: 80 },
        { name: "MongoDB", icon: SiMongodb, level: 75 },
        { name: "Redis", icon: SiRedis, level: 70 },
      ]
    },
    {
      title: "Web Technologies",
      icon: SiReact,
      skills: [
        { name: "Node.js", icon: SiNodedotjs, level: 75 },
        { name: "TypeScript", icon: SiTypescript, level: 80 },
        { name: "React", icon: SiReact, level: 85 },
        { name: "Tailwind CSS", icon: SiTailwindcss, level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-secondary p-6 rounded-lg border border-gray-700 card-hover spiritual-energy"
            >
              <div className="flex items-center mb-6">
                <category.icon className="text-accent text-2xl mr-3" />
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <skill.icon className="text-accent text-sm mr-2" />
                        <span className="text-sm font-medium">{skill.name}</span>
                      </div>
                      <span className="text-xs text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2 border border-accent/20">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3 }}
                        className="bg-gradient-to-r from-accent via-highlight to-zanpakuto h-2 rounded-full shadow-lg"
                        style={{
                          boxShadow: '0 0 8px rgba(247, 127, 0, 0.5)'
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-accent/10 to-highlight/10 rounded-lg p-8 border border-accent/30 reiatsu-pulse">
            <h3 className="text-2xl font-semibold mb-6 text-center zanpakuto-gradient">
              Currently Learning & Exploring
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4 rounded-lg bg-primary/50 border border-accent/20">
                <h4 className="text-lg font-medium mb-2 text-accent">Advanced C++</h4>
                <p className="text-white text-sm">Template metaprogramming, concurrency, and performance optimization</p>
              </div>
              <div className="p-4 rounded-lg bg-primary/50 border border-accent/20">
                <h4 className="text-lg font-medium mb-2 text-accent">Container Orchestration</h4>
                <p className="text-white text-sm">Kubernetes, Docker Swarm, and microservices architecture</p>
              </div>
              <div className="p-4 rounded-lg bg-primary/50 border border-accent/20">
                <h4 className="text-lg font-medium mb-2 text-accent">System Design</h4>
                <p className="text-white text-sm">Distributed systems, load balancing, and scalability patterns</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
