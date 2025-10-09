import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
	{
		id: 1,
		title: 'Inception',
		subtitle: 'Docker Infrastructure',
		description:
			'Complete containerized infrastructure using Docker Compose. A perfect orchestration of services, like pieces on a chessboard, each serving its purpose with precision.',
		technologies: ['Docker', 'Docker Compose', 'Nginx', 'MariaDB', 'WordPress', 'Linux'],
		github: 'https://github.com/Xylar-99/inception',
		demo: null,
		type: 'solo' as const,
	},
	{
		id: 2,
		title: 'OneServe',
		subtitle: 'Custom HTTP/1.1 Server',
		description:
			'A high-performance web server built from the ground up in C++. Every line of code crafted with the precision of a master swordsman, implementing epoll-based event systems and configuration parsing.',
		technologies: ['C++', 'HTTP/1.1', 'Epoll', 'Socket Programming', 'Linux'],
		github: 'https://github.com/Xylar-99/OneServe__A-Custom-HTTP-1.1-Server',
		demo: null,
		type: 'group' as const,
	},
	{
		id: 3,
		title: 'ft_transcendence',
		subtitle: 'Full-Stack Platform',
		description:
			'A complete microservices architecture demonstrating the art of system design. Authentication, user management, and real-time communication working in perfect harmony.',
		technologies: ['TypeScript', 'Node.js', 'Microservices', 'WebSocket', 'OAuth'],
		github: 'https://github.com/Xylar-99/user-management-system',
		demo: null,
		type: 'group' as const,
	},
];

const Projects: React.FC = () => {
	return (
		<section id="projects" className="py-32 px-4 relative">
			<div className="max-w-6xl mx-auto">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="mb-20"
				>
					<div className="flex items-center justify-center mb-4">
						<div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#cc8899]"></div>
						<span className="mx-6 text-[#cc8899] text-sm tracking-[0.3em] uppercase font-light">
							Projects
						</span>
						<div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#cc8899]"></div>
					</div>
					<p className="text-center text-gray-400 text-lg font-light">
						Each project, a step toward perfection
					</p>
				</motion.div>

				{/* Projects List */}
				<div className="space-y-20">
					{projects.map((project, index) => (
						<ProjectCard key={project.id} project={project} index={index} />
					))}
				</div>

				{/* Bottom decorative line */}
				<motion.div
					initial={{ width: 0 }}
					whileInView={{ width: '100%' }}
					viewport={{ once: true }}
					transition={{ duration: 1.5, delay: 0.5 }}
					className="mt-20 h-px bg-gradient-to-r from-transparent via-[#cc8899] to-transparent"
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
	<motion.div
		initial={{ opacity: 0, y: 50 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true }}
		transition={{ duration: 0.8, delay: index * 0.1 }}
		className="group relative border border-gray-800 hover:border-[#cc8899] transition-all duration-500 p-8 md:p-12"
	>
		{/* Corner decorations */}
		<div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-[#cc8899] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
		<div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-[#cc8899] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
		<div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-[#cc8899] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
		<div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-[#cc8899] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

		{/* Content */}
		<div className="relative z-10">
			{/* Header with Type Badge */}
			<div className="mb-6">
				<div className="flex items-center justify-between mb-4">
					<p className="text-[#cc8899] text-sm tracking-[0.2em] uppercase font-light">
						{project.subtitle}
					</p>
					{/* Type Badge - Solo or Group */}
					<div className={`
						flex items-center gap-2 px-3 py-1 border text-xs uppercase tracking-wider
						${project.type === 'solo' 
							? 'border-[#cc8899]/50 text-[#cc8899]' 
							: 'border-blue-500/50 text-blue-400'
						}
					`}>
						<div className={`w-1.5 h-1.5 rounded-full ${project.type === 'solo' ? 'bg-[#cc8899]' : 'bg-blue-400'}`}></div>
						<span className="font-light">{project.type}</span>
					</div>
				</div>
				<h3 className="text-3xl md:text-4xl font-light text-white tracking-wide">
					{project.title}
				</h3>
			</div>

			{/* Description */}
			<p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-3xl">
				{project.description}
			</p>

			{/* Technologies */}
			<div className="flex flex-wrap gap-3 mb-8">
				{project.technologies.map(tech => (
					<span
						key={tech}
						className="text-gray-400 text-sm font-light tracking-wider border border-gray-800 px-4 py-1 hover:border-[#cc8899] hover:text-[#cc8899] transition-all duration-300"
					>
						{tech}
					</span>
				))}
			</div>

			{/* Links */}
			<div className="flex items-center gap-6">
				<a
					href={project.github}
					target="_blank"
					rel="noopener noreferrer"
					className="text-gray-400 hover:text-[#cc8899] transition-all duration-300 flex items-center gap-2 group/link"
				>
					<FaGithub size={20} />
					<span className="text-sm tracking-wider">View Code</span>
					<div className="w-0 h-px bg-[#cc8899] group-hover/link:w-8 transition-all duration-300"></div>
				</a>
				{project.demo && (
					<a
						href={project.demo}
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-400 hover:text-[#cc8899] transition-all duration-300 flex items-center gap-2 group/link"
					>
						<FaExternalLinkAlt size={18} />
						<span className="text-sm tracking-wider">Live Demo</span>
						<div className="w-0 h-px bg-[#cc8899] group-hover/link:w-8 transition-all duration-300"></div>
					</a>
				)}
			</div>
		</div>

		{/* Background gradient effect */}
		<div className="absolute inset-0 bg-gradient-to-br from-[#cc8899]/0 to-[#cc8899]/0 group-hover:from-[#cc8899]/5 group-hover:to-transparent transition-all duration-500 pointer-events-none"></div>
	</motion.div>
);

export default Projects;
