import { motion } from 'motion/react';

export default function Navbar({ scrollToAbout, scrollToProjects, scrollToContact }) {

  const navItems = [
    {
      id: 1,
      name: "Projects",
      onClick: scrollToProjects
    },
    {
      id: 2,
      name: "Contact",
      onClick: scrollToContact
    },
    {
      id: 3,
      name: "About",
      onClick: scrollToAbout
    }
  ]

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex w-full items-center justify-between px-4 py-6 text-sm text-neutral-800 md:px-12 md:text-base"
        >
            <p className="text-lg font-semibold tracking-tight md:text-xl">A©</p>

            <motion.div className="flex items-center gap-1 font-light md:gap-2">
                {
                  navItems.map((item) => (
                    <>
                    <FlipButton key={item.id} text={item.name} onClick={item.onClick} />
                    {/* {index !== navItems.length - 1 && <span className="text-neutral-400">|</span>} */}
                    </>
                  ))
                }
                
            </motion.div>
        </motion.nav>
    );
}

const FlipButton = ({ text, onClick }) => {
    return (
        <button onClick={onClick} className="cursor-pointer px-2 py-1 transition-colors hover:text-neutral-500 uppercase tracking-wide">
            {text}
        </button>
    );
}
