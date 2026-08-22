"use client";

import { Mail } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin, FaBlogger as Blogger } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background pt-16 pb-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-center pt-8 border-t border-border gap-4">
          <p className="text-sm font-bold tracking-widest text-muted uppercase text-center">
            &copy; {currentYear} Vidubha Sankha. All rights reserved.
          </p>
          
          <div className="flex items-center justify-center space-x-6">
            <Link href="https://github.com/vidubha-sankha" target="_blank" className="text-muted hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </Link>
            <Link href="LINKEDIN_URL_HERE" target="_blank" className="text-muted hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link href="https://analyticswithsanka.blogspot.com/" target="_blank" className="text-muted hover:text-primary transition-colors">
              <Blogger className="w-5 h-5" />
            </Link>
            <a href="mailto:mathugamagevidubasanka@gmail.com" className="text-muted hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
