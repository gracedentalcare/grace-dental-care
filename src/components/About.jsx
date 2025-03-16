import "./about.css";
import logo from "./images/logo.png";
import { motion } from "framer-motion";

function About() {
    return (
        <div className="about-us" id="about">
            <div className="about">
                <motion.img 
                    src={logo} 
                    className="pic" 
                    initial={{ opacity: 0, scale: 0.99 }} 
                    whileInView={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 0.6 }}
                />
                <div className="text">
                    <motion.h2 
                        initial={{ x: -30, opacity: 0 }} 
                        whileInView={{ x: 0, opacity: 1 }} 
                        transition={{ duration: 0.5 }}
                    >
                        About Us
                    </motion.h2>
                    <motion.h4 
                        initial={{ x: -30, opacity: 0 }} 
                        whileInView={{ x: 0, opacity: 1 }} 
                        transition={{ duration: 0.5 }}
                    >
                        <motion.img 
                            src={logo} 
                            className="small-pic" 
                            initial={{ opacity: 0, scale: 0.99 }} 
                            whileInView={{ opacity: 1, scale: 1 }} 
                            transition={{ duration: 0.6 }}
                        />
                        Grace Dental Care
                    </motion.h4>
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.6 }}
                    >
                        Welcome to a place where your smile’s journey begins! We fuse cutting-edge dental technology with a gentle touch, creating a perfect harmony of comfort and innovation. Our mission is to transform every visit into a positive experience, ensuring your oral health and radiant smile are always at their best. Discover the difference, where exceptional care meets extraordinary results. Join us and experience the future of dental care today!
                    </motion.p>
                </div>
            </div>
        </div>
    );
}

export default About;
