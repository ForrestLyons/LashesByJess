const nodemailer = require('nodemailer');

const sendEmail = async (formData) => {
  // Create a transporter using your email service provider's settings
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
    },
});



  // Setup email data
  const mailOptions = {
    from: 'jlcaty3@gmail.com',
    to: formData.email, // Replace with the actual recipient email address
    subject: formData.subject,
    text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
  };

  // Send email
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

module.exports = sendEmail;
