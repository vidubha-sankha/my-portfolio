"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin, FaBlogger as Blogger } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column - Text Content */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            <motion.div variants={itemVariants} className="flex items-center space-x-3">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] text-primary uppercase font-semibold">
                Aspiring Data Analyst // System Engineering // Software Development
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4 relative">
              <h2 className="text-xl sm:text-2xl font-light text-foreground/70 tracking-wide">
                Vidubha Sankha
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
                Turning Data Into <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary relative">
                  Meaningful Insights.
                </span>
              </h1>
            </motion.div>

            <motion.p variants={itemVariants} className="text-base sm:text-lg text-foreground/60 max-w-xl leading-relaxed font-light">
              Aspiring Data Analyst and ICT undergraduate. Passionate about transforming raw data into actionable intelligence, engineering sophisticated models, and solving real-world problems through data-driven technology.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-4">
              <Link href="#projects" className="group relative flex items-center px-6 py-3 bg-primary text-white text-sm font-semibold tracking-wide rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                <span className="relative z-10 flex items-center">
                  View Projects
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity -z-0" />
              </Link>

              <a href="/Vidubha_Sankha_CV.pdf" download="Vidubha_Sankha_CV.pdf" className="group flex items-center px-6 py-3 bg-surface text-foreground text-sm font-semibold tracking-wide border border-border rounded-lg shadow-sm hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all duration-300">
                <Download className="w-4 h-4 mr-2 opacity-70 group-hover:opacity-100 transition-opacity" />
                Download CV
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center space-x-6 pt-12 border-t border-border">
              <span className="text-[10px] font-mono text-muted tracking-[0.2em] uppercase font-bold">Connect :</span>
              <div className="flex space-x-4">
                <Link href="https://github.com/vidubha-sankha" target="_blank" className="text-muted hover:text-primary transition-colors duration-300">
                  <Github className="w-5 h-5" />
                </Link>
                <Link href="LINKEDIN_URL_HERE" target="_blank" className="text-muted hover:text-primary transition-colors duration-300">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="https://analyticswithsanka.blogspot.com/" target="_blank" className="text-muted hover:text-primary transition-colors duration-300">
                  <Blogger className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Technical Image Container */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 relative flex justify-center items-center lg:justify-end mt-12 lg:mt-0"
          >
            {/* Clean minimal container for profile */}
            <div className="relative w-64 h-64 sm:w-[400px] sm:h-[400px] group perspective-[1000px]">

              {/* Inner container */}
              <div className="absolute inset-4 rounded-full overflow-hidden bg-surface shadow-lg border border-border group-hover:shadow-2xl group-hover:border-primary/30 group-hover:scale-[1.02] transition-all duration-700 ease-out z-10">
                <Image
                  src="/images/profile.jpg"
                  alt="Vidubha Sankha"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>

              {/* Subtle Glow */}
              <div className="absolute inset-0 rounded-full bg-[#38BDF8]/10 blur-[60px] -z-10 group-hover:bg-[#38BDF8]/15 transition-all duration-700 translate-x-4 translate-y-4" />
              <div className="absolute inset-0 rounded-full bg-[#6D4AFF]/10 blur-[60px] -z-10 group-hover:bg-[#6D4AFF]/15 transition-all duration-700 -translate-x-4 -translate-y-4" />
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
