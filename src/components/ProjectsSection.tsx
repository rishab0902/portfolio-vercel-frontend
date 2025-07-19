"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaGithub, FaStar, FaCode } from "react-icons/fa";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  language: string;
  fork: boolean;
}

export default function ProjectsSection() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://api.github.com/users/rishab0902/repos?sort=updated&per_page=12"
      )
      .then((res) => {
        setRepos(res.data.filter((repo: Repo) => !repo.fork));
        setLoading(false);
      });
  }, []);

  return (
    <section
      id="projects"
      className="w-full max-w-6xl mx-auto py-10 sm:py-16 md:py-20 px-2 sm:px-4 flex flex-col items-center relative overflow-x-hidden"
    >
      {/* Animated SVG or gradient background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="projects-gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
          <ellipse cx="720" cy="200" rx="900" ry="160" fill="url(#projects-gradient)" fillOpacity="0.10">
            <animate attributeName="rx" values="900;950;900" dur="8s" repeatCount="indefinite" />
            <animate attributeName="ry" values="160;180;160" dur="8s" repeatCount="indefinite" />
          </ellipse>
        </svg>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold mb-10 sm:mb-14 text-center bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
        Projects
      </h2>
      {loading ? (
        <div className="text-gray-400">Loading projects...</div>
      ) : (
        <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 w-full overflow-x-auto sm:overflow-visible snap-x sm:snap-none pb-2 sm:pb-0">
          {repos.map((repo, idx) => (
            <div
              key={repo.id}
              className="relative group rounded-2xl bg-gray-800/60 border border-gray-700/40 shadow-xl backdrop-blur-md p-4 sm:p-7 flex flex-col transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:bg-gray-700/70 w-full min-w-0 snap-center animate-fade-in-up box-border"
              style={{ minHeight: 180, animationDelay: `${idx * 120}ms` }}
            >
              {idx === 0 && (
                <span className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10 animate-bounce">Featured</span>
              )}
              <div className="flex items-center gap-3 mb-3">
                <FaGithub className="text-cyan-400 w-6 h-6" />
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-semibold text-cyan-300 hover:underline truncate"
                  title={repo.name}
                >
                  {repo.name}
                </a>
              </div>
              <p className="text-gray-200 mb-4 flex-1 min-h-[48px]">
                {repo.description || <span className="italic text-gray-400">No description.</span>}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1"><FaStar className="text-yellow-400" /> {repo.stargazers_count}</span>
                  {repo.language && (
                    <span className="flex items-center gap-1"><FaCode className="text-cyan-400" /> {repo.language}</span>
                  )}
                </div>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow hover:from-cyan-400 hover:to-blue-500 transition-colors text-sm"
                >
                  View on GitHub <FaGithub className="w-4 h-4" />
                </a>
              </div>
              {/* Card entry animation */}
              <div className="absolute inset-0 z-[-1] opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br from-cyan-400/30 to-blue-600/20 rounded-2xl pointer-events-none" />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
