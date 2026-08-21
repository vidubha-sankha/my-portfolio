"use client";

import { Mail } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
import Link from "next/link";



export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background pt-16 pb-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        

        
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
