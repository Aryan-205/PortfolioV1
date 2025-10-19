// import { motion, useInView, useAnimate } from "motion/react";
// import { useEffect, useState, useRef } from "react";
// import { MdMyLocation } from "react-icons/md";
// import { FaRegClock } from "react-icons/fa6";

// export default function About() {
//   const [time, setTime] = useState(new Date());
  
//   const svgContainerRef = useRef(null);
//   const isInView = useInView(svgContainerRef, {
//     margin: "0px 0px -100px 0px",
//   });

//   const [scope, animate] = useAnimate();

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTime(new Date());  
//     }, 1000);

//     if (isInView) {
//       animate(
//         '#path-main', 
//         { pathLength: [0, 1] }, 
//         { 
//           duration: 2.5, 
//           ease: "easeInOut",
//           delay: 0.2 
//         }
//       );
//       animate(
//         '#path-line-1, #path-line-2', 
//         { pathLength: [0, 1] },
//         { 
//           duration: 1.5, 
//           ease: "easeOut",
//           delay: 1.5 
//         }
//       );
//     }
    
//     return () => {
//         clearInterval(interval);
//     };
//   }, [isInView, animate]); 

//   return (
//     <div className="h-full md:h-screen w-full relative bg-white overflow-hidden">
//       <div className="py-6 px-6 md:px-8">
//         <p className="text-6xl md:text-9xl font-bold tracking-tighter">Know about Me </p>
//       </div>
//       <div className="p-4 md:p-6 h-full md:h-[76%]">
//         <div className="flex flex-col md:flex-row justify-center items-center w-full h-full bg-black rounded-[24px] md:rounded-[48px] p-6 md:p-12">
//           <img
//             src="/Me1.jpeg"
//             className="hidden md:block md:h-full rounded-l-2xl object-cover w-full md:w-auto"
//             alt="Aryan Bola"
//           />
//           <div className="w-full h-full pt-4 md:pt-0 md:pl-6 text-white flex flex-col justify-between items-start gap-4 md:gap-8 z-10">
//             <p className="text-2xl md:text-4xl font-semibold">Who am I?</p>
//             <div className="flex flex-col justify-between">
//               <p className="text-base md:text-xl font-light pb-4">
//                 Hi, I am <span className="text-orange-500">Aryan Bola</span>, 20 years old and a 2nd year student at Kirori Mal College, DU
//               </p>
//               <p className="text-base md:text-xl font-light pb-4">
//                 I am a self-taught creative{" "}
//                 <span className="text-orange-500 italic"> Web Developer</span>,{" "}
//                 <span className="text-blue-500 italic">Web Designer</span>,
//                 and <span className="text-green-500 italic">UI/UX designer</span>{" "}
//                 based in Delhi, India, Origanally from Jhunjhunu, Rajasthan I am passionate in catering my works for emerging start ups and small businesses that make an impact,
//                 inspire and connect with people.
//               </p>
//               <p className="text-base md:text-xl font-light">
//                 When I am not developing or designing, I'm constantly seeking new
//                 ways to learn and grow. I’m always on the lookout for the next
//                 challenge. I also enjoy spending time distracting myself by
//                 reading some cool books, travelling or binge shows.
//               </p>
//             </div>
            
//             <div className="flex flex-col md:flex-row justify-between w-full gap-4 text-xl md:text-2xl font-extralight pt-4 md:pt-0">
//               <div className="flex flex-col md:flex-row gap-4">
//                 <p className="flex items-center gap-2">
//                   <FaRegClock />
//                   {
//                     time.toLocaleTimeString("en-US", {
//                     hour: "numeric",
//                     minute: "2-digit",
//                     hour12: true
//                   })}
//                 </p>
//                 <p className="flex items-center gap-2">
//                   <MdMyLocation />
//                   Delhi, India</p>
//               </div>
//               <div ref={svgContainerRef} className="absolute bottom-4 right-4 md:bottom-10 md:right-20 z-50">
//                 <motion.svg 
//                     ref={scope} 
//                     className="w-40 md:w-80 object-contain"  
//                     viewBox="0 0 973 635" 
//                     fill="none" 
//                     xmlns="http://www.w3.org/2000/svg"
//                 >
                
