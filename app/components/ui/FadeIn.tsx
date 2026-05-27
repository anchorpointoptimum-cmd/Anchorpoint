"use client";

import {
  motion,
} from "framer-motion";

type FadeInProps = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

export default function FadeIn({
  children,
  delay = 0,
  y = 24,
  className = "",
}: FadeInProps) {

  return (

    <motion.div
      initial={{
        opacity: 0,
        y,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: "linear" as const,
      }}
      className={className}
    >

      {children}

    </motion.div>

  );

}