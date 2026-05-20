// import {
//     SiNextdotjs, SiNodedotjs, SiMongodb, SiTailwindcss,
//     SiPostgresql, SiPrisma, SiExpress, SiVite, SiTypescript,
//     SiHtml5, SiPython, SiRedux, SiAuth0, SiGithub, SiFigma, SiCanva,
//     SiFramer, SiJavascript, SiCplusplus,
//     SiZod
// } from 'react-icons/si';
// import { TbBrandFramerMotion } from "react-icons/tb";
// import { FaReact, FaLock, FaLink, FaDatabase, FaGlobe } from 'react-icons/fa';
// import { LuServer, LuLayers3 } from "react-icons/lu";
// import { GoDatabase } from "react-icons/go";
// import { VscTools } from "react-icons/vsc";

// const techStack = [
//     {
//         title: "Frontend",
//         icon: LuLayers3,
//         cols: 2,
//         technologies: [
//             { name: "React", Icon: FaReact },
//             { name: "Next.js", Icon: SiNextdotjs },
//             { name: "Motion", Icon: TbBrandFramerMotion },
//             { name: "Tailwind CSS", Icon: SiTailwindcss },
//             { name: "Zustand", Icon: FaGlobe },
//             { name: "Vite", Icon: SiVite },
//             { name: "ThreeJS", Icon: SiVite },
//             { name: "GSAP", Icon: SiVite },
//         ],
//     },
//     {
//         title: "Backend",
//         icon: LuServer,
//         cols: 2,
//         technologies: [
//             { name: "Node.js", Icon: SiNodedotjs },
//             { name: "Express", Icon: SiExpress },
//             { name: "Zod", Icon: SiZod },
//             { name: "JavaScript", Icon: SiJavascript },
//             { name: "TypeScript", Icon: SiTypescript },
//             { name: "Auth0", Icon: SiAuth0 },
//             { name: "JWT", Icon: FaLock },
//             { name: "WebSocket", Icon: FaLink },
//         ],
//     },
//     {
//         title: "Databases",
//         icon: GoDatabase,
//         cols: 4,
//         technologies: [
//             { name: "PostgreSQL", Icon: SiPostgresql },
//             { name: "MongoDB", Icon: SiMongodb },
//             { name: "Prisma", Icon: SiPrisma },
//             { name: "Appwrite", Icon: FaDatabase },
//         ],
//     },
//     {
//         title: "Tools",
//         icon: VscTools,
//         cols: 4,
//         technologies: [
//             { name: "Git / GitHub", Icon: SiGithub },
//             { name: "Framer", Icon: SiFramer },
//             { name: "Figma", Icon: SiFigma },
//             { name: "Canva", Icon: SiCanva },
//         ],
//     },
// ];

import {
    SiNextdotjs, SiNodedotjs, SiMongodb, SiTailwindcss,
    SiPostgresql, SiPrisma, SiExpress, SiVite, SiTypescript,
    SiHtml5, SiPython, SiRedux, SiAuth0, SiGithub, SiFigma, SiCanva,
    SiFramer, SiJavascript, SiCplusplus, SiZod
  } from 'react-icons/si';
  import { TbBrandFramerMotion } from "react-icons/tb";
  import { FaReact, FaLock, FaLink, FaDatabase, FaGlobe, FaLaugh, FaBook, FaBrain } from 'react-icons/fa';
  import { SiExpo } from 'react-icons/si';
  
  const techs = [
    { name: "React",        Icon: FaReact },
    { name: "Next.js",      Icon: SiNextdotjs },
    { name: "Motion",       Icon: TbBrandFramerMotion },
    { name: "Tailwind CSS", Icon: SiTailwindcss },
    { name: "Zustand",      Icon: FaGlobe },
    { name: "Expo",         Icon: SiExpo },
    { name: "ThreeJS",      Icon: SiVite },
    { name: "GSAP",         Icon: SiVite },
    { name: "Node.js",      Icon: SiNodedotjs },
    { name: "Express",      Icon: SiExpress },
    { name: "Zod",          Icon: SiZod },
    { name: "Tanstack Query",      Icon: FaReact },
    { name: "JavaScript",   Icon: SiJavascript },
    { name: "TypeScript",   Icon: SiTypescript },
    { name: "Auth0",        Icon: SiAuth0 },
    { name: "JWT",          Icon: FaLock },
    { name: "WebSocket",    Icon: FaLink },
    { name: "PostgreSQL",   Icon: SiPostgresql },
    { name: "MongoDB",      Icon: SiMongodb },
    { name: "Prisma",       Icon: SiPrisma },
    { name: "Appwrite",     Icon: FaDatabase },
    { name: "Git / GitHub", Icon: SiGithub },
    { name: "Framer",       Icon: SiFramer },
    { name: "Figma",        Icon: SiFigma },
    { name: "Canva",        Icon: SiCanva },
    { name: "Funny",        Icon: FaLaugh },
    { name: "Endless Stories",        Icon: FaBook },
    { name: "Learn anything quickly",        Icon: FaBrain },
  ];
  
  export default function TechStack() {
    return (
      <div className="w-full landing-grid-bg p-10 flex flex-col gap-6">
        <p className="text-5xl md:text-4xl tracking-tight">Skills I Got</p>
        <div className="flex flex-wrap gap-3">
          {techs.map(({ name, Icon }) => (
            <div
              key={name}
              className="flex items-center gap-2 px-4 py-2 border border-neutral-300 rounded-xl bg-neutral-50 hover:bg-black hover:text-white hover:border-black transition duration-200 cursor-pointer text-sm font-medium shadow-[0_0_10px_0_rgba(0,0,0,0.1), inset_0_4_10px_0_rgba(0,0,0,0.1)]"
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  