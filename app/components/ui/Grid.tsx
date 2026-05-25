interface GridProps {
  children: React.ReactNode;
  cols?: 1 | 2 | 3 | 4;
  className?: string;
}

export default function Grid({
  children,
  cols = 3,
  className = "",
}: GridProps) {

  const colStyles = {
    1: "grid-cols-1",
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
  };

  return (
    <div
      className={`
        grid
        gap-8
        ${colStyles[cols]}
        ${className}
      `}
    >
      {children}
    </div>
  );
}