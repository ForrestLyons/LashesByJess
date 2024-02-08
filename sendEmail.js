const nodemailer = require('nodemailer');

const sendEmail = async (formData) => {
  // Create a transporter using your email service provider's settings
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.REACT_APP_SMTP_USER, // Ensure these are set in your .env
      pass: process.env.REACT_APP_SMTP_PASSWORD, // App-Specific Password for Gmail
    }
  });

  // Setup email data
  const mailOptions = {
    from: process.env.REACT_APP_SMTP_USER, // Match this with the SMTP_USER
    to: formData.email,
    subject: formData.subject,
    text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
  };

  // Attempt to send the email
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
  } catch (error) {
    console.error('Error sending email:', error);
    throw error; // Consider handling this more gracefully
  }
};

module.exports = sendEmail;
