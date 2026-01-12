// import "./contact.css"
import { useState } from "react";
import { motion} from "framer-motion";
export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <motion.section  initial={{ opacity: 0, y: 90 }}
  whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}

  viewport={{  amount: 0.4 }} className="contact">
      <motion.h2 layoutId="underline">Get In Touch</motion.h2>
      <motion.div 
  className="contact-content">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Feel free to reach out for collaboration or just to say hello!</p>
          <div className="contact-details">
            <div className="contact-item">
              <strong>Email:</strong> wilsonndoping@gmail.com
            </div>
            <div className="contact-item">
              <strong>Phone:</strong> +237 672693053
            </div>
            <div className="contact-item">
              <strong>Location:</strong> Yaounde, Cameroon
            </div>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn primary">Send Message</button>
        </form>
      </motion.div>
    </motion.section>
  );
};
