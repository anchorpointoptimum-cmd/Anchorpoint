"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="
        fixed bottom-8 right-8 z-50
        w-14 h-14
        rounded-full
        bg-teal-500
        text-white
        shadow-lg
        flex items-center justify-center
        transition-all duration-300
        hover:bg-teal-600
        hover:-translate-y-1
      "
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}