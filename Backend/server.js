const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

// Middleware to parse JSON data in requests
app.use(bodyParser.json());

// Define a POST endpoint for form submission
app.post('/submit-form', async (req, res) => {
  try {
    // Access form data from req.body
    const formData = req.body;

    // Process the form data, send an email, or perform other actions here
    // For example, you can send an email using Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'YourEmailService', // e.g., "Gmail" for Gmail, or use your SMTP settings
      auth: {
        user: 'your@email.com',
        pass: 'your_password',
      },
    });

    // Email data
    const mailOptions = {
      from: 'your@email.com',
      to: 'recipient@email.com',
      subject: 'New Form Submission',
      text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Send a success response
    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the server on port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
