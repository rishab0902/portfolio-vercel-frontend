"use client";
import { useEffect } from "react";

export default function ScrollToTopOnMount() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
  }, []);
  return null;
} 