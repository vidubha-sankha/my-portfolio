"use client";

import { useEffect, useState } from "react";

export default function BackgroundSystem() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      // Update global CSS variables for the mouse tracker
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    // Use passive listener for performance
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-background">
      {/* Base Grid Layer */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundSize: "60px 60px",
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 100%)"
        }}
      />

      {/* Mouse Following Glow */}
      <div 
        className="absolute inset-0 opacity-30 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(6, 182, 212, 0.1), transparent 40%)`
        }}
      />
      
      <div 
        className="absolute inset-0 opacity-20 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(37, 99, 235, 0.1), transparent 40%)`
        }}
      />

      {/* Very subtle ambient gradients to break the solid dark background */}
      <div className="absolute top-0 left-[20%] w-[50%] h-[50%] bg-accent/5 rounded-full blur-[150px] animate-[pulse_10s_ease-in-out_infinite]" />
      <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] bg-secondary/5 rounded-full blur-[150px] animate-[pulse_14s_ease-in-out_infinite]" />
    </div>
  );
}
