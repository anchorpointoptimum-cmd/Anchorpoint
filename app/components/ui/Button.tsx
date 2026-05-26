"use client";

import Link from "next/link";
import { ReactNode } from "react";

export interface ButtonProps {

  children: ReactNode;

  href?: string;

  onClick?: () => void;

  className?: string;

  variant?: "primary" | "secondary" | "ghost";

  target?: string;

}

export default function Button({

  children,

  href,

  onClick,

  className = "",

  variant = "primary",

  target,

}: ButtonProps) {

  const variants = {

    primary: `
      bg-white
      text-black
      hover:bg-slate-200
    `,

    secondary: `
      bg-white/10
      border
      border-white/10
      text-white
      hover:bg-white/15
    `,

    ghost: `
      bg-transparent
      text-white
      hover:bg-white/5
    `,

  };

  const styles = `
    inline-flex
    items-center
    justify-center
    gap-3

    rounded-2xl

    px-6
    py-4

    text-sm
    tracking-[-0.02em]

    transition-all
    duration-300

    hover:scale-[1.02]
    active:scale-[0.98]

    backdrop-blur-xl

    ${variants[variant]}

    ${className}
  `;

  if (href) {

    return (

      <Link
        href={href}
        className={styles}
        target={target}
      >

        {children}

      </Link>

    );

  }

  return (

    <button
      onClick={onClick}
      className={styles}
    >

      {children}

    </button>

  );

}