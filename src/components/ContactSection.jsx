
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Get In <span className="gradient-text">Touch</span></h2>
          <p>Have questions? We'd love to hear from you. Send us a message!</p>
        </motion.div>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Let's Start a Conversation</h3>
            <p>
              Whether you have questions about our products, want to become a distributor, 
              or just want to say hello, we're here to help!
            </p>
            
            <div className="contact-details">
              <motion.div 
                className="contact-item"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="contact-icon">📧</div>
                <div>
                  <h4>Email</h4>
                  <p>hello@oranzo.com</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="contact-item"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="contact-icon">📞</div>
                <div>
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="contact-item"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="contact-icon">📍</div>
                <div>
                  <h4>Address</h4>
                  <p>123 Orange Street, Citrus City, CA 90210</p>
                </div>
              </motion.div>
            </div>

            <div className="social-links">
              <h4>Follow Us</h4>
              <div className="social-icons">
                {['📘', '📷', '🐦', '📺'].map((icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="social-icon"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <motion.input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>
              
              <div className="form-group">
                <motion.input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>
              
              <div className="form-group">
                <motion.textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                ></motion.textarea>
              </div>
              
              <motion.button
                type="submit"
                className="btn-primary submit-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          background: linear-gradient(135deg, #ffffff 0%, #fff0ec 100%);
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

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }

        .contact-info h3 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 20px;
          color: var(--dark-gray);
        }

        .contact-info > p {
          font-size: 1.1rem;
          color: #666;
          line-height: 1.8;
          margin-bottom: 40px;
        }

        .contact-details {
          margin-bottom: 50px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 30px;
          padding: 20px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
        }

        .contact-icon {
          font-size: 2rem;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--light-orange);
          border-radius: 12px;
        }

        .contact-item h4 {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 5px;
          color: var(--dark-gray);
        }

        .contact-item p {
          color: #666;
          margin: 0;
        }

        .social-links h4 {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 20px;
          color: var(--dark-gray);
        }

        .social-icons {
          display: flex;
          gap: 15px;
        }

        .social-icon {
          width: 50px;
          height: 50px;
          background: var(--gradient-primary);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .contact-form {
          background: white;
          padding: 50px 40px;
          border-radius: 20px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
        }

        .form-group {
          margin-bottom: 25px;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 18px 20px;
          border: 2px solid #f0f0f0;
          border-radius: 12px;
          font-size: 16px;
          font-family: inherit;
          transition: all 0.3s ease;
          background: #fafafa;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary-orange);
          background: white;
          box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          width: 100%;
          padding: 18px;
          font-size: 16px;
          font-weight: 600;
        }

        @media (max-width: 968px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .section-header h2 {
            font-size: 2.2rem;
          }
        }

        @media (max-width: 768px) {
          .contact-form {
            padding: 40px 30px;
          }

          .contact-item {
            flex-direction: column;
            text-align: center;
            gap: 15px;
          }

          .social-icons {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
