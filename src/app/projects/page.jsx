"use client";
import Link from "next/link";
import { ArrowLeftIcon, ExternalLinkIcon } from "lucide-react";
import GithubIcon from "@/icons/Github";


const statusIcons = {
  Live: <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 align-middle animate-pulse" />,
  WIP: <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500 mr-1.5 align-middle animate-pulse" />,
  Archived: <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-500 mr-1.5 align-middle animate-pulse" />,
};

function ProjectCard({ project }) {
  return (
    <div className="group bg-white rounded-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-dashed border-neutral-300 p-2">
      {/* Image */}
      <div className="relative w-full h-44 overflow-hidden bg-black/5 rounded-md">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-2 gap-3">
        {/* Title */}
        <div className="w-full flex items-center justify-between">
          <p className="text-base font-semibold text-black tracking-tight leading-snug">
            {project.title}
          </p>
          <div
            className={`text-xs font-medium rounded-full flex items-center gap-2`}
          >
            {statusIcons[project.status]}
            <p className="text-xs font-medium">{project.status}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-xs text-black/50 leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs text-black/60 bg-black/5 px-2.5 py-1 rounded-lg border border-dashed border-neutral-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-2 pt-2 border-t border-black/5">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-black/60 hover:text-black transition-colors px-3 py-1.5 rounded-lg border border-black/10 hover:border-black/30"
            >
              <ExternalLinkIcon className="w-3.5 h-3.5" />
              Live
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-black/60 hover:text-black transition-colors px-3 py-1.5 rounded-lg border border-black/10 hover:border-black/30"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Windows OS Clone",
      description: "A full-stack application with scalable backend and modern UI/UX.",
      image: "/projects/Windows.webp",
      techStack: ["Next.js", "TypeScript", "Tailwind"],
      liveUrl: "https://windows-os-clone.vercel.app/",
      githubUrl: "https://github.com/Aryan-205/Windows-OS-Clone",
      status: "Live",
    },
    {
      id: 2,
      title: "FlyHigh",
      description: "Production-ready architecture with real-time features and auth.",
      image: "/designs/d21.webp",
      techStack: ["React", "Node.js", "PostgreSQL"],
      githubUrl: "https://github.com",
      status: "Live",
    },
    {
      id: 3,
      title: "Snip App",
      description: "Mobile-first design with offline support and push notifications.",
      image: "/projects/AppleBentoGrid.webp",
      techStack: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
      liveUrl: "https://bento-virid.vercel.app/",
      githubUrl: "https://github.com/Aryan-205/Snip-App",
      status: "WIP",
    },
    {
      id: 4,
      title: "PathClipper",
      description: "A tool that makes complex SVG path clipping easier with a visual editor, live preview, and export options for designers and developers.",
      image: "/projects/pathclipper.webp",
      techStack: ["React", "SVG", "Tailwind CSS", "Canvas API"],
      liveUrl: "https://path-clipper.vercel.app/",
      githubUrl: "https://github.com/Aryan-205/Path-Clipper",
      status: "Live",
    },
    {
      id: 5,
      title: "Rento",
      description: "A luxury car rental platform with a modern UI/UX and booking system.",
      image: "/projects/Rento.webp",
      techStack: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
      liveUrl: "https://rento-beta.vercel.app/",
      githubUrl: "https://github.com/Aryan-205/Rento",
      status: "Live",
    },
    {
      id: 6,
      title: "XCard",
      description: "A tool that helps you simply create X card for yourself.",
      image: "/projects/Xcard.webp",
      techStack: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
      liveUrl: "https://rento-beta.vercel.app/",
      githubUrl: "https://github.com/Aryan-205/XCard",
      status: "WIP",
    },
  ];

  return (
    <div className="w-full min-h-screen p-10 landing-grid-bg flex flex-col gap-4">
      <div>
        <Link href="/" className="flex items-center gap-2">
          <ArrowLeftIcon className="w-4 h-4" />
          <p className="text-sm text-black/50">Back to Home</p>
        </Link>
      </div>
      <p className="text-5xl tracking-tight text-black">Projects</p>
      <p className="text-sm text-black/50">
        Full-stack applications with scalable backends, modern UI/UX, and production-ready architecture.
      </p>
      <div className="flex flex-col w-full gap-4 bg-white rounded-2xl p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <p className="text-sm text-black/50 text-center py-4">
          More Projects coming soon...
        </p>
      </div>
    </div>
  );
}