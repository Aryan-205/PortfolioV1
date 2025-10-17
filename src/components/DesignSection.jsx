import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function DesignSection(){

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#section1",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      }
    });

    tl.to("#imgBox", {
      width: "100vw",   // force viewport width
      height: "100vh",  // force viewport height
      ease: "none"
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);


  return (

    <div id="section1" className="h-[200vh] w-full bg-black text-white relative rounded-t-3xl">
      <div className='sticky top-0 w-full h-screen inset-0 p-8 md:p-24'>
        <div className='h-full w-full flex flex-col justify-between'>
          <p 
            className="font-extrabold leading-none tracking-tight uppercase text-5xl md:text-8xl text-start"
            style={{ letterSpacing: '-0.05em' }} 
          >
            Designs
          </p>

          <p 
            className="font-extrabold leading-none tracking-widest uppercase text-5xl md:text-8xl text-end"
            style={{ letterSpacing: '-0.05em' }}
          >
            That Inspire
          </p>
        </div>

        <div className="absolute z-10 inset-0 w-full h-screen flex justify-center items-center">
          <div id="p1" className='h-[100px] md:h-40 w-40 md:w-60 bg-amber-500 absolute left-8 md:left-[6rem] top-24 md:top-[40%] overflow-hidden'>
            <img src="/designs/d24.webp" className="h-full w-full object-cover" alt="" />
          </div>
          <div id="p2" className='h-[100px] md:h-40 w-40 md:w-60 bg-green-500 absolute left-10 md:left-[22rem] top-[78%] md:top-[60%] overflow-hidden'>
            <img src="/designs/d25.webp" className="h-full w-full object-cover" alt="" />
          </div>
          <div id="imgBox" className='bg-white absolute h-60 w-40 overflow-hidden flex justify-center items-center z-20'>
            <div className="h-full w-full bg-white overflow-hidden flex justify-center">
              <img src="/designs/Iphone.webp" className="object-cover" alt="" />
            </div>
          </div>
          <div id="p3" className='h-[100px] md:h-40 w-40 md:w-60 bg-red-500 absolute right-8 md:right-[22rem] top-[10rem] md:top-[15%]'>
            <img src="/designs/d26.webp" className="h-full w-full object-fill" alt="" />
          </div>
          <div id="p4" className='h-[100px] md:h-40 w-40 md:w-60 bg-yellow-500 absolute right-7 md:right-[6rem] top-[36rem] md:top-[30%]'>
            <img src="/designs/d27.webp" className="h-full w-full object-fill" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};