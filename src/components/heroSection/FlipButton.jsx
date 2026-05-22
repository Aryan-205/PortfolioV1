import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const DEFAULT_STAGGER = 0.045;

export function FlipButton({
  text,
  href,
  onClick,
  className,
  letterClassName,
  hoverLetterClassName = "text-neutral-500",
  stagger = DEFAULT_STAGGER,
  uppercase = true,
  ...props
}) {
  const letters = text.split("");
  const [hovered, setHovered] = useState(false);

  const sharedClassName = cn(
    "inline-flex cursor-pointer px-2 py-1 leading-none",
    uppercase && "uppercase tracking-wide",
    className,
  );

  const sharedHandlers = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    onFocus: () => setHovered(true),
    onBlur: () => setHovered(false),
  };

  const content = letters.map((char, i) => (
    <span
      key={`${char}-${i}`}
      className="inline-block h-[1.15em] overflow-hidden"
    >
      <motion.span
        className="flex flex-col"
        animate={{ y: hovered ? "-50%" : "0%" }}
        transition={{
          duration: 0.35,
          ease: [0.33, 1, 0.68, 1],
          delay: hovered
            ? i * stagger
            : (letters.length - 1 - i) * stagger * 0.6,
        }}
      >
        <span className={cn("inline-block", letterClassName)}>
          {char === " " ? "\u00A0" : char}
        </span>
        <span
          className={cn(
            "inline-block",
            hoverLetterClassName,
            letterClassName,
          )}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      </motion.span>
    </span>
  ));

  if (href) {
    return (
      <Link
        href={href}
        className={sharedClassName}
        aria-label={text}
        {...sharedHandlers}
        {...props}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={sharedClassName}
      aria-label={text}
      {...sharedHandlers}
      {...props}
    >
      {content}
    </button>
  );
}
