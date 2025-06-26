
<old_str>import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="orange-blob blob-1"></div>
        <div className="orange-blob blob-2"></div>
        <div className="orange-blob blob-3"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Fresh & <span className="gradient-text">Refreshing</span>
              <br />Orange Drinks
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Experience the perfect blend of natural orange flavor and refreshing taste. 
              Made with premium ingredients for the ultimate drinking experience.
            </motion.p>
            
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button 
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Order Now
              </motion.button>
              <motion.button 
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Products
              </motion.button>
            </motion.div>
          </div>
          
          <div className="hero-image">
            <motion.div
              className="drink-container"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <motion.div 
                className="drink-bottle"
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  y: [0, -10, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                🥤
              </motion.div>
              
              <motion.div 
                className="splash-effect"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <p>Scroll to explore</p>
        </motion.div>
      </div>

      <style jsx>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #fff0ec 0%, #ffffff 100%);
          padding-top: 80px;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -1;
        }

        .orange-blob {
          position: absolute;
          background: var(--gradient-primary);
          border-radius: 50%;
          opacity: 0.1;
          animation: float 6s ease-in-out infinite;
        }

        .blob-1 {
          width: 300px;
          height: 300px;
          top: 20%;
          right: 10%;
          animation-delay: 0s;
        }

        .blob-2 {
          width: 200px;
          height: 200px;
          bottom: 30%;
          left: 15%;
          animation-delay: 2s;
        }

        .blob-3 {
          width: 150px;
          height: 150px;
          top: 60%;
          right: 30%;
          animation-delay: 4s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-30px) rotate(5deg); }
          66% { transform: translateY(15px) rotate(-3deg); }
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          min-height: 70vh;
        }

        .hero-text h1 {
          font-size: 4rem;
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 30px;
        }

        .hero-text p {
          font-size: 1.2rem;
          color: #666;
          margin-bottom: 40px;
          line-height: 1.8;
        }

        .hero-buttons {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .hero-image {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .drink-container {
          position: relative;
          width: 400px;
          height: 400px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .drink-bottle {
          font-size: 15rem;
          filter: drop-shadow(0 20px 40px rgba(255, 107, 53, 0.3));
        }

        .splash-effect {
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(255, 107, 53, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          z-index: -1;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          color: #999;
        }

        .scroll-mouse {
          width: 24px;
          height: 40px;
          border: 2px solid #999;
          border-radius: 12px;
          margin: 0 auto 10px;
          position: relative;
        }

        .scroll-wheel {
          width: 4px;
          height: 8px;
          background: #999;
          border-radius: 2px;
          position: absolute;
          top: 6px;
          left: 50%;
          transform: translateX(-50%);
          animation: scroll-wheel 2s infinite;
        }

        @keyframes scroll-wheel {
          0% { top: 6px; opacity: 1; }
          100% { top: 20px; opacity: 0; }
        }

        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }

          .hero-text h1 {
            font-size: 2.5rem;
          }

          .hero-text p {
            font-size: 1.1rem;
          }

          .hero-buttons {
            justify-content: center;
          }

          .drink-bottle {
            font-size: 8rem;
          }

          .drink-container {
            width: 250px;
            height: 250px;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;</old_str>
<new_str>import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="floating-elements">
          <div className="float-element orange-slice"></div>
          <div className="float-element watermelon-piece"></div>
          <div className="float-element grape-cluster"></div>
          <div className="float-element lime-slice"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Pure Sips, <span className="outline-text">Straight</span>
              <br />from Nature's Can!
            </motion.h1>
          </div>
          
          <div className="hero-cans">
            <motion.div
              className="can-container"
              initial={{ opacity: 0, scale: 0.8, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <motion.div 
                className="can can-yellow"
                animate={{ 
                  rotate: [0, 2, -2, 0],
                  y: [0, -10, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="can-label">
                  <div className="can-logo">🍊</div>
                  <div className="can-text">JUICE ME UP!</div>
                </div>
              </motion.div>
              
              <motion.div 
                className="can can-green"
                animate={{ 
                  rotate: [0, -2, 2, 0],
                  y: [0, -15, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                <div className="can-label">
                  <div className="can-logo">🍃</div>
                  <div className="can-text">JUICE ME UP!</div>
                </div>
              </motion.div>
              
              <motion.div 
                className="splash-effects"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #e53e3e 0%, #c53030 100%);
          padding-top: 80px;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
        }

        .floating-elements {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .float-element {
          position: absolute;
          font-size: 2rem;
          opacity: 0.3;
          animation: float 6s ease-in-out infinite;
        }

        .orange-slice {
          top: 15%;
          left: 10%;
          animation-delay: 0s;
        }

        .orange-slice::before {
          content: '🍊';
        }

        .watermelon-piece {
          top: 70%;
          right: 15%;
          animation-delay: 1s;
        }

        .watermelon-piece::before {
          content: '🍉';
        }

        .grape-cluster {
          bottom: 20%;
          left: 20%;
          animation-delay: 2s;
        }

        .grape-cluster::before {
          content: '🍇';
        }

        .lime-slice {
          top: 40%;
          right: 5%;
          animation-delay: 3s;
        }

        .lime-slice::before {
          content: '🍋';
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(5deg); }
          66% { transform: translateY(10px) rotate(-3deg); }
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          z-index: 2;
          position: relative;
        }

        .hero-text h1 {
          font-size: 4.5rem;
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 60px;
          color: white;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .outline-text {
          -webkit-text-stroke: 3px white;
          -webkit-text-fill-color: transparent;
          text-shadow: none;
        }

        .hero-cans {
          position: relative;
        }

        .can-container {
          position: relative;
          display: flex;
          gap: 40px;
          align-items: flex-end;
        }

        .can {
          width: 200px;
          height: 300px;
          border-radius: 20px 20px 30px 30px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          overflow: hidden;
        }

        .can-yellow {
          background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
          border: 3px solid #fff;
        }

        .can-green {
          background: linear-gradient(135deg, #38a169 0%, #48bb78 100%);
          border: 3px solid #fff;
          height: 320px;
        }

        .can-label {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          color: white;
          text-align: center;
        }

        .can-logo {
          font-size: 3rem;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .can-text {
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: 1px;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
        }

        .splash-effects {
          position: absolute;
          top: -50px;
          left: -50px;
          right: -50px;
          bottom: -50px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          z-index: -1;
        }

        @media (max-width: 768px) {
          .hero-text h1 {
            font-size: 2.5rem;
          }

          .can-container {
            flex-direction: column;
            gap: 20px;
            align-items: center;
          }

          .can {
            width: 150px;
            height: 220px;
          }

          .can-green {
            height: 240px;
          }

          .can-logo {
            width: 60px;
            height: 60px;
            font-size: 2rem;
          }

          .can-text {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;</new_str>
