"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

import MailIcon from "@/icons/Mail";
import LinkedInIcon from "@/icons/LinkedIn";
import ResumeIcon from "@/icons/Resume";
import GithubIcon from "@/icons/Github";
import TwitterIcon from "@/icons/Twitter";
import { PREVIEW_COMPONENTS } from "@/components/contactPreviews";
import ResumeFullscreenDialog from "@/components/ResumeFullscreenDialog";

const ICON_SIZE = 18;

/** Anchor point on the preview (0–1). Cursor sits on this corner/edge by default. */
export const PREVIEW_ANCHOR_PRESETS = {
  "top-left": { x: 0, y: 0 },
  "top-center": { x: 0.5, y: 0 },
  "top-right": { x: 1, y: 0 },
  "center-left": { x: 0, y: 0.5 },
  center: { x: 0.5, y: 0.5 },
  "center-right": { x: 1, y: 0.5 },
  "bottom-left": { x: 0, y: 1 },
  "bottom-center": { x: 0.5, y: 1 },
  "bottom-right": { x: 1, y: 1 },
};

const DEFAULT_PREVIEW_ANCHOR = "bottom-left";

function resolvePreviewAnchor(anchor) {
  if (!anchor) return PREVIEW_ANCHOR_PRESETS[DEFAULT_PREVIEW_ANCHOR];
  if (typeof anchor === "string") {
    return PREVIEW_ANCHOR_PRESETS[anchor] ?? PREVIEW_ANCHOR_PRESETS[DEFAULT_PREVIEW_ANCHOR];
  }
  return anchor;
}

const socialLinks = [
  {
    id: 1,
    type: "email",
    href: "mailto:aaryann5002@gmail.com",
    Icon: MailIcon,
    label: "EMAIL",
  },
  {
    id: 2,
    type: "twitter",
    href: "https://x.com/BolatwtX",
    Icon: TwitterIcon,
    label: "TWITTER / X",
  },
  {
    id: 3,
    type: "resume",
    href: null,
    Icon: ResumeIcon,
    label: "RESUME",
  },
  {
    id: 4,
    type: "github",
    href: "https://github.com/Aryan-205",
    Icon: GithubIcon,
    label: "GITHUB",
  },
  {
    id: 5,
    type: "linkedin",
    href: "https://www.linkedin.com/in/aryan-bola-a95913316/",
    Icon: LinkedInIcon,
    label: "LINKEDIN",
    previewAnchor: "bottom-right",
  },
];

function SocialPreview({
  type,
  x,
  y,
  visible,
  anchor = DEFAULT_PREVIEW_ANCHOR,
  offset = { x: 0, y: 0 },
}) {
  const Preview = PREVIEW_COMPONENTS[type];
  if (!Preview) return null;

  const { x: anchorX, y: anchorY } = resolvePreviewAnchor(anchor);

  return (
    <motion.div
      className="pointer-events-none absolute z-50"
      style={{
        x,
        y,
        top: 0,
        left: 0,
        translateX: `calc(${-anchorX * 100}% + ${offset.x}px)`,
        translateY: `calc(${-anchorY * 100}% + ${offset.y}px)`,
      }}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={visible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.18 }}
    >
      <Preview />
    </motion.div>
  );
}

function SocialItem({ link, onResumeOpen }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const isResume = link.type === "resume";

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 300, damping: 28 });
  const y = useSpring(rawY, { stiffness: 300, damping: 28 });

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set(e.clientX - rect.left);
    rawY.set(e.clientY - rect.top);
  };

  const triggerClassName =
    "flex h-11 w-full items-center justify-center rounded-lg border border-dashed border-black px-2 py-2 transition-all duration-300 select-none group cursor-pointer active:scale-95 md:h-auto md:w-auto md:gap-3 md:rounded-xl md:px-5 md:py-3 md:hover:scale-110";

  const motionProps = {
    className: triggerClassName,
    transition: { duration: 0.2 },
    initial: { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
  };

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {isResume ? (
        <motion.button
          type="button"
          aria-label="Open resume"
          onClick={onResumeOpen}
          {...motionProps}
        >
          <link.Icon size={ICON_SIZE} />
        </motion.button>
      ) : (
        <motion.a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          {...motionProps}
        >
          <link.Icon size={ICON_SIZE} />
        </motion.a>
      )}

      <div className="hidden md:block">
        <SocialPreview
          type={link.type}
          x={x}
          y={y}
          visible={hovered}
          anchor={link.previewAnchor}
          offset={link.previewOffset}
        />
      </div>
    </div>
  );
}

export default function ContactMe() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <section
      id="contact"
      className="flex w-full flex-col justify-center gap-6 border-x border-dashed border-neutral-400/80 bg-white px-4 py-8 font-sans text-black md:gap-10 md:px-10 md:py-10"
    >
      <div className="grid w-full grid-cols-5 gap-2 sm:max-w-lg sm:mx-auto md:max-w-none md:flex md:justify-around md:gap-3">
        {socialLinks.map((link) => (
          <SocialItem
            key={link.id}
            link={link}
            onResumeOpen={() => setResumeOpen(true)}
          />
        ))}
      </div>

      <ResumeFullscreenDialog
        open={resumeOpen}
        onOpenChange={setResumeOpen}
      />
    </section>
  );
}
