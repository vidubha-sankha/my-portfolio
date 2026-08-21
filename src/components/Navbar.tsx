"use client";

import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certification", href: "#certification" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-border/50 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="#home"
              className="text-xl font-bold tracking-wider text-foreground hover:text-accent transition-colors"
            >
              VIDUBHA SANKHA
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="flex items-center space-x-4 border-l border-border pl-6">
              <Link href="https://github.com/vidubha-sankha" target="_blank" className="text-foreground/80 hover:text-accent transition-colors">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="LINKEDIN_URL_HERE" target="_blank" className="text-foreground/80 hover:text-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <a
                href="CV_FILE_HERE"
                download
                className="flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-all shadow-md hover:shadow-lg text-sm font-medium"
              >
                <Download className="w-4 h-4 mr-2" />
                CV
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-accent hover:bg-surface rounded-md"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4 px-3 py-4 mt-4 border-t border-border">
              <Link href="https://github.com/vidubha-sankha" target="_blank" className="text-foreground/80 hover:text-accent">
                <Github className="w-6 h-6" />
              </Link>
              <Link href="LINKEDIN_URL_HERE" target="_blank" className="text-foreground/80 hover:text-accent">
                <Linkedin className="w-6 h-6" />
              </Link>
              <a
                href="CV_FILE_HERE"
                download
                className="flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-all text-sm font-medium w-full justify-center"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
