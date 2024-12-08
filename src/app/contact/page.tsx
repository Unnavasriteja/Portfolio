"use client";

import { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("idle");

    const form = e.target as HTMLFormElement;

    // Debug: Check if environment variables are defined
    if (
      !process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    ) {
      console.error("Missing EmailJS environment variables.");
      setFormStatus("error");
      return;
    }

    try {
      // Send form data via EmailJS using environment variables
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      console.log("Email sent successfully:", result.text);
      setFormStatus("success");
      form.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      setFormStatus("error");
    }
  };

  return (
    <div className="container mx-auto px-6 py-20 mt-16 max-w-4xl">
      <br />
      <br />
      <h1 className="text-5xl font-bold mb-10 text-center text-white">Contact</h1>
      <form
        onSubmit={handleSubmit}
        className="rounded-lg p-10"
        style={{ background: "transparent" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
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
          </div>
          <div>
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
          </div>
          <div className="md:col-span-2">
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
          </div>
          <div className="md:col-span-2">
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
          </div>
          <div className="md:col-span-2">
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
          </div>
        </div>
        <button
          type="submit"
          className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Send
        </button>
      </form>
      {formStatus === "success" && (
        <p className="text-green-500 text-center mt-6">
          Your message has been sent successfully!
        </p>
      )}
      {formStatus === "error" && (
        <p className="text-red-500 text-center mt-6">
          There was an error sending your message. Please try again.
        </p>
      )}
    </div>
  );
};

export default ContactForm;
