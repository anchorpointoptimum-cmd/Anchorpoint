"use client";

import { ReactNode } from "react";

import { motion } from "framer-motion";

import {
  panelHover,
} from "@/app/lib/motion";

/* =========================================================
   TYPES
========================================================= */

interface GlassSurfaceProps {

  children: ReactNode;

  className?: string;

}

/* =========================================================
   COMPONENT
========================================================= */

export default function GlassSurface({
  children,
  className = "",
}: GlassSurfaceProps) {

  return (

    <motion.div
      {...panelHover}
      className={`
        relative
        overflow-hidden
        rounded-[34px]
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        ${className}
      `}
    >

      {/* Glow Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-white/[0.05]
          to-transparent
          opacity-40
          pointer-events-none
        "
      />

      {/* Content */}
      <div
        className="
          relative
          z-10
        "
      >
        {children}
      </div>

    </motion.div>

  );

}