import React, { useState, useEffect } from "react";
import './testimonials.css'

const testimonials = [
    {
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D", 
        title: "MY GRACE EXPERIENCE",
        description:
            "The staff here is incredibly kind and professional. Dr. Bibechana took the time to answer all my questions, and my teeth cleaning was done so gently. I’m definitely coming back for regular check-ups!",
        name: "Martha Selmon",
        problem: "Scaling",
    },
    {
        image: "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
        title: "MY GRACE EXPERIENCE",
        description:
            "I had a filling done last week, and I couldn’t be happier with the care I received. The procedure was quick, and Dr. Mahat made sure I was comfortable throughout. I’ve already recommended them to my family!",
        name: "Rahul Sharma",
        problem: "Cavity Filling",
    },
    {
        image: "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
        title: "MY GRACE EXPERIENCE",
        description:
            "I’ve always dreaded going to the dentist, but my experience here was fantastic! My root canal was handled smoothly, and the whole team was supportive and professional. Truly a painless experience.",
        name: "Anjali Mehta",
        problem: "Root Canal",
    },
    {
        image: "https://plus.unsplash.com/premium_photo-1682089810582-f7b200217b67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJ3xlbnwwfHwwfHx8MA%3D%3D",
        title: "MY GRACE EXPERIENCE",
        description:
            "The facilities are clean, and the staff is welcoming. I had a whitening treatment that turned out amazing! I feel more confident with my smile now and appreciate the quality of care here.",
        name: "Rohit Gupta",
        problem: "Teeth Whitening",
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
