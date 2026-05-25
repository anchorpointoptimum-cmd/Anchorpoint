"use client";

import { ReactNode } from "react";

import GlassSurface from "./GlassSurface";

/* =========================================================
   TYPES
========================================================= */

interface SystemPanelProps {

  title?: string;

  eyebrow?: string;

  children: ReactNode;

  className?: string;

}

/* =========================================================
   COMPONENT
========================================================= */

export default function SystemPanel({
  title,
  eyebrow,
  children,
  className = "",
}: SystemPanelProps) {

  return (

    <GlassSurface
      className={`
        p-8
        ${className}
      `}
    >

      {(eyebrow || title) && (

        <div className="mb-8">

          {eyebrow && (

            <div
              className="
                text-[11px]
                uppercase
                tracking-[0.22em]
                text-cyan-400
                mb-3
              "
            >
              {eyebrow}
            </div>

          )}

          {title && (

            <h3
              className="
                text-3xl
                tracking-[-0.05em]
                text-white
              "
            >
              {title}
            </h3>

          )}

        </div>

      )}

      {children}

    </GlassSurface>

  );

}