/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export const SketchBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-10">
      <svg width="100%" height="100%" className="w-full h-full">
        <pattern
          id="sketch-grid"
          width="100"
          height="100"
          patternUnits="userSpaceOnUse"
        >
          {/* Rough horizontal line */}
          <motion.path
            d="M 0 50 Q 25 48, 50 52 T 100 50"
            stroke="currentColor"
            fill="transparent"
            strokeWidth="0.5"
            animate={{
              d: [
                "M 0 50 Q 25 48, 50 52 T 100 50",
                "M 0 51 Q 25 52, 50 49 T 100 51",
                "M 0 50 Q 25 48, 50 52 T 100 50"
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Rough vertical line */}
          <motion.path
            d="M 50 0 Q 48 25, 52 50 T 50 100"
            stroke="currentColor"
            fill="transparent"
            strokeWidth="0.5"
            animate={{
              d: [
                "M 50 0 Q 48 25, 52 50 T 50 100",
                "M 51 0 Q 52 25, 49 50 T 51 100",
                "M 50 0 Q 48 25, 52 50 T 50 100"
              ]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        </pattern>
        <rect width="100%" height="100%" fill="url(#sketch-grid)" />

        {/* Individual floating scribbles */}
        {[...Array(6)].map((_, i) => (
          <motion.path
            key={i}
            d={`M ${Math.random() * 100} ${Math.random() * 100} L ${Math.random() * 100 + 10} ${Math.random() * 100 + 10}`}
            stroke="currentColor"
            fill="transparent"
            strokeWidth="1"
            className="text-luxury-gold opacity-20"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.2, x: [0, 20, 0], y: [0, 20, 0] }}
            transition={{ 
              duration: 15 + i * 2, 
              repeat: Infinity, 
              ease: "linear",
              delay: i * 2
            }}
            style={{ 
              position: 'absolute',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
          />
        ))}
      </svg>
    </div>
  );
};
