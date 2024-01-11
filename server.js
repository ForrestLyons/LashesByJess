const express = require('express');
const sendEmail = require('./sendEmail');

const app = express();
const cors = require('cors');
const port = 3001; // Choose a suitable port
app.use(cors());
app.use(express.json());



app.post('/api/send-email', async (req, res) => {
  const formData = req.body;

  try {
    // Call the function to send an email
    await sendEmail(formData);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
