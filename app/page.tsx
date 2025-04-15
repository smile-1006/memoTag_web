"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Activity, Users, ArrowRight, ChevronRight, Heart, Shield, Clock, Bell, Star, Award, CheckCircle } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { ContactForm } from "@/components/contact-form";
import { useState } from "react";

export default function Home() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  
  const [activeFeature, setActiveFeature] = useState(0);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const features = [
    {
      icon: Shield,
      title: "Privacy First",
      description: "End-to-end encryption and strict data protection protocols"
    },
    {
      icon: Clock,
      title: "Real-time Monitoring",
      description: "Instant updates and continuous health tracking"
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Customizable alerts for caregivers and healthcare providers"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Neurologist",
      content: "MemoTag has revolutionized how we monitor and care for dementia patients.",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "Caregiver",
      content: "The peace of mind this platform provides is invaluable.",
      rating: 5
    },
    {
      name: "Maria Rodriguez",
      role: "Healthcare Administrator",
      content: "A game-changer in dementia care management.",
      rating: 5
    }
  ];

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        <motion.div
          style={{ opacity, scale }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent dark:from-blue-500/5" />
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        </motion.div>

        <div className="container px-4 mx-auto text-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              AI for Dementia Care
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Empowering caregivers with AI-driven insights for better dementia care and early detection
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
                Get Started <ArrowRight className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronRight size={32} className="rotate-90 text-gray-400" />
        </motion.div>
      </section>

      {/* Problem Section */}
      <section id="problem" ref={ref} className="py-20 bg-white dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">The Growing Challenge</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Dementia affects millions worldwide, with numbers rising each year
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={cardVariants}>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow transform hover:-translate-y-1">
                <div className="mb-4 flex justify-center">
                  <Brain className="h-12 w-12 text-blue-500" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">55 Million</h3>
                <p className="text-gray-600 dark:text-gray-300">People living with dementia globally</p>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants}>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow transform hover:-translate-y-1">
                <div className="mb-4 flex justify-center">
                  <Activity className="h-12 w-12 text-blue-500" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">Every 3 Seconds</h3>
                <p className="text-gray-600 dark:text-gray-300">A new case of dementia is diagnosed</p>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants}>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow transform hover:-translate-y-1">
                <div className="mb-4 flex justify-center">
                  <Users className="h-12 w-12 text-blue-500" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">139 Million</h3>
                <p className="text-gray-600 dark:text-gray-300">Projected cases by 2050</p>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container px-4 mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Key Features</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Advanced technology for comprehensive care
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="flex items-center mb-4">
                  <feature.icon className="h-8 w-8 text-blue-500 mr-3" />
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 bg-white dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">How MemoTag Works</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Advanced AI technology for comprehensive dementia care
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Early Detection",
                description: "AI-powered analysis of behavioral patterns for early signs of cognitive decline"
              },
              {
                title: "24/7 Monitoring",
                description: "Continuous tracking of daily activities and vital signs for comprehensive care"
              },
              {
                title: "Smart Alerts",
                description: "Instant notifications for caregivers about important changes or concerns"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container px-4 mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">What People Say</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Trusted by healthcare professionals and caregivers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Why Choose MemoTag</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Leading the future of dementia care
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Privacy Focused",
                description: "Your data is protected with enterprise-grade security"
              },
              {
                icon: Clock,
                title: "24/7 Support",
                description: "Round-the-clock assistance whenever you need it"
              },
              {
                icon: Award,
                title: "Industry Leading",
                description: "Recognized for innovation in healthcare technology"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex items-start p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
              >
                <benefit.icon className="h-8 w-8 text-blue-500 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Have questions? We'd love to hear from you.
            </p>
          </motion.div>
          <ContactForm />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 dark:bg-blue-900">
        <div className="container px-4 mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Join the Future of Dementia Care
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Be among the first to experience AI-powered dementia care
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Join Waitlist <ChevronRight className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <Heart className="h-6 w-6 text-blue-500 mr-2" />
                <span className="text-xl font-semibold">MemoTag</span>
              </div>
              <p className="text-gray-400">
                Empowering caregivers with AI-driven insights for better dementia care.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Security</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            © 2024 MemoTag. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}