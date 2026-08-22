"use client";

import { motion } from "framer-motion";
import { Database, BarChart, Cpu, Code2 } from "lucide-react";

const focusAreas = [
  {
    icon: <Database className="w-8 h-8 text-accent" />,
    title: "Data Analytics",
    description: "Finding meaningful patterns and insights from data."
  },
  {
    icon: <BarChart className="w-8 h-8 text-secondary" />,
    title: "Data Visualization",
    description: "Turning complex information into clear visual stories."
  },
  {
    icon: <Cpu className="w-8 h-8 text-accent" />,
    title: "Machine Learning",
    description: "Exploring intelligent systems that can solve real-world problems."
  },
  {
    icon: <Code2 className="w-8 h-8 text-secondary" />,
    title: "Technology Solutions",
    description: "Building practical applications that combine software and data."
  }
];

export default function CareerFocus() {
  return (
    <section className="relative py-32 overflow-hidden">
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
              05 / CAREER FOCUS
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-primary/20 backdrop-blur-sm p-8 border border-border hover:border-accent/50 transition-all duration-300 text-center flex flex-col items-center group overflow-hidden"
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[length:100%_4px] mix-blend-overlay pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-16 h-16 rounded-none border border-white/5 bg-background flex items-center justify-center mb-6 group-hover:border-accent/50 group-hover:-translate-y-1 transition-all duration-300 relative z-10">
                {area.icon}
              </div>
              <h3 className="text-sm font-mono tracking-widest text-foreground mb-3 group-hover:text-accent transition-all relative z-10 uppercase">{area.title}</h3>
              <p className="text-foreground/60 text-sm font-light relative z-10">{area.description}</p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
