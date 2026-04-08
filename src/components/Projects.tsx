import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      id: 4,
      title: "Spider Platform",
      description:
        "A modern, scalable online learning platform delivering high-quality courses with advanced analytics, secure payments, and gamified assessments.",
      imageSrc: "/spider-platform.png",
      techStack: ["Next.js 15", "TypeScript", "Prisma", "Better Auth", "Bunny Stream", "recharts"],
      liveUrl: "https://fy.sa",
      featured: true,
      problem: "Traditional LMS platforms often lack the performance and interactive gamification needed to keep modern learners engaged and motivated.",
      solution: "Built a high-performance system with Next.js 15 and Bun, integrating a sub-second quiz engine, real-time leaderboard, and seamless Apple Pay support.",
      features: ["Rating System", "Leaderboard", "Apple Pay (Moyasar)", "Gemini Analytics", "WhatsApp OTP"],
    },
    {
      id: 1,
      title: "Pet Community",
      description:
        "A comprehensive full-stack platform combining e-commerce and community features for pet lovers. Features include product listings, user authentication, and real-time messaging.",
      imageSrc: "/pet.png",
      techStack: ["Next.js", "PostgreSQL", "Prisma", "Stripe", "WebSockets"],
      liveUrl: "https://pet-store-snow66926692.vercel.app/",
      githubUrl: "https://github.com/snow6692/pet-store",
      featured: true,
      problem: "Pet owners needed a unified platform for shopping and community engagement without switching between multiple apps.",
      solution: "Built an all-in-one platform with real-time chat, secure payments, and a thriving community ecosystem.",
    },
    {
      id: 2,
      title: "Discovery SaaS",
      description:
        "A SaaS platform that helps entrepreneurs showcase their products and gain visibility through community upvotes and featured listings.",
      imageSrc: "/hunt-clone.png",
      techStack: ["Next.js", "PostgreSQL", "Stripe API", "Rate Limiting"],
      liveUrl: "https://hunt-clone-snow66926692.vercel.app/",
      githubUrl: "https://github.com/snow6692/v1-hunt-clone",
      featured: false,
      problem: "Independent creators struggled to get visibility for their products without major platform backing.",
      solution: "Created a platform focused on discovery and fair representation through community-driven rankings.",
    },
    {
      id: 3,
      title: "AI Workout",
      description:
        "An intelligent fitness application that generates personalized workout plans using AI. Integrates voice AI for natural language requests.",
      imageSrc: "/workout.png",
      techStack: ["Next.js", "Vapi", "Gemini API", "Convex", "Redis"],
      liveUrl: "https://ai-workout-generator-snow66926692.vercel.app/",
      githubUrl: "https://github.com/snow6692/ai-workout-generator",
      featured: false,
      problem: "Generic workout plans often fail to adapt to individual needs and progression levels.",
      solution: "Developed an AI-powered system that learns user preferences and creates dynamically personalized programs.",
    },
  ];

  return (
    <motion.section
      id="projects"
      className="py-32 bg-background relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24 space-y-6">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-[12vw] font-black text-foreground/[0.03] absolute top-20 left-1/2 -translate-x-1/2 uppercase select-none pointer-events-none"
          >
            Portfolio
          </motion.h2>
          
          <div className="relative z-10 space-y-4">
            <h3 className="text-sm font-bold tracking-[0.5em] text-snow-accent uppercase">
              Proven Excellence
            </h3>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
              FEATURED <span className="text-muted-foreground/30">WORKS</span>
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              techStack={project.techStack}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              featured={project.featured}
              problem={project.problem}
              solution={project.solution}
              features={project.features}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
