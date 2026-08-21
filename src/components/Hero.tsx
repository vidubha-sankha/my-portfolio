"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, BarChart2, Database, Cpu } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/5 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-surface border border-border/50 w-fit">
              <span className="flex h-2 w-2 rounded-full bg-accent"></span>
              <span className="text-xs font-semibold tracking-wider text-foreground/80">ASPIRING DATA ANALYST</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight">
              Turning Data Into <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
                Meaningful Insights
              </span>
            </h1>
            
            <p className="text-lg text-foreground/70 max-w-xl leading-relaxed">
              I'm <span className="font-semibold text-foreground">Vidubha Sankha</span>, an aspiring Data Analyst and ICT undergraduate passionate about transforming data into meaningful insights, creating intelligent solutions, and solving real-world problems through technology.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="#projects" className="group flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl font-medium">
                View My Projects
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a href="/Vidubha_Sankha_CV.pdf" download="Vidubha_Sankha_CV.pdf" className="flex items-center px-6 py-3 bg-surface text-foreground border border-border rounded-lg hover:bg-border/50 transition-all font-medium">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </a>
            </div>
            
            <div className="flex items-center space-x-5 pt-6">
              <span className="text-sm text-foreground/60 font-medium">Connect with me:</span>
              <Link href="https://github.com/vidubha-sankha" target="_blank" className="p-2 rounded-full bg-surface border border-border hover:border-accent hover:text-accent transition-colors">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="LINKEDIN_URL_HERE" target="_blank" className="p-2 rounded-full bg-surface border border-border hover:border-accent hover:text-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center lg:justify-end h-[400px] sm:h-[500px]"
          >
            {/* Decorative Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-10 right-10 p-4 bg-surface/80 backdrop-blur-sm rounded-xl border border-border/50 shadow-xl z-10 hidden sm:block"
            >
              <BarChart2 className="w-6 h-6 text-accent" />
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 15, 0] }} 
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 left-10 p-4 bg-surface/80 backdrop-blur-sm rounded-xl border border-border/50 shadow-xl z-10 hidden sm:block"
            >
              <Database className="w-6 h-6 text-secondary" />
            </motion.div>

            <motion.div 
              animate={{ y: [0, -15, 0] }} 
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2 }}
              className="absolute top-1/2 -right-5 p-3 bg-surface/80 backdrop-blur-sm rounded-xl border border-border/50 shadow-xl z-10 hidden sm:block"
            >
              <Cpu className="w-5 h-5 text-foreground/70" />
            </motion.div>

            {/* Profile Image container */}
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full border-2 border-border p-2">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-surface">
                <Image
                  src="/images/profile.jpg"
                  alt="Vidubha Sankha"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Spinning border effect */}
              <div className="absolute inset-0 rounded-full border-t-2 border-accent animate-[spin_8s_linear_infinite]" />
              <div className="absolute inset-0 rounded-full border-r-2 border-secondary animate-[spin_12s_linear_infinite_reverse]" />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
