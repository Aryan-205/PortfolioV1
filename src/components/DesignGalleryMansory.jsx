// DesignGalleryMasonry.jsx

import {motion} from "motion/react"

const designs = Array.from({ length: 29 }, (_, i) => ({
  id: i + 1,
  src: `/designs/d${i + 1}.webp`, 
}));

const DesignCard = ({ design }) => {
    return (
        <motion.div 
            layout
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
                type: "spring", 
                stiffness: 100, 
                damping: 18,    
                duration: 0.8   
            }}
            onClick={()=>console.log(design)}
            className='group transition-all duration-300 ease-in-out overflow-hidden relative mb-4 rounded-sm'>
            <img 
                src={design.src}
                className="w-full h-auto block object-cover transition-all duration-500 "
            />
        </motion.div>
    );
};

export default function DesignGalleryMasonry() {
    return (
        // Added max-w-6xl for better centering and padding-y for breathing room
        <div className="w-full h-full pt-8 pb-16 px-4 relative">
            <div 
                className="max-w-6xl columns-2 md:columns-4"
            >
                {designs.map(design => (
                    <DesignCard key={design.id} design={design} />
                ))}
            </div>
        </div>
    );
};
