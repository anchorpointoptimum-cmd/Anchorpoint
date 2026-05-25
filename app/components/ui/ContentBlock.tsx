interface ContentBlockProps {
  eyebrow?: string;
  title: string;
  description: string;
}

export default function ContentBlock({
  eyebrow,
  title,
  description,
}: ContentBlockProps) {

  return (

    <div className="max-w-3xl">

      {eyebrow && (
        <div className="text-sm tracking-widest uppercase text-teal-600 mb-4">
          {eyebrow}
        </div>
      )}

      <h2 className="text-4xl md:text-5xl text-slate-900 mb-6 leading-tight">
        {title}
      </h2>

      <p className="text-xl text-slate-600 leading-relaxed">
        {description}
      </p>

    </div>

  );
}