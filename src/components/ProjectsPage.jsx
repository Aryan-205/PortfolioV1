import { useEffect, useState } from "react";

const projectData = [
  { id: 1, title: "Windows", description: "Experience the Windows ecosystem in Browser", imageSrc: "/projects/Windows.webp", url: "https://windows-site-sigma.vercel.app/" },
  { id: 2, title: "FlyHigh", description: "A cool website built with ThreeJs", imageSrc: "/designs/d21.webp", url: "https://fly-high-dusky.vercel.app/" },
  {
    id: 3,
    title: "Snip App",
    description: "Peer to peer rental platform",
    imageSrc: "/projects/AppleBentoGrid.webp",
    url: "https://bento-virid.vercel.app/",
  },
  { id: 5, title: "PathClipper", description: "A tool that solves the difficulty of path clip", imageSrc: "/projects/pathclipper.webp", url: "https://path-clipper.vercel.app/" },
  { id: 6, title: "TrackO", description: "Community live location tracking website", imageSrc: "/projects/TrackO.webp", url: "https://track-o-beige.vercel.app/" },
  { id: 8, title: "Monster Energy", description: "A 3D Commercial Website", imageSrc: "/projects/monsterEnergy.webp", url: "https://monster-energy-3d.vercel.app/" },
  { id: 9, title: "Coming Soon", description: "A new project is on the way", imageSrc: "/projects/Windows.webp", url: "#" },
];

function ProjectRow({ title, description, url, onMouseEnter, onMouseLeave }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="group flex items-center justify-between w-full border-b border-black/15 py-5 md:py-7 cursor-crosshair md:hover:translate-x-2 transition-transform duration-200"
    >

      {/* Title */}
      <span className="text-black text-2xl md:text-4xl font-semibold flex-1 group-hover:text-black/70 transition-colors">
        {title}
      </span>

      {/* Description */}
      <span className="hidden md:block text-black/50 text-sm max-w-xs text-right group-hover:text-black/80 transition-colors">
        {description}
      </span>

      {/* Arrow */}
      <span className="ml-6 text-black/30 group-hover:text-black transition-all group-hover:translate-x-1 text-xl">
        →
      </span>
    </a>
  );
}

export default function ProjectsPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative w-full bg-white px-6 md:px-24 py-12 md:py-20 overflow-hidden">
      {/* Hidden preload images so hover preview appears instantly */}
      <div className="absolute opacity-0 pointer-events-none w-0 h-0 overflow-hidden" aria-hidden>
        {projectData.map((project) => (
          <img key={project.id} src={project.imageSrc} alt="" loading="eager" />
        ))}
      </div>

      {/* Header */}
      <div className="flex items-end justify-between mb-10 border-b border-black/15 pb-4">
        <p className="text-5xl md:text-8xl font-bold tracking-tight text-black">Projects</p>
        <span className="text-black/40 text-sm font-mono">2024 — 2025</span>
      </div>

      {/* Column headers */}
      <div className="flex items-center justify-between w-full mb-2 px-0">
        <span className="text-black/40 text-xs uppercase tracking-widest flex-1">Project</span>
        <span className="hidden md:block text-black/40 text-xs uppercase tracking-widest max-w-xs text-right">Description</span>
        <span className="ml-6 w-6" />
      </div>

      {/* Project rows */}
      <div>
        {projectData.map((project, index) => (
          <ProjectRow
            key={project.id}
            {...project}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          />
        ))}
      </div>

      {/* Cursor-following image */}
      {hoveredIndex !== null && (
        <div
          className="fixed pointer-events-none z-50 hidden md:block overflow-hidden rounded-xl shadow-2xl border border-black/20 bg-white/80 backdrop-blur-sm"
          style={{
            left: mousePos.x,
            top: mousePos.y,
            transform: "translate(-50%, -50%)",
            width: "340px",
            height: "230px",
          }}
        >
          <>
            <img
              src={projectData[hoveredIndex].imageSrc}
              alt={projectData[hoveredIndex].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 p-3 bg-linear-to-t from-black/85 via-black/35 to-transparent">
              <p className="text-white text-sm font-semibold">{projectData[hoveredIndex].title}</p>
            </div>
          </>
        </div>
      )}
    </div>
  );
}
