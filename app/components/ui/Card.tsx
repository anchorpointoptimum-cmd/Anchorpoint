import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
}: CardProps) {

  return (

    <div
      className={`
        bg-[var(--color-card)]
        border
        border-[var(--color-border)]
        rounded-[var(--radius-card)]
        p-8
        ${className}
      `}
    >

      {children}

    </div>

  );
}