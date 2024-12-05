import React from "react";
import "./ContactSection.scss";

const ContactSection = () => {
  return (
    <div className="contact-section">
      <div className="contact-content">
        <h2 className="contact2">Get in touch with our experts.</h2>
        <p className="contactP">
          Have questions or want more personalized insights? Contact our team of experts to discuss how remote sensing can benefit your business or project. Whether you're looking for technical support or just want to explore potential collaborations, we're here to help.
        </p>
        <button className="contact-button">Get in touch</button>
      </div>
      <div className="contact-image">
        <img src="/images/roundingearth.jpg" alt="Global Network" />
      </div>
    </div>
  );
};

export default ContactSection;
