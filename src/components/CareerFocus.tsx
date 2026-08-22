"use client";

import { motion } from "framer-motion";
import { Database, BarChart, Cpu, Code2 } from "lucide-react";

const focusAreas = [
  {
    icon: <Database className="w-8 h-8 text-primary" />,
    title: "Data Analytics",
    description: "Finding meaningful patterns and insights from data."
  },
  {
    icon: <BarChart className="w-8 h-8 text-secondary" />,
    title: "Data Visualization",
    description: "Turning complex information into clear visual stories."
  },
  {
    icon: <Cpu className="w-8 h-8 text-primary" />,
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
            className="flex flex-col space-y-4"
          >
            <div className="flex items-center space-x-4">
              <div className="h-[2px] w-8 bg-primary" />
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase">
                05 / CAREER FOCUS
              </h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              What I Do
            </h3>
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
              className="relative bg-surface p-8 rounded-2xl border border-border hover:border-primary shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center group overflow-hidden"
            >
              <div className="w-16 h-16 rounded-xl border border-border bg-background flex items-center justify-center mb-6 shadow-sm group-hover:border-primary/50 group-hover:-translate-y-1 transition-all duration-300 relative z-10">
                {area.icon}
              </div>
              <h3 className="text-sm font-bold tracking-widest text-foreground mb-3 group-hover:text-primary transition-all relative z-10 uppercase">{area.title}</h3>
              <p className="text-muted text-sm relative z-10">{area.description}</p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
