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
      {/* Base Grid Layer - 28x28 mobile, 40x40 desktop */}
      <div 
        className="absolute inset-0 bg-[size:28px_28px] md:bg-[size:40px_40px]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(220, 230, 240, 0.55) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(220, 230, 240, 0.55) 1px, transparent 1px)
          `
        }}
      />

      {/* Mouse Following Glow - Cyan */}
      <div 
        className="absolute inset-0 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(56, 189, 248, 0.08), transparent 40%)`
        }}
      />
      
      {/* Mouse Following Glow - Purple */}
      <div 
        className="absolute inset-0 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(109, 74, 255, 0.05), transparent 40%)`
        }}
      />

      {/* Very subtle ambient gradients to break the solid background */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#38BDF8]/5 rounded-full blur-[150px] animate-[pulse_10s_ease-in-out_infinite]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#6D4AFF]/5 rounded-full blur-[150px] animate-[pulse_14s_ease-in-out_infinite]" />
    </div>
  );
}
