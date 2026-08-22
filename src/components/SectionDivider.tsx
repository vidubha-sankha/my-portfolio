"use client";

import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <div className="w-full flex justify-center py-8">
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="w-[85%] max-w-5xl h-[1px] rounded-full bg-gradient-to-r from-border via-[#38BDF8]/40 to-border opacity-60"
      />
    </div>
  );
}
