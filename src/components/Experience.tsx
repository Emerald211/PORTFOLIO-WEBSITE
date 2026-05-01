/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Experience as ExperienceType } from "../constants";

export const Experience = ({
  experiences,
}: {
  experiences: ExperienceType[];
}) => {
  return (
    <section id="experience" className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="sticky top-32 h-fit">
            <h2 className="text-6xl md:text-8xl uppercase leading-[0.8] mb-8 font-serif">
              Professional
              <br />
              <span className="italic">History</span>
            </h2>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-luxury-gold mb-12">
              02 — 4 Years of Professional Growth
            </p>
            <div className="max-w-sm">
              <p className="text-luxury-cream/40 text-sm leading-loose uppercase tracking-widest">
                Proven delivery across frontend and backend systems, with strong
                focus on maintainability, speed, and business impact.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-0 border-l border-luxury-cream/10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-12 border-b border-luxury-cream/10 hover:bg-luxury-gold/5 transition-colors"
              >
                {/* Sketchy line connector */}
                <div className="absolute top-1/2 -left-[1px] w-4 h-px bg-luxury-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />

                <div className="flex flex-col md:flex-row justify-between items-baseline gap-4 mb-4">
                  <h3 className="text-3xl font-serif tracking-tight">
                    {exp.company}
                  </h3>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-luxury-gold/60">
                    {exp.period}
                  </span>
                </div>

                <div className="flex flex-col gap-4">
                  <h4 className="text-lg font-serif italic text-luxury-gold/80">
                    {exp.role}
                  </h4>
                  <p className="text-luxury-cream/60 leading-relaxed max-w-xl">
                    {exp.description}
                  </p>
                </div>

                {/* Background sketch element */}
                <svg
                  className="absolute bottom-4 right-4 w-12 h-12 text-luxury-gold opacity-5 group-hover:opacity-10 transition-opacity"
                  viewBox="0 0 100 100"
                >
                  <path
                    d="M 10 90 Q 50 10, 90 90"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
