import {
    SiNextdotjs, SiNodedotjs, SiMongodb, SiTailwindcss,
    SiPostgresql, SiPrisma, SiExpress, SiVite, SiTypescript,
    SiHtml5, SiPython, SiRedux, SiAuth0, SiGithub, SiFigma, SiCanva,
    SiFramer, SiJavascript, SiCplusplus,
    SiZod
} from 'react-icons/si';
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaReact, FaLock, FaLink, FaDatabase, FaGlobe } from 'react-icons/fa';
import { LuServer, LuLayers3 } from "react-icons/lu";
import { GoDatabase } from "react-icons/go";
import { VscTools } from "react-icons/vsc";

const techStack = [
    {
        title: "Frontend",
        icon: LuLayers3,
        cols: 2,
        technologies: [
            { name: "React", Icon: FaReact },
            { name: "Next.js", Icon: SiNextdotjs },
            { name: "Motion", Icon: TbBrandFramerMotion },
            { name: "Tailwind CSS", Icon: SiTailwindcss },
            { name: "Zustand", Icon: FaGlobe },
            { name: "Redux", Icon: SiRedux },
            { name: "HTML5 & CSS3", Icon: SiHtml5 },
            { name: "Vite", Icon: SiVite },
            { name: "ThreeJS", Icon: SiVite },
            { name: "GSAP", Icon: SiVite },
        ],
    },
    {
        title: "Backend",
        icon: LuServer,
        cols: 2,
        technologies: [
            { name: "Node.js", Icon: SiNodedotjs },
            { name: "Express", Icon: SiExpress },
            { name: "Python", Icon: SiPython },
            { name: "Zod", Icon: SiZod },
            { name: "JavaScript", Icon: SiJavascript },
            { name: "TypeScript", Icon: SiTypescript },
            { name: "Auth0", Icon: SiAuth0 },
            { name: "JWT", Icon: FaLock },
            { name: "WebSocket", Icon: FaLink },
            { name: "C++", Icon: SiCplusplus },
        ],
    },
    {
        title: "Databases",
        icon: GoDatabase,
        cols: 4,
        technologies: [
            { name: "PostgreSQL", Icon: SiPostgresql },
            { name: "MongoDB", Icon: SiMongodb },
            { name: "Prisma", Icon: SiPrisma },
            { name: "Appwrite", Icon: FaDatabase },
        ],
    },
    {
        title: "Tools",
        icon: VscTools,
        cols: 4,
        technologies: [
            { name: "Git / GitHub", Icon: SiGithub },
            { name: "Framer", Icon: SiFramer },
            { name: "Figma", Icon: SiFigma },
            { name: "Canva", Icon: SiCanva },
        ],
    },
];

const TechStackCard = ({ title, Icon, technologies, cols }) => (
    <div className={`group p-4 sm:p-8 border border-white rounded-2xl bg-white text-black transition duration-500 ease-in-out hover:bg-white hover:text-black shadow-2xl`}>
        <div className="flex items-center space-x-4 mb-4 sm:mb-6">
            <Icon className="w-6 h-6 sm:w-8 sm:h-8 stroke-black transition duration-500" />
            <h2 className="text-xl sm:text-3xl font-black uppercase tracking-wider">{title}</h2>
        </div>

        <div className={`grid grid-cols-2 lg:grid-cols-${cols} gap-3`}>
            {technologies.map((tech) => (
                <div key={tech.name} className="flex items-center space-x-3 text-sm sm:text-lg font-semibold">
                    <tech.Icon className="w-4 h-4 sm:w-5 sm:h-5 text-black transition duration-500" />
                    <span>{tech.name}</span>
                </div>
            ))}
        </div>
    </div>
);


export default function TechStack() {
  return (
   <div className="w-full relative bg-white px-6 md:px-24 py-4 md:py-12 gap-4 flex flex-col">
      <p className='w-full text-5xl md:text-8xl font-bold tracking-tight'>Skills I Got</p>
      <div className='w-full'>
        <section id="tech-stack" className="w-full bg-black text-white p-2 sm:p-4 flex flex-col items-center rounded-3xl ">
            <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                {techStack.map((category) => (
                    <TechStackCard
                        key={category.title}
                        title={category.title}
                        Icon={category.icon} 
                        technologies={category.technologies}
                        cols={category.cols}
                    />
                ))}
            </div>
        </section>
      </div>
    </div>
  );
}