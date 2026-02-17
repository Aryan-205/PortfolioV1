import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import DesignGalleryMasonry from "./DesignGalleryMansory";
import AnimatedButton from "./AnimatedButton";

export default function DesignSection2(){

  const [all, setAll] = useState(false)
  const collapsedHeight = "30rem"

  return (
    <>
      <div className="h-full w-full flex justify-center items-center relative px-4">
        <motion.div
          className="w-fit relative mb-24 overflow-hidden rounded-3xl"
          initial={false}
          animate={{
            height: all ? "auto" : collapsedHeight,
          }}
          transition={{
            duration: 0.7,
            ease: [0.32, 0.72, 0, 1],
          }}
        >
          <DesignGalleryMasonry />
          <AnimatePresence>
            {!all && (
              <motion.div
                className="absolute inset-0 w-full bg-gradient-to-t from-black/80 to-transparent z-10 flex justify-center items-end pb-8 rounded-3xl"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <button onClick={() => setAll(true)}>
                  <AnimatedButton text={"View All"} className={"w-fit h-[44px] rounded-3xl"} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
}
