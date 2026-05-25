"use client";

import { ReactNode } from "react";

import { motion } from "framer-motion";

import {
  fadeUp,
} from "@/app/lib/motion";

/* =========================================================
   TYPES
========================================================= */

interface RegistryShellProps {

  children: ReactNode;

}

/* =========================================================
   COMPONENT
========================================================= */

export default function RegistryShell({
  children,
}: RegistryShellProps) {

  return (

    <motion.main
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-black
        text-white
      "
    >

      {/* =====================================================
          GLOBAL GRID ATMOSPHERE
      ===================================================== */}

      <div
        className="
          absolute
          inset-0
          registry-grid
          opacity-[0.04]
          pointer-events-none
        "
      />

      {/* =====================================================
          PRIMARY GLOW
      ===================================================== */}

      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[1400px]
          h-[800px]
          bg-cyan-500/10
          blur-[240px]
          pointer-events-none
        "
      />

      {/* =====================================================
          SECONDARY GLOW
      ===================================================== */}

      <div
        className="
          absolute
          bottom-[-10%]
          right-[-10%]
          w-[700px]
          h-[700px]
          bg-teal-500/10
          blur-[180px]
          pointer-events-none
        "
      />

      {/* =====================================================
          TOP RADIAL
      ===================================================== */}

      <div
        className="
          absolute
          top-[-20%]
          left-[-10%]
          w-[600px]
          h-[600px]
          bg-blue-500/10
          blur-[160px]
          pointer-events-none
        "
      />

      {/* =====================================================
          NOISE OVERLAY
      ===================================================== */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.02]
          mix-blend-soft-light
          bg-[url('/noise.png')]
          pointer-events-none
        "
      />

      {/* =====================================================
          CONTENT LAYER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          w-full
        "
      >

        <div
          className="
            max-w-[1680px]
            mx-auto
            px-6
            md:px-10
            xl:px-14
            py-16
            md:py-20
            space-y-12
            md:space-y-16
          "
        >

          {children}

        </div>

      </div>

    </motion.main>

  );

}