import "./contact.css";
import "aos/dist/aos.css";

function Contact() {

  return (
    <div className="contact-container" id="contact-container">
      <h1 data-aos="fade-right" data-aos-duration="800">Find Us Here..</h1>
      <div className="contact-content">
        <div className="contact-info">
          <div className="phone iconbet">
            <i className="bi bi-telephone"></i>+977 9843219611
          </div>
          <div className="address iconbet">
            <i className="bi bi-geo-alt"></i>Banasthali, Kathmandu, Nepal
          </div>
          <div className="email iconbet">
            <i className="bi bi-envelope"></i>gracedentalcare66@gmail.com
          </div>
          <div className="time iconbet">
            <i className="bi bi-alarm"></i>09:00 AM - 19:00 PM
          </div>
        </div>
        <div className="contact-form">
          <form
            action="https://formsubmit.co/gracedentalcare66@gmail.com"
            method="POST"
            className="app"
            target="_blank"
          >
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name*"
              required
            />
            <input
              type="text"
              name="contact"
              id="contact"
              placeholder="Contact Number*"
              required
            />
            <input
              type="submit"
              name="submit"
              id="submit"
              value="Schedule an Appointment"
            />
            <p style={{color: "lightgray"}}><i>*we will contact you via call</i></p>
          </form>
        </div>
      </div>
      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d414.03107463169243!2d85.2972497096783!3d27.723449846987418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19f5a3b427f3%3A0xd1eeada324209fa2!2sGrace%20Dental%20Care!5e0!3m2!1sen!2snp!4v1720279967072!5m2!1sen!2snp"
          style={{ border: ".1px solid lightgrey", borderRadius: "15px" }}
        />
      </div>
    </div>
  );
}

export default Contact;
