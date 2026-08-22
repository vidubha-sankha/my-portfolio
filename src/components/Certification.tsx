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
            className="flex flex-col space-y-4"
          >
            <div className="flex items-center space-x-4">
              <div className="h-[2px] w-8 bg-primary" />
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase">
                04 / CERTIFICATION
              </h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              Professional Credentials
            </h3>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-surface rounded-2xl border border-border hover:border-primary shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden group p-8 md:p-12"
        >
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
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-background border border-border rounded-md mb-4">
                <span className="text-[10px] font-bold tracking-widest text-muted uppercase">Provider // Meta & Coursera</span>
              </div>

              <h3 className="text-xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                Meta Data Analyst Specialization
              </h3>

              <p className="text-sm md:text-base text-muted mb-8 leading-relaxed max-w-2xl">
                Completed the Meta Data Analyst Specialization through Coursera, strengthening knowledge and practical understanding related to data analytics, python programming, SQL, and data visualization.
              </p>

              <Link
                href="https://coursera.org/share/851940ff2451f9a0c9386651e7f078a2"
                target="_blank"
                className="inline-flex items-center px-6 py-3 bg-white text-muted text-sm font-bold tracking-wide rounded-lg border border-border hover:border-primary hover:text-primary shadow-sm transition-all group/btn"
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

