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
      className="w-full max-w-6xl mx-auto py-20 px-4 flex flex-col items-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-14 text-center bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
        Projects
      </h2>
      {loading ? (
        <div className="text-gray-400">Loading projects...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
          {repos.map((repo, idx) => (
            <div
              key={repo.id}
              className="relative group rounded-2xl bg-gray-800/60 border border-gray-700/40 shadow-xl backdrop-blur-md p-7 flex flex-col transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:bg-gray-700/70"
              style={{ minHeight: 220 }}
            >
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
