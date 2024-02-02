const nodemailer = require('nodemailer');

const sendEmail = async (formData) => {
  // Create a transporter using your email service provider's settings
  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com", // Corrected the typo here
    port: 587,
    secure: false, // use SSL, alternative is port 587 with `secure: false`
    auth: {
        user:"forrestjlyons@gmail.com", // Make sure these environment variables are set
        pass: "Ssskeet007@",
    },
    debug: true, // Show debug output
    logger: true, // Log information in console
  });

  // Setup email data
  const mailOptions = {
    from: "forrestjlyons@gmail.com", // Use the email from your environment variable
    to: formData.email,
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
