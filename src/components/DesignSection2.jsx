import { useState } from "react";
import DesignGalleryMasonry from "./DesignGalleryMansory";
import AnimatedButton from "./AnimatedButton";

export default function DesignSection2(){

  const [all, setAll] = useState(false)

  return (
    <>
    <div className="h-full w-full flex justify-center items-center relative px-4">
      <div className={`w-fit relative mb-24 overflow-hidden rounded-3xl ${all ? "" : "h-[30rem] md:h-[40rem]"}`}> 
          <DesignGalleryMasonry />
          <div className={`h-full w-full inset-0 absolute bg-gradient-to-t from-black/80 to-transparent z-10 flex justify-center items-end pb-8 ${all ? "hidden" : ""}`}>
            <button onClick={()=>setAll(true)} >
              <AnimatedButton text={"View All"} className={"w-fit h-[44px] rounded-3xl"}/>
            </button>
          </div>
      </div>
    </div>
    </>
  )
}
