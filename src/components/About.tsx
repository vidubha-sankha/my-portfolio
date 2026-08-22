"use client";

import { motion } from "framer-motion";
import { LineChart, Brain, PieChart, GraduationCap } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <LineChart className="w-8 h-8 text-primary" />,
      title: "Data Analysis",
      description: "Analyzing and interpreting data to discover meaningful insights."
    },
    {
      icon: <Brain className="w-8 h-8 text-secondary" />,
      title: "Machine Learning",
      description: "Building intelligent solutions using machine learning and AI technologies."
    },
    {
      icon: <PieChart className="w-8 h-8 text-primary" />,
      title: "Data Visualization",
      description: "Creating dashboards and visualizations that communicate information clearly."
    }
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden">
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
                01 / ABOUT
              </h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              My Background
            </h3>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Intro */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6 text-lg text-foreground/70 leading-relaxed"
          >
            <p>
              I am an undergraduate pursuing a <span className="font-semibold text-foreground">Bachelor of Information & Communication Technology (Hons.)</span> at the Faculty of Technological Studies, University of Vavuniya.
            </p>
            <p>
              I am building my expertise in Data Analysis, Data Science, Machine Learning, AI, databases, and data visualization. 
            </p>
            <p>
              I enjoy working with data to discover patterns, generate meaningful insights, and develop technology-based solutions for real-world problems.
            </p>

            {/* Education Card */}
            <div className="mt-8 bg-surface border border-border rounded-2xl shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300">
              <div className="p-6 flex items-start space-x-4 h-full">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Bachelor of Information & Communication Technology (Hons.)</h4>
                  <p className="text-primary text-sm font-bold mt-1">2023 – Present</p>
                  <p className="text-muted text-sm mt-2">Faculty of Technological Studies</p>
                  <p className="text-muted text-sm">University of Vavuniya</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Highlights */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-surface p-6 rounded-2xl border border-border shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:border-primary hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
              >
                <div className="mb-4 p-3 bg-background rounded-xl inline-block group-hover:scale-110 shadow-sm transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
