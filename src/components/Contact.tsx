import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const contactMethods = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "abdelbassat.quaoubai99@gmail.com",
    link: "mailto:abdelbassat.quaoubai99@gmail.com",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/Xylar-99",
    link: "https://github.com/Xylar-99",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "Connect with me",
    link: "https://linkedin.com/in/abdelbassat-quaoubai",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Morocco",
    link: null,
  },
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section contact">
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
            <span className="section-tag">Contact</span>
            <div className="line"></div>
          </div>
          <p className="section-subtitle">Let's build something extraordinary together</p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="contact-info"
          >
            <div className="contact-border">
              <p className="contact-text">
                Whether it's crafting elegant backend systems, architecting scalable solutions, 
                or collaborating on ambitious projects—I am always open to new opportunities.
              </p>
            </div>

            <div className="contact-methods">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="method-card"
                >
                  <div className="method-icon">
                    <method.icon />
                  </div>
                  <div className="method-info">
                    <p className="method-label">{method.label}</p>
                    {method.link ? (
                      <a 
                        href={method.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="method-link"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <span className="method-text">{method.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <h3 className="form-title">Send a Message</h3>

            <div className="form-group">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-input form-textarea"
                placeholder="Your message here..."
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              <span className="btn-text">
                <FaPaperPlane /> Send Message
              </span>
              <div className="btn-overlay"></div>
            </button>
          </motion.form>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="contact-quote"
        >
          <div className="quote-line"></div>
          <p className="quote-text">"Admiration is the emotion furthest from understanding."</p>
          <p className="quote-author">— Sōsuke Aizen</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
