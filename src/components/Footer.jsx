import './footer.css'
import logo from "./images/logo.png"

function Footer(){
    return(
        <>
        <footer>
            <div className="footer-content">
                <a href="#"><img src={logo} alt="logo" height={40} width={40}/></a>
                <span>© 2024 Grace Dental Care Pvt. Ltd.</span>
            </div>
            <div className="footer-socials">
                <a href="https://www.facebook.com/profile.php?id=100083343639154" target='_blank'><i className="bi bi-facebook" style = {{color:'rgb(1, 1, 150)'}}></i></a>
                <a href="https://www.instagram.com/grace.dental.care/" target='_blank'><i className="bi bi-instagram" style = {{color:'rgb(200, 0, 0)'}}></i></a>
                <a href="https://www.linkedin.com/in/bibechana-mahat-641a0613b/" target='_blank'><i className="bi bi-linkedin" style = {{color:'rgb(1, 1, 150)'}}></i></a>
            </div>

        </footer>
        <div className="credit">Designed by : <a href="https://www.linkedin.com/in/satishmahat/" target='_blank'>Satish Mahat</a></div>
        </>
    );
}
export default Footer