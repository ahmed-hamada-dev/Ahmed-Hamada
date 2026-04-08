import React from "react";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { motion } from "framer-motion";
import { GithubIcon } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  problem?: string;
  solution?: string;
  features?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageSrc,
  techStack,
  liveUrl,
  githubUrl,
  featured = false,
  problem = "Modern web application needs to handle complex user interactions and data management.",
  solution = "Built a full-stack solution with optimized database queries and seamless user experience.",
  features = [],
}) => {
  return (
    <motion.div
      className={`group relative overflow-hidden rounded-3xl glass transition-all duration-700 hover:shadow-[0_0_80px_rgba(255,255,255,0.05)] ${featured ? "lg:col-span-2" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "circOut" }}
    >
      <div className="flex flex-col h-full">
        {/* Project Image Panel */}
        <div className="relative h-64 md:h-80 w-full overflow-hidden">
          <Image
            width={800}
            height={600}
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
          
          {featured && (
            <div className="absolute top-6 left-6 z-20">
              <span className="bg-snow-accent text-background text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full shadow-2xl">
                FEATURED PROJECT
              </span>
            </div>
          )}
        </div>

        {/* Content Panel */}
        <div className="p-8 md:p-10 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-3xl md:text-4xl font-black tracking-tighter group-hover:text-snow-accent transition-colors duration-500 uppercase">
              {title}
            </h3>
            <div className="flex gap-3">
              {githubUrl && (
                <Link href={githubUrl} target="_blank" className="p-3 rounded-full bg-white/5 hover:bg-snow-accent hover:text-background transition-all duration-300">
                  <GithubIcon className="w-5 h-5" />
                </Link>
              )}
              {liveUrl && (
                <Link href={liveUrl} target="_blank" className="p-3 rounded-full bg-white/5 hover:bg-snow-accent hover:text-background transition-all duration-300">
                  <ExternalLinkIcon className="w-5 h-5" />
                </Link>
              )}
            </div>
          </div>

          <p className="text-muted-foreground text-lg mb-8 leading-relaxed max-w-2xl">
            {description}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-10 pt-8 border-t border-white/5">
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-widest text-snow-accent mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-snow-accent" /> Challenge
              </h4>
              <p className="text-sm text-foreground/80 leading-relaxed italic line-clamp-2">
                &ldquo;{problem}&rdquo;
              </p>
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" /> Result
              </h4>
              <p className="text-sm text-foreground/80 leading-relaxed line-clamp-2">
                {solution}
              </p>
            </div>
          </div>

          {features.length > 0 && (
            <div className="mb-10 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-4">Core System Features</h4>
              <div className="grid grid-cols-2 gap-y-3 gap-x-6">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-medium text-foreground/70">
                    <span className="w-1 h-1 rounded-full bg-snow-accent/50" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-auto pt-4 flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-bold px-3 py-1.5 rounded-lg border border-white/5 bg-white/5 text-muted-foreground group-hover:border-snow-accent/30 transition-all duration-500"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative Corner Glow */}
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-snow-accent/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-snow-accent/20 transition-all" />
    </motion.div>
  );
};

export default ProjectCard;
