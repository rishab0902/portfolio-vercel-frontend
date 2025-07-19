"use client";
import React, { Suspense, Component, ReactNode } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Html, useGLTF } from "@react-three/drei";

function CoderModel() {
  // Replacing the GLTF model with a spinning torus geometry
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[2, 0.6, 16, 100]} />
      <meshStandardMaterial color="#06b6d4" metalness={0.7} roughness={0.2} />
    </mesh>
  );
}

class ModelErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch() {}
  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center h-full w-full">
          <svg
            width="96"
            height="96"
            fill="none"
            viewBox="0 0 24 24"
            className="mb-4 text-cyan-400"
          >
            <path
              fill="currentColor"
              d="M7.5 8.5a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1Zm1 3a1 1 0 0 0 0 2h7a1 1 0 1 0 0-2h-7Zm-1 5.25c0-.414.336-.75.75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75ZM12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10Zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z"
            />
          </svg>
          <span className="text-cyan-300 text-xl font-semibold">
            Welcome, Coder!
          </span>
          <span className="text-gray-400 mt-2 text-center">
            3D model not found. Enjoy the modern UI and explore my work below!
          </span>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function ThreeHero() {
  return null;
}
// If you want a 3D model, place globe.glb in /public.
