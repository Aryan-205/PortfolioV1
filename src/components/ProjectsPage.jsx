import { Globe, Play } from "lucide-react";
import { SiGithub } from "react-icons/si";

const projectData = [
  {
    id: 1,
    title: "Windows",
    description:
      "Experience the Windows ecosystem in the browser with a fully interactive desktop UI, draggable windows, and familiar system apps rebuilt for the web.",
    imageSrc: "/projects/Windows.webp",
    tags: ["React", "Tailwind CSS", "Motion", "Vite"],
    links: { website: "https://windows-site-sigma.vercel.app/", github: "https://github.com/Aryan-205/Windows-Site" },
  },
  {
    id: 2,
    title: "FlyHigh",
    description:
      "A cinematic travel website built with Three.js featuring immersive 3D scenes, smooth scroll interactions, and a polished landing experience.",
    imageSrc: "/designs/d21.webp",
    tags: ["React", "Three.js", "Tailwind CSS", "GSAP"],
    links: { website: "https://fly-high-dusky.vercel.app/", github: "https://github.com/Aryan-205/Fly-High" },
  },
  {
    id: 3,
    title: "Snip App",
    description:
      "A peer-to-peer rental platform that helps users list, discover, and book items directly from other people in their community.",
    imageSrc: "/projects/AppleBentoGrid.webp",
    tags: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
    links: { website: "https://bento-virid.vercel.app/", github: "https://github.com/Aryan-205/Snip-App" },
  },
  {
    id: 5,
    title: "PathClipper",
    description:
      "A tool that makes complex SVG path clipping easier with a visual editor, live preview, and export options for designers and developers.",
    imageSrc: "/projects/pathclipper.webp",
    tags: ["React", "SVG", "Tailwind CSS", "Canvas API"],
    links: { website: "https://path-clipper.vercel.app/", github: "https://github.com/Aryan-205/Path-Clipper" },
  },
  {
    id: 6,
    title: "TrackO",
    description:
      "A community live location tracking website for sharing real-time positions, coordinating meetups, and staying connected on the go.",
    imageSrc: "/projects/TrackO.webp",
    tags: ["React", "Socket.io", "Node.js", "Maps API", "Tailwind CSS"],
    links: { website: "https://track-o-beige.vercel.app/", github: "https://github.com/Aryan-205/Track-O" },
  },
  {
    id: 8,
    title: "Monster Energy",
    description:
      "A 3D commercial website with product-focused scenes, bold motion design, and an energetic brand experience built for the web.",
    imageSrc: "/projects/monsterEnergy.webp",
    tags: ["React", "Three.js", "GSAP", "Tailwind CSS"],
    links: { website: "https://monster-energy-3d.vercel.app/", github: "https://github.com/Aryan-205/Monster-Energy-3D" },
  },
];

const MAX_VISIBLE_TAGS = 4;

function ProjectCard({ title, description, imageSrc, tags, links }) {
  const visibleTags = tags.slice(0, MAX_VISIBLE_TAGS);
  const hiddenTagCount = tags.length - visibleTags.length;
  const linkItems = [
    links.website && { label: "Website", href: links.website, icon: Globe },
    links.github && { label: "GitHub", href: links.github, icon: SiGithub },
    links.demo && { label: "Demo", href: links.demo, icon: Play },
  ].filter(Boolean);

  return (
    <article className="flex h-full flex-col rounded-xl border border-dashed border-neutral-300 bg-white p-3 cursor-crosshair">
      <div className="rounded-lg">
        <img
          src={imageSrc}
          alt={title}
          className="aspect-video w-full rounded-md border border-neutral-200 bg-white object-cover object-top shadow-sm"
        />
      </div>

      <div className="mt-3 flex flex-1 flex-col">
        <h3 className="text-base font-bold tracking-tight text-black">{title}</h3>
        <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-neutral-600">{description}</p>

        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {visibleTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-neutral-100 px-2 py-0.5 text-[10px] font-medium text-neutral-700"
            >
              {tag}
            </span>
          ))}
          {hiddenTagCount > 0 && (
            <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[10px] font-medium italic text-neutral-500">
              +{hiddenTagCount} more
            </span>
          )}
        </div>
      </div>

      {linkItems.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2 border-t border-dashed border-neutral-200 pt-2.5">
          {linkItems.map(({ label, href, icon: Icon }) => (
            <div key={label} className="flex items-center gap-2">
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-dashed border-neutral-300 px-2.5 py-1 text-xs font-medium text-black transition-colors hover:bg-neutral-50"
              >
                <Icon size={13} />
                {label}
              </a>
            </div>
          ))}
        </div>
      )}
    </article>
  );
}

export default function ProjectsPage() {
  return (
    <section
      id="projects"
      className="w-full overflow-hidden border-x border-dashed border-neutral-400/80 bg-white px-6 py-10 md:px-10 md:py-14 scroll-mt-4"
    >
      <div className="mb-10 border-b border-dashed border-neutral-300 pb-6">
        <p className="text-5xl tracking-tight text-black">Projects</p>
        <p className="mt-2 max-w-2xl text-sm text-neutral-500 md:text-base">
          Selected work, experiments, and products I have built recently.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projectData.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
      <div className="mt-10 w-full flex justify-center">
        <button className="border border-black px-4 py-2 rounded-full text-sm font-medium text-black hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">View All Projects</button>
      </div>
    </section>
  );
}
