"use client";
import { useEffect } from "react";

export default function ForceTopOnReload() {
  useEffect(() => {
    if (!window.location.hash || window.location.hash === "#") {
      window.location.hash = "#top";
      window.location.reload();
    }
  }, []);
  return null;
} 