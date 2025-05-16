"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const [isSubmitting, setIsSubmitting] = useState(false); // Prevents multiple clicks

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formStatus !== "idle" || isSubmitting) return; // Prevent multiple submissions
    console.log("🟢 Form submitted!");

    setIsSubmitting(true);
    setFormStatus("idle");

    const form = e.target as HTMLFormElement;

    try {
      const formData = new FormData(form);
      const userEmail = formData.get("email") as string;
      //const userName = formData.get("firstName") as string;
      //const userMessage = formData.get("message") as string;

      console.log("📩 Extracted user email:", userEmail);

      if (!userEmail) {
        throw new Error("⚠️ Email is missing from the form data.");
      }

      // 🔹 Send message to your inbox (Admin Email)
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_ADMIN_TEMPLATE_ID as string,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      );

      console.log("✅ Admin email sent successfully!");

      // 🔹 Send acknowledgment email to the user
      const acknowledgmentData = {
        user_name: userName,
        email: userEmail,
        message:
          "Thank you for reaching out! I have received your message and will get back to you soon.",
      };

      // await emailjs.send(
      //   process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
      //   process.env.NEXT_PUBLIC_ACK_TEMPLATE_ID as string,
      //   acknowledgmentData,
      //   process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      // );

      console.log("✅ Acknowledgment email sent successfully to:", userEmail);

      setFormStatus("success");
      form.reset();
    } catch (error) {
      console.error("❌ Error sending email:", error);
      setFormStatus("error");
    } finally {
      setIsSubmitting(false); // Enable form submission again
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="container mx-auto px-6 py-20 max-w-4xl"
      style={{ paddingTop: "100px" }}
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
      }}
    >
      <motion.h1
        className="text-5xl font-bold mb-10 text-center text-white"
        variants={fadeInVariants}
      >
        Contact Me
      </motion.h1>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="rounded-lg border border-gray-600 p-8 shadow-lg"
        style={{ background: "transparent" }}
        variants={fadeInVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div variants={fadeInVariants}>
            <label
              className="block text-sm font-semibold text-white mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              required
              className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your first name"
            />
          </motion.div>
          <motion.div variants={fadeInVariants}>
            <label
              className="block text-sm font-semibold text-white mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              required
              className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your last name"
            />
          </motion.div>
          <motion.div className="md:col-span-2" variants={fadeInVariants}>
            <label
              className="block text-sm font-semibold text-white mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="example@gmail.com"
            />
          </motion.div>
          <motion.div className="md:col-span-2" variants={fadeInVariants}>
            <label
              className="block text-sm font-semibold text-white mb-2"
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              required
              className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the subject"
            />
          </motion.div>
          <motion.div className="md:col-span-2" variants={fadeInVariants}>
            <label
              className="block text-sm font-semibold text-white mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              required
              className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message here..."
            ></textarea>
          </motion.div>
        </div>
        <motion.button
          type="submit"
          className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          variants={fadeInVariants}
          disabled={isSubmitting} // Prevent multiple submissions
        >
          {isSubmitting ? "Sending..." : "Send"}
        </motion.button>
      </motion.form>

      {/* Form Status */}
      {formStatus === "success" && (
        <motion.p
          className="text-green-500 text-center mt-6"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
        >
          Your message has been sent successfully!
        </motion.p>
      )}
      {formStatus === "error" && (
        <motion.p
          className="text-red-500 text-center mt-6"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
        >
          There was an error sending your message. Please try again.
        </motion.p>
      )}
    </motion.div>
  );
};

export default ContactForm;
