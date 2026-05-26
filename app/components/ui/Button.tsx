"use client";

import Link from "next/link";
import React from "react";

export interface ButtonProps {

  children: React.ReactNode;

  href?: string;

  onClick?: () => void;

  className?: string;

  variant?: "primary" | "secondary" | "ghost";

  target?: string;

  rel?: string;

  type?: "button" | "submit" | "reset";

  disabled?: boolean;

}

export default function Button({

  children,

  href,

  onClick,

  className = "",

  variant = "primary",

  target,

  rel,

  type = "button",

  disabled = false,

}: ButtonProps) {

  const variantStyles = {

    primary: `
      bg-[var(--color-primary)]
      text-white
      hover:bg-[var(--color-primary-hover)]
    `,

    secondary: `
      bg-[var(--color-card)]
      border
      border-[var(--color-border)]
      text-[var(--color-text-primary)]
      hover:bg-[var(--color-surface)]
    `,

    ghost: `
      bg-transparent
      text-[var(--color-text-primary)]
      hover:bg-[var(--color-surface)]
    `,

  };

  const styles = `
    inline-flex
    items-center
    justify-center

    transition-all
    duration-300

    disabled:opacity-50
    disabled:pointer-events-none

    ${variantStyles[variant]}

    ${className}
  `;

  if (href) {

    return (

      <Link
        href={href}
        target={target}
        rel={rel}
        className={styles}
      >

        {children}

      </Link>

    );

  }

  return (

    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={styles}
    >

      {children}

    </button>

  );

}