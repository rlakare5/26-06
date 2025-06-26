
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Story', href: '#about' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' }
    ],
    products: [
      { name: 'Classic Orange', href: '#products' },
      { name: 'Orange Fizz', href: '#products' },
      { name: 'Orange Twist', href: '#products' },
      { name: 'Orange Energy', href: '#products' }
    ],
    support: [
      { name: 'Contact Us', href: '#contact' },
      { name: 'FAQ', href: '#' },
      { name: 'Shipping', href: '#' },
      { name: 'Returns', href: '#' }
    ]
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div 
            className="footer-brand"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="gradient-text">ORANZO</h3>
            <p>
              Refreshing your world, one sip at a time. Made with love, 
              served with passion.
            </p>
            <div className="social-links">
              {['📘', '📷', '🐦', '📺'].map((icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="social-link"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 15
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <div className="footer-links">
            <motion.div 
              className="footer-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4>Company</h4>
              <ul>
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <motion.a 
                      href={link.href}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              className="footer-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4>Products</h4>
              <ul>
                {footerLinks.products.map((link, index) => (
                  <li key={index}>
                    <motion.a 
                      href={link.href}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              className="footer-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4>Support</h4>
              <ul>
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <motion.a 
                      href={link.href}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              className="footer-section newsletter"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4>Stay Updated</h4>
              <p>Get the latest news and exclusive offers!</p>
              <div className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                />
                <motion.button 
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p>&copy; {currentYear} Oranzo. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .footer {
          background: linear-gradient(135deg, var(--dark-gray) 0%, #1a1a1a 100%);
          color: white;
          padding: 80px 0 30px;
          position: relative;
          overflow: hidden;
        }

        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--gradient-primary);
        }

        .footer-content {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 80px;
          margin-bottom: 60px;
        }

        .footer-brand h3 {
          font-size: 2.5rem;
          font-weight: 900;
          margin-bottom: 20px;
        }

        .footer-brand p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #ccc;
          margin-bottom: 30px;
        }

        .social-links {
          display: flex;
          gap: 15px;
        }

        .social-link {
          width: 50px;
          height: 50px;
          background: rgba(255, 107, 53, 0.1);
          border: 2px solid rgba(255, 107, 53, 0.3);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: var(--gradient-primary);
          border-color: var(--primary-orange);
        }

        .footer-links {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
        }

        .footer-section h4 {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 25px;
          color: var(--primary-orange);
        }

        .footer-section ul {
          list-style: none;
          padding: 0;
        }

        .footer-section li {
          margin-bottom: 12px;
        }

        .footer-section a {
          color: #ccc;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .footer-section a:hover {
          color: var(--primary-orange);
        }

        .newsletter p {
          color: #ccc;
          margin-bottom: 20px;
          font-size: 0.95rem;
        }

        .newsletter-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .newsletter-form input {
          padding: 15px;
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.05);
          color: white;
          font-size: 14px;
        }

        .newsletter-form input::placeholder {
          color: #999;
        }

        .newsletter-form input:focus {
          outline: none;
          border-color: var(--primary-orange);
        }

        .newsletter-form button {
          padding: 15px;
          font-size: 14px;
          font-weight: 600;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .footer-bottom p {
          color: #999;
          margin: 0;
        }

        .footer-bottom-links {
          display: flex;
          gap: 30px;
        }

        .footer-bottom-links a {
          color: #999;
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }

        .footer-bottom-links a:hover {
          color: var(--primary-orange);
        }

        @media (max-width: 968px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .footer-links {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
          }
        }

        @media (max-width: 768px) {
          .footer {
            padding: 60px 0 30px;
          }

          .footer-links {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
            gap: 20px;
          }

          .footer-bottom-links {
            flex-direction: column;
            gap: 15px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
