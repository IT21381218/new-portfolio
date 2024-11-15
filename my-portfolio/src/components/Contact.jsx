import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import the EmailJS library
import "../styles/contact.css";

function ContactForm() {
  const [isFromOrganization, setIsFromOrganization] = useState(false);
  const [sending, setSending] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [organization, setOrganization] = useState(""); // Track the organization input

  const handleOrganizationToggle = (e) => {
    setIsFromOrganization(e.target.checked);
  };

  const handleOrganizationChange = (e) => {
    setOrganization(e.target.value); // Update organization state
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submission

    // Check if organization name is required but not filled
    if (isFromOrganization && organization.trim() === "") {
      setResponseMessage("Please enter the organization name.");
      return; // Prevent form submission if organization is empty
    }

    setSending(true); // Set loading state
    setResponseMessage(""); // Clear any previous response message

    emailjs
      .sendForm(
        'service_rvu2w8x',       // Your EmailJS service ID
        'template_28awftj',      // Your EmailJS template ID
        e.target,                // The form element
        'xJh1MF3UPME4vYCKx'      // Your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text); // Log success response
          setResponseMessage("Message sent successfully!");
          setSending(false);        // Reset loading state
        },
        (error) => {
          console.log(error.text);  // Log error response
          setResponseMessage("There was an error sending the message.");
          setSending(false);        // Reset loading state
        }
      );
  };

  return (
    <section className="contact-form-container">
      {/* Form Section */}
      <div className="form-section">
        <h1>Contact Me</h1>
        <p>I'd love to hear from you. Fill out the form below and I'll get back to you soon!</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group checkbox-group">
            <label htmlFor="organization-checkbox">
              I am contacting on behalf of an organization
            </label>
            <input
              type="checkbox"
              id="organization-checkbox"
              name="organizationCheckbox"
              onChange={handleOrganizationToggle}
            />
          </div>

          {isFromOrganization && (
            <div className="form-group">
              <label htmlFor="organization">Organization Name</label>
              <input
                type="text"
                id="organization"
                name="organization" // This name must match the template variable
                placeholder="Enter organization name"
                value={organization} // Bind value to the state
                onChange={handleOrganizationChange} // Update state on input change
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message" // This name must match the template variable
              placeholder="Enter your message"
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-button" disabled={sending}>
            {sending ? "Sending..." : "Send Message"}
          </button>
        </form>

        {responseMessage && <p className="response-message">{responseMessage}</p>}
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
