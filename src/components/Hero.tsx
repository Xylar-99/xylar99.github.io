import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown, FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <section id="home" className="section hero">
      {/* Animated Background Grid */}
      <div className="hero-grid"></div>
      
      <div className="hero-container container">
        <div className="hero-main">
          {/* Left Side - Main Content */}
          <div className="hero-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="hero-label"
            >
              <div className="label-line"></div>
              <span>Backend Developer</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="hero-name"
            >
              Some call me <span className="hero-alias">Xylar</span>… my true name is <span className="hero-name-accent">Abdelbassat Quaoubai</span>.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="hero-details"
            >
              <div className="detail-item">
                <div className="detail-icon">
                  <div className="icon-box">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                </div>
                <div className="detail-text">
                  <span className="detail-label">Education</span>
                  <span className="detail-value">1337 School / 42 Network</span>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">
                  <div className="icon-box">
                    <i className="fas fa-code"></i>
                  </div>
                </div>
                <div className="detail-text">
                  <span className="detail-label">Specialization</span>
                  <span className="detail-value">Node.js • Fastify • Docker</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="hero-actions"
            >
              <a href="#projects" className="hero-btn hero-btn-primary">
                <span>Explore My Work</span>
                <i className="fas fa-arrow-right"></i>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="hero-social"
            >
              <span className="social-label">Connect —</span>
              <a href="https://github.com/Xylar-99" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/abdelbassat-quaoubai" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedin />
              </a>
            </motion.div>
          </div>

          {/* Right Side - Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="hero-right"
          >
            <div className="hero-visual">
              <div className="visual-border"></div>
              <div className="visual-content">
                <div className="code-snippet">
                  <div className="code-header">
                    <div className="code-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <span className="code-title">portfolio.cpp</span>
                  </div>
                  <div className="code-body">
                    <pre><code><span className="code-keyword">class</span> <span className="code-class">Developer</span> {'{'}</code></pre>
                    <pre><code>  <span className="code-keyword">public</span>:</code></pre>
                    <pre><code>    <span className="code-type">string</span> name = <span className="code-string">"Xylar99"</span>;</code></pre>
                    <pre><code>    <span className="code-type">bool</span> secureCode = <span className="code-keyword">true</span>;</code></pre>
                    <pre><code>    <span className="code-type">bool</span> teamPlayer = <span className="code-keyword">true</span>;</code></pre>
                    <pre><code>    <span className="code-type">bool</span> problemSolver = <span className="code-keyword">true</span>;</code></pre>
                    <pre><code>    <span className="code-type">bool</span> givesUp = <span className="code-keyword">false</span>;</code></pre>
                    <pre><code>    <span className="code-type">int</span> passion = <span className="code-number">∞</span>;</code></pre>
                    <pre><code>{'};'}</code></pre>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="scroll-indicator"
      >
        <a href="#about" className="scroll-link">
          <span className="scroll-text">Scroll Down</span>
          <FaArrowDown className="scroll-icon" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