//                     <motion.path 
//                         id="path-main"
//                         d="M140 306C140 306 147.752 340.505 183 365.5C276.001 431.448 367.921 195.821 408.662 71.6995C414.046 55.2967 439.478 57.0665 442.161 74.1205L480.636 318.691C483.016 333.818 464.686 343.52 453.431 333.136C396.642 280.739 286.04 182.141 247.323 172.017C241.953 170.613 237.669 174.79 236.415 180.197C228.258 215.37 201.657 346.065 258.5 339.593C382.66 325.456 435.534 289.077 500.3 177.081C501.086 175.721 501.728 173.999 502.099 172.473C517.121 110.756 487.634 363.284 571 351C653.199 338.888 644.868 224.5 644.868 149.5C644.868 -8.95898 636.023 468.003 633.605 601.375C633.36 614.902 617.834 621.372 608.231 611.843C581.759 585.571 541.743 541.036 528 500C470.47 328.221 814.172 299.393 755.5 128C742.208 89.1702 729.074 62.0336 718.82 44.1045C711.994 32.1686 697.01 36.4405 695.739 50.1318L669.002 338.162C667.227 357.279 697.015 363.546 703.691 345.545C719.25 303.589 734.908 266.282 744.5 256.5C795 205 815.5 259.5 815.5 321C815.5 375.669 859 373 859 373" 
//                         stroke="url(#paint0_linear_367_183)" 
//                         strokeWidth="32" 
//                         strokeLinecap="round" 
//                         initial={{ pathLength: 0 }}
//                     />
                    
//                     <motion.path 
//                         id="path-line-1"
//                         d="M16 476.5C22.4 476.5 645.667 398.833 956.5 360" 
//                         stroke="url(#paint1_linear_367_183)" 
//                         strokeWidth="32" 
//                         strokeLinecap="round"
//                         initial={{ pathLength: 0 }}
//                     />
                    
//                     <motion.path 
//                         id="path-line-2"
//                         d="M16 542.5L925.678 414.826C938.572 413.016 948.113 426.544 942.082 438.083L887.5 542.5" 
//                         stroke="url(#paint2_linear_367_183)" 
//                         strokeWidth="32" 
//                         strokeLinecap="round"
//                         initial={{ pathLength: 0 }}
//                     />
                    
//                     <path d="M140 306C140 306 147.752 340.505 183 365.5C276.001 431.448 367.921 195.821 408.662 71.6995C414.046 55.2967 439.478 57.0665 442.161 74.1205L480.636 318.691C483.016 333.818 464.686 343.52 453.431 333.136C396.642 280.739 286.04 182.141 247.323 172.017C241.953 170.613 237.669 174.79 236.415 180.197C228.258 215.37 201.657 346.065 258.5 339.593C382.66 325.456 435.534 289.077 500.3 177.081C501.086 175.721 501.728 173.999 502.099 172.473C517.121 110.756 487.634 363.284 571 351C653.199 338.888 644.868 224.5 644.868 149.5C644.868 -8.95898 636.023 468.003 633.605 601.375C633.36 614.902 617.834 621.372 608.231 611.843C581.759 585.571 541.743 541.036 528 500C470.47 328.221 814.172 299.393 755.5 128C742.208 89.1702 729.074 62.0336 718.82 44.1045C711.994 32.1686 697.01 36.4405 695.739 50.1318L669.002 338.162C667.227 357.279 697.015 363.546 703.691 345.545C719.25 303.589 734.908 266.282 744.5 256.5C795 205 815.5 259.5 815.5 321C815.5 375.669 859 373 859 373" stroke="#161716" strokeWidth="5" strokeLinecap="round" />
//                     <path d="M16 476.5C22.4 476.5 645.667 398.833 956.5 360" stroke="#161716" strokeWidth="5" strokeLinecap="round" />
//                     <path d="M16 542.5L925.678 414.826C938.572 413.016 948.113 426.544 942.082 438.083L887.5 542.5" stroke="#161716" strokeWidth="5" strokeLinecap="round" />
                    
