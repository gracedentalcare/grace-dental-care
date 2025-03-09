import "./dentalfacts.css"
import React,{useState} from "react";

function Dentalfacts(){

    const facts = [
        "Unique Teeth: No two sets of teeth are exactly alike, not even in identical twins.",
        "Tooth Enamel: Enamel is the hardest substance in the human body.",
        "Saliva: The average person produces enough saliva in their lifetime to fill two swimming pools.",
        "Plaque Formation: Plaque starts to form on teeth 4 to 12 hours after brushing.",
        "First Dental School: The first dental school, the Baltimore College of Dental Surgery, was established in 1840.",
        "Modern Implants: The modern dental implant was developed in the 1950s.",
        "Fluoride: Fluoride in water and toothpaste helps prevent tooth decay by strengthening enamel.",
        "Toothbrush History: The first bristle toothbrush was invented in China during the Tang Dynasty.",
        "Cheese Benefits: Cheese helps reduce the pH level in plaque and remineralizes enamel.",
        "Jaw Pain: A sore jaw can be a warning sign of a heart attack, especially when combined with chest pain.",
        "Smile Stats: The average woman smiles 62 times a day, while the average man smiles only 8 times.",
        "Gum Disease: Gum disease is the leading cause of tooth loss in adults over 35.",
        "Baby Teeth: Children typically have 20 baby teeth, which they start losing around age 6.",
        "Tongue Prints: Your tongue print is unique, much like your fingerprints.",
        "Tooth Decay: Tooth decay is the second most common disease in the United States, after the common cold.",
        "Dental Check-ups: Regular dental check-ups can prevent heart attacks by reducing inflammation in the body.",
        "Brushing Time: The recommended brushing time is 2-3 minutes, but the average person brushes for only 45-70 seconds.",
        "Toothpick Hazard: Toothpicks are the object most often choked on by Americans.",
        "Saliva Benefits: Saliva helps fight off bacteria that cause tooth decay and keeps your breath fresh.",
        "Orthodontics History: Orthodontics has been around for centuries, with ancient mummies found with metal bands around their teeth.",
    ]
    const [currentFact, setCurrentFact] = useState("");

    const showRandomFact = () => {
        const randomIndex = Math.floor(Math.random() * facts.length);
        setCurrentFact(facts[randomIndex]);
    };

    return(
    <div className="facts-container">
        <div className="facts-content">
        <p id="facts">{currentFact}</p>
        <button onClick={showRandomFact}>Click for dental facts!</button>
        </div>
    </div>
    )
}
export default Dentalfacts