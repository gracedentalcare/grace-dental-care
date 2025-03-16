import "./contact.css";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div className="contact-container" id="contact-container">
      <motion.h1 
        initial={{ x: -50, opacity: 0 }} 
        whileInView={{ x: 0, opacity: 1 }} 
        transition={{ duration: 0.8 }}
      >
        Find Us Here..
      </motion.h1>
      <div className="contact-content">
        <div className="contact-info">
          {[
            { icon: "bi-telephone", text: "+977 9843219611" },
            { icon: "bi-geo-alt", text: "Banasthali, Kathmandu, Nepal" },
            { icon: "bi-envelope", text: "gracedentalcare66@gmail.com" },
            { icon: "bi-alarm", text: "09:00 AM - 19:00 PM" }
          ].map((item, index) => (
            <motion.div 
              key={index} 
              className="iconbet" 
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
            >
              <i className={`bi ${item.icon}`}></i>{item.text}
            </motion.div>
          ))}
        </div>
        <div className="contact-form">
          <motion.form
            action="https://formsubmit.co/gracedentalcare66@gmail.com"
            method="POST"
            className="app"
            target="_blank"
            initial={{ opacity: 0, scale: 0.99 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <input type="text" name="name" id="name" placeholder="Full Name*" required />
            <input type="text" name="contact" id="contact" placeholder="Contact Number*" required />
            <motion.input 
              type="submit" 
              name="submit" 
              id="submit" 
              value="Schedule an Appointment" 
              whileTap={{ scale: 0.9 }}
            />
            <p style={{ color: "lightgray" }}><i>*we will contact you via call</i></p>
          </motion.form>
        </div>
      </div>
      <motion.div 
        className="contact-map" 
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d414.03107463169243!2d85.2972497096783!3d27.723449846987418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19f5a3b427f3%3A0xd1eeada324209fa2!2sGrace%20Dental%20Care!5e0!3m2!1sen!2snp!4v1720279967072!5m2!1sen!2snp"
          style={{ border: ".1px solid lightgrey", borderRadius: "15px" }}
        />
      </motion.div>
    </div>
  );
}

export default Contact;
