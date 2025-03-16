import { useState } from "react";
import { motion } from "framer-motion";
import "./services.css";
import image1 from './images/Treatments/1.png';
import image2 from './images/Treatments/2.png';
import image3 from './images/Treatments/3.png';
import image4 from './images/Treatments/4.png';
import image5 from './images/Treatments/5.png';
import image6 from './images/Treatments/6.png';
import image7 from './images/Treatments/7.png';
import image8 from './images/Treatments/8.png';
import image9 from './images/Treatments/9.png';
import image10 from './images/Treatments/10.png';
import image11 from './images/Treatments/11.png';
import image12 from './images/Treatments/12.png';
import image13 from './images/Treatments/13.png';

function Services() {
    const services = [
        'Extraction', 'Oral Cavity', 'Dental Crown', 'Dental Calculus', 'Dental Implant',
        'Braces', 'Denture', 'Teeth Whitening', 'Veneers', 'Orthodontics', 'Dental Bridge', 'Caries', 'Scaling'
    ];

    const images = [
        image1, image2, image3, image4, image5, image6, 
        image7, image8, image9, image10, image11, image12, image13
    ];

    const [showMore, setShowMore] = useState(false);

    const handleShow = () => {
        setShowMore(!showMore);
    };

    return (
        <>
            <div className="services-container">
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.6 }}
                >
                    All Your Dental Needs in One Place
                </motion.h1>
                <div className={`services-content ${showMore ? 'expanded' : ''}`}>
                    {services.map((service, index) => (
                        <motion.div 
                            key={index} 
                            className="services-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8}}
                        >
                            <div className="services-image">
                                <img src={images[index]} alt={service} />
                            </div>
                            <span>{service}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="showmore-btn">
                <motion.button 
                    id="services-showmore" 
                    onClick={handleShow}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    {showMore ? "-- Show Less --" : "-- Show More --"}
                </motion.button>
            </div>
        </>
    );
}

export default Services;
