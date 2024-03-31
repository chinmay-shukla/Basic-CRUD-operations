import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

// POST route to send email
router.post('/send-email', async (req, res) => {
  try {
    const { selectedRowsData,from_mailid } = req.body;
    const transporter = nodemailer.createTransport({
      // Configure SMTP transporter, replace with your email service provider
      service: 'gmail',
      auth: {
        user: 'your_email@gmail.com',
        pass: 'your_password'
      }
    });

    // Compose email message
    const mailOptions = {
      from: from_mailid ,
      to: 'info@redpositive.in',
      subject: 'Selected Row Data',
      text: JSON.stringify(selectedRowsData)
    };

    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
});

export default router;
