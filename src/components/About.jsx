import './about.css'
import logo from './images/logo.png';
import "aos/dist/aos.css";

function About(){
    return(
        <>
        <div className="about-us"  id='about'>
            <div className="about">
                <img src={logo} className="pic" data-aos="zoom-in" data-aos-duration="600"/>
                <div className="text">
                    <h2 data-aos="fade-right" data-aos-duration="500">About Us</h2>
                     <h4 data-aos="fade-right" data-aos-duration="500">  <img src={logo} className="small-pic" data-aos="zoom-in" data-aos-duration="600"/> Grace Dental Care</h4>
                    <p>Welcome to a place where your smile’s journey begins! We fuse cutting-edge dental technology with a gentle touch, creating a perfect harmony of comfort and innovation. Our mission is to transform every visit into a positive experience, ensuring your oral health and radiant smile are always at their best. Discover the difference, where exceptional care meets extraordinary results. Join us and experience the future of dental care today!</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default About