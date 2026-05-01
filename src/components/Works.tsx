/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Project } from "../constants";
import { ExternalLink, Hash } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
  key?: string | number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="group relative border-luxury-cream/10 border p-8 md:p-12 hover:border-luxury-gold/50 transition-all duration-700 bg-luxury-gray/30 backdrop-blur-sm"
    >
      {/* Sketchy corner accent */}
      <svg
        className="absolute -top-1 -left-1 w-8 h-8 text-luxury-gold opacity-0 group-hover:opacity-100 transition-opacity"
        viewBox="0 0 32 32"
      >
        <path
          d="M 0 32 L 0 0 L 32 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
      <svg
        className="absolute -bottom-1 -right-1 w-8 h-8 text-luxury-gold opacity-0 group-hover:opacity-100 transition-opacity"
        viewBox="0 0 32 32"
      >
        <path
          d="M 32 0 L 32 32 L 0 32"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>

      <div className="flex justify-between items-start mb-12">
        <div>
          <span className="font-mono text-[9px] uppercase tracking-widest text-luxury-gold mb-2 block">
            {project.year} • {project.role}
          </span>
          <h3 className="text-4xl md:text-5xl font-serif tracking-tight group-hover:italic transition-all">
            {project.title}
          </h3>
        </div>
        {project.demoUrl ? (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title} website`}
            className="text-luxury-cream/30 hover:text-luxury-gold transition-colors"
          >
            <ExternalLink size={20} />
          </a>
        ) : (
          <span className="text-luxury-cream/20" aria-hidden="true">
            <ExternalLink size={20} />
          </span>
        )}
      </div>

      <p className="text-luxury-cream/50 text-sm md:text-base leading-relaxed mb-12 max-w-lg">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-4 mt-auto">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="flex items-center gap-1 text-[10px] font-mono text-luxury-cream/40 uppercase tracking-tighter"
          >
            <Hash size={8} /> {tag}
          </span>
        ))}
      </div>

      {/* Background large index */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] font-serif opacity-[0.02] pointer-events-none group-hover:opacity-[0.05] transition-opacity">
        0{index + 1}
      </div>
    </motion.div>
  );
};

export const Works = ({ projects }: { projects: Project[] }) => {
  return (
    <section id="selected-works" className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div>
            <h2 className="text-[12vw] md:text-7xl uppercase leading-none mb-4">
              Selected
              <br />
              <span className="italic scribble-underline">Case Studies</span>
            </h2>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-luxury-gold">
              01 — Curated Engineering
            </p>
          </div>
          <p className="max-w-xs text-xs text-luxury-cream/40 uppercase tracking-wider leading-loose">
            A precise selection of full-stack implementations demonstrating
            technical proficiency, performance optimization, and creative
            problem solving.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-1">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
