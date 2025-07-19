import React from "react";

export default function ResumeSection() {
  return (
    <section
      id="resume"
      className="w-full max-w-4xl mx-auto py-20 px-4 flex flex-col items-center relative overflow-x-hidden pt-16"
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
          <ellipse cx="720" cy="200" rx="900" ry="160" fill="url(#resume-gradient)" fillOpacity="0.10">
            <animate attributeName="rx" values="900;950;900" dur="8s" repeatCount="indefinite" />
            <animate attributeName="ry" values="160;180;160" dur="8s" repeatCount="indefinite" />
          </ellipse>
        </svg>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
        Resume
      </h2>
      <div className="bg-gray-800/60 border border-gray-700/40 shadow-xl backdrop-blur-md rounded-2xl p-8 flex flex-col items-center w-full max-w-xl animate-fade-in-up mt-8">
        <a
          href="/Kumar Rishab SDE.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl shadow-lg hover:from-cyan-400 hover:to-blue-500 hover:scale-105 transition-all duration-200 text-lg mb-6 animate-fade-in"
        >
          Download Resume (PDF)
        </a>
        <div className="w-full aspect-[4/5] rounded-lg shadow-lg bg-white overflow-hidden hidden sm:block animate-fade-in-up max-h-[60vh] object-contain">
          <iframe
            src="/Kumar Rishab SDE.pdf"
            title="Resume Preview"
            className="w-full h-full border-0"
          />
        </div>
        <p className="text-gray-400 text-xs mt-4 text-center">Preview is hidden on small screens for best experience. Download to view full resume.</p>
      </div>
    </section>
  );
}
