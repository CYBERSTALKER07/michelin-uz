'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export default function TextReveal({ children, delay = 0 }: { children: ReactNode, delay?: number }) {
  return (
    <div className="overflow-hidden inline-block w-full">
      <motion.div
        initial={{ y: "100%", opacity: 0, rotate: 2 }}
        whileInView={{ y: 0, opacity: 1, rotate: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}
