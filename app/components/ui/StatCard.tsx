interface StatCardProps {
  value: string;
  label: string;
  description?: string;
}

export default function StatCard({
  value,
  label,
  description,
}: StatCardProps) {

  return (

    <div className="bg-[var(--color-card)] p-8 rounded-[var(--radius-card)] border border-[var(--color-border)] text-center hover:shadow-[var(--shadow-card)] transition-all duration-300">

      <div className="text-4xl md:text-5xl text-[var(--color-primary)] mb-4">

        {value}

      </div>

      <h3 className="text-xl text-[var(--color-text-primary)] mb-2">

        {label}

      </h3>

      {description && (

        <p className="text-[var(--color-text-secondary)] leading-relaxed">

          {description}

        </p>

      )}

    </div>

  );
}