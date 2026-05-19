import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { File, Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const socialLinks = [
  {
    id: 1,
    href: "mailto:aaryann5002@gmail.com",
    icon: <Mail strokeWidth={1.5} />,
    label: "EMAIL",
    preview: {
      title: "aaryann5002@gmail.com",
      sub: "Drop me a message anytime",
      bg: "bg-red-50",
      accent: "text-red-500",
    },
  },
  {
    id: 2,
    href: "https://www.linkedin.com/in/aryan-bola-a95913316/",
    icon: <FaLinkedin strokeWidth={1.5} />,
    label: "LINKEDIN",
    preview: {
      title: "Aryan Bola",
      sub: "Connect with me on LinkedIn",
      bg: "bg-blue-50",
      accent: "text-blue-600",
    },
  },
  {
    id: 3,
    href: "",
    icon: <File strokeWidth={1.5} />,
    label: "RESUME",
    preview: {
      title: "My Resume",
      sub: "View my work & experience",
      bg: "bg-neutral-100",
      accent: "text-neutral-700",
    },
  },
  {
    id: 4,
    href: "https://github.com/Aryan-205",
    icon: <SiGithub />,
    label: "GITHUB",
    preview: {
      title: "Aryan-205",
      sub: "Check out my projects",
      bg: "bg-zinc-900",
      accent: "text-white",
      dark: true,
    },
  },
  {
    id: 5,
    href: "https://x.com/BolatwtX",
    icon: <FaTwitter strokeWidth={1.5} />,
    label: "TWITTER / X",
    preview: {
      title: "@BolatwtX",
      sub: "Follow me on X",
      bg: "bg-sky-50",
      accent: "text-sky-500",
    },
  },
];

function SocialItem({ link }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const x = useSpring(rawX, { stiffness: 300, damping: 28 });
  const y = useSpring(rawY, { stiffness: 300, damping: 28 });

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set(e.clientX - rect.left + 16);
    rawY.set(e.clientY - rect.top - 60);
  };

  const { preview } = link;

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <motion.a
        href={link.href || undefined}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center gap-3 px-5 py-3 border border-dashed border-black rounded-xl cursor-pointer select-none group"
        whileHover={{ backgroundColor: "#000", color: "#fff" }}
        transition={{ duration: 0.2 }}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <span className="w-5 h-5">{link.icon}</span>
      </motion.a>

      {/* Cursor-following tooltip card */}
      <motion.div
        className={`pointer-events-none absolute z-50 w-56 rounded-2xl p-4 shadow-xl ${preview.bg} ${preview.dark ? "border border-white/10" : "border border-black/10"}`}
        style={{ x, y, top: 0, left: 0 }}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={hovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }}
        transition={{ duration: 0.18 }}
      >
        <p className={`text-base font-bold ${preview.accent}`}>{preview.title}</p>
        <p className={`text-xs mt-1 ${preview.dark ? "text-white/60" : "text-black/50"}`}>{preview.sub}</p>
      </motion.div>
    </div>
  );
}

export default function ContactMe() {
  return (
    <section
      id="contact"
      className="bg-transparent text-black px-6 md:px-24 py-12 font-sans flex flex-col justify-center gap-10 w-full"
    >
      <div className="flex justify-between w-full gap-3">
        {socialLinks.map((link) => (
          <SocialItem key={link.id} link={link} />
        ))}
      </div>
    </section>
  );
}
