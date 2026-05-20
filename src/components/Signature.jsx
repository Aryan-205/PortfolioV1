import { useState } from "react";

export default function Signature() {

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
  );
}