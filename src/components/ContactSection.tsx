"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaUser, FaCommentDots, FaCheckCircle, FaTimesCircle, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

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
      className="w-full max-w-2xl mx-auto py-16 sm:py-20 px-4 flex flex-col items-center relative overflow-x-hidden"
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
          <ellipse cx="720" cy="200" rx="900" ry="160" fill="url(#contact-gradient)" fillOpacity="0.10" />
        </svg>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
        Contact
      </h2>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-6 bg-gray-800/60 p-8 rounded-2xl shadow-2xl border border-gray-700/40 backdrop-blur-md relative animate-fade-in-up"
      >
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full p-3 shadow-lg animate-float">
          <FaEnvelope className="w-8 h-8 text-white" />
        </div>
        <div className="flex flex-col gap-4 mt-6">
          <div className="relative">
            <input
              type="text"
              name="user_name"
              placeholder=" "
              required
              className="peer pl-10 pr-4 py-3 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-cyan-500 w-full placeholder-transparent"
            />
            <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-400" />
            <label className="absolute left-10 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none transition-all duration-200 peer-focus:top-0 peer-focus:-translate-y-full peer-focus:text-cyan-400 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-gray-400 bg-gray-900 px-1">
              Your Name
            </label>
          </div>
          <div className="relative">
            <input
              type="email"
              name="user_email"
              placeholder=" "
              required
              className="peer pl-10 pr-4 py-3 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-cyan-500 w-full placeholder-transparent"
            />
            <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-400" />
            <label className="absolute left-10 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none transition-all duration-200 peer-focus:top-0 peer-focus:-translate-y-full peer-focus:text-cyan-400 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-gray-400 bg-gray-900 px-1">
              Your Email
            </label>
          </div>
          <div className="relative">
            <textarea
              name="message"
              placeholder=" "
              required
              rows={5}
              className="peer pl-10 pr-4 py-3 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-cyan-500 w-full placeholder-transparent resize-none"
            />
            <FaCommentDots className="absolute left-3 top-4 text-cyan-400" />
            <label className="absolute left-10 top-4 text-gray-400 pointer-events-none transition-all duration-200 peer-focus:top-0 peer-focus:-translate-y-5 peer-focus:text-cyan-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 bg-gray-900 px-1">
              Your Message
            </label>
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
      <div className="flex gap-6 mt-8 animate-fade-in">
        <a href="https://github.com/rishab0902" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 text-2xl transition-colors"><FaGithub /></a>
        <a href="https://linkedin.com/in/rishab0902" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 text-2xl transition-colors"><FaLinkedin /></a>
        <a href="https://twitter.com/rishab0902" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 text-2xl transition-colors"><FaTwitter /></a>
      </div>
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
