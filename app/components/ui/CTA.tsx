import Button from "./Button";

interface CTAProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonHref: string;
}

export default function CTA({
  title,
  subtitle,
  buttonText,
  buttonHref,
}: CTAProps) {

  return (

    <div className="bg-[var(--color-text-primary)] rounded-2xl p-10 md:p-14 text-center">

      <h2 className="text-3xl md:text-5xl text-white mb-6 leading-tight">

        {title}

      </h2>

      {subtitle && (

        <p className="text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed text-lg">

          {subtitle}

        </p>

      )}

      <Button
        href={buttonHref}
        className="
          inline-flex
          items-center
          justify-center
          bg-[var(--color-primary)]
          hover:bg-[var(--color-primary-hover)]
          text-white
          px-8
          py-4
          rounded-lg
          transition-all
          duration-300
          hover:scale-105
        "
      >

        {buttonText}

      </Button>

    </div>

  );
}