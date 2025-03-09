import React from "react";
import './message.css';
import doctor from './images/doctor.png';

const Message = () => {
    return (
        <div className="doctor-message-container">
            <div className="message-content">
                <p className="message-text">
                "At Grace Dental Care, we are dedicated to providing exceptional dental care in a warm, welcoming environment. Our goal is to make every visit comfortable and stress-free while addressing all your dental needs with precision and care. Your smile and overall dental health are our top priorities, and we are here to support you at every stage of your journey toward a healthier, brighter smile."
                </p>
                <p className="doctor-name"><a href="https://www.linkedin.com/in/bibechana-mahat-641a0613b/" target="_blank" >-Dr. Bibechana Mahat</a></p>
            </div>
            <div className="doctor-photo-container">
                <img 
                    src={doctor} 
                    alt="Dr. Bibechana Mahat" 
                    className="doctor-photo"
                />
            </div>
        </div>
    );
};

export default Message;
