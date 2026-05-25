interface SectionProps {
  children: React.ReactNode;
  id?: string;
  background?: "white" | "slate";
  className?: string;
}

export default function Section({
  children,
  id,
  background = "white",
  className = "",
}: SectionProps) {

  const backgroundClass =
    background === "slate"
      ? "bg-slate-50"
      : "bg-white";

  return (
    <section
      id={id}
      className={`py-20 ${backgroundClass} ${className}`}
    >
      {children}
    </section>
  );
}