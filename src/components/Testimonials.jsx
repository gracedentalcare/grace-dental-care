import React, { useState, useEffect } from "react";
import './testimonials.css'
import test1 from "./images/test-1.jpg"
import test2 from "./images/test-2.jpg"
import test3 from "./images/test-3.jpg"
import test4 from "./images/test-4.jpg"

const testimonials = [
    {
        image: test1, 
        title: "MY GRACE EXPERIENCE",
        description:
            "The staff here is incredibly kind and professional. Dr. Bibechana took the time to answer all my questions, and my teeth cleaning was done so gently. I’m definitely coming back for regular check-ups!",
        name: "Pawan Acharya",
        problem: "Scaling",
    },
    {
        image: test2,
        title: "MY GRACE EXPERIENCE",
        description:
            "I’ve always dreaded going to the dentist, but my experience here was fantastic! My treatment was handled smoothly, and the whole team was supportive and professional. Truly a painless experience.",
        name: "Krizma Magar",
        problem: "Dental Treatment",
    },
    {
        image: test3,
        title: "MY GRACE EXPERIENCE",
        description:
            "I had a filling done last week, and I couldn’t be happier with the care I received. The procedure was quick, and Dr. Mahat made sure I was comfortable throughout. I’ve already recommended them to my family!",
        name: "Ujjwal K.C.",
        problem: "Cavity Filling",
    },
    {
        image: test4,
        title: "MY GRACE EXPERIENCE",
        description:
            "यहाँको सेवा धेरै राम्रो छ। ठाउँ सफा छ र सबै जना असल छन्। मैले दाँत राख्ने उपचार गराएँ, अहिले राम्रोसँग खान र मुस्कुराउन सक्छु। उपचार राम्रो भयो, धेरै खुसी छु।",
        name: "Maiya Devi Khaniya",
        problem: "Teeth Implant",
    },
];


const TestimonialSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Update the slide index every 4.5 seconds
    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
            }, 4500);
            return () => clearInterval(interval);
        }
    }, [isPaused]);

    const handlePrev = () => {
        setCurrentIndex(
            currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % testimonials.length);
    };

    return (
        <>
        <div
            className="testimonial-slider"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="testimonial-content">
                <img src={testimonials[currentIndex].image} alt="testimonial" className="testimonial-image" />
                <div className="testimonial-text">
                    <h2>{testimonials[currentIndex].title}</h2>
                    <p>{testimonials[currentIndex].description}</p>
                    <h4>{testimonials[currentIndex].name}</h4>
                    <p className="problem">{testimonials[currentIndex].problem}</p>
                </div>
            </div>
            <div className="testimonial-controls">
                <button onClick={handlePrev}>&lt;</button>
                <button onClick={handleNext}>&gt;</button>
            </div>
        </div>
        </>
    );
};

export default TestimonialSlider;
