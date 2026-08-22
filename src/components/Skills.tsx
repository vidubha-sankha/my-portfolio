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
            className="flex flex-col space-y-4"
          >
            <div className="flex items-center space-x-4">
              <div className="h-[2px] w-8 bg-primary" />
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase">
                02 / SKILLS
              </h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              Technical Expertise
            </h3>
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
              className="relative group bg-surface border border-border hover:border-primary p-8 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              
              <h3 className="text-sm font-bold text-foreground mb-6 border-b border-border pb-4 uppercase tracking-widest group-hover:text-primary transition-colors">
                {group.category}
              </h3>
              
              <div className="flex flex-wrap gap-2 relative z-10">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-background border border-border rounded-md text-xs font-semibold text-muted hover:border-primary hover:text-primary hover:bg-primary/5 transition-colors cursor-default"
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
