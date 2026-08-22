"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

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
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-4"
          >
            <h2 className="text-sm font-mono tracking-[0.2em] text-foreground/60 uppercase shrink-0">
              03 / PROJECTS
            </h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-[1px] w-full bg-border origin-left"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group flex flex-col bg-primary/20 backdrop-blur-sm rounded-none border border-border hover:border-accent/50 transition-all duration-500 relative"
            >
              {/* Project Image Container */}
              <div className="relative h-64 w-full overflow-hidden bg-primary border-b border-border">
                {/* Fallback pattern */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent via-transparent to-transparent" />
                
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                
                {/* Dark gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                   <div className="flex items-center space-x-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                     <Link href={project.github} target="_blank" className="p-3 bg-surface/80 backdrop-blur border border-white/10 text-foreground hover:text-accent transition-colors duration-300">
                       <Github className="w-5 h-5" />
                     </Link>
                     <button className="p-3 bg-accent text-background hover:bg-accent/90 transition-colors duration-300">
                       <ExternalLink className="w-5 h-5" />
                     </button>
                   </div>
                </div>
                
                {/* ID Badge */}
                <div className="absolute top-0 left-0 bg-background border-b border-r border-border px-4 py-2">
                  <span className="text-xs font-mono text-accent">
                    {project.id}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8 flex flex-col flex-grow relative overflow-hidden">
                <p className="text-xs font-mono text-foreground/40 tracking-wider uppercase mb-3">
                  {project.category}
                </p>
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-foreground/60 text-sm mb-8 flex-grow leading-relaxed font-light">
                  {project.description}
                </p>
                
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map(tech => (
                      <span key={tech} className="text-[10px] font-mono text-foreground/50 border border-white/5 px-2 py-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between border-t border-border pt-4">
                    <Link href={project.github} target="_blank" className="text-xs font-mono text-foreground/60 hover:text-accent flex items-center transition-colors">
                      <Github className="w-4 h-4 mr-2" /> GITHUB
                    </Link>
                    <button className="text-xs font-mono text-foreground/60 hover:text-accent flex items-center group/btn transition-colors">
                      DETAILS <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
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
