interface IconCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

export default function IconCard({
  icon: Icon,
  title,
  description,
}: IconCardProps) {

  return (

    <div className="bg-white p-8 rounded-lg border border-slate-200 hover:border-teal-500 hover:shadow-lg transition-all group">

      <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal-500 group-hover:scale-110 transition-all">

        <Icon className="w-6 h-6 text-teal-600 group-hover:text-white transition-colors" />

      </div>

      <h3 className="text-xl mb-3 text-slate-900">
        {title}
      </h3>

      <p className="text-slate-600 leading-relaxed">
        {description}
      </p>

    </div>

  );
}