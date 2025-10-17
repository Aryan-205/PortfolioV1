import { motion } from "motion/react";

export default function ContactMe(){

  const EMAIL_HREF = 'mailto:aaryann5002@gmail.com'; 

  return (
    // Reduced padding and main container to flex-col on small screens
    <section id='section' className="h-full md:h-screen bg-white text-black px-6 md:px-24 py-8 font-sans flex flex-col md:flex-row  overflow-hidden">
      
      {/* Contact Links Column - Adjusted height and alignment */}
      <div className="h-full flex flex-col justify-start md:justify-between w-full md:w-auto">
        {/* Reduced heading size */}
        <p className="text-xl md:text-4xl font-bold text-white w-fit px-2 py-1 md:px-4 md:py-2 tracking-tighter bg-black mb-8 md:mb-0">Contact Me</p>
        
        {/* List of Contact Links - Reduced gap and text size */}
        <div className="flex flex-col justify-start md:justify-center gap-4 md:gap-8 items-start h-full w-full">
            <motion.a
              initial={{scale:1.5,opacity:0}}
              whileInView={{scale:1, opacity:1}}
              transition={{duration:1, ease:"easeInOut"}}
              id="p0"
              href="mailto:aaryann5002@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                borderBottom: '4px solid black',
                lineHeight: 1.1,
              }}
            >
              {/* Reduced text size */}
              <p className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase text-black hover:text-white hover:bg-black transition duration-300">
                EMAIL
              </p>
            </motion.a>

            <motion.a
              initial={{scale:1.5,opacity:0}}
              whileInView={{scale:1, opacity:1}}
              transition={{duration:1, ease:"easeInOut"}}
              id="p1"
              href="https://www.linkedin.com/in/aryan-bola-a95913316/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                borderBottom: '4px solid black',
                lineHeight: 1.1,
              }}
            >
              {/* Reduced text size */}
              <p className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase text-black hover:text-white hover:bg-black transition duration-300">
                LINKEDIN
              </p>
            </motion.a>

            <motion.a
              initial={{scale:1.5,opacity:0}}
              whileInView={{scale:1, opacity:1}}
              transition={{duration:1, ease:"easeInOut"}}
              id="p2"
              href="https://github.com/Aryan-205"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                borderBottom: '4px solid black',
                lineHeight: 1.1,
              }}
            >
              {/* Reduced text size */}
              <p className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase text-black hover:text-white hover:bg-black transition duration-300">
                GITHUB
              </p>
            </motion.a>

            <motion.a
              initial={{scale:1.5,opacity:0}}
              whileInView={{scale:1, opacity:1}}
              transition={{duration:1, ease:"easeInOut"}}
              id="p3"
              href="https://x.com/BolaJi_69"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                borderBottom: '4px solid black',
                lineHeight: 1.1,
              }}
              className="relative"
            >
              {/* Reduced text size */}
              <p className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase text-black hover:text-white hover:bg-black transition duration-300">
                TWITTER
              </p>
              {/* Reduced text and padding */}
              <p className="absolute bg-black text-green-500 px-2 -bottom-7 md:-bottom-8 right-0 p-1 text-xs md:text-base">Most Active</p>
            </motion.a>
        </div>

        {/* Send Mail Button - Reduced padding and font size */}
        <div className="pt-8 md:pt-0">
          <a
            href={EMAIL_HREF}
            className="inline-block px-6 py-3 md:px-8 md:py-4 border-4 border-black bg-black text-white text-base md:text-2xl font-extrabold uppercase tracking-wider  hover:bg-gray-800 transition duration-300"
          >
            SEND MAIL
          </a>
        </div>
      </div>
      
      {/* Message Column - Reduced text size and width */}
      <div className="flex justify-start md:justify-center tracking-tight text-2xl md:text-6xl flex-col items-start md:items-end gap-4 md:gap-8 font-light w-full pt-12 md:pt-0">
        <motion.p
          initial={{scale:1.5,opacity:0}}
          whileInView={{scale:1, opacity:1}}
          transition={{duration:1, ease:"easeInOut"}}
        >
          Got a project in mind?
        </motion.p>
        <motion.p  
          initial={{scale:1.5,opacity:0}}
          whileInView={{scale:1, opacity:1}}
          transition={{duration:1, ease:"easeInOut"}}
        >
          Want to talk tech stack?
        </motion.p>
        <motion.p
          initial={{scale:1.5,opacity:0}}
          whileInView={{scale:1, opacity:1}}
          transition={{duration:1, ease:"easeInOut"}}
        >
          My inbox is always open.
        </motion.p>
        <motion.p
          initial={{scale:1.5,opacity:0}}
          whileInView={{scale:1, opacity:1}}
          transition={{duration:1, ease:"easeInOut"}}
          className="w-full md:w-[40rem] text-start md:text-end"
        >
          Find me across the web, or drop me a direct line.
        </motion.p>
      </div>
      
    </section>
  );
};