"use client";

import { ReactNode } from "react";

/* =========================================================
   TYPES
========================================================= */

interface SovereignContainerProps {

  children: ReactNode;

  className?: string;

}

/* =========================================================
   COMPONENT
========================================================= */

export default function SovereignContainer({
  children,
  className = "",
}: SovereignContainerProps) {

  return (

    <div
      className={`
        relative
        max-w-[1680px]
        mx-auto
        px-6
        md:px-10
        xl:px-14
        ${className}
      `}
    >
      {children}
    </div>

  );

}