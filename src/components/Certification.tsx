"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Certification() {
  return (
    <section id="certification" className="relative py-24 bg-background overflow-hidden">
      {/* Animated Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.15, 1], rotate: [0, -30, 0] }} 
          transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
          className="absolute top-[20%] left-[-5%] w-[35%] h-[35%] rounded-full bg-secondary/5 blur-[120px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.25, 1], rotate: [0, 60, 0] }} 
          transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] rounded-full bg-accent/5 blur-[120px]" 
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Certification</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-secondary mx-auto rounded-full mb-6" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-surface rounded-3xl p-8 md:p-12 border border-border/50 shadow-lg overflow-hidden group"
        >
          {/* Decorative background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -z-10 group-hover:bg-accent/10 transition-colors" />

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">

            {/* Icon / Badge */}
            <div className="relative flex-shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40 relative z-10 drop-shadow-md transition-transform hover:scale-105 duration-300">
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
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-background border border-border/50 mb-4">
                <span className="text-xs font-bold tracking-wider text-foreground/80 uppercase">Provider: Meta / Coursera</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Meta Data Analyst Specialization
              </h3>

              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                "Completed the Meta Data Analyst Specialization through Coursera, strengthening knowledge and practical understanding related to data analytics."
              </p>

              <Link
                href="CERTIFICATE_URL_HERE"
                target="_blank"
                className="inline-flex items-center px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all shadow-md hover:shadow-lg font-medium group/btn"
              >
                View Certificate
                <ExternalLink className="https://coursera.org/share/851940ff2451f9a0c9386651e7f078a2" />
              </Link>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

