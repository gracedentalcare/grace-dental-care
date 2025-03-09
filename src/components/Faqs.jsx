import './faqs.css'
import faqimage from './images/faqs.png'
import React,{useState} from 'react';
import "aos/dist/aos.css";

function Faqs(){

    const faqs = [
        {
            question: "What dental services are provided at your clinic?",
            answer: "Our clinic offers a wide range of services including routine check-ups, cleanings, fillings, crowns, bridges, root canals, teeth whitening, orthodontics, dental implants, and emergency dental care."
        },
        {
            question: "How frequently should I schedule a dental visit?",
            answer: "It's generally recommended to visit the dentist every six months for a routine check-up and cleaning. Your dentist may suggest a different schedule based on your dental health needs."
        },
        {
            question: "How should I handle a dental emergency situation?",
            answer: "In case of a dental emergency like severe tooth pain or a knocked-out tooth, contact our clinic immediately for prompt care and guidance."
        },
        {
            question: "What steps ensure safety and hygiene at your clinic?",
            answer: "We strictly follow infection control protocols, use sterilized instruments, wear protective gear, and maintain a clean environment to ensure patient safety and hygiene."
        },
        {
            question: "What tips help maintain good oral hygiene at home?",
            answer: "Maintain good oral hygiene by brushing twice a day with fluoride toothpaste, flossing daily, eating a balanced diet, limiting sugary foods and drinks, and attending regular dental check-ups and cleanings."
        }
    ];
    
    // State for tracking open/closed state of each FAQ
    const [openIndex, setOpenIndex] = useState(null);
    
    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    



    return (
        <div className="faq-container" id='faq-container'>
            <div className="faq-image">
                <img src={faqimage} alt="" />
            </div>
            <div className="faq-questions">
                {faqs.map((faq, index) => (
                    <div key={index} data-aos="fade-up" data-aos-duration="800">
                        <div className={`question${index + 1}`} onClick={() => handleClick(index)} >
                            {faq.question}
                            <a><i className={`bi ${openIndex === index ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i></a>
                        </div>
                        
                        <div className={`anscss ${openIndex === index ? 'show' : ''}`}>
                            {faq.answer}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
    
}
export default Faqs