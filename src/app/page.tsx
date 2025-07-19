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
      <main className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 text-white flex flex-col items-center">
        <Parallax speed={-20}>
          <section className="w-full max-w-5xl px-4 py-12 flex flex-col items-center gap-8">
            <h1 className="text-5xl md:text-7xl font-extrabold text-center bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent drop-shadow-lg">
              Hi, I&apos;m Rishab
            </h1>
            <p className="text-xl md:text-2xl text-center max-w-2xl text-gray-300">
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
            <div className="mt-8 text-center text-lg text-gray-400">
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
