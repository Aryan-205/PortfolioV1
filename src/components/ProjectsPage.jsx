const projectData = [
  {
    id: 1,
    title: "Windows",
    description: "Experience the Windows ecosystem in Browser",
    imageSrc: "/projects/Windows.webp",
    url: "https://windows-site-sigma.vercel.app/", 
  },
  {
    id: 2,
    title: "FlyHigh",
    description: "A cool website built with ThreeJs",
    imageSrc: "/designs/d21.webp",
    url: "https://fly-high-dusky.vercel.app/", 
  },
  {
    id: 3,
    title: "Apple Bento",
    description: "Fully Interactive Bento Design with micro interaction using motion",
    imageSrc: "/projects/AppleBentoGrid.webp",
    url: "https://bento-virid.vercel.app/", 
  },
  {
    id: 4,
    title: "Rento",
    description: "A Luxury Car Rental Website",
    imageSrc: "/projects/Rento.webp",
    url: "https://rento-beta.vercel.app/", 
  },
  {
    id: 5,
    title: "PathClipper",
    description: "A tool that solve the difficulty of path clip",
    imageSrc: "/projects/pathclipper.webp",
    url: "https://path-clipper.vercel.app/", 
  },
  {
    id: 6,
    title: "XCard",
    description: "A tool that helps you simply create X card for yourself",
    imageSrc: "/projects/Xcard.webp",
    url: "https://rento-beta.vercel.app/", 
  },
  {
    id: 7,
    title: "TrackO",
    description: "Community live location tracking website",
    imageSrc: "/projects/TrackO.webp",
    url: "https://portfolio-v2-coral-kappa.vercel.app/", 
  },
  {
    id: 8,
    title: "BolaBits",
    description: "An Component liberary with animated Icons and microinteraction",
    imageSrc: "/projects/ComponentLib.webp",
    url: "https://component-library2-0.vercel.app/", 
  },
];

const ProjectItem = ({ title, description, imageSrc, url }) => (
  
  <a 
    href={url} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="block w-full h-full md:w-[60%] p-2 md:p-4 border-b border-white transition-all duration-300 hover:border-l-4 hover:border-l-white cursor-crosshair"
  >
    <img src={imageSrc} className="w-full" alt={title} />
    <p className="font-light text-3xl md:text-6xl text-white pt-4">{title}</p>
    <p className="text-white text-sm md:text-base text-light">{description}</p>
  </a>
);

export default function ProjectsPage() {
  return (
    <>
      <div className="h-[400vh] md:h-[720vh] w-full bg-black p-6 md:p-24 rounded-t-3xl ">
        <div className="h-[100vh] z-20 w-fit sticky top-0">
          <div className="border-l border-white w-full h-full flex justify-start items-center">
            <div className="pl-4 backdrop-blur-sm rounded-xl">
              <p className="w-full text-6xl md:text-[20rem] text-white/50 font-bold ">20</p>
              <p className="w-full h-full text-white text-3xl md:text-6xl font-bold uppercase text-center">Projects</p>
              <p className="w-full text-6xl md:text-[20rem] text-white/50 font-bold">25</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start md:items-end justify-start gap-8 sticky top-0 z-10 -mt-[100vh]  md:pt-0">
          {projectData.map((project) => (
            <ProjectItem
              key={project.id} 
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              url={project.url}
            />
          ))}
        </div>
      </div>
    </>
  );
}