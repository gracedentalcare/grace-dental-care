import React, { useRef } from "react";
import "./whygrace.css";

const sellingPoints = [
    {
        icon: '❤️', 
        title: 'Complete Care',
        description: 'We provide a full suite of dental care to cover you and your family’s oral health needs.'
    },
    {
        icon: '🏠',
        title: 'Friendly Atmosphere',
        description: 'Our dental team will treat you with care and kindness at every visit.'
    },
    {
        icon: '👩🏻‍⚕️',
        title: 'Experienced Team',
        description: 'Our team of highly skilled professionals supports you every step of your dental health journey.'
    }
];

const WhyGrace = () => {
    const carouselRef = useRef(null);

    const scroll = (direction) => {
        const scrollAmount = 320; // Adjust this based on card width
        if (carouselRef.current) {
            if (direction === "left") {
                carouselRef.current.scrollLeft -= scrollAmount;
            } else {
                carouselRef.current.scrollLeft += scrollAmount;
            }
        }
    };

    return (
        <div className="why-grace-container">
            <h2>Why Choose Grace Dental Care</h2>
            <div
                className="why-grace-cards"
                ref={carouselRef}
            >
                {sellingPoints.map((point, index) => (
                    <div className="card" key={index}>
                        <div className="icon">{point.icon}</div>
                        <h3>{point.title}</h3>
                        <p>{point.description}</p>
                    </div>
                ))}
            </div>

            {/* Left Scroll Button */}
            <div className="scroll-arrow left" onClick={() => scroll("left")}>
                &#8249;
            </div>

            {/* Right Scroll Button */}
            <div className="scroll-arrow right" onClick={() => scroll("right")}>
                &#8250;
            </div>
        </div>
    );
};

export default WhyGrace;
