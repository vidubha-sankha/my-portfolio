"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Certification() {
  return (
    <section id="certification" className="relative py-32 overflow-hidden">
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
              04 / CERTIFICATION
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-primary/20 backdrop-blur-sm border border-border hover:border-accent/50 transition-all duration-500 overflow-hidden group p-8 md:p-12"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[length:100%_4px] mix-blend-overlay pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">

            {/* Icon / Badge */}
            <div className="relative flex-shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40 relative drop-shadow-md transition-transform group-hover:scale-105 duration-500">
                <Image
                  src="/images/certificate/meta-badge.png"
                  alt="Meta Data Analyst Certificate Badge"
                  width={160}
                  height={160}
                  className="object-contain w-full h-full rounded-xl"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-grow text-center md:text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-background/50 border border-white/10 mb-4">
                <span className="text-[10px] font-mono tracking-widest text-foreground/60 uppercase">Provider // Meta & Coursera</span>
              </div>

              <h3 className="text-xl md:text-3xl font-semibold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                Meta Data Analyst Specialization
              </h3>

              <p className="text-sm md:text-base font-light text-foreground/60 mb-8 leading-relaxed max-w-2xl">
                Completed the Meta Data Analyst Specialization through Coursera, strengthening knowledge and practical understanding related to data analytics, python programming, SQL, and data visualization.
              </p>

              <Link
                href="https://coursera.org/share/851940ff2451f9a0c9386651e7f078a2"
                target="_blank"
                className="inline-flex items-center px-6 py-3 bg-transparent text-foreground text-sm font-semibold tracking-wide border border-border hover:border-accent hover:text-accent transition-all group/btn"
              >
                VERIFY CERTIFICATE
                <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

