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
            className="flex flex-col space-y-4"
          >
            <div className="flex items-center space-x-4">
              <div className="h-[2px] w-8 bg-primary" />
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase">
                06 / CONTACT
              </h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              Get In Touch
            </h3>
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
            <div className="bg-surface rounded-2xl p-8 border border-border shadow-sm">
              <h3 className="text-xl font-bold text-foreground mb-8 border-b border-border pb-4">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="text-primary mt-1 p-2 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-wider text-muted uppercase mb-1">Email</p>
                    <a href="mailto:mathugamagevidubasanka@gmail.com" className="text-sm text-foreground hover:text-primary transition-colors font-medium">
                      mathugamagevidubasanka@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="text-primary mt-1 p-2 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-wider text-muted uppercase mb-1">Phone</p>
                    <a href="tel:+94783705255" className="text-sm text-foreground hover:text-primary transition-colors font-medium">
                      +94 78 370 5255
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="text-primary mt-1 p-2 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-wider text-muted uppercase mb-1">Location</p>
                    <p className="text-sm text-foreground font-medium">
                      344, Dodamkumbura Watta, Alawwa<br />
                      Sri Lanka
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-8 border-t border-border">
                <p className="text-xs font-bold tracking-wider text-muted uppercase mb-4">Social Links</p>
                <div className="flex items-center space-x-4">
                  <Link href="https://github.com/vidubha-sankha" target="_blank" className="p-3 bg-background border border-border text-muted hover:text-primary hover:border-primary rounded-xl shadow-sm hover:shadow-md transition-all">
                    <Github className="w-4 h-4" />
                  </Link>
                  <Link href="https://lk.linkedin.com/in/vidubha-sankha-b35867354" target="_blank" className="p-3 bg-background border border-border text-muted hover:text-primary hover:border-primary rounded-xl shadow-sm hover:shadow-md transition-all">
                    <Linkedin className="w-4 h-4" />
                  </Link>
                  <Link href="https://analyticswithsanka.blogspot.com/" target="_blank" className="p-3 bg-background border border-border text-muted hover:text-primary hover:border-primary rounded-xl shadow-sm hover:shadow-md transition-all">
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
            <form onSubmit={handleSubmit} className="bg-surface rounded-2xl p-8 border border-border shadow-sm">
              <h3 className="text-xl font-bold text-foreground mb-8 border-b border-border pb-4">
                Send a Message
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold tracking-wider text-muted uppercase">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm text-foreground transition-all shadow-sm"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold tracking-wider text-muted uppercase">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm text-foreground transition-all shadow-sm"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2 mb-6">
                <label htmlFor="subject" className="text-xs font-bold tracking-wider text-muted uppercase">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm text-foreground transition-all shadow-sm"
                  placeholder="Subject Line"
                />
              </div>
              
              <div className="space-y-2 mb-8">
                <label htmlFor="message" className="text-xs font-bold tracking-wider text-muted uppercase">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm text-foreground transition-all shadow-sm resize-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-4 text-sm font-bold uppercase tracking-widest rounded-lg flex items-center justify-center transition-all duration-300 shadow-sm ${
                  submitted 
                    ? "bg-green-500/10 text-green-600 border border-green-500" 
                    : "bg-primary text-white hover:bg-primary/90 hover:shadow-md hover:-translate-y-0.5"
                }`}
              >
                {submitted ? (
                  "MESSAGE SENT SUCCESSFULLY"
                ) : isSubmitting ? (
                  <div className="flex items-center">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-3" />
                    SENDING...
                  </div>
                ) : (
                  <>
                    SEND MESSAGE
                    <Send className="w-4 h-4 ml-2" />
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