//                     <defs>
//                     <linearGradient id="paint0_linear_367_183" x1="499.5" y1="0" x2="499.5" y2="635" gradientUnits="userSpaceOnUse">
//                     <stop stopColor="#43DA40"></stop>
//                     <stop offset="1" stopColor="#2F28A9"></stop>
//                     </linearGradient>
//                     <linearGradient id="paint1_linear_367_183" x1="486.25" y1="360" x2="486.25" y2="476.5" gradientUnits="userSpaceOnUse">
//                     <stop stopColor="#43DA40"></stop>
//                     <stop offset="1" stopColor="#2F28A9"></stop>
//                     </linearGradient>
//                     <linearGradient id="paint2_linear_367_183" x1="486.25" y1="410.5" x2="486.25" y2="542.5" gradientUnits="userSpaceOnUse">
//                     <stop stopColor="#43DA40"></stop>
//                     <stop offset="1" stopColor="#2F28A9"></stop>
//                     </linearGradient>
//                     </defs>
//                 </motion.svg>
//               </div>
//               <img
//                 src="/Me1.jpeg"
//                 className="absolute bottom-12 right-12 w-20 h-auto md:hidden rounded-2xl object-cover"
//                 alt="Aryan Bola"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { motion, useInView, useAnimate } from "motion/react";
import { useEffect, useState, useRef } from "react";
import { MdMyLocation } from "react-icons/md";
import { FaRegClock } from "react-icons/fa6";

