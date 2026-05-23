"use client";

import Link from "next/link";
import { ArrowLeftIcon, ExternalLinkIcon } from "lucide-react";
import GithubIcon from "@/icons/Github";
import projectsData from "@/data/projects.json";

const statusIcons = {
  Live: (
    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 align-middle animate-pulse" />
  ),
  WIP: (
    <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500 mr-1.5 align-middle animate-pulse" />
  ),
  Archived: (
    <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-500 mr-1.5 align-middle animate-pulse" />
  ),
};

function ProjectCard({ project }) {
  return (
    <div className="group bg-white rounded-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-dashed border-neutral-300 p-2">
      <div className="relative w-full h-44 overflow-hidden bg-black/5 rounded-md">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col flex-1 p-2 gap-3">
        <div className="w-full flex items-center justify-between">
          <p className="text-base font-semibold text-black tracking-tight leading-snug">
            {project.title}
          </p>
          <div className="text-xs font-medium rounded-full flex items-center gap-2">
            {statusIcons[project.status]}
            <p className="text-xs font-medium">{project.status}</p>
          </div>
        </div>

        <p className="text-xs text-black/50 leading-relaxed line-clamp-2">
          {project.description}
        </p>

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

        <div className="flex items-center gap-2 pt-2 border-t border-black/5">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-black/60 hover:text-black transition-colors px-3 py-1.5 rounded-lg border border-black/10 hover:border-black/30"
            >
              <ExternalLinkIcon className="w-3.5 h-3.5" />
              Live
            </a>
          ) : null}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-black/60 hover:text-black transition-colors px-3 py-1.5 rounded-lg border border-black/10 hover:border-black/30"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              GitHub
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { projects } = projectsData;

  return (
    <div className="w-full min-h-screen p-6 md:p-10 landing-grid-bg flex flex-col gap-6">
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 group text-sm text-black/50 hover:text-black transition-colors"
        >
          <ArrowLeftIcon className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="space-y-2">
        <h1 className="text-5xl font-medium tracking-tight text-black">Projects</h1>
        <p className="text-sm text-black/60 max-w-xl">
          Full-stack applications with scalable backends, modern UI/UX, and
          production-ready architecture.
        </p>
      </div>

      <div className="flex flex-col w-full gap-6 bg-white rounded-2xl p-6 shadow-sm border border-black/5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <p className="text-sm text-black/40 text-center py-2 border-t border-neutral-100">
          {projects.length} projects
        </p>
      </div>
    </div>
  );
}
