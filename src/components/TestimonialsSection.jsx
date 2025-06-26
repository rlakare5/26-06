
import React from 'react';
import { motion } from 'framer-motion';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alice Smith",
      rating: 3,
      review: "The juices taste incredibly fresh and vibrant. A daily treat that keeps me energized and satisfied. Highly recommended",
      avatar: "👩‍🦰"
    },
    {
      id: 2,
      name: "Michael Taylor",
      rating: 3,
      review: "The flavors are amazing, and I feel great knowing they're made with fresh, wholesome ingredients. Highly recommend trying them",
      avatar: "👨‍🦱"
    },
    {
      id: 3,
      name: "Alexa Snow",
      rating: 3,
      review: "I feel rejuvenated after each sip. The flavors are delicious, and I love knowing they're made with natural ingredients",
      avatar: "👩‍🦳"
    },
    {
      id: 4,
      name: "Sophia Lee",
      rating: 3,
      review: "These juices are my go-to for a healthy pick-me-up. I love the variety of flavors, and they always taste so fresh",
      avatar: "👩‍🦲"
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

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
        ★
      </span>
    ));
  };

  return (
    <section className="testimonials-section section-padding">
      <div className="container">
        <motion.div
          className="testimonials-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="testimonial-card"
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <div className="testimonial-header">
                <div className="avatar">
                  {testimonial.avatar}
                </div>
                <div className="testimonial-info">
                  <h4>{testimonial.name}</h4>
                  <div className="rating">
                    {renderStars(testimonial.rating)}
                    <span className="rating-text">average rating is {testimonial.rating} out of 5</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-content">
                <p>"{testimonial.review}"</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .testimonials-section {
          background: linear-gradient(135deg, #ffffff 0%, #f7fafc 100%);
          position: relative;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .testimonial-card {
          background: white;
          border-radius: 15px;
          padding: 30px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          border-left: 4px solid #e53e3e;
        }

        .testimonial-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
        }

        .avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #f7fafc;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          border: 3px solid #e53e3e;
        }

        .testimonial-info h4 {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 5px;
          color: #2d3748;
        }

        .rating {
          display: flex;
          align-items: center;
          gap: 5px;
          margin-bottom: 5px;
        }

        .star {
          color: #e2e8f0;
          font-size: 1.2rem;
        }

        .star.filled {
          color: #ffd700;
        }

        .rating-text {
          font-size: 0.8rem;
          color: #718096;
          margin-left: 10px;
        }

        .testimonial-content p {
          font-size: 1rem;
          line-height: 1.6;
          color: #4a5568;
          margin: 0;
          font-style: italic;
        }

        @media (max-width: 768px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .testimonial-card {
            padding: 25px;
          }

          .testimonial-header {
            flex-direction: column;
            text-align: center;
            gap: 10px;
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
