import { Check } from "lucide-react";

interface FeatureListProps {
  items: string[];
}

export default function FeatureList({
  items
}: FeatureListProps) {

  return (

    <div className="space-y-5">

      {items.map((item, index) => (

        <div
          key={index}
          className="flex items-start gap-4"
        >

          <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">

            <Check className="w-4 h-4 text-[var(--color-primary)]" />

          </div>

          <p className="text-[var(--color-text-secondary)] leading-relaxed">

            {item}

          </p>

        </div>

      ))}

    </div>

  );
}