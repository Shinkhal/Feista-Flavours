import nodemailer from 'nodemailer';


const sendEmail = async (toEmail, subject, text) => {
  // SMTP configuration using Brevo's SMTP server
  const transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS 
    },
    debug: true 
  });

  // Email message options
  const mailOptions = {
    from: process.env.EMAIL_USER, // Sender email address
    to: toEmail, // Recipient email address
    subject: subject,
    text: text // Plain text body of the email
  };

  try {
    // Send email using the transporter
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully!', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error.message };
  }
};

export {sendEmail};
