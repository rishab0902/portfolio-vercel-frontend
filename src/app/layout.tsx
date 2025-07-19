"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React, { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function Navbar() {
  const [open, setOpen] = useState(false);
  const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#resume", label: "Resume" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <nav className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[95vw] max-w-3xl rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg flex items-center justify-between px-6 py-3 transition-all">
      <a href="#hero" className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Rishab</a>
      <button className="md:hidden flex items-center" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
        <span className="w-7 h-7 flex flex-col justify-between">
          <span className={`block h-1 rounded bg-cyan-400 transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block h-1 rounded bg-cyan-400 transition-all duration-300 ${open ? 'opacity-0' : ''}`}></span>
          <span className={`block h-1 rounded bg-cyan-400 transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </span>
      </button>
      <ul className={`md:flex gap-6 font-medium text-gray-100 text-base transition-all duration-300 ${open ? 'absolute top-16 left-0 w-full bg-gray-900/95 rounded-b-2xl py-4 flex flex-col items-center' : 'hidden md:flex static bg-transparent py-0'}`}>
        {navLinks.map((link) => (
          <li key={link.href} className="hover:text-cyan-400 transition-colors">
            <a href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-gray-950 to-gray-900`}>
        <Navbar />
        <div className="pt-24 md:pt-20">{children}</div>
      </body>
    </html>
  );
}
