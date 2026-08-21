"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
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
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Let's Connect</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-secondary mx-auto rounded-full mb-6" />
            <p className="text-xl text-foreground/80 font-medium">
              Have a project idea, opportunity, or simply want to connect? I'd be happy to hear from you.
            </p>
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
            <div className="bg-surface rounded-2xl p-8 border border-border/50 shadow-sm">
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-background rounded-xl text-accent border border-border/50 shadow-sm">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60 font-medium mb-1">Email</p>
                    <a href="mailto:mathugamagevidubasanka@gmail.com" className="text-foreground hover:text-accent font-medium transition-colors">
                      mathugamagevidubasanka@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-background rounded-xl text-secondary border border-border/50 shadow-sm">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60 font-medium mb-1">Phone</p>
                    <a href="tel:+94783705255" className="text-foreground hover:text-accent font-medium transition-colors">
                      +94 78 370 5255
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-background rounded-xl text-accent border border-border/50 shadow-sm">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60 font-medium mb-1">Location</p>
                    <p className="text-foreground font-medium">
                      344, Dodamkumbura Watta, Alawwa<br />
                      Sri Lanka
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-8 border-t border-border/50">
                <p className="text-sm text-foreground/60 font-medium mb-4">Social Profiles</p>
                <div className="flex items-center space-x-4">
                  <Link href="https://github.com/vidubha-sankha" target="_blank" className="p-3 bg-background rounded-xl text-foreground hover:text-accent hover:border-accent border border-border/50 shadow-sm transition-colors">
                    <Github className="w-5 h-5" />
                  </Link>
                  <Link href="LINKEDIN_URL_HERE" target="_blank" className="p-3 bg-background rounded-xl text-foreground hover:text-accent hover:border-accent border border-border/50 shadow-sm transition-colors">
                    <Linkedin className="w-5 h-5" />
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
            <form onSubmit={handleSubmit} className="bg-surface rounded-2xl p-8 border border-border/50 shadow-sm">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send Me a Message</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground/80">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground/80">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2 mb-6">
                <label htmlFor="subject" className="text-sm font-medium text-foreground/80">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                  placeholder="How can I help you?"
                />
              </div>
              
              <div className="space-y-2 mb-8">
                <label htmlFor="message" className="text-sm font-medium text-foreground/80">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors resize-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full md:w-auto px-8 py-3 rounded-lg font-medium flex items-center justify-center transition-all ${
                  submitted 
                    ? "bg-green-500 text-white" 
                    : "bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-lg"
                }`}
              >
                {submitted ? (
                  "Message Sent Successfully!"
                ) : isSubmitting ? (
                  <div className="flex items-center">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                    Sending...
                  </div>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </button>
              
              {/* Form integration note (invisible to users but in the DOM) */}
              <p className="sr-only">
                Note: This form is currently configured for UI presentation. It needs to be connected to a backend service like EmailJS, Formspree, or a custom API to send actual emails.
              </p>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
