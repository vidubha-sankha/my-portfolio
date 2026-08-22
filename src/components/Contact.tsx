"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin, FaBlogger as Blogger } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
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
              06 / CONTACT
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="bg-primary/20 backdrop-blur-sm p-8 border border-border">
              <h3 className="text-sm font-mono tracking-widest text-foreground/70 mb-8 border-b border-white/5 pb-4 uppercase">
                Terminal Output // Contact
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-accent mt-1">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono tracking-wider text-foreground/40 uppercase mb-1">Email</p>
                    <a href="mailto:mathugamagevidubasanka@gmail.com" className="text-sm text-foreground/80 hover:text-accent transition-colors font-mono">
                      mathugamagevidubasanka@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-secondary mt-1">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono tracking-wider text-foreground/40 uppercase mb-1">Phone</p>
                    <a href="tel:+94783705255" className="text-sm text-foreground/80 hover:text-accent transition-colors font-mono">
                      +94 78 370 5255
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-accent mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono tracking-wider text-foreground/40 uppercase mb-1">Location</p>
                    <p className="text-sm text-foreground/80 font-mono">
                      344, Dodamkumbura Watta, Alawwa<br />
                      Sri Lanka
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-8 border-t border-white/5">
                <p className="text-[10px] font-mono tracking-wider text-foreground/40 uppercase mb-4">Social Links</p>
                <div className="flex items-center space-x-4">
                  <Link href="https://github.com/vidubha-sankha" target="_blank" className="p-3 bg-background border border-white/5 text-foreground/60 hover:text-accent hover:border-accent/30 transition-colors">
                    <Github className="w-4 h-4" />
                  </Link>
                  <Link href="LINKEDIN_URL_HERE" target="_blank" className="p-3 bg-background border border-white/5 text-foreground/60 hover:text-accent hover:border-accent/30 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </Link>
                  <Link href="https://analyticswithsanka.blogspot.com/" target="_blank" className="p-3 bg-background border border-white/5 text-foreground/60 hover:text-accent hover:border-accent/30 transition-colors">
                    <Blogger className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="bg-primary/20 backdrop-blur-sm p-8 border border-border relative overflow-hidden group">
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[length:100%_4px] mix-blend-overlay pointer-events-none" />
              
              <h3 className="text-sm font-mono tracking-widest text-foreground/70 mb-8 border-b border-white/5 pb-4 uppercase">
                Input Stream // Initialize Message
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] font-mono tracking-wider text-foreground/40 uppercase">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-none focus:outline-none focus:border-accent text-sm text-foreground/80 font-mono transition-colors"
                    placeholder="_john_doe"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] font-mono tracking-wider text-foreground/40 uppercase">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-none focus:outline-none focus:border-accent text-sm text-foreground/80 font-mono transition-colors"
                    placeholder="_john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2 mb-6">
                <label htmlFor="subject" className="text-[10px] font-mono tracking-wider text-foreground/40 uppercase">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background/50 border border-border rounded-none focus:outline-none focus:border-accent text-sm text-foreground/80 font-mono transition-colors"
                  placeholder="_subject_line"
                />
              </div>
              
              <div className="space-y-2 mb-8">
                <label htmlFor="message" className="text-[10px] font-mono tracking-wider text-foreground/40 uppercase">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background/50 border border-border rounded-none focus:outline-none focus:border-accent text-sm text-foreground/80 font-mono transition-colors resize-none"
                  placeholder="_write_your_message_here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-4 font-mono text-xs uppercase tracking-widest flex items-center justify-center transition-all ${
                  submitted 
                    ? "bg-accent/20 text-accent border border-accent" 
                    : "bg-transparent text-foreground border border-border hover:border-accent hover:text-accent"
                }`}
              >
                {submitted ? (
                  "PACKET SENT SUCCESSFULLY"
                ) : isSubmitting ? (
                  <div className="flex items-center">
                    <div className="w-4 h-4 border border-accent border-t-transparent rounded-full animate-spin mr-3" />
                    TRANSMITTING...
                  </div>
                ) : (
                  <>
                    EXECUTE_SEND
                    <Send className="w-3 h-3 ml-3" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
