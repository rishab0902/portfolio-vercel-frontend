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
      className="w-full max-w-6xl mx-auto py-16 sm:py-20 px-2 sm:px-4 flex flex-col items-center relative overflow-x-hidden"
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
          <ellipse cx="720" cy="200" rx="900" ry="160" fill="url(#projects-gradient)" fillOpacity="0.10" />
          <circle cx="300" cy="120" r="80" fill="#06b6d4" fillOpacity="0.07">
            <animate attributeName="cy" values="120;160;120" dur="8s" repeatCount="indefinite" />
          </circle>
          <circle cx="1200" cy="320" r="100" fill="#3b82f6" fillOpacity="0.07">
            <animate attributeName="cy" values="320;360;320" dur="8s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold mb-10 sm:mb-14 text-center bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
        Projects
      </h2>
      {loading ? (
        <div className="text-gray-400">Loading projects...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {repos.map((repo, idx) => (
            <div
              key={repo.id}
              className="relative group rounded-2xl bg-gray-800/60 border border-gray-700/40 shadow-xl backdrop-blur-md p-6 flex flex-col transition-all duration-300 hover:scale-[1.04] hover:shadow-2xl hover:bg-gray-700/70 w-full min-w-0 box-border overflow-hidden animate-fade-in-up"
              style={{ minHeight: 200, animationDelay: `${idx * 120}ms` }}
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
              <div className="flex-1 mb-3">
                <p className="text-gray-200 min-h-[48px]">
                  {repo.description || <span className="italic text-gray-400">No description.</span>}
                </p>
              </div>
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
              {/* Hover overlay */}
              <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-cyan-400/20 to-blue-600/10 pointer-events-none" />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
