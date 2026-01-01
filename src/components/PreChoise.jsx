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
        <div className='w-full flex flex-col gap-8'>
          <p className='text-4xl md:text-7xl font-semibold text-left'>Experience</p>
          <div className="flex items-center gap-4">
            <div className='flex items-center'>
              <img src={'BrutanixStudio.png'} className='w-32 h-32 object-cover border-2 bg-black rounded-2xl overflow-hidden' alt="experience"/></div>
            <div className='h-full flex flex-col justify-between py-4'>
              <p className='text-3xl font-semibold'>Brutanix Studio</p>
              <p className='text-xl'>Lead frontend developer</p>
              <p className='text-base text-gray-500'>December 2025 - Present</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}