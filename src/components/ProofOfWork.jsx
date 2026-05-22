import { ArrowUpRight } from "lucide-react";

const proofOfWork = [
  {
    id: 1,
    title: "Projects",
    description:
      "Full-stack applications with scalable backends, modern UI/UX, and production-ready architecture.",
    href: "#projects",
    comingSoon: false,
    reverse: false,
    images: [
      { src: "/projects/Windows.webp", className: "left-[4%] top-[10%] z-10 w-[44%] -rotate-6" },
      { src: "/projects/TrackO.webp", className: "left-[30%] top-[4%] z-20 w-[40%] rotate-5" },
      { src: "/projects/pathclipper.webp", className: "right-[6%] top-[16%] z-30 w-[38%] -rotate-4" },
      { src: "/projects/monsterEnergy.webp", className: "right-[18%] bottom-[8%] z-40 w-[32%] rotate-6" },
    ],
  },
  {
    id: 2,
    title: "Designs",
    description:
      "UI explorations, brand work, and visual experiments from freelance and side projects.",
    href: null,
    comingSoon: false,
    reverse: true,
    images: [
      { src: "/designs/d10.webp", className: "left-[8%] top-[12%] z-10 w-[40%] -rotate-7" },
      { src: "/designs/d15.webp", className: "left-[34%] top-[5%] z-20 w-[38%] rotate-3" },
      { src: "/designs/d21.webp", className: "right-[5%] top-[18%] z-30 w-[36%] -rotate-5" },
    ],
  },
  {
    id: 3,
    title: "Blogs",
    description:
      "Long-form writing on frontend craft, product thinking, and lessons from building in public.",
    href: null,
    comingSoon: true,
    reverse: false,
    images: [
      { src: "/thingsILove/book.png", className: "left-[6%] top-[14%] z-10 w-[38%] -rotate-8" },
      { src: "/bg3.jpeg", className: "left-[32%] top-[6%] z-20 w-[42%] rotate-4" },
      { src: "/random/image1.png", className: "right-[4%] top-[20%] z-30 w-[36%] -rotate-3" },
    ],
  }
];

function ImageCollage({ images }) {
  return (
    <div className="relative h-[220px] w-full shrink-0 overflow-hidden sm:h-[260px] md:h-full md:min-h-[280px] md:flex-1">
      {images.map((image, index) => (
        <img
          key={`${image.src}-${index}`}
          src={image.src}
          alt=""
          className={`absolute rounded-lg border border-neutral-200 bg-white object-cover object-top shadow-md transition-transform duration-300 group-hover:scale-[1.02] ${image.className}`}
        />
      ))}
    </div>
  );
}

function ProofOfWorkCard({
  title,
  description,
  href,
  comingSoon,
  reverse,
  images,
}) {
  const TitleTag = href ? "a" : "div";
  const titleProps = href
    ? { href, className: "group/title inline-flex items-center gap-2" }
    : { className: "inline-flex items-center gap-2" };

  return (
    <article
      className={`group flex min-h-[320px] flex-col overflow-hidden rounded-2xl border border-dashed border-neutral-300 bg-white transition-colors hover:border-neutral-400 md:min-h-[300px] ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div
        className={`flex max-w-full flex-1 flex-col justify-center gap-3 border-b border-dashed border-neutral-200 px-6 py-8 md:max-w-[42%] md:border-b-0 md:px-10 md:py-10 ${
          reverse ? "md:border-l" : "md:border-r"
        }`}
      >
        <TitleTag {...titleProps}>
          <h3 className="text-2xl font-bold tracking-tight text-black md:text-3xl">
            {title}
          </h3>
          {href && (
            <ArrowUpRight
              size={22}
              className="shrink-0 text-neutral-400 transition-transform group-hover/title:-translate-y-0.5 group-hover/title:translate-x-0.5 group-hover/title:text-black"
            />
          )}
        </TitleTag>
        <p className="max-w-md text-sm leading-relaxed text-neutral-500 md:text-base">
          {description}
        </p>
        {comingSoon && (
          <span className="w-fit rounded-full border border-dashed border-neutral-300 bg-neutral-50 px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-neutral-500">
            Coming Soon
          </span>
        )}
      </div>

      <ImageCollage images={images} />
    </article>
  );
}

export default function ProofOfWork() {
  return (
    <section className="w-full overflow-hidden border-x border-dashed border-neutral-400/80 bg-white px-6 py-10 md:px-10 md:py-14">
      <div className="mb-10 border-b border-dashed border-neutral-300 pb-6">
        <p className="text-5xl tracking-tight text-black">Proof of Work</p>
        <p className="mt-2 max-w-2xl text-sm text-neutral-500 md:text-base">
          A snapshot of what I write, build, and design — blogs, shipped projects,
          and visual work.
        </p>
      </div>

      <div className="flex flex-col gap-6 md:gap-8">
        {proofOfWork.map((item) => (
          <ProofOfWorkCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
