import React, { useState } from "react";
import { Toast } from "react-bootstrap";
import emailjs from "emailjs-com";

function ContactForm() {
  let [isSubmitted, setIsSubmitted] = useState(false);
  let [emailData, setEmailData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleSubmit(event) {
    event.preventDefault();

    emailjs
      .send(
        "service_6fx3b34", // Replace with your EmailJS service ID
        "rishabh_0211", // Replace with your EmailJS template ID
        emailData,
        "OiJZO7GtPnLh2YL9b" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setIsSubmitted(true);
          clearInputs();
          setTimeout(() => setIsSubmitted(false), 2000);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  }

  function clearInputs() {
    setEmailData({ fullname: "", email: "", subject: "", message: "" });
  }

  function handleInputTextChange(event) {
    setEmailData({ ...emailData, [event.target.name]: event.target.value });
  }

  return (
    <div>
      <Toast
        show={isSubmitted}
        className="mb-3"
        bg="success"
        style={{ width: "50%", textAlign: "center", margin: "auto" }}>
        <Toast.Body>
          <strong>Thank you! Your message has been sent &#9989;</strong>
        </Toast.Body>
      </Toast>
      <form className="contact-form" method="post" onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="fullname" className="form-label">
            Full Name <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            className="form-control shadow-none custom-input-text"
            placeholder="Your Full Name"
            required
            value={emailData.fullname}
            onChange={handleInputTextChange}></input>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="email" className="form-label">
            Email <span className="text-danger">*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control shadow-none custom-input-text"
            placeholder="Your email address"
            required
            value={emailData.email}
            onChange={handleInputTextChange}></input>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="subject" className="form-label">
            Subject{" "}
            <small className="text-secondary">&#40; optional &#41;</small>
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            className="form-control shadow-none custom-input-text"
            placeholder="Write a subject"
            value={emailData.subject}
            onChange={handleInputTextChange}></input>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={5}
            className="form-control shadow-none custom-input-text"
            placeholder="Your message here ..."
            value={emailData.message}
            onChange={handleInputTextChange}></textarea>
        </div>
        <div className="form-group mt-4">
          <button
            type="submit"
            className="contact-btn border-2 btn rounded-pill"
            style={{ maxWidth: "20rem" }}>
            SEND MESSAGE
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
