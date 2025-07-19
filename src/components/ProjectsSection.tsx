"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

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
      className="w-full max-w-5xl mx-auto py-16 px-4 flex flex-col items-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
        Projects
      </h2>
      {loading ? (
        <div className="text-gray-400">Loading projects...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-800 rounded-xl shadow-lg p-6 hover:scale-105 hover:bg-gray-700 transition-transform duration-200 border border-gray-700"
            >
              <h3 className="text-xl font-semibold mb-2 text-cyan-400">
                {repo.name}
              </h3>
              <p className="text-gray-300 mb-2 min-h-[48px]">
                {repo.description || "No description."}
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>⭐ {repo.stargazers_count}</span>
                <span>{repo.language}</span>
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
