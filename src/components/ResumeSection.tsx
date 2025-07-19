import React, { useState } from "react";
import { FaDownload, FaExpand } from "react-icons/fa";

export default function ResumeSection() {
  const [showModal, setShowModal] = useState(false);
  return (
    <section
      id="resume"
      className="w-full max-w-4xl mx-auto py-16 sm:py-20 px-4 flex flex-col items-center relative overflow-x-hidden"
    >
      {/* Animated SVG or gradient background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="resume-gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
          <ellipse cx="720" cy="200" rx="900" ry="160" fill="url(#resume-gradient)" fillOpacity="0.10" />
        </svg>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
        Resume
      </h2>
      <div className="bg-gray-800/60 border border-gray-700/40 shadow-2xl backdrop-blur-md rounded-2xl p-8 flex flex-col items-center w-full max-w-xl animate-fade-in-up mt-8">
        <a
          href="/Kumar Rishab SDE.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl shadow-lg hover:from-cyan-400 hover:to-blue-500 hover:scale-105 transition-all duration-200 text-lg mb-6 animate-fade-in"
        >
          <FaDownload className="w-5 h-5" /> Download Resume (PDF)
        </a>
        <button
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-cyan-400 text-cyan-300 font-semibold rounded-lg shadow hover:bg-cyan-400 hover:text-white transition-colors text-base mb-4 animate-fade-in"
          onClick={() => setShowModal(true)}
        >
          <FaExpand className="w-4 h-4" /> View Fullscreen
        </button>
        <div className="w-full aspect-[4/5] rounded-lg shadow-lg bg-white overflow-hidden hidden sm:block animate-fade-in-up max-h-[60vh] object-contain">
          <iframe
            src="/Kumar Rishab SDE.pdf"
            title="Resume Preview"
            className="w-full h-full border-0"
          />
        </div>
        <p className="text-gray-400 text-xs mt-4 text-center">Preview is hidden on small screens for best experience. Download to view full resume.</p>
      </div>
      {/* Modal for fullscreen PDF preview */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="relative w-[90vw] max-w-3xl h-[90vh] bg-gray-900 rounded-2xl shadow-2xl flex flex-col">
            <button
              className="absolute top-4 right-4 z-10 px-3 py-1.5 bg-cyan-500 text-white rounded-lg shadow hover:bg-cyan-400 transition-colors"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
            <iframe
              src="/Kumar Rishab SDE.pdf"
              title="Resume Fullscreen"
              className="w-full h-full rounded-b-2xl border-0"
            />
          </div>
        </div>
      )}
    </section>
  );
}
