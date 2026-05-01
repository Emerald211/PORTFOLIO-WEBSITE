/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, Download, Menu } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference relative">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-sm md:text-base font-serif tracking-widest uppercase flex items-center gap-3"
      >
        <img
          src="/1776946638762.jpeg"
          alt="Emmanuel Aderibigbe profile"
          className="w-7 h-7 rounded-full object-cover border border-luxury-gold/50"
        />
        Emmanuel Aderibigbe
      </motion.div>

      <div className="hidden md:flex gap-12 items-center">
        {["Selected Works", "Skills", "Experience"].map((item, i) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase().replace(" ", "-")}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
            className="text-[10px] uppercase tracking-widest hover:text-luxury-gold transition-colors font-mono"
          >
            {item}
          </motion.a>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <motion.a
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          href="/Emmanuel%20Aderibigbe%20resume.pdf"
          download
          className="hidden sm:inline-flex items-center gap-2 border border-luxury-gold/40 rounded-full px-5 py-2 text-[10px] uppercase tracking-widest text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black transition-all duration-500"
        >
          Download CV
        </motion.a>

        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 border border-luxury-cream/20 rounded-full px-5 py-2 text-[10px] uppercase tracking-widest hover:bg-luxury-cream hover:text-luxury-black transition-all duration-500"
        >
          Contact <Menu size={12} />
        </motion.button>
      </div>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="hidden md:block absolute left-1/2 -translate-x-1/2 top-[72px] font-mono text-[10px] uppercase tracking-[0.4em] text-luxury-gold"
      >
        Full-Stack Software Developer
      </motion.p>
    </nav>
  );
};

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-8 relative overflow-hidden">
      <div className="z-10 text-center max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-mono text-[10px] uppercase tracking-[0.4em] mb-8 text-luxury-gold md:hidden"
        >
          Full-Stack Software Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-[8vw] leading-[0.9] font-serif uppercase mb-12 tracking-tighter"
        >
          Emmanuel
          <br />
          <span className="italic relative">
            Aderibigbe
            <motion.svg
              className="absolute -bottom-4 left-0 w-full"
              viewBox="0 0 400 20"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1 }}
            >
              <path
                d="M 0 10 Q 100 0, 200 10 T 400 10"
                stroke="#C5A059"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </motion.svg>
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12 flex justify-center"
        >
          <img
            src="/1776946638762.jpeg"
            alt="Portrait of Emmanuel Aderibigbe"
            className="w-36 h-36 md:w-44 md:h-44 rounded-full border border-luxury-gold/40 object-cover"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8 items-end text-left max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-luxury-cream/60 font-light leading-relaxed">
              I am a software developer with 4 years of hands-on experience
              building robust web products across both frontend and backend. I
              focus on clean architecture, performance, and user-first product
              delivery.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col gap-6"
          >
            <div className="flex gap-4">
              <span className="px-3 py-1 border border-luxury-cream/10 rounded-full text-[9px] uppercase tracking-widest">
                Frontend
              </span>
              <span className="px-3 py-1 border border-luxury-cream/10 rounded-full text-[9px] uppercase tracking-widest">
                Backend
              </span>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="#selected-works"
                className="group flex items-center gap-4 text-xs font-mono uppercase tracking-[0.2em] self-start border-b border-luxury-gold/30 pb-2 hover:border-luxury-gold transition-colors"
              >
                Explore Portfolio{" "}
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </a>

              <a
                href="/Emmanuel%20Aderibigbe%20resume.pdf"
                download
                className="inline-flex items-center gap-2 border border-luxury-gold/40 rounded-full px-4 py-2 text-[10px] font-mono uppercase tracking-[0.2em] text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black transition-all duration-500"
              >
                <Download size={12} /> Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute top-0 right-[15%] w-px h-full bg-gradient-to-b from-transparent via-luxury-cream/10 to-transparent" />
      <div className="absolute top-0 left-[15%] w-px h-full bg-gradient-to-b from-transparent via-luxury-cream/10 to-transparent" />
    </section>
  );
};
