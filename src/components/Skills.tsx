import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiCplusplus, 
  SiDocker, 
  SiNginx,
} from 'react-icons/si';
import { FaServer } from 'react-icons/fa';

const skills = [
  { 
    name: "C/C++", 
    icon: <SiCplusplus />, 
    level: 56,
    color: "#cc8899"
  },
  { 
    name: "Docker", 
    icon: <SiDocker />, 
    level: 70,
    color: "#cc8899"
  },
  { 
    name: "Backend", 
    icon: <FaServer />, 
    level: 68,
    color: "#cc8899"
  },
  { 
    name: "Web Server", 
    icon: <SiNginx />, 
    level: 65,
    color: "#cc8899"
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 px-6 relative overflow-hidden">
      {/* 3D Moving Circles Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large moving circles */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-10 left-10 w-[500px] h-[500px] bg-[#cc8899]/10 rounded-full blur-3xl"
        ></motion.div>
        
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-[#cc8899]/10 rounded-full blur-3xl"
        ></motion.div>
        
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -80, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[#cc8899]/5 rounded-full blur-3xl"
        ></motion.div>

        {/* Rotating circle outlines */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <div className="w-[700px] h-[700px] border border-[#cc8899]/20 rounded-full"></div>
        </motion.div>
        
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <div className="w-[500px] h-[500px] border border-[#cc8899]/10 rounded-full"></div>
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-wide">
            Skills
          </h2>
          <div className="w-24 h-px bg-[#cc8899] mx-auto"></div>
        </motion.div>

        {/* Skills Grid - 4 Items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface SkillCardProps {
  skill: typeof skills[0];
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (skill.level / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.05,
        rotateY: 15,
        rotateX: 5,
      }}
      className="group relative"
      style={{ 
        perspective: '1000px',
        transformStyle: 'preserve-3d'
      }}
    >
      <div className="relative bg-black/40 backdrop-blur-sm border border-gray-800 hover:border-[#cc8899] transition-all duration-500 p-8 rounded-lg"
        style={{ 
          transformStyle: 'preserve-3d',
        }}
      >
        {/* 3D Circle */}
        <div className="flex justify-center mb-6">
          <div className="relative w-32 h-32">
            {/* SVG Circle */}
            <svg className="transform -rotate-90 w-full h-full" style={{ filter: 'drop-shadow(0 0 10px rgba(204, 136, 153, 0.3))' }}>
              <circle
                cx="64"
                cy="64"
                r={radius}
                stroke="currentColor"
                strokeWidth="6"
                fill="none"
                className="text-gray-800"
              />
              <motion.circle
                cx="64"
                cy="64"
                r={radius}
                stroke={skill.color}
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
                initial={{ strokeDashoffset: circumference }}
                whileInView={{ strokeDashoffset: strokeDashoffset }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: index * 0.15 + 0.5, ease: "easeOut" }}
                style={{
                  strokeDasharray: circumference,
                  filter: 'drop-shadow(0 0 8px rgba(204, 136, 153, 0.6))'
                }}
              />
            </svg>
            
            {/* Icon in center */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center text-[#cc8899] text-4xl"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ duration: 0.3 }}
            >
              {skill.icon}
            </motion.div>
          </div>
        </div>

        {/* Skill Name */}
        <h3 className="text-xl font-light text-white text-center mb-2 tracking-wide">
          {skill.name}
        </h3>
        
        {/* Percentage */}
        <p className="text-[#cc8899] text-center text-lg font-light">
          {skill.level}%
        </p>

        {/* Hover glow */}
        <div className="absolute inset-0 bg-[#cc8899]/0 group-hover:bg-[#cc8899]/5 transition-all duration-500 rounded-lg pointer-events-none"></div>
      </div>
    </motion.div>
  );
};

export default Skills;
