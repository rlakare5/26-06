
<old_str>import React from 'react';
import { motion } from 'framer-motion';

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: "Classic Orange",
      description: "Pure orange juice with natural flavor",
      price: "$3.99",
      emoji: "🍊",
      color: "#ff6b35"
    },
    {
      id: 2,
      name: "Orange Fizz",
      description: "Sparkling orange drink with bubbles",
      price: "$4.49",
      emoji: "🥤",
      color: "#ff8c42"
    },
    {
      id: 3,
      name: "Orange Twist",
      description: "Orange with a hint of lime twist",
      price: "$4.99",
      emoji: "🍹",
      color: "#ffb366"
    },
    {
      id: 4,
      name: "Orange Energy",
      description: "Orange drink with natural caffeine boost",
      price: "$5.49",
      emoji: "⚡",
      color: "#ff9f40"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="products" className="products-section section-padding">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Our <span className="gradient-text">Premium</span> Products</h2>
          <p>Discover our range of refreshing orange drinks crafted with the finest ingredients</p>
        </motion.div>

        <motion.div 
          className="products-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="product-card"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <div className="product-image">
                <motion.div 
                  className="product-emoji"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {product.emoji}
                </motion.div>
                <motion.div 
                  className="product-glow"
                  animate={{ 
                    opacity: [0.5, 1, 0.5],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{ background: `radial-gradient(circle, ${product.color}20 0%, transparent 70%)` }}
                />
              </div>
              
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="product-price">{product.price}</div>
                
                <motion.button 
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Add to Cart
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="products-cta text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3>Want to try them all?</h3>
          <p>Get our variety pack with all flavors at a special price!</p>
          <motion.button 
            className="btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Shop Variety Pack
          </motion.button>
        </motion.div>
      </div>

      <style jsx>{`
        .products-section {
          background: linear-gradient(135deg, #ffffff 0%, #fff8f5 100%);
          position: relative;
        }

        .section-header {
          margin-bottom: 80px;
        }

        .section-header h2 {
          font-size: 3rem;
          font-weight: 900;
          margin-bottom: 20px;
        }

        .section-header p {
          font-size: 1.2rem;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 40px;
          margin-bottom: 80px;
        }

        .product-card {
          background: white;
          border-radius: 20px;
          padding: 40px 30px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .product-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--gradient-primary);
        }

        .product-image {
          position: relative;
          margin-bottom: 30px;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .product-emoji {
          font-size: 4rem;
          z-index: 2;
          position: relative;
        }

        .product-glow {
          position: absolute;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          z-index: 1;
        }

        .product-info h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 15px;
          color: var(--dark-gray);
        }

        .product-info p {
          color: #666;
          margin-bottom: 20px;
          line-height: 1.6;
        }

        .product-price {
          font-size: 1.8rem;
          font-weight: 900;
          color: var(--primary-orange);
          margin-bottom: 25px;
        }

        .product-info .btn-primary {
          width: 100%;
          padding: 15px;
          font-weight: 600;
        }

        .products-cta {
          background: var(--light-orange);
          border-radius: 20px;
          padding: 60px 40px;
          margin-top: 60px;
        }

        .products-cta h3 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 15px;
        }

        .products-cta p {
          font-size: 1.1rem;
          color: #666;
          margin-bottom: 30px;
        }

        @media (max-width: 768px) {
          .section-header h2 {
            font-size: 2.2rem;
          }

          .products-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .products-cta {
            padding: 40px 30px;
          }

          .products-cta h3 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ProductsSection;</old_str>
<new_str>import React from 'react';
import { motion } from 'framer-motion';

const ProductsSection = () => {
  const categoryProducts = [
    {
      id: 1,
      name: "Lime juice",
      emoji: "🟢",
      bgColor: "#68d391"
    },
    {
      id: 2,
      name: "Watermelon juice", 
      emoji: "🍉",
      bgColor: "#f56565"
    },
    {
      id: 3,
      name: "Orange juice",
      emoji: "🍊", 
      bgColor: "#ed8936"
    },
    {
      id: 4,
      name: "Dragon fruit juice",
      emoji: "🐉",
      bgColor: "#9f7aea"
    },
    {
      id: 5,
      name: "Blueberry juice",
      emoji: "🫐",
      bgColor: "#4299e1"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="products" className="products-section section-padding">
      <div className="container">
        <motion.div 
          className="products-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categoryProducts.map((product) => (
            <motion.div
              key={product.id}
              className="product-category-card"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <div className="category-background" style={{ background: product.bgColor }}>
                <motion.div 
                  className="product-bottle"
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    y: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  🧃
                </motion.div>
              </div>
              
              <div className="category-info">
                <h3>{product.name}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="freshness-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="freshness-content">
            <div className="freshness-text">
              <h2>Where freshness meets convenience in every sip!</h2>
              <p>
                Embark on a journey where freshness meets convenience in every sip and our meticulously 
                crafted juices bring together the goodness of natural ingredients with the ease of 
                accessibility and experience the perfect blend of vibrant flavors and nutritional benefits, 
                enhancing your well-being with every refreshing gulp, anytime, anywhere.
              </p>
              <motion.button 
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact us
              </motion.button>
            </div>
            <div className="freshness-image">
              <motion.div 
                className="juice-bottle-large"
                animate={{ 
                  rotate: [0, 2, -2, 0],
                  y: [0, -10, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                🥤
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="explore-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Explore your favorites</h2>
          <div className="favorites-grid">
            {[
              { name: "Dragon fruit juice", price: "$130.00", emoji: "🐉", color: "#9f7aea" },
              { name: "Watermelon juice", price: "$10.00", emoji: "🍉", color: "#f56565" },
              { name: "Grapes juice", price: "$20.00", emoji: "🍇", color: "#805ad5" },
              { name: "Blueberry juice", price: "$7.50", emoji: "🫐", color: "#4299e1" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="favorite-item"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="favorite-image" style={{ background: item.color }}>
                  <span className="favorite-emoji">{item.emoji}</span>
                </div>
                <div className="favorite-info">
                  <h4>{item.name}</h4>
                  <p className="favorite-price">Price {item.price}</p>
                  <button className="shop-now-btn">Shop now</button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .products-section {
          background: linear-gradient(135deg, #ffffff 0%, #f7fafc 100%);
          position: relative;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin-bottom: 100px;
        }

        .product-category-card {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .category-background {
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .product-bottle {
          font-size: 4rem;
          filter: drop-shadow(0 5px 15px rgba(0, 0, 0, 0.2));
        }

        .category-info {
          padding: 20px;
          text-align: center;
        }

        .category-info h3 {
          font-size: 1.2rem;
          font-weight: 600;
          color: #2d3748;
          margin: 0;
        }

        .freshness-section {
          margin-bottom: 100px;
          background: #f7fafc;
          border-radius: 20px;
          padding: 60px 40px;
        }

        .freshness-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .freshness-text h2 {
          font-size: 2.5rem;
          font-weight: 900;
          margin-bottom: 25px;
          color: #2d3748;
          line-height: 1.2;
        }

        .freshness-text p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #4a5568;
          margin-bottom: 30px;
        }

        .freshness-image {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .juice-bottle-large {
          font-size: 8rem;
          filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.2));
        }

        .explore-section h2 {
          font-size: 2.5rem;
          font-weight: 900;
          text-align: center;
          margin-bottom: 50px;
          color: #2d3748;
        }

        .favorites-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .favorite-item {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .favorite-image {
          height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .favorite-emoji {
          font-size: 3.5rem;
          filter: drop-shadow(0 5px 15px rgba(0, 0, 0, 0.2));
        }

        .favorite-info {
          padding: 20px;
          text-align: center;
        }

        .favorite-info h4 {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 10px;
          color: #2d3748;
        }

        .favorite-price {
          font-size: 1.1rem;
          font-weight: 600;
          color: #e53e3e;
          margin-bottom: 15px;
        }

        .shop-now-btn {
          background: #e53e3e;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .shop-now-btn:hover {
          background: #c53030;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .products-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .freshness-content {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }

          .freshness-text h2 {
            font-size: 2rem;
          }

          .favorites-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default ProductsSection;</new_str>
