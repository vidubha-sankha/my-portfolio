"use client";

import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Programming",
    skills: ["Python", "SQL"]
  },
  {
    category: "Data Science",
    skills: ["Pandas", "NumPy", "Matplotlib", "Data Preprocessing"]
  },
  {
    category: "Machine Learning & AI",
    skills: ["Scikit-learn", "TensorFlow", "Keras"]
  },
  {
    category: "Data Visualization",
    skills: ["Power BI", "Excel", "Matplotlib", "Seaborn"]
  },
  {
    category: "Databases",
    skills: ["MySQL"]
  },
  {
    category: "Web Development",
    skills: ["Flask", "HTML", "CSS", "JavaScript"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 overflow-hidden">
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
              02 / SKILLS
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
          {skillsData.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group bg-primary/20 backdrop-blur-sm border border-border hover:border-accent/50 p-8 shadow-sm transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[length:100%_4px] mix-blend-overlay pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <h3 className="text-sm font-mono text-foreground/70 mb-6 border-b border-white/5 pb-4 uppercase tracking-widest group-hover:text-accent transition-colors">
                {group.category}
              </h3>
              
              <div className="flex flex-wrap gap-2 relative z-10">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-background/50 border border-border text-[11px] font-mono text-foreground/60 hover:border-accent hover:text-accent transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
