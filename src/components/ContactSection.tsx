"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaUser, FaCommentDots, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export default function ContactSection() {
  const [status, setStatus] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");
    setSuccess(null);
    const form = e.currentTarget;
    try {
      await emailjs.sendForm(
        "service_xxxxxxx", // TODO: Replace with your EmailJS service ID
        "template_xxxxxxx", // TODO: Replace with your EmailJS template ID
        form,
        "user_xxxxxxxxxxxxxxxxx" // TODO: Replace with your EmailJS public key
      );
      setStatus("Message sent! I'll get back to you soon.");
      setSuccess(true);
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("Failed to send. Please try again later.");
      setSuccess(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full max-w-2xl mx-auto py-20 px-4 flex flex-col items-center relative overflow-x-hidden"
    >
      {/* Animated SVG or gradient background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="contact-gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
          <ellipse cx="720" cy="200" rx="900" ry="160" fill="url(#contact-gradient)" fillOpacity="0.10">
            <animate attributeName="rx" values="900;950;900" dur="8s" repeatCount="indefinite" />
            <animate attributeName="ry" values="160;180;160" dur="8s" repeatCount="indefinite" />
          </ellipse>
        </svg>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
        Contact
      </h2>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-4 bg-gray-800/60 p-8 rounded-2xl shadow-xl border border-gray-700/40 backdrop-blur-md relative animate-fade-in-up"
      >
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full p-3 shadow-lg animate-float">
          <FaEnvelope className="w-8 h-8 text-white" />
        </div>
        <div className="flex flex-col gap-4 mt-6">
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-400" />
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="pl-10 pr-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-cyan-500 w-full"
            />
          </div>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-400" />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="pl-10 pr-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-cyan-500 w-full"
            />
          </div>
          <div className="relative">
            <FaCommentDots className="absolute left-3 top-3 text-cyan-400" />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={5}
              className="pl-10 pr-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-cyan-500 w-full"
            />
          </div>
        </div>
        <button
          type="submit"
          className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold rounded-lg shadow-lg transition-all duration-200 flex items-center justify-center gap-2 text-lg mt-2 animate-fade-in"
        >
          Send Message
        </button>
        {status && (
          <div className={`text-center mt-2 flex items-center justify-center gap-2 text-lg animate-fade-in ${success === true ? 'text-green-400' : success === false ? 'text-red-400' : 'text-cyan-400'}`}>
            {success === true && <FaCheckCircle className="w-5 h-5" />}
            {success === false && <FaTimesCircle className="w-5 h-5" />}
            <span>{status}</span>
          </div>
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
