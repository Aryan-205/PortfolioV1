import {motion} from 'motion/react'

export default function PreChoise(){

  return (
    <>
    <div id="section" className="h-[50vh] md:h-screen w-full bg-white relative p-4 md:p-24 overflow-hidden">
      <div className='flex flex-col justify-between border-x border-black px-2 md:px-4 w-full h-full'>
        <div className='flex flex-col justify-between'>
          <div className='flex justify-between'>
            <motion.p 
              initial={{scale:1.5,opacity:0}}
              whileInView={{scale:1, opacity:1}}
              transition={{duration:1, ease:"easeInOut"}}
              className='text-5xl md:text-9xl font-bold'
            >
              01
            </motion.p>
            <motion.p 
              initial={{scale:1.5,opacity:0}}
              whileInView={{scale:1, opacity:1}}
              transition={{duration:1, ease:"easeInOut"}}
              className='text-5xl md:text-9xl font-light'
            >
              Designer
            </motion.p>
          </div>
          <div className='flex justify-between'>
            <motion.p 
              initial={{scale:1.5,opacity:0}}
              whileInView={{scale:1, opacity:1}}
              transition={{duration:1, ease:"easeInOut"}}
              className='text-5xl md:text-9xl font-bold'
            >
              02
            </motion.p>
            <motion.p 
              initial={{scale:1.5,opacity:0}}
              whileInView={{scale:1, opacity:1}}
              transition={{duration:1, ease:"easeInOut"}}
              className='text-5xl md:text-9xl font-light'
            >
              Developer
            </motion.p>
          </div>
        </div>
        <p id='p3' className="text-xl md:text-4xl font-light">Get a chance to hire a Designer and Developer both in one</p>
      </div>
    </div>
    </>
  )
}