export default function About() {
  const [time, setTime] = useState(new Date());
  
  const svgContainerRef = useRef(null);
  const isInView = useInView(svgContainerRef, {
    margin: "0px 0px -100px 0px",
  });

  const [scope, animate] = useAnimate();

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());  
    }, 1000);

    if (isInView) {
      animate(
        '#path-main', 
        { pathLength: [0, 1] }, 
        { 
          duration: 2.5, 
          ease: "easeInOut",
          delay: 0.2 
        }
      );
      animate(
        '#path-line-1, #path-line-2', 
        { pathLength: [0, 1] },
        { 
          duration: 1.5, 
          ease: "easeOut",
          delay: 1.5 
        }
      );
    }
    
    return () => {
        clearInterval(interval);
    };
  }, [isInView, animate]); 

  return (
    <div className="w-full relative bg-white overflow-hidden">
      <div className="py-6 px-6 md:px-8">
        <p className="text-6xl md:text-9xl font-bold tracking-tighter">Know about Me </p>
      </div>
      <div className="p-4 md:p-6">
        <div className="flex flex-col md:flex-row justify-center items-center w-full bg-black rounded-[24px] md:rounded-[48px] p-6 md:p-12">
          <img
            src="/Me1.jpeg"
            // RE-ADDED: md:max-h-96 to constrain the image height on desktop
            className="hidden md:block rounded-l-2xl object-cover w-full md:w-auto md:max-h-96" 
            alt="Aryan Bola"
          />
          <div className="w-full pt-4 md:pt-0 md:pl-6 text-white flex flex-col justify-between items-start gap-4 md:gap-8 z-10">
            <p className="text-2xl md:text-4xl font-semibold">Who am I?</p>
            <div className="flex flex-col justify-between">
              <p className="text-base md:text-xl font-light pb-4">
                Hi, I am <span className="text-orange-500">Aryan Bola</span>, 20 years old and a 2nd year student at Kirori Mal College, DU
              </p>
              <p className="text-base md:text-xl font-light pb-4">
                I am a self-taught creative{" "}
                <span className="text-orange-500 italic"> Web Developer</span>,{" "}
                <span className="text-blue-500 italic">Web Designer</span>,
                and <span className="text-green-500 italic">UI/UX designer</span>{" "}
                based in Delhi, India, Origanally from Jhunjhunu, Rajasthan I am passionate in catering my works for emerging start ups and small businesses that make an impact,
                inspire and connect with people.
              </p>
              <p className="text-base md:text-xl font-light">
                When I am not developing or designing, I'm constantly seeking new
                ways to learn and grow. I’m always on the lookout for the next
                challenge. I also enjoy spending time distracting myself by
                reading some cool books, travelling or binge shows.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between w-full gap-4 text-xl md:text-2xl font-extralight pt-4 md:pt-0">
              <div className="flex flex-col md:flex-row gap-4">
                <p className="flex items-center gap-2">
                  <FaRegClock />
                  {
                    time.toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true
                  })}
                </p>
                <p className="flex items-center gap-2">
                  <MdMyLocation />
                  Delhi, India</p>
              </div>
              <div ref={svgContainerRef} className="absolute bottom-4 right-4 md:bottom-10 md:right-20 z-50">
                <motion.svg 
                    ref={scope} 
                    className="w-40 md:w-80 object-contain"  
                    viewBox="0 0 973 635" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                
                    <motion.path 
                        id="path-main"
                        d="M140 306C140 306 147.752 340.505 183 365.5C276.001 431.448 367.921 195.821 408.662 71.6995C414.046 55.2967 439.478 57.0665 442.161 74.1205L480.636 318.691C483.016 333.818 464.686 343.52 453.431 333.136C396.642 280.739 286.04 182.141 247.323 172.017C241.953 170.613 237.669 174.79 236.415 180.197C228.258 215.37 201.657 346.065 258.5 339.593C382.66 325.456 435.534 289.077 500.3 177.081C501.086 175.721 501.728 173.999 502.099 172.473C517.121 110.756 487.634 363.284 571 351C653.199 338.888 644.868 224.5 644.868 149.5C644.868 -8.95898 636.023 468.003 633.605 601.375C633.36 614.902 617.834 621.372 608.231 611.843C581.759 585.571 541.743 541.036 528 500C470.47 328.221 814.172 299.393 755.5 128C742.208 89.1702 729.074 62.0336 718.82 44.1045C711.994 32.1686 697.01 36.4405 695.739 50.1318L669.002 338.162C667.227 357.279 697.015 363.546 703.691 345.545C719.25 303.589 734.908 266.282 744.5 256.5C795 205 815.5 259.5 815.5 321C815.5 375.669 859 373 859 373" 
                        stroke="url(#paint0_linear_367_183)" 
                        strokeWidth="32" 
                        strokeLinecap="round" 
                        initial={{ pathLength: 0 }}
                    />
                    
                    <motion.path 
                        id="path-line-1"
                        d="M16 476.5C22.4 476.5 645.667 398.833 956.5 360" 
                        stroke="url(#paint1_linear_367_183)" 
                        strokeWidth="32" 
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                    />
                    
                    <motion.path 
                        id="path-line-2"
                        d="M16 542.5L925.678 414.826C938.572 413.016 948.113 426.544 942.082 438.083L887.5 542.5" 
                        stroke="url(#paint2_linear_367_183)" 
                        strokeWidth="32" 
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                    />
                    
                    <path d="M140 306C140 306 147.752 340.505 183 365.5C276.001 431.448 367.921 195.821 408.662 71.6995C414.046 55.2967 439.478 57.0665 442.161 74.1205L480.636 318.691C483.016 333.818 464.686 343.52 453.431 333.136C396.642 280.739 286.04 182.141 247.323 172.017C241.953 170.613 237.669 174.79 236.415 180.197C228.258 215.37 201.657 346.065 258.5 339.593C382.66 325.456 435.534 289.077 500.3 177.081C501.086 175.721 501.728 173.999 502.099 172.473C517.121 110.756 487.634 363.284 571 351C653.199 338.888 644.868 224.5 644.868 149.5C644.868 -8.95898 636.023 468.003 633.605 601.375C633.36 614.902 617.834 621.372 608.231 611.843C581.759 585.571 541.743 541.036 528 500C470.47 328.221 814.172 299.393 755.5 128C742.208 89.1702 729.074 62.0336 718.82 44.1045C711.994 32.1686 697.01 36.4405 695.739 50.1318L669.002 338.162C667.227 357.279 697.015 363.546 703.691 345.545C719.25 303.589 734.908 266.282 744.5 256.5C795 205 815.5 259.5 815.5 321C815.5 375.669 859 373 859 373" stroke="#161716" strokeWidth="5" strokeLinecap="round" />
                    <path d="M16 476.5C22.4 476.5 645.667 398.833 956.5 360" stroke="#161716" strokeWidth="5" strokeLinecap="round" />
                    <path d="M16 542.5L925.678 414.826C938.572 413.016 948.113 426.544 942.082 438.083L887.5 542.5" stroke="#161716" strokeWidth="5" strokeLinecap="round" />
                    
                    <defs>
                    <linearGradient id="paint0_linear_367_183" x1="499.5" y1="0" x2="499.5" y2="635" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#43DA40"></stop>
                    <stop offset="1" stopColor="#2F28A9"></stop>
                    </linearGradient>
                    <linearGradient id="paint1_linear_367_183" x1="486.25" y1="360" x2="486.25" y2="476.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#43DA40"></stop>
                    <stop offset="1" stopColor="#2F28A9"></stop>
                    </linearGradient>
                    <linearGradient id="paint2_linear_367_183" x1="486.25" y1="410.5" x2="486.25" y2="542.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#43DA40"></stop>
                    <stop offset="1" stopColor="#2F28A9"></stop>
                    </linearGradient>
                    </defs>
                </motion.svg>
              </div>
              <img
                src="/Me1.jpeg"
                className="absolute bottom-12 right-12 w-20 h-auto md:hidden rounded-2xl object-cover"
                alt="Aryan Bola"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}