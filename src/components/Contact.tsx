import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';


const contactMethods = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "abdelbassat.quaoubai99@gmail.com",
    link: "mailto:abdelbassat.quaoubai99@gmail.com",
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    value: "github.com/Xylar-99",
    link: "https://github.com/Xylar-99",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "Connect with me",
    link: "https://linkedin.com/in/abdelbassat-quaoubai",
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "Location",
    value: "Morocco",
    link: null,
  },
];

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-4 relative">
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
            <span className="mx-6 text-[#cc8899] text-sm tracking-[0.3em] uppercase font-light">Contact</span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#cc8899]"></div>
          </div>
          <p className="text-center text-gray-400 text-lg font-light">
            Let us create something extraordinary together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="border-l-2 border-[#cc8899] pl-6">
              <p className="text-gray-400 text-lg leading-relaxed font-light">
                Whether it's crafting elegant backend systems, architecting scalable solutions, 
                or collaborating on ambitious projects—I am always open to new opportunities.
              </p>
            </div>

            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <ContactCard key={index} method={method} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="border p-8 md:p-10 relative group hover:border-[#cc8899] transition-all duration-500" style={{ borderColor: '#3a3939' }}>
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#cc8899] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#cc8899] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#cc8899] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#cc8899] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[#cc8899] text-sm tracking-wider mb-3 font-light uppercase">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-0 py-3 bg-transparent border-b focus:border-[#cc8899] text-white transition-all duration-300 outline-none font-light"
                    style={{ borderColor: '#3a3939' }}
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-[#cc8899] text-sm tracking-wider mb-3 font-light uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-0 py-3 bg-transparent border-b focus:border-[#cc8899] text-white transition-all duration-300 outline-none font-light"
                    style={{ borderColor: '#3a3939' }}
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-[#cc8899] text-sm tracking-wider mb-3 font-light uppercase">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-0 py-3 bg-transparent border-b focus:border-[#cc8899] text-white transition-all duration-300 resize-none outline-none font-light"
                    style={{ borderColor: '#3a3939' }}
                    placeholder="Your message..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-3 border border-[#cc8899] text-[#cc8899] hover:bg-[#cc8899] hover:text-white transition-all duration-300 tracking-widest text-sm uppercase font-light"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-32 text-center"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-[#cc8899] to-transparent mb-8"></div>
          <p className="text-gray-500 text-sm tracking-wider font-light">
            "Admiration is the emotion furthest from understanding."
          </p>
          <p className="text-gray-600 text-xs mt-2">
            — Sōsuke Aizen
          </p>
          <p className="text-gray-700 text-xs mt-6">
            © 2025 Abdelbassat Quaoubai
          </p>
        </motion.div>
      </div>
    </section>
  );
};

interface ContactCardProps {
  method: typeof contactMethods[0];
  index: number;
}

const ContactCard: React.FC<ContactCardProps> = ({ method, index }) => {
  const Component = method.link ? 'a' : 'div';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Component
        {...(method.link ? { href: method.link, target: '_blank', rel: 'noopener noreferrer' } : {})}
        className="group flex items-center p-4 border hover:border-[#cc8899] transition-all duration-300"
        style={{ borderColor: '#3a3939' }}
      >
        <div className="text-[#cc8899] text-xl mr-4 group-hover:scale-110 transition-transform duration-300">
          {method.icon}
        </div>
        <div>
          <p className="text-gray-500 text-xs uppercase tracking-wider mb-1 font-light">{method.label}</p>
          <p className="text-white font-light">{method.value}</p>
        </div>
        
        {/* Animated line */}
        <div className="ml-auto w-0 h-px bg-[#cc8899] group-hover:w-8 transition-all duration-300"></div>
      </Component>
    </motion.div>
  );
};

export default Contact;
