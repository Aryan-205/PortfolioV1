import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import designsData from "@/data/designs.json";
import projectsData from "@/data/projects.json";

const projectImages = projectsData.projects.map((project) => project.image);

const designImages = designsData.designs.map((design) => design.image);

const proofOfWork = [
  {
    id: 1,
    title: "Projects",
    description:
      "Full-stack applications with scalable backends, modern UI/UX, and production-ready architecture.",
    href: "/projects",
    comingSoon: false,
    reverse: false,
    images: projectImages,
    marqueeReverse: false,
  },
  {
    id: 2,
    title: "Designs",
    description:
      "UI explorations, brand work, and visual experiments from freelance and side projects.",
    href: "/designs",
    comingSoon: false,
    reverse: true,
    images: designImages,
    marqueeReverse: false,
  },
  {
    id: 3,
    title: "Blogs",
    description:
      "Long-form writing on frontend craft, product thinking, and lessons from building in public.",
    href: "/blogs",
    comingSoon: false,
    reverse: false,
    images: [
      "/thingsILove/book.png",
      "/bg3.jpeg",
      "/random/image1.png",
      "/thingsILove/tech.png",
      "/thingsILove/space.jpg",
    ],
    marqueeReverse: false,
  },
];

/** Seconds per image — duration scales with count so every marquee moves at the same pixel speed. */
const MARQUEE_SECONDS_PER_IMAGE = 3.5;

function ImageMarquee({ images, reverse = false }) {
  const trackImages = [...images, ...images];
  const duration = Math.max(images.length, 1) * MARQUEE_SECONDS_PER_IMAGE;

  return (
    <div className="relative flex min-h-[220px] w-full flex-1 items-center justify-center  sm:min-h-[260px] md:min-h-[280px]">
      <div className="absolute inset-0 flex items-center justify-center md:-rotate-[30deg]">
        <div className="w-[160%] max-w-none">
          <div
            className={`flex w-max gap-3 md:gap-4 ${
              reverse ? "proof-marquee-track-reverse" : "proof-marquee-track"
            }`}
            style={{ "--marquee-duration": `${duration}s` }}
          >
            {trackImages.map((src, index) => (
              <img
                key={`${src}-${index}`}
                src={src}
                alt=""
                draggable={false}
                className="h-40 w-56 shrink-0 rounded-lg border border-neutral-200 bg-white object-cover object-top shadow-md sm:h-44 sm:w-64 md:h-52 md:w-72"
              />
            ))}
          </div>
        </div>
      </div>
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
  marqueeReverse = false,
}) {
  const cardClassName = `group flex min-h-[320px] flex-col overflow-hidden rounded-2xl border border-dashed border-neutral-300 bg-white transition-colors hover:border-neutral-400 md:min-h-[300px] ${
    reverse ? "md:flex-row-reverse" : "md:flex-row"
  }`;

  const content = (
    <>
      <div
        className={`flex max-w-full flex-1 flex-col justify-center gap-3 border-b border-dashed border-neutral-200 px-6 py-8 md:max-w-[42%] md:border-b-0 md:border-r md:border-dashed md:px-10 md:py-10 ${
          reverse ? "md:border-r-0 md:border-l" : ""
        }`}
      >
        <div className="inline-flex items-center gap-2">
          <h3 className="text-2xl font-bold tracking-tight text-black md:text-3xl">
            {title}
          </h3>
          {href ? (
            <ArrowUpRight
              size={22}
              className="shrink-0 text-neutral-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black"
            />
          ) : null}
        </div>
        <p className="max-w-md text-sm leading-relaxed text-neutral-500 md:text-base">
          {description}
        </p>
        {comingSoon ? (
          <span className="w-fit rounded-full border border-dashed border-neutral-300 bg-neutral-50 px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-neutral-500">
            Coming Soon
          </span>
        ) : null}
      </div>

      <ImageMarquee images={images} reverse={marqueeReverse} />
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cardClassName}>
        {content}
      </Link>
    );
  }

  return <article className={cardClassName}>{content}</article>;
}

export default function ProofOfWork() {
  return (
    <section className="w-full overflow-hidden border-x border-dashed border-neutral-400/80 bg-white px-4 py-8 md:px-10 md:py-14">
      <div className="mb-10 border-b border-dashed border-neutral-300 pb-6">
        <p className="text-5xl tracking-tight text-black">Proof of Work</p>
        <p className="mt-2 max-w-2xl text-sm text-neutral-500 md:text-base">
          A snapshot of what I write, build, and design — blogs, shipped
          projects, and visual work.
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
