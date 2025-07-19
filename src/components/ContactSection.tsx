"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");
    const form = e.currentTarget;
    try {
      await emailjs.sendForm(
        "service_xxxxxxx", // TODO: Replace with your EmailJS service ID
        "template_xxxxxxx", // TODO: Replace with your EmailJS template ID
        form,
        "user_xxxxxxxxxxxxxxxxx" // TODO: Replace with your EmailJS public key
      );
      setStatus("Message sent! I'll get back to you soon.");
      form.reset();
    } catch (err) {
      setStatus("Failed to send. Please try again later.");
    }
  };

  return (
    <section
      id="contact"
      className="w-full max-w-2xl mx-auto py-16 px-4 flex flex-col items-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
        Contact
      </h2>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-4 bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-cyan-500"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-cyan-500"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows={5}
          className="px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-cyan-500"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200"
        >
          Send Message
        </button>
        {status && (
          <div className="text-center text-cyan-400 mt-2">{status}</div>
        )}
      </form>
      <p className="text-gray-400 text-sm mt-4 text-center">
        This form uses{" "}
        <a
          href="https://www.emailjs.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-cyan-400"
        >
          EmailJS
        </a>
        .<br />
        Configure your EmailJS service and template IDs in the code.
      </p>
    </section>
  );
}
