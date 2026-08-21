"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, BarChart2, Database, Cpu } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center py-20 overflow-hidden bg-background">
      {/* Animated 2-color Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }} 
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-accent/10 blur-[120px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.5, 1], rotate: [0, -90, 0] }} 
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/10 blur-[120px]" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="flex flex-col space-y-6"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent/10 to-secondary/10 border border-accent/20 w-fit"
            >
              <span className="flex h-2.5 w-2.5 rounded-full bg-gradient-to-r from-accent to-secondary animate-pulse"></span>
              <span className="text-xs font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">ASPIRING DATA ANALYST</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-foreground leading-tight drop-shadow-sm">
              Turning Data Into <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-secondary to-accent bg-[length:200%_auto] animate-[gradient_8s_linear_infinite]">
                Meaningful Insights
              </span>
            </h1>
            
            <p className="text-lg text-foreground/80 max-w-xl leading-relaxed">
              I'm <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">Vidubha Sankha</span>, an aspiring Data Analyst and ICT undergraduate passionate about transforming data into meaningful insights, creating intelligent solutions, and solving real-world problems through technology.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link href="#projects" className="group flex items-center px-8 py-4 bg-gradient-to-r from-accent to-secondary text-white rounded-xl hover:opacity-90 transition-all shadow-lg hover:shadow-accent/25 font-semibold">
                View My Projects
                <motion.div
                   animate={{ x: [0, 5, 0] }}
                   transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.div>
              </Link>
              
              <a href="/Vidubha_Sankha_CV.pdf" download="Vidubha_Sankha_CV.pdf" className="flex items-center px-8 py-4 bg-surface text-foreground border-2 border-border rounded-xl hover:border-accent hover:text-accent transition-all font-semibold shadow-sm hover:shadow-md">
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </a>
            </div>
            
            <div className="flex items-center space-x-6 pt-8">
              <span className="text-sm text-foreground/60 font-semibold tracking-wide uppercase">Connect:</span>
              <div className="flex space-x-4">
                <Link href="https://github.com/vidubha-sankha" target="_blank" className="p-3 rounded-full bg-surface border-2 border-border hover:border-accent hover:text-accent hover:-translate-y-1 transition-all duration-300">
                  <Github className="w-5 h-5" />
                </Link>
                <Link href="LINKEDIN_URL_HERE" target="_blank" className="p-3 rounded-full bg-surface border-2 border-border hover:border-secondary hover:text-secondary hover:-translate-y-1 transition-all duration-300">
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4, delay: 0.2 }}
            className="relative flex justify-center items-center lg:justify-end h-[400px] sm:h-[500px]"
          >
            {/* Decorative Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} 
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute top-5 right-5 p-5 bg-gradient-to-br from-surface to-background/50 backdrop-blur-md rounded-2xl border border-accent/30 shadow-[0_0_30px_-5px_rgba(6,182,212,0.3)] z-20 hidden sm:block"
            >
              <BarChart2 className="w-8 h-8 text-accent" />
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 25, 0], rotate: [0, -10, 0] }} 
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 left-5 p-5 bg-gradient-to-br from-surface to-background/50 backdrop-blur-md rounded-2xl border border-secondary/30 shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)] z-20 hidden sm:block"
            >
              <Database className="w-8 h-8 text-secondary" />
            </motion.div>

            <motion.div 
              animate={{ y: [0, -15, 0], scale: [1, 1.1, 1] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 2 }}
              className="absolute top-1/2 -right-10 p-4 bg-gradient-to-br from-surface to-background/50 backdrop-blur-md rounded-2xl border border-border shadow-xl z-20 hidden sm:block"
            >
              <Cpu className="w-6 h-6 text-foreground/70" />
            </motion.div>

            {/* Profile Image container */}
            <div className="relative w-72 h-72 sm:w-[420px] sm:h-[420px] rounded-full p-2 group">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-surface shadow-2xl border-4 border-background z-10 group-hover:scale-105 transition-transform duration-500">
                <Image
                  src="/images/profile.jpg"
                  alt="Vidubha Sankha"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Spinning 2-color border effect */}
              <div className="absolute inset-0 rounded-full border-t-4 border-l-4 border-accent opacity-70 animate-[spin_6s_linear_infinite]" />
              <div className="absolute inset-0 rounded-full border-b-4 border-r-4 border-secondary opacity-70 animate-[spin_8s_linear_infinite_reverse]" />
              <div className="absolute inset-[-20px] rounded-full bg-gradient-to-tr from-accent/20 to-secondary/20 blur-3xl -z-10 animate-pulse" />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
