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
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What I'm Passionate About</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-secondary mx-auto rounded-full mb-6" />
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
              className="bg-background rounded-2xl p-8 border border-border/50 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 text-center flex flex-col items-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-surface flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                {area.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{area.title}</h3>
              <p className="text-foreground/70">{area.description}</p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
