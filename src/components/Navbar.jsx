import { motion } from "motion/react";
import { FlipButton } from "./heroSection/FlipButton";

export default function Navbar() {
  const navItems = [
    {
      id: 1,
      name: "Projects",
      href: "/projects",
    },
    {
      id: 2,
      name: "Blogs",
      href: "/blogs",
    },
    {
      id: 3,
      name: "Designs",
      href: "/designs",
    },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex w-full items-center justify-between px-4 py-6 text-neutral-800 md:px-12"
    >
      <p className="text-lg font-semibold tracking-tight md:text-xl">AB</p>

      <div className="flex items-center gap-1 md:gap-2">
        {navItems.map((item) => (
          <FlipButton
            key={item.id}
            text={item.name}
            href={item.href}
            className="text-sm font-light md:text-base"
          />
        ))}
      </div>
    </motion.nav>
  );
}
