"use client";
import ContactSection from "../components/ContactSection";
import ThreeHero from "../components/ThreeHero";
import ResumeSection from "../components/ResumeSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import { useEffect } from "react";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

export default function Home() {
  useEffect(() => {
    const revealSections = document.querySelectorAll(".reveal");
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.15 }
    );
    revealSections.forEach((section) => {
      section.classList.add(
        "opacity-0",
        "translate-y-8",
        "transition-all",
        "duration-700"
      );
      observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <ParallaxProvider>
      <main className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 text-white flex flex-col items-center relative overflow-x-hidden">
        {/* Animated SVG or gradient background */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <svg className="w-full h-full animate-pulse-slow" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="hero-bg" cx="50%" cy="50%" r="80%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.10" />
              </radialGradient>
            </defs>
            <ellipse cx="720" cy="400" rx="900" ry="320" fill="url(#hero-bg)" />
            <circle cx="300" cy="200" r="120" fill="#06b6d4" fillOpacity="0.08">
              <animate attributeName="cy" values="200;250;200" dur="8s" repeatCount="indefinite" />
            </circle>
            <circle cx="1200" cy="600" r="160" fill="#3b82f6" fillOpacity="0.08">
              <animate attributeName="cy" values="600;650;600" dur="8s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>
        <section id="hero" className="w-full min-h-[90vh] flex flex-col justify-center items-center gap-8 relative z-10 scroll-mt-[120px] px-4 pt-24 pb-12 text-center">
          <ThreeHero />
          <h1 className="text-5xl xs:text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 bg-clip-text text-transparent drop-shadow-lg animate-gradient-move mb-4">
            Hi, I&apos;m Rishab
          </h1>
          <p className="text-2xl md:text-3xl text-gray-200 font-medium animate-fade-in mb-6">
            Full Stack Developer | Problem Solver | Competitive Programmer
          </p>
          <div className="max-w-2xl mx-auto text-lg text-gray-300 mb-8 animate-fade-in">
            <p className="mb-3">
              I am a passionate Software Developer with hands-on experience in Java, React, and full-stack development. I enjoy solving challenging problems, working on scalable web applications, and participating in competitive programming and DSA.
            </p>
            <p className="mb-3">
              <strong>Opportunities I&apos;m seeking:</strong> SDE, Java Developer, Frontend (React), and Fullstack roles. I also aspire to learn and work in AI/ML.
            </p>
            <p>
              For a detailed look at my experience, skills, and projects, download my resume below.
            </p>
          </div>
          <div className="flex flex-col xs:flex-row gap-4 justify-center items-center animate-fade-in">
            <a href="#skills" className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-lg hover:from-cyan-400 hover:to-blue-500 transition-colors text-lg">See My Skills</a>
            <a href="/Kumar Rishab SDE.pdf" download target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-xl bg-white/10 border border-cyan-400 text-cyan-300 font-bold shadow-lg hover:bg-cyan-400 hover:text-white transition-colors text-lg">Download Resume</a>
          </div>
          <div className="mt-8 text-lg text-gray-400 animate-fade-in">
            <span>Scroll down to see my skills, projects, and more!</span>
          </div>
        </section>
        <section className="w-full scroll-mt-[120px]"><SkillsSection /></section>
        <section className="w-full scroll-mt-[120px]"><ProjectsSection /></section>
        <section className="w-full scroll-mt-[120px]"><ResumeSection /></section>
        <section className="w-full scroll-mt-[120px]"><ContactSection /></section>
      </main>
    </ParallaxProvider>
  );
}
