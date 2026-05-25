interface TextProps {
  children: React.ReactNode;
  variant?: "body" | "lead" | "small";
  className?: string;
}

export default function Text({
  children,
  variant = "body",
  className = "",
}: TextProps) {

  const variants = {
    body: "text-slate-600 leading-relaxed",
    lead: "text-xl text-slate-600 leading-relaxed",
    small: "text-sm text-slate-500 leading-relaxed",
  };

  return (
    <p className={`${variants[variant]} ${className}`}>
      {children}
    </p>
  );
}