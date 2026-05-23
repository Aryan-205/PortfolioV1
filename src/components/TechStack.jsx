import {
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiPostgresql,
  SiPrisma,
  SiExpress,
  SiVite,
  SiTypescript,
  SiAuth0,
  SiGithub,
  SiFigma,
  SiCanva,
  SiFramer,
  SiJavascript,
  SiZod,
  SiExpo,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import {
  FaReact,
  FaLock,
  FaLink,
  FaDatabase,
  FaGlobe,
  FaLaugh,
  FaBook,
  FaBrain,
} from "react-icons/fa";

const techs = [
  { name: "React", Icon: FaReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Motion", Icon: TbBrandFramerMotion },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Zustand", Icon: FaGlobe },
  { name: "Expo", Icon: SiExpo },
  { name: "ThreeJS", Icon: SiVite },
  { name: "GSAP", Icon: SiVite },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Express", Icon: SiExpress },
  { name: "Zod", Icon: SiZod },
  { name: "Tanstack Query", Icon: FaReact },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Auth0", Icon: SiAuth0 },
  { name: "JWT", Icon: FaLock },
  { name: "WebSocket", Icon: FaLink },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Prisma", Icon: SiPrisma },
  { name: "Appwrite", Icon: FaDatabase },
  { name: "Git / GitHub", Icon: SiGithub },
  { name: "Framer", Icon: SiFramer },
  { name: "Figma", Icon: SiFigma },
  { name: "Canva", Icon: SiCanva },
  { name: "Endless Stories", Icon: FaBook },
  { name: "Learn anything quickly", Icon: FaBrain },
  { name: "Funny", Icon: FaLaugh },
];

export default function TechStack() {
  return (
    <div className="w-full flex flex-col gap-4 border-x border-dashed border-neutral-400/80 bg-white px-4 py-8 md:gap-6 md:px-10 md:py-10">
      <p className="text-3xl tracking-tight sm:text-4xl">Skills I Got</p>
      <div className="flex flex-wrap gap-2 md:gap-3">
        {techs.map(({ name, Icon }) => (
          <div
            key={name}
            className="flex items-center gap-1.5 rounded-lg border border-neutral-300 bg-neutral-50 px-2.5 py-1.5 text-xs font-medium shadow-[0_0_10px_0_rgba(0,0,0,0.1)] transition duration-200 hover:border-black hover:bg-black hover:text-white md:gap-2 md:rounded-xl md:px-3.5 md:py-2 md:text-sm"
          >
            <Icon className="h-3 w-3 shrink-0 md:h-4 md:w-4" />
            <span>{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
