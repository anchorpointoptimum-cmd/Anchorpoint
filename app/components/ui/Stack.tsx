interface StackProps {
  children: React.ReactNode;
  gap?: 4 | 6 | 8 | 10 | 12;
  className?: string;
}

export default function Stack({
  children,
  gap = 8,
  className = "",
}: StackProps) {

  const gaps = {
    4: "space-y-4",
    6: "space-y-6",
    8: "space-y-8",
    10: "space-y-10",
    12: "space-y-12",
  };

  return (
    <div className={`${gaps[gap]} ${className}`}>
      {children}
    </div>
  );
}