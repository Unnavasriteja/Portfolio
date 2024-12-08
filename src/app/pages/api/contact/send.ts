import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { firstName, lastName, email, subject, message } = req.body;

    // Validate input fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // Nodemailer transporter configuration
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your app-specific password
      },
    });

    try {
      // Send email to your email address
      const adminMail = await transporter.sendMail({
        from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
        to: "sri.teja.st@gmail.com", // Replace with your email
        subject: `New Contact Form Submission: ${subject}`,
        text: `
          You have a new contact form submission:
          Name: ${firstName} ${lastName}
          Email: ${email}
          Subject: ${subject}
          Message: ${message}
        `,
        html: `
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });

      console.log("Admin email sent:", adminMail.messageId);

      // Send confirmation email to the user
      const userMail = await transporter.sendMail({
        from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
        to: email, // User's email
        subject: "We received your message",
        text: `
          Hi ${firstName},

          Thank you for reaching out! We have received your message and will get back to you shortly.

          Regards,
          Sai Sri Teja Unnava
        `,
        html: `
          <h1>Thank you for reaching out!</h1>
          <p>Hi ${firstName},</p>
          <p>We have received your message and will get back to you shortly.</p>
          <p>Regards,</p>
          <p>Sai Sri Teja Unnava</p>
        `,
      });

      console.log("User email sent:", userMail.messageId);

      return res.status(200).json({ message: "Message sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      return res
        .status(500)
        .json({ error: "Failed to send email. Please try again." });
    }
  }

  return res.status(405).json({ error: "Method not allowed." });
}