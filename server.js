const express = require('express');
const sendEmail = require('./sendEmail');

const app = express();
const cors = require('cors');
const port = process.env.PORT || 3001;

const allowedOrigins = ['https://lashesbyjess.net', 'http://localhost:3000'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));


app.use(express.json());



app.post('/api/send-email', async (req, res) => {
  const formData = req.body;

  try {

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
