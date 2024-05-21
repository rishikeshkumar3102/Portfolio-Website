import React, { useState } from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { MdAddIcCall } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send form data to an email service)
    alert("Form submitted!");
  };

  return (
    <div
      className="contact-container"
      id="contact"
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      <h1>Contact Me</h1>
      <div className="contact-form-box">
        <p>Feel free to reach out!</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className="contact-icons-box">
        <div className="contact-icons">
          <div className="contact-icon">
            <MdOutlineEmail />
            <a href="mailto:rishikeshkumar3102@gmail.com">
              rishikeshkumar3102@gmail.com
            </a>
          </div>
          <div className="contact-icon">
            <CiLinkedin />
            <a href="https://www.linkedin.com/in/rishikesh1kumar/">
              rishikesh1kumar
            </a>
          </div>
          <div className="contact-icon">
            <FaGithub />
            <a href="https://github.com/rishikeshkumar3102">
              rishikeshkumar3102
            </a>
          </div>
          <div className="contact-icon">
            <FaInstagramSquare />
            <a href="https://www.instagram.com/rishikeshkumar3863">
              rishikeshkumar3863
            </a>
          </div>
          <div className="contact-icon">
            <MdAddIcCall />
            <a href="tel:+6203246505">6203246505</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
