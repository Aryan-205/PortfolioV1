import { BookOpen, Palette, Video } from "lucide-react";

const categories = [
  {
    id: 1,
    title: "Blogs",
    description:
      "Long-form writing on frontend craft, product thinking, and lessons from building in public.",
    icon: BookOpen,
  },
  {
    id: 2,
    title: "Designs",
    description:
      "UI explorations, brand work, and visual experiments from freelance and side projects.",
    icon: Palette,
  },
  {
    id: 3,
    title: "Videos",
    description:
      "Walkthroughs, build logs, and short-form content on code, design, and shipping fast.",
    icon: Video,
  },
];

function ComingSoonCard({ title, description, icon: Icon }) {
  return (
    <article className="group flex h-full flex-col rounded-xl border border-dashed border-neutral-300 bg-white p-5 transition-colors hover:border-neutral-400">
      <div className="flex aspect-video w-full items-center justify-center rounded-lg border border-dashed border-neutral-200 bg-neutral-50">
        <Icon
          className="h-10 w-10 text-neutral-300 transition-colors group-hover:text-neutral-400"
          strokeWidth={1.25}
        />
      </div>

      <div className="mt-4 flex flex-1 flex-col">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-base font-bold tracking-tight text-black">{title}</h3>
          <span className="shrink-0 rounded-full border border-dashed border-neutral-300 bg-neutral-50 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-neutral-500">
            Coming Soon
          </span>
        </div>
        <p className="mt-2 text-xs leading-relaxed text-neutral-600">{description}</p>
      </div>
    </article>
  );
}

export default function Others() {
  return (
    <section className="w-full overflow-hidden border-x border-dashed border-neutral-400/80 bg-white px-6 py-10 md:px-10 md:py-14">
      <div className="mb-10 border-b border-dashed border-neutral-300 pb-6">
        <p className="text-5xl tracking-tight text-black">More From Me</p>
        <p className="mt-2 max-w-2xl text-sm text-neutral-500 md:text-base">
          Blogs, design work, and videos — new content on the way.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <ComingSoonCard key={category.id} {...category} />
        ))}
      </div>
    </section>
  );
}
