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
          <svg className="w-full h-full" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="hero-gradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
            <ellipse cx="720" cy="300" rx="900" ry="320" fill="url(#hero-gradient)" fillOpacity="0.12">
              <animate attributeName="rx" values="900;950;900" dur="8s" repeatCount="indefinite" />
              <animate attributeName="ry" values="320;350;320" dur="8s" repeatCount="indefinite" />
            </ellipse>
          </svg>
        </div>
        <Parallax speed={-20}>
          <section id="hero" className="w-full max-w-5xl px-4 py-16 flex flex-col items-center gap-8 relative z-10">
            <ThreeHero />
            <h1 className="text-5xl xs:text-6xl md:text-7xl font-extrabold text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 bg-clip-text text-transparent drop-shadow-lg animate-gradient-move">
              Hi, I&apos;m Rishab
            </h1>
            <p className="text-xl xs:text-2xl md:text-3xl text-center max-w-2xl text-gray-200 opacity-0 animate-fade-in [animation-delay:300ms]">
              Full Stack Developer | Problem Solver | Competitive Programmer
            </p>
            <div className="mt-8 text-center text-lg text-gray-400 max-w-3xl">
              <p className="text-lg text-gray-300 mb-4 text-center max-w-2xl">
                I am a passionate Software Developer with hands-on experience in Java, React, and full-stack development. I enjoy solving challenging problems, working on scalable web applications, and participating in competitive programming and DSA.
              </p>
              <p className="text-lg text-gray-300 mb-4 text-center max-w-2xl">
                <strong>Opportunities I&apos;m seeking:</strong> SDE, Java Developer, Frontend (React), and Fullstack roles. I also aspire to learn and work in AI/ML.
              </p>
              <p className="text-lg text-gray-300 mb-6 text-center max-w-2xl">
                For a detailed look at my experience, skills, and projects, download my resume below.
              </p>
            </div>
            <div className="mt-8 flex flex-col xs:flex-row gap-4 justify-center items-center">
              <a href="#skills" className="px-7 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-lg hover:from-cyan-400 hover:to-blue-500 transition-colors text-lg animate-fade-in [animation-delay:1500ms]">See My Skills</a>
              <a href="/Kumar Rishab SDE.pdf" download target="_blank" rel="noopener noreferrer" className="px-7 py-3 rounded-xl bg-white/10 border border-cyan-400 text-cyan-300 font-bold shadow-lg hover:bg-cyan-400 hover:text-white transition-colors text-lg animate-fade-in [animation-delay:1800ms]">Download Resume</a>
            </div>
            <div className="mt-8 text-center text-lg text-gray-400 animate-fade-in [animation-delay:2100ms]">
              <span>Scroll down to see my skills, projects, and more!</span>
            </div>
          </section>
        </Parallax>
        <div className="w-full flex flex-col items-center">
          <Parallax speed={-10} className="reveal w-full">
            <SkillsSection />
          </Parallax>
          <Parallax speed={0} className="reveal w-full">
            <ProjectsSection />
          </Parallax>
          <Parallax speed={10} className="reveal w-full">
            <ResumeSection />
          </Parallax>
          <Parallax speed={20} className="reveal w-full">
            <ContactSection />
          </Parallax>
        </div>
      </main>
    </ParallaxProvider>
  );
}
