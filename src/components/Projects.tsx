"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const projectsData = [
  {
    id: "01",
    title: "AI-Based Road Damage Detection System",
    category: "Machine Learning / Computer Vision",
    description: "An AI-based road damage detection system designed to identify road damage using image processing and machine learning techniques. The project demonstrates the application of AI to a real-world problem in Sri Lanka and combines image analysis, machine learning, and data-driven problem solving.",
    technologies: ["Python", "TensorFlow", "Scikit-learn", "Flask"],
    image: "/images/projects/road-damage.jpg",
    github: "https://github.com/vidubha-sankha/SE_Project"
  },
  {
    id: "02",
    title: "Heart Disease Analysis Dashboard",
    category: "Data Analysis / Power BI",
    description: "An interactive heart disease data analysis project focused on transforming healthcare data into meaningful visual insights. The project demonstrates data analysis, KPI development, dashboard design, and visual storytelling using Power BI.",
    technologies: ["Power BI", "Data Analysis", "KPI Analysis", "Dashboard Design"],
    image: "/images/projects/heart-disease.jpg",
    github: "https://github.com/vidubha-sankha/heart-disease-"
  },
  {
    id: "03",
    title: "Home Service Management System",
    category: "Full-Stack Web Application",
    description: "A web-based Home Service Management System developed using PHP and MySQL. The platform connects customers with local technicians for domestic services such as plumbing, electrical work, AC repair, and device maintenance.",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
    image: "/images/projects/hsms.jpg",
    github: "https://github.com/vidubha-sankha/Home-Service-Management-System-main"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-surface overflow-hidden">
      {/* Animated Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], rotate: [0, 45, 0] }} 
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="absolute top-[10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-accent/5 blur-[100px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, -45, 0] }} 
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="absolute bottom-[10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/5 blur-[120px]" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-secondary mx-auto rounded-full mb-6" />
            <p className="text-xl text-foreground/80 font-medium">
              Real-world projects combining data analysis, machine learning, visualization, and software development.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15, type: "spring", bounce: 0.3 }}
              whileHover={{ y: -10 }}
              className="group flex flex-col bg-background rounded-3xl overflow-hidden border border-border/50 shadow-md hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 relative"
            >
              {/* Animated gradient border on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent via-secondary to-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10" />
              {/* Project Image */}
              <div className="relative h-56 w-full overflow-hidden bg-surface flex items-center justify-center">
                {/* Fallback pattern if image is missing */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent via-background to-background" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Quick fallback handling if placeholder doesn't exist
                    e.currentTarget.style.display = 'none';
                  }}
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center space-x-6">
                  <Link href={project.github} target="_blank" className="p-4 bg-surface/80 backdrop-blur-md text-foreground rounded-full hover:scale-110 hover:bg-accent hover:text-white transition-all shadow-xl hover:shadow-accent/50 transform translate-y-8 group-hover:translate-y-0 duration-500">
                    <Github className="w-6 h-6" />
                  </Link>
                  <button className="p-4 bg-gradient-to-r from-accent to-secondary text-white rounded-full hover:scale-110 transition-all shadow-xl hover:shadow-secondary/50 transform translate-y-8 group-hover:translate-y-0 duration-500 delay-75">
                    <ExternalLink className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="absolute top-4 left-4 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500">
                  <span className="px-4 py-1.5 bg-gradient-to-r from-accent to-secondary text-white text-xs font-bold rounded-full shadow-lg tracking-wider">
                    PROJECT {project.id}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-br from-accent/10 to-secondary/10 rounded-full blur-3xl -z-10 group-hover:from-accent/20 group-hover:to-secondary/20 transition-colors duration-500" />
                
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary text-sm font-bold tracking-wide uppercase mb-3">{project.category}</p>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent group-hover:to-secondary transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-foreground/70 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map(tech => (
                      <span key={tech} className="text-xs font-medium text-foreground/60">
                        {tech} <span className="text-border mx-1 last:hidden">•</span>
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between border-t border-border/50 pt-4">
                    <Link href={project.github} target="_blank" className="text-sm font-medium text-foreground hover:text-accent flex items-center transition-colors">
                      <Github className="w-4 h-4 mr-2" /> GitHub
                    </Link>
                    <button className="text-sm font-medium text-primary hover:text-accent flex items-center group/btn transition-colors">
                      View Project <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
