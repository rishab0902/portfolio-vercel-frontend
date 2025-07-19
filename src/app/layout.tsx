"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React, { useState, useEffect } from "react";
import ScrollToTopOnMount from "../components/ScrollToTopOnMount";
import ForceTopOnReload from "../components/ForceTopOnReload";
import { FaUserCircle } from "react-icons/fa";

const NAVBAR_HEIGHT = 120; // px

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#hero");

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + NAVBAR_HEIGHT + 10;
      for (const link of navLinks) {
        const section = document.querySelector(link.href);
        if (section) {
          const top = (section as HTMLElement).offsetTop;
          const height = (section as HTMLElement).offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActive(link.href);
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[95vw] max-w-3xl rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl flex items-center justify-between px-6 py-3 transition-all">
      <div className="flex items-center gap-3">
        <FaUserCircle className="w-8 h-8 text-cyan-400 drop-shadow" />
        <a href="#hero" className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent tracking-tight">Rishab</a>
      </div>
      <button className="md:hidden flex items-center" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
        <span className="w-7 h-7 flex flex-col justify-between">
          <span className={`block h-1 rounded bg-cyan-400 transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block h-1 rounded bg-cyan-400 transition-all duration-300 ${open ? 'opacity-0' : ''}`}></span>
          <span className={`block h-1 rounded bg-cyan-400 transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </span>
      </button>
      {/* Desktop nav */}
      <ul className="hidden md:flex gap-6 font-semibold text-gray-100 text-base">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={`relative px-2 py-1 transition-colors duration-200 ${active === link.href ? 'text-cyan-400' : 'hover:text-cyan-300'}`}
            >
              {link.label}
              {active === link.href && (
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full animate-pulse" />
              )}
            </a>
          </li>
        ))}
      </ul>
      {/* Mobile nav */}
      <div className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}></div>
      <ul className={`fixed top-0 left-0 w-full z-50 bg-gray-900/95 rounded-b-2xl shadow-2xl flex flex-col items-center gap-6 pt-24 pb-8 px-6 transition-transform duration-300 md:hidden ${open ? 'translate-y-0' : '-translate-y-full'}`}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={`text-lg font-semibold transition-colors duration-200 ${active === link.href ? 'text-cyan-400' : 'hover:text-cyan-300'}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
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
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    function handleAnchorClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]');
      if (anchor) {
        const id = anchor.getAttribute('href')!.slice(1);
        const el = document.getElementById(id) || document.querySelector(anchor.getAttribute('href')!);
        if (el) {
          e.preventDefault();
          const y = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    }
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-gray-950 to-gray-900`}>
        <div id="top"></div>
        <ForceTopOnReload />
        <ScrollToTopOnMount />
        <Navbar />
        <div className="pt-24 md:pt-20">{children}</div>
      </body>
    </html>
  );
}
