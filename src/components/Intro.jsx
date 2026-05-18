import React from 'react';
import { motion } from 'motion/react';

export default function Intro() {
  return (
    <motion.section 
      animate={{y: 0}}
      exit={{y: "-110%"}}
      transition={{duration:1, type:"spring", bounce:0.05}}
      id='section' 
      className="fixed inset-0 z-50 h-screen w-full bg-white text-black flex justify-center items-center"
    >
      <div className="flex flex-col justify-center items-center gap-2 overflow-hidden">
        <div className='overflow-hidden'>
          <motion.p 
            initial={{opacity:0, y: 100}}
            animate={{opacity:1, y: 0}}
            transition={{duration:1, type:"spring", bounce:0.1}}
            className="text-xl md:text-4xl lg:text-7xl font-bold tracking-tighter mb-8 md:mb-0 pb-2"
          >Aryan Bola</motion.p>
        </div>
        <div className='overflow-hidden'>
          <motion.p 
            initial={{opacity:0, y: 100}}
            animate={{opacity:1, y: 0}}
            transition={{duration:1, type:"spring", bounce:0.1}}
            className="text-xl md:text-4xl lg:text-6xl font-bold tracking-tighter mb-8 md:mb-0"
          >@2026</motion.p>
        </div>
        
      </div>
      <div className='absolute bottom-0 left-0 w-full flex justify-between items-center text-sm md:text-xl lg:text-2xl p-8'>
        <p>Loading...</p>
        <p>Version 3.0.1 @2026</p>
      </div>
    </motion.section>
  );
}