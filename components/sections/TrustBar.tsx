"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { counterReveal, stagger } from "@/lib/animations";
import { siteConfig } from "@/lib/config";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="font-mono text-3xl font-bold text-white">
      {count}
      {suffix}
    </span>
  );
}

export function TrustBar() {
  const metrics = [
    {
      value: siteConfig.socialProof.yearsExperience,
      suffix: "+",
      label: "Jahre Berufserfahrung",
    },
    {
      value: siteConfig.socialProof.completedProjects,
      suffix: "+",
      label: "abgeschlossene Projekte",
    },
  ];

  return (
    <section aria-label="Kennzahlen" className="bg-primary py-8">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 text-center"
      >
        {metrics.map((m) => (
          <motion.div key={m.label} variants={counterReveal}>
            <AnimatedCounter target={m.value} suffix={m.suffix} />
            <span className="mt-1 block text-sm text-white/70">{m.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
