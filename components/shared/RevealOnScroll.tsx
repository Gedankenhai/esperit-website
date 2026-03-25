"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { fadeUp } from "@/lib/animations";

interface RevealOnScrollProps {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
}

export function RevealOnScroll({
  children,
  variants = fadeUp,
  className,
  delay = 0,
}: RevealOnScrollProps) {
  const delayedVariants: Variants = {
    hidden: variants.hidden,
    visible: {
      ...(typeof variants.visible === "object" ? variants.visible : {}),
      transition: {
        ...(typeof variants.visible === "object" &&
        "transition" in variants.visible &&
        typeof variants.visible.transition === "object"
          ? variants.visible.transition
          : {}),
        delay,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={delayedVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
