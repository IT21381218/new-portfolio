import React, { useState } from "react";
import "../styles/contact.css";

function ContactForm() {
  const [isFromOrganization, setIsFromOrganization] = useState(false);

  const handleOrganizationToggle = (e) => {
    setIsFromOrganization(e.target.checked);
  };

  return (
    <section className="contact-form-container">
      {/* Form Section */}
      <div className="form-section">
        <h1>Contact Me</h1>
        <p>I'd love to hear from you. Fill out the form below and I'll get back to you soon!</p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" placeholder="Enter your name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group checkbox-group">
            <label htmlFor="organization-checkbox">
              I am contacting on behalf of an organization
            </label>
            <input
              type="checkbox"
              id="organization-checkbox"
              onChange={handleOrganizationToggle}
            />
          </div>

          {isFromOrganization && (
            <div className="form-group">
              <label htmlFor="organization">Organization Name</label>
              <input
                type="text"
                id="organization"
                placeholder="Enter organization name"
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              placeholder="Enter your message"
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>

      {/* Image Section */}
      <div className="image-section">
        <img
          src={isFromOrganization ? "/image1.jpg" : "/image2.jpg"}
          alt="Contact"
          className="dynamic-image"
        />
      </div>
    </section>
  );
}

export default ContactForm;
