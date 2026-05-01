/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Github, Linkedin, MessageCircle, Twitter } from "lucide-react";
import { SKILLS } from "../constants";

export const TechnicalDNA = () => {
  return (
    <section id="skills" className="py-32 px-8 bg-luxury-gray/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          <div>
            <h2 className="text-5xl md:text-6xl uppercase leading-[0.8] mb-8 font-serif">
              <span className="italic">Skills</span>
            </h2>
            <p className="text-luxury-cream/50 text-sm leading-loose max-w-xs">
              Meticulously balanced across the entire stack. Engineering is not
              just code—it's the sculpture of digital systems.
            </p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-12">
            {Object.entries(SKILLS).map(([category, items], i) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex flex-col gap-6"
              >
                <h4 className="font-mono text-[10px] uppercase tracking-[0.4em] text-luxury-gold border-b border-luxury-gold/20 pb-4">
                  {category}
                </h4>
                <div className="flex flex-col gap-3">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="text-xl font-serif text-luxury-cream/80 hover:text-luxury-cream transition-colors cursor-default hover:italic"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="py-32 px-8 border-t border-luxury-cream/5">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-[15vw] md:text-[10vw] font-serif uppercase leading-none mb-12 tracking-tighter mix-blend-difference">
          Let's <span className="italic">Build</span>
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mt-20 border-b border-luxury-cream/10 pb-20">
          <div className="text-left">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-luxury-gold mb-4">
              Availability
            </p>
            <p className="text-xl font-serif">
              Open for frontend and backend
              <br />
              development opportunities.
            </p>
          </div>

          <div className="flex flex-col items-end gap-4">
            <a
              href="mailto:aderibigbeemmanuel2004@gmail.com"
              className="text-3xl md:text-5xl font-serif hover:italic transition-all break-all md:break-normal"
            >
              aderibigbeemmanuel2004@gmail.com
            </a>
            <div className="flex flex-wrap justify-end gap-6 font-mono text-[10px] uppercase tracking-widest text-luxury-cream/40">
              <a
                href="https://github.com/Emerald211"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-luxury-gold transition-colors inline-flex items-center gap-2"
                aria-label="Open GitHub profile"
              >
                <Github size={14} /> GitHub / Emerald211
              </a>
              <a
                href="https://www.linkedin.com/in/emmanueladeribigbe01/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-luxury-gold transition-colors inline-flex items-center gap-2"
                aria-label="Open LinkedIn profile"
              >
                <Linkedin size={14} /> LinkedIn / emmanueladeribigbe01
              </a>
              <a
                href="https://x.com/Edrums011"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-luxury-gold transition-colors inline-flex items-center gap-2"
                aria-label="Open X profile"
              >
                <Twitter size={14} /> X / Edrums011
              </a>
              <a
                href="https://wa.me/2347064158452"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-luxury-gold transition-colors inline-flex items-center gap-2"
                aria-label="Open WhatsApp chat"
              >
                <MessageCircle size={14} /> WhatsApp / +2347064158452
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center pt-8 font-mono text-[9px] uppercase tracking-[0.2em] text-luxury-cream/20">
          <p>© 2026 Emmanuel Aderibigbe</p>
          <p>Frontend + Backend / Remote</p>
        </div>
      </div>
    </footer>
  );
};
