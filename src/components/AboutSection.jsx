
import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const features = [
    {
      icon: "🌱",
      title: "100% Natural",
      description: "Made with real oranges and natural ingredients"
    },
    {
      icon: "⚡",
      title: "Energy Boost",
      description: "Packed with vitamin C and natural energy"
    },
    {
      icon: "🥇",
      title: "Premium Quality",
      description: "Highest quality standards in every bottle"
    },
    {
      icon: "🌍",
      title: "Eco-Friendly",
      description: "Sustainable packaging and responsible sourcing"
    }
  ];

  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Why Choose <span className="gradient-text">Oranzo</span>?</h2>
            <p>
              At Oranzo, we believe that great taste comes from great ingredients. 
              Since our founding in 2020, we've been committed to creating the perfect 
              orange drink experience using only the finest, naturally sourced oranges.
            </p>
            <p>
              Our innovative brewing process preserves the natural vitamins and minerals 
              while delivering that refreshing taste you crave. Every sip is a burst of 
              sunshine in a bottle.
            </p>
            
            <motion.div 
              className="stats"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="stat">
                <h3>1M+</h3>
                <p>Happy Customers</p>
              </div>
              <div className="stat">
                <h3>50+</h3>
                <p>Countries Served</p>
              </div>
              <div className="stat">
                <h3>100%</h3>
                <p>Natural Ingredients</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="about-features"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <motion.div 
                  className="feature-icon"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.5,
                    ease: "easeInOut"
                  }}
                >
                  {feature.icon}
                </motion.div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          className="mission-statement"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mission-content">
            <h3>Our Mission</h3>
            <p>
              "To bring joy and refreshment to people's lives through our carefully crafted 
              orange beverages, while maintaining our commitment to quality, sustainability, 
              and customer satisfaction."
            </p>
            <div className="mission-signature">
              <p>- The Oranzo Team</p>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .about-section {
          background: linear-gradient(135deg, #fff8f5 0%, #ffffff 100%);
          position: relative;
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
          margin-bottom: 100px;
        }

        .about-text h2 {
          font-size: 3rem;
          font-weight: 900;
          margin-bottom: 30px;
          line-height: 1.2;
        }

        .about-text p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #666;
          margin-bottom: 25px;
        }

        .stats {
          display: flex;
          gap: 40px;
          margin-top: 40px;
        }

        .stat {
          text-align: center;
        }

        .stat h3 {
          font-size: 2.5rem;
          font-weight: 900;
          color: var(--primary-orange);
          margin-bottom: 5px;
        }

        .stat p {
          font-size: 0.9rem;
          color: #888;
          margin: 0;
        }

        .about-features {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
        }

        .feature-card {
          background: white;
          padding: 30px 25px;
          border-radius: 15px;
          text-align: center;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          border-top: 3px solid var(--primary-orange);
        }

        .feature-icon {
          font-size: 3rem;
          margin-bottom: 20px;
        }

        .feature-card h4 {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 15px;
          color: var(--dark-gray);
        }

        .feature-card p {
          font-size: 0.95rem;
          color: #666;
          line-height: 1.6;
          margin: 0;
        }

        .mission-statement {
          background: var(--gradient-primary);
          color: white;
          border-radius: 20px;
          padding: 60px 50px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .mission-statement::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          animation: rotate 20s linear infinite;
        }

        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .mission-content {
          position: relative;
          z-index: 2;
        }

        .mission-content h3 {
          font-size: 2.2rem;
          font-weight: 900;
          margin-bottom: 25px;
        }

        .mission-content p {
          font-size: 1.2rem;
          line-height: 1.8;
          margin-bottom: 20px;
          opacity: 0.95;
        }

        .mission-signature {
          margin-top: 30px;
        }

        .mission-signature p {
          font-style: italic;
          font-size: 1rem;
          margin: 0;
          opacity: 0.8;
        }

        @media (max-width: 968px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .about-text h2 {
            font-size: 2.2rem;
          }

          .stats {
            justify-content: center;
            gap: 30px;
          }

          .about-features {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .stats {
            flex-direction: column;
            gap: 20px;
          }

          .mission-statement {
            padding: 40px 30px;
          }

          .mission-content h3 {
            font-size: 1.8rem;
          }

          .mission-content p {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
