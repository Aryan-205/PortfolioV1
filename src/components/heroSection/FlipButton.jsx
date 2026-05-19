import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const DEFAULT_STAGGER = 0.045;

/**
 * @param {object} props
 * @param {string} props.text
 * @param {() => void} [props.onClick]
 * @param {string} [props.className] - Button classes, e.g. `text-sm`, `text-2xl`, `font-bold`
 * @param {string} [props.letterClassName] - Classes for each letter (top row)
 * @param {string} [props.hoverLetterClassName] - Classes for the letter revealed on hover
 * @param {number} [props.stagger] - Delay between each letter (seconds)
 * @param {boolean} [props.uppercase]
 */
export function FlipButton({
  text,
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

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      className={cn(
        "inline-flex cursor-pointer px-2 py-1 leading-none",
        uppercase && "uppercase tracking-wide",
        className,
      )}
      aria-label={text}
      {...props}
    >
      {letters.map((char, i) => (
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
            <span className={cn("inline-block", hoverLetterClassName, letterClassName)}>
              {char === " " ? "\u00A0" : char}
            </span>
          </motion.span>
        </span>
      ))}
    </button>
  );
}
