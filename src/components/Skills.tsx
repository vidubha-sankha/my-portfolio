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
    <section id="skills" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Technical Skills</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-secondary mx-auto rounded-full mb-6" />
            <p className="text-xl text-foreground/80 font-medium">
              Tools and technologies I use to analyze data and build intelligent solutions.
            </p>
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
              className="bg-surface border border-border/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-bold text-foreground mb-4 border-b border-border/50 pb-2">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-background border border-border rounded-md text-sm font-medium text-foreground/80 hover:border-accent hover:text-accent transition-colors"
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
