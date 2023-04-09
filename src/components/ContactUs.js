import React from "react";
import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="contact_us flex-container">
      <div>
        <h1 className="contact_us_head">Contact Us</h1>
        <p className="contact_us_para">
          Get in touch with us for any queries or feedback. <br /> We would love
          to hear from you!
        </p>
        <form action="">
            <input type="email" name="" id="" placeholder="Email*" />
            <input type="number" name="" id="" placeholder="Phone" />
            <textarea name="" id="" cols="30" rows="10" placeholder="Your message here*"></textarea>
        </form>
      </div>
      <img className="contact_us_img" src="/3drenderastronautcallinggesturewitholdtelephone3dillustrationdesign-1@2x.png" alt="" />
    </div>
  );
}

export default ContactUs;
