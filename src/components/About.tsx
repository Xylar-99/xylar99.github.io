import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="section about">
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
            <span className="section-tag">About</span>
            <div className="line"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="about-content"
        >
          <div className="about-main">
            <div className="about-text-section">
              <h2 className="about-name">Abdelbassat Quaoubai</h2>
              <p className="about-title">Backend Developer • 1337 Student</p>
              <p className="about-description">
                Passionate backend developer currently studying at <span className="highlight">1337 (42 Network)</span>.
                My journey is driven by curiosity and a love for creating efficient, scalable solutions. I have strong foundations in C++ programming, 
                system architecture, and problem-solving. I enjoy building robust backend systems and working with Docker containers.
              </p>
              
              <div className="about-stats">
                <div className="stat-item">
                  <div className="stat-icon">🎓</div>
                  <div className="stat-content">
                    <div className="stat-label">Education</div>
                    <div className="stat-value">1337 (42 Network)</div>
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">💻</div>
                  <div className="stat-content">
                    <div className="stat-label">Focus</div>
                    <div className="stat-value">Backend Development</div>
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">🤝</div>
                  <div className="stat-content">
                    <div className="stat-label">Method</div>
                    <div className="stat-value">Peer Learning</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="philosophy"
          >
            <div className="philosophy-decoration">
              <div className="deco-line"></div>
              <div className="deco-dot"></div>
              <div className="deco-line"></div>
            </div>
            <p className="philosophy-text">Clean code, elegant systems, continuous learning</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
