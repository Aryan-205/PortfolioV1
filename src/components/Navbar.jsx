import { motion } from "motion/react";
import { FlipButton } from "./heroSection/FlipButton";

export default function Navbar({ scrollToAbout, scrollToProjects, scrollToContact }) {
  const navItems = [
    {
      id: 1,
      name: "Projects",
      onClick: scrollToProjects,
    },
    {
      id: 2,
      name: "Contact",
      onClick: scrollToContact,
    },
    {
      id: 3,
      name: "About",
      onClick: scrollToAbout,
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

      <motion.div className="flex items-center gap-1 md:gap-2">
        {navItems.map((item) => (
          <FlipButton
            key={item.id}
            text={item.name}
            onClick={item.onClick}
            className="text-sm font-light md:text-base"
          />
        ))}
      </motion.div>
    </motion.nav>
  );
}
