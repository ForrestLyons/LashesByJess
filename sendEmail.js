const nodemailer = require('nodemailer');

const sendEmail = async (formData) => {
  // Create a transporter using your email service provider's settings
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'forrestjlyons@gmail.com',
      pass: 'grvn aokd liiv lyum',
    },
  });

  // Setup email data
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'forrestjlyons@gmail.com', // Replace with the actual recipient email address
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
