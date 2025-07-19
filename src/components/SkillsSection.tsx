import React from "react";

const skills = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "Three.js",
  "React Three Fiber",
  "Tailwind CSS",
  "MongoDB",
  "PostgreSQL",
  "REST APIs",
  "Git",
  "Problem Solving",
  "Data Structures",
  "Algorithms",
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="w-full max-w-4xl mx-auto py-16 px-4 flex flex-col items-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
        Skills
      </h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-gray-800 text-cyan-300 rounded-full font-semibold shadow-md border border-cyan-700 hover:bg-cyan-700 hover:text-white transition-colors duration-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
