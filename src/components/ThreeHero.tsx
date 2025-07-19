"use client";
import React from "react";
import { FaRocket } from "react-icons/fa";

export default function ThreeHero() {
  return (
    <div className="flex flex-col items-center justify-center w-full py-8 animate-fade-in-up">
      <div className="mb-4 animate-bounce">
        <FaRocket className="w-16 h-16 text-cyan-400 drop-shadow-lg" />
      </div>
      <h2 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent mb-2">
        Let&apos;s Build Something Amazing!
      </h2>
      <p className="text-lg md:text-xl text-gray-300 text-center max-w-xl">
        Dive into my portfolio to see how I turn ideas into reality with code, creativity, and passion.
      </p>
    </div>
  );
}
