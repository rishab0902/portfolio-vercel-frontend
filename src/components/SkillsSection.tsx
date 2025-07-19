import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  DiJava,
  DiPython,
  DiJavascript,
  DiHtml5,
  DiCss3,
  DiMysql,
  DiGit,
} from "react-icons/di";
import {
  SiCplusplus,
  SiSpringboot,
  SiReact,
  SiNextdotjs,
  SiRedis,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMui,
  SiTailwindcss,
  SiGithub,
  SiVscodium,
  SiFigma,
  SiJira,
  SiConfluence,
  SiDocker,
  SiAmazon,
  SiApachekafka,
} from "react-icons/si";

interface Skill {
  name: string;
  icon?: React.ComponentType<{ className?: string }>;
  proficiency: number; // 0-100
}

type SkillCategories = {
  [key: string]: Skill[];
};

const skillCategories: SkillCategories = {
  Languages: [
    { name: "Java", icon: DiJava, proficiency: 90 },
    { name: "C/C++", icon: SiCplusplus, proficiency: 85 },
    { name: "Python", icon: DiPython, proficiency: 80 },
    { name: "Javascript", icon: DiJavascript, proficiency: 85 },
    { name: "HTML", icon: DiHtml5, proficiency: 90 },
    { name: "CSS", icon: DiCss3, proficiency: 85 },
    { name: "MySQL", icon: DiMysql, proficiency: 80 },
  ],
  "Tech Stacks": [
    { name: "Spring Boot", icon: SiSpringboot, proficiency: 90 },
    { name: "React.js", icon: SiReact, proficiency: 85 },
    { name: "Next.js", icon: SiNextdotjs, proficiency: 80 },
    { name: "Kafka", icon: SiApachekafka, proficiency: 75 },
    { name: "Redis", icon: SiRedis, proficiency: 75 },
    { name: "NodeJS", icon: SiNodedotjs, proficiency: 80 },
    { name: "ExpressJS", icon: SiExpress, proficiency: 80 },
    { name: "MongoDB", icon: SiMongodb, proficiency: 75 },
    { name: "Material UI", icon: SiMui, proficiency: 80 },
    { name: "Tailwind CSS", icon: SiTailwindcss, proficiency: 85 },
  ],
  "Tools/Platforms": [
    { name: "Git", icon: DiGit, proficiency: 90 },
    { name: "Github", icon: SiGithub, proficiency: 90 },
    { name: "VS Code", icon: SiVscodium, proficiency: 85 },
    { name: "Figma", icon: SiFigma, proficiency: 75 },
    { name: "Jira", icon: SiJira, proficiency: 80 },
    { name: "Confluence", icon: SiConfluence, proficiency: 75 },
    { name: "Docker", icon: SiDocker, proficiency: 80 },
    { name: "AWS", icon: SiAmazon, proficiency: 75 },
  ],
  "Computer Science Skills": [
    { name: "Data Structures", proficiency: 90 },
    { name: "Algorithms", proficiency: 90 },
    { name: "Operating System", proficiency: 85 },
    { name: "DBMS", proficiency: 85 },
    { name: "OOPS", proficiency: 90 },
    { name: "System Design", proficiency: 85 },
    { name: "Design Patterns", proficiency: 80 },
    { name: "LLD", proficiency: 85 },
    { name: "HLD", proficiency: 85 },
    { name: "REST APIs", proficiency: 90 },
    { name: "CI/CD", proficiency: 80 },
    { name: "NLP", proficiency: 75 },
    { name: "GenAI", proficiency: 75 },
  ],
};

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section
      id="skills"
      className="w-full py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-x-hidden"
    >
      {/* Animated SVG or gradient background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="skills-gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
          <ellipse cx="720" cy="200" rx="900" ry="160" fill="url(#skills-gradient)" fillOpacity="0.10">
            <animate attributeName="rx" values="900;950;900" dur="8s" repeatCount="indefinite" />
            <animate attributeName="ry" values="160;180;160" dur="8s" repeatCount="indefinite" />
          </ellipse>
        </svg>
      </div>
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"
        >
          Technical Expertise
        </motion.h2>
        {/* Responsive horizontal scroll on mobile */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 overflow-x-auto md:overflow-visible snap-x md:snap-none pb-4 md:pb-0">
          {Object.entries(skillCategories).map(([category, skills], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-800/60 rounded-xl p-6 backdrop-blur-md border border-gray-700/50 shadow-xl min-w-[320px] md:min-w-0 snap-center transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl relative group"
              style={{ zIndex: 2 + idx }}
            >
              <h3 className="text-2xl font-bold text-cyan-300 mb-6 flex items-center gap-2">
                <span className="animate-float inline-block">{category}</span>
              </h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="relative"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      {skill.icon && (
                        <span className="w-5 h-5 text-cyan-400 animate-float-slow">
                          <skill.icon className="w-5 h-5" />
                        </span>
                      )}
                      <span className="text-gray-200 font-medium">
                        {skill.name}
                      </span>
                      {hoveredSkill === skill.name && (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="absolute right-0 text-cyan-400 font-medium"
                        >
                          {skill.proficiency}%
                        </motion.span>
                      )}
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-600"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
