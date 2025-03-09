import landingimg from "./images/grace-land.png"
import landingimg2 from "./images/grace-land2.png"
import './landing.css'
function Landing(){
    return(
        <>
        <div className="landing-container">
            <div className="landing-image">
                <img src={landingimg} alt="LOADING" id="land1"/>
                <img src={landingimg2} alt="LOADING" id="land2"/>
            </div>
        </div>
        </>
    );
}
export default Landing