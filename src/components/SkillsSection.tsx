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

const categoryNames = Object.keys(skillCategories);

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState(categoryNames[0]);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section
      id="skills"
      className="w-full py-16 sm:py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-x-hidden"
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
          <ellipse cx="720" cy="200" rx="900" ry="160" fill="url(#skills-gradient)" fillOpacity="0.10" />
        </svg>
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-10 sm:mb-16 text-center bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"
      >
        Technical Expertise
      </motion.h2>
      {/* Tabs for desktop, horizontal scroll for mobile */}
      <div className="flex flex-col sm:flex-row sm:justify-center gap-2 sm:gap-4 mb-8 px-2 overflow-x-auto scrollbar-hide">
        {categoryNames.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 border-2 border-transparent bg-white/10 backdrop-blur hover:bg-cyan-400/20 hover:text-cyan-300 text-base sm:text-lg ${activeTab === cat ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-cyan-400 shadow-lg' : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>
      {/* Animated skill cards */}
      <div className="max-w-6xl mx-auto px-2 sm:px-4 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {skillCategories[activeTab].map((skill, idx) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05, duration: 0.5 }}
            className="bg-gray-800/60 rounded-2xl p-6 flex flex-col gap-2 shadow-xl border border-gray-700/40 backdrop-blur-md transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl hover:bg-gray-700/70 group relative"
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div className="flex items-center gap-3 mb-2">
              {skill.icon && (
                <span className="w-7 h-7 text-cyan-400 animate-float-slow">
                  <skill.icon className="w-7 h-7" />
                </span>
              )}
              <span className="text-lg font-semibold text-gray-100">
                {skill.name}
              </span>
              {hoveredSkill === skill.name && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute right-6 text-cyan-400 font-medium"
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
    </section>
  );
}
