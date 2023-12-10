

import React, { useState } from 'react';// Import your CSS file for styling

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'hello',
    message: '',
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailure, setIsFailure] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Implement your form submission logic here
    // You can use the formData to send an email or perform any other action

    // For example:
    console.log('Form submitted:', formData);

    // Simulate success
    setIsSuccess(true);
    setIsFailure(false);
  };

  return (
    <div id="contact-form">
      <div>
        <h1>Nice to Meet You!</h1>
        <h4>Have a question or just want to get in touch? Let's chat.</h4>
      </div>
      {isFailure && <p id="failure">Oopsie...message not sent.</p>}
      {isSuccess && <p id="success">Your message was sent successfully. Thank you!</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">
            <span className="required">Name: *</span>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              placeholder="Your Name"
              required
              tabIndex="1"
              autoFocus
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            <span className="required">Email: *</span>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              placeholder="Your Email"
              tabIndex="2"
              required
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="subject">
            <span>Subject: </span>
            <select
              id="subject"
              name="subject"
              tabIndex="4"
              value={formData.subject}
              onChange={handleChange}
            >
              <option value="hello">Product Price Question</option>
              <option value="quote">Where are my dragons?!</option>
              <option value="general">- Valar Morghulis -</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="message">
            <span className="required">Message: *</span>
            <textarea
              id="message"
              name="message"
              placeholder="Please write your message here."
              tabIndex="5"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </label>
        </div>
        <div>
          <button name="submit" type="submit" id="submit">
            SEND
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
