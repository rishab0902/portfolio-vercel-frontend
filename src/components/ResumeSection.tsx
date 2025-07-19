import React from "react";

export default function ResumeSection() {
  return (
    <section
      id="resume"
      className="w-full max-w-4xl mx-auto py-16 px-4 flex flex-col items-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
        Resume
      </h2>
      <a
        href="/Kumar Rishab SDE.pdf"
        download
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200"
      >
        Download Resume (PDF)
      </a>
      <iframe
        src="/Kumar Rishab SDE.pdf"
        title="Resume Preview"
        className="w-full h-[600px] mt-8 rounded-lg shadow-lg bg-white"
      />
    </section>
  );
}
