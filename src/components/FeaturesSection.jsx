
import React from 'react';
import { motion } from 'framer-motion';

const FeaturesSection = () => {
  return (
    <section className="features-section section-padding">
      <div className="container">
        <div className="features-content">
          <div className="features-text">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Sip. Smile. Repeat. Your Daily Dose of Freshness in Every Can!
            </motion.h2>
          </div>
          
          <div className="features-visual">
            <div className="feature-can">
              <motion.div 
                className="can-display"
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
                🥤
              </motion.div>
            </div>
            
            <div className="features-list">
              <motion.div 
                className="feature-item"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="feature-badge">
                  <span>Gluten free product</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="feature-item"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="feature-badge">
                  <span>Zero calories sugar sodium</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="feature-item"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="feature-badge">
                  <span>No artificial sweetness</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="feature-item"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="feature-badge">
                  <span>Lightly carbonated</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div 
          className="product-showcase"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="showcase-grid">
            {[
              { name: "Grapes Juice", emoji: "🍇", color: "#805ad5" },
              { name: "Lime Juice", emoji: "🟢", color: "#68d391" },
              { name: "Watermelon Juice", emoji: "🍉", color: "#f56565" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="showcase-item"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="showcase-image" style={{ background: item.color }}>
                  <span className="showcase-emoji">{item.emoji}</span>
                </div>
                <div className="showcase-info">
                  <h4>{item.name}</h4>
                  <button className="shop-now-btn">Shop now</button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="cta-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="cta-grid">
            <div className="cta-card">
              <h3>The crispness of freshness</h3>
              <button className="btn-primary">Shop now</button>
            </div>
            <div className="cta-card">
              <h3>Premium Quality</h3>
              <button className="btn-primary">Discover More</button>
            </div>
            <div className="cta-card">
              <h3>Natural Ingredients</h3>
              <button className="btn-primary">Learn More</button>
            </div>
            <div className="cta-card">
              <h3>Healthy Choice</h3>
              <button className="btn-primary">Explore</button>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .features-section {
          background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
          position: relative;
        }

        .features-content {
          margin-bottom: 100px;
        }

        .features-text {
          text-align: center;
          margin-bottom: 80px;
        }

        .features-text h2 {
          font-size: 3rem;
          font-weight: 900;
          color: #2d3748;
          line-height: 1.2;
          max-width: 800px;
          margin: 0 auto;
        }

        .features-visual {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 80px;
          align-items: center;
        }

        .feature-can {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .can-display {
          font-size: 10rem;
          filter: drop-shadow(0 15px 35px rgba(0, 0, 0, 0.2));
        }

        .features-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
        }

        .feature-item {
          display: flex;
          justify-content: center;
        }

        .feature-badge {
          background: white;
          padding: 20px 25px;
          border-radius: 15px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          border-left: 4px solid #e53e3e;
          text-align: center;
          min-width: 200px;
        }

        .feature-badge span {
          font-size: 1rem;
          font-weight: 600;
          color: #2d3748;
        }

        .product-showcase {
          margin-bottom: 80px;
        }

        .showcase-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .showcase-item {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .showcase-image {
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .showcase-emoji {
          font-size: 4rem;
          filter: drop-shadow(0 5px 15px rgba(0, 0, 0, 0.2));
        }

        .showcase-info {
          padding: 20px;
          text-align: center;
        }

        .showcase-info h4 {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 15px;
          color: #2d3748;
        }

        .shop-now-btn {
          background: #e53e3e;
          color: white;
          border: none;
          padding: 12px 25px;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .shop-now-btn:hover {
          background: #c53030;
          transform: translateY(-2px);
        }

        .cta-section {
          background: white;
          border-radius: 20px;
          padding: 60px 40px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
        }

        .cta-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .cta-card {
          text-align: center;
          padding: 30px 20px;
          border-radius: 15px;
          background: #f7fafc;
          transition: all 0.3s ease;
        }

        .cta-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .cta-card h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 20px;
          color: #2d3748;
        }

        .btn-primary {
          background: #e53e3e;
          color: white;
          border: none;
          padding: 12px 25px;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          background: #c53030;
          transform: translateY(-2px);
        }

        @media (max-width: 968px) {
          .features-visual {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .features-list {
            grid-template-columns: 1fr;
          }

          .features-text h2 {
            font-size: 2.2rem;
          }

          .can-display {
            font-size: 6rem;
          }
        }

        @media (max-width: 768px) {
          .cta-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default FeaturesSection;
