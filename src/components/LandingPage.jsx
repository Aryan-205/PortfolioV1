import { motion } from 'motion/react';
import Navbar from './Navbar';
import PhotoStack from './PhotoStack';

const AnimatedButton = ({ text, className }) => {
    return (
        <button className={`relative overflow-hidden group transition-all duration-300 ${className} px-6 py-2 bg-black text-white hover:bg-white hover:text-black border-2 border-black rounded-3xl`}>
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-0">
                {text === "Open to work" ? (<><div className='flex items-center gap-2'><div className='w-2 h-2 rounded-full bg-lime-400 animate-pulse'/>Open to work</div></>) : text}
            </span>
            <span className="absolute inset-0 bg-white transition-transform duration-300 transform -translate-x-full group-hover:translate-x-0"></span>
            <span className="absolute inset-0 bg-black transition-transform duration-300 transform translate-x-0 group-hover:translate-x-full"></span>
        </button>
    );
};

const MeImages = [
    "/me/Me1.jpeg",
    "/me/Me3.jpeg",
    "/me/Me2.JPG",
]

const bookImages = [
    "/books/book2.png",
    "/books/book1.png",
    "/books/book3.png",
]

export default function LandingPage({ scrollToAbout, scrollToTechStack, scrollToProjects, scrollToContact }) {

    return (
        <div className="h-[90vh] md:h-screen w-full bg-white relative flex flex-col">
            {/* Navigation */}
            <Navbar scrollToAbout={scrollToAbout} scrollToTechStack={scrollToTechStack} scrollToProjects={scrollToProjects} scrollToContact={scrollToContact} />

            <div className="flex h-full w-full justify-center items-center overflow-visible px-8">
                <PhotoStack images={MeImages} className="w-20 h-20 rounded-2xl" />
                <PhotoStack images={bookImages} className="w-12 h-auto rounded-lg" />
            </div>

            {/* Footer Elements */}
            <div className='w-full flex justify-between px-4 md:px-12 py-4 md:py-8 z-20 absolute bottom-8'>
                
                {/* Scroll Button / Music Toggle Icon */}
                <div className='flex gap-2 justify-center cursor-pointer relative z-50'>
                    <AnimatedButton text={"Open to work"} className={"text-xs rounded-full"}/>
                </div>
            </div>
        </div>
    );
}
