import { motion } from 'framer-motion';

export default function AnimatedButton({text, className,}){

  const containerVariants = {
      initial: {},
      hover: {},
  };

  const childVariants = {
      initial: {
          y: "0%",
      },
      hover: {
          y: "-100%",
          transition: {
              type: "tween",
              duration: 0.2,
              ease: "easeOut"
          }
      },
  };

  return (
    <>
    <motion.div
        whileHover="hover"
        variants={containerVariants}
        className={`border border-black ${className} overflow-hidden`}
    >
        <motion.div
            variants={childVariants}
            className={`w-full h-full text-black bg-white flex justify-center items-center px-4 py-2`}
        >
            <p className="text-xl font-light">{text}</p>
        </motion.div>
        <motion.div
            variants={childVariants}
            className="w-full h-full text-white bg-black flex justify-center items-center px-4 py-2"
        >
            <p className="text-xl font-light">{text}</p>
        </motion.div>
    </motion.div>
    </>
  )
}