/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from "motion/react";
import { Navbar, Hero } from "./components/Navigation";
import { Works } from "./components/Works";
import { Experience } from "./components/Experience";
import { TechnicalDNA, Footer } from "./components/Footer";
import { SketchBackground } from "./components/SketchBackground";
import { PROJECTS, EXPERIENCE } from "./constants";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative overflow-x-hidden selection:bg-luxury-gold selection:text-luxury-black">
      {/* Smooth scroll bar at top */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-luxury-gold origin-left z-[60]"
        style={{ scaleX }}
      />

      <SketchBackground />
      <Navbar />
      
      <main>
        <Hero />
        <Works projects={PROJECTS} />
        <Experience experiences={EXPERIENCE} />
        <TechnicalDNA />
      </main>

      <Footer />

      {/* Aesthetic decorative elements */}
      <div className="fixed bottom-12 left-12 z-50 hidden xl:block">
        <div className="flex flex-col gap-4">
          <div className="w-px h-24 bg-luxury-cream/20 mx-auto" />
          <p className="font-mono text-[8px] uppercase tracking-[0.5em] [writing-mode:vertical-rl] rotate-180 text-luxury-gold/50">
            Infinite / Architecture / Studio
          </p>
        </div>
      </div>

      <div className="fixed bottom-12 right-12 z-50 hidden xl:block">
        <div className="flex flex-col gap-4 text-right items-end">
          <p className="font-mono text-[8px] uppercase tracking-[0.5em] [writing-mode:vertical-rl] text-luxury-gold/50">
            Scroll to Navigate
          </p>
          <div className="w-px h-24 bg-luxury-cream/20" />
        </div>
      </div>
    </div>
  );
}
