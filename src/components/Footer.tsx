"use client";

import { Mail } from "lucide-react";
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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background pt-16 pb-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          
          {/* Brand & Slogan */}
          <div className="text-center md:text-left">
            <Link href="#home" className="text-2xl font-bold tracking-wider text-foreground block mb-2">
              VIDUBHA SANKHA
            </Link>
            <p className="text-accent font-medium mb-2">Aspiring Data Analyst</p>
            <p className="text-foreground/60 max-w-sm">
              "Turning Data Into Meaningful Insights."
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-foreground/70 hover:text-accent transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
        </div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/50 gap-4">
          <p className="text-sm text-foreground/60">
            &copy; {currentYear} Vidubha Sankha. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-4">
            <Link href="https://github.com/vidubha-sankha" target="_blank" className="text-foreground/60 hover:text-accent transition-colors">
              <Github className="w-5 h-5" />
            </Link>
            <Link href="LINKEDIN_URL_HERE" target="_blank" className="text-foreground/60 hover:text-accent transition-colors">
              <Linkedin className="w-5 h-5" />
            </Link>
            <a href="mailto:mathugamagevidubasanka@gmail.com" className="text-foreground/60 hover:text-accent transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
