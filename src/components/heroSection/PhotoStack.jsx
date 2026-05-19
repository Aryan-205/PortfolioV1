import { motion } from 'motion/react';

const photoStackTransition = { type: 'spring', stiffness: 230, damping: 30 };

const photoStackContainerVariants = {
    rest: {},
    hover: {},
};

const photoBackLeftVariants = {
    rest: { rotate: -12, x: '-10%', zIndex: 1 },
    hover: { rotate: 0, x: '-110%', zIndex: 1, transition: photoStackTransition },
};

const photoBackRightVariants = {
    rest: { rotate: 12, x: '10%', zIndex: 2 },
    hover: { rotate: 0, x: '110%', zIndex: 2, transition: photoStackTransition },
};

const photoFrontVariants = {
    rest: { rotate: 0, x: 0, zIndex: 10 },
    hover: { rotate: 0, x: 0, zIndex: 10, scale: 1.02, transition: photoStackTransition },
};

const baseImageClassName =
    'col-start-1 row-start-1 object-cover ring-2 ring-gray-300 ring-offset-2 ring-offset-white shadow-lg origin-center';

export default function PhotoStack({
    images,
    className = 'w-80 h-80 rounded-2xl',
    containerClassName = '',
    alt = 'Photo',
}) {
    const imageClassName = `${baseImageClassName} ${className}`.trim();

    return (
        <motion.div
            variants={photoStackContainerVariants}
            initial="rest"
            whileHover="hover"
            className={`grid grid-cols-1 grid-rows-1 place-items-center relative cursor-pointer py-4 px-10 ${containerClassName}`.trim()}
        >
            <motion.img
                variants={photoBackLeftVariants}
                transition={{ type: 'spring', stiffness: 230, damping: 40 }}
                src={images[0]}
                alt={alt}
                className={imageClassName}
            />
            <motion.img
                variants={photoBackRightVariants}
                transition={{ type: 'spring', stiffness: 230, damping: 40 }}
                src={images[1]}
                alt={alt}
                className={imageClassName}
            />
            <motion.img
                variants={photoFrontVariants}
                src={images[2]}
                alt={alt}
                className={imageClassName}
            />
        </motion.div>
    );
}
