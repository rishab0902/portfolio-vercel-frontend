import React from "react";

const skillCategories = {
  Languages: [
    "Java",
    "C/C++",
    "Python",
    "Javascript",
    "HTML",
    "CSS",
    "MySQL",
    "SQL",
  ],
  "Tech Stacks": [
    "Spring Boot",
    "JPA",
    "Hibernate",
    "React.js",
    "Next.js",
    "JSP",
    "Microservices",
    "Kafka",
    "Redis",
    "NodeJS",
    "ExpressJS",
    "MongoDB",
    "Material UI",
    "Tailwind CSS",
  ],
  "Tools/Platforms": [
    "Git",
    "Github",
    "VS Code",
    "Figma",
    "Jira",
    "Confluence",
    "Docker",
    "AWS EC2",
    "AWS Parameter Store",
    "CloudWatch",
    "Maven",
  ],
  "Computer Science Skills": [
    "Data Structures",
    "Algorithms",
    "Operating System",
    "DBMS",
    "OOPS",
    "System Design",
    "Design Patterns",
    "LLD",
    "HLD",
    "REST APIs",
    "CI/CD",
    "Containerization",
    "NLP",
    "GenAI",
  ],
};

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="w-full max-w-4xl mx-auto py-16 px-4 flex flex-col items-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
        Skills
      </h2>
      <div className="w-full space-y-8">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category} className="space-y-4">
            <h3 className="text-xl font-semibold text-cyan-300 mb-4">
              {category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gray-800 text-cyan-300 rounded-full font-semibold shadow-md border border-cyan-700 hover:bg-cyan-700 hover:text-white transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
