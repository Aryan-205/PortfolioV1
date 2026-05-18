import { motion } from 'motion/react';
import AnimatedButton from './AnimatedButton';

export default function Navbar({ scrollToAbout, scrollToTechStack, scrollToProjects, scrollToContact }) {
    return (
      <motion.nav 
      initial={{ y: -100, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ duration: 0.5 }} 
      className="w-full flex justify-between items-center px-4 md:px-12 py-6 text-sm md:text-xl z-20 absolute top-0 bg-transparent text-black "
  >
      <p className="font-semibold tracking-wide text-xl md:text-2xl backdrop-blur-sm">Aryan Bola</p>

      <div className="flex justify-between items-center space-x-2 md:space-x-4 font-light">
          <button onClick={scrollToAbout} className='hidden sm:block hover:border-black hover:border transition duration-300 cursor-pointer px-2 py-1 md:px-4 md:py-1 rounded-full backdrop-blur-sm'>
              About
          </button>
          <button onClick={scrollToTechStack} className='hidden sm:block hover:border-black hover:border transition duration-300 cursor-pointer px-2 py-1 md:px-4 md:py-1 rounded-full backdrop-blur-sm'>
              Tech Stack
          </button>
          <button onClick={scrollToProjects} className='hidden sm:block hover:border-black hover:border transition duration-300 cursor-pointer px-2 py-1 md:px-4 md:py-1 rounded-full backdrop-blur-sm'>
              Projects
          </button>
          <div onClick={scrollToContact}>
              <AnimatedButton text={"Let's Talk"} className={"h-9 md:h-12 text-xs md:text-base px-4 py-1"}/>
          </div>
      </div>
  </motion.nav>
    );
}