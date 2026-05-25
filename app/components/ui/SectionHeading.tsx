interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({
  title,
  subtitle,
}: SectionHeadingProps) {

  return (
    <div className="text-center mb-16">

      <h2 className="text-4xl md:text-5xl mb-4 text-slate-900">
        {title}
      </h2>

      {subtitle && (
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}

    </div>
  );
}