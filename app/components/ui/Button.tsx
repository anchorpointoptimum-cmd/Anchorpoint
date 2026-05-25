interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
}

export default function Button({
  children,
  onClick,
  href,
  target,
  rel,
}: ButtonProps) {

  const className =
    "bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg transition-colors inline-block";

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
}