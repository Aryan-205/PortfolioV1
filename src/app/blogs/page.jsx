"use client";

import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import blogsData from "@/data/blogs.json";

function BlogCard({ blog }) {
  const content = (
    <>
      <div className="flex items-center gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-emerald-300 bg-emerald-50 px-2.5 py-0.5 text-[11px] font-medium text-emerald-700">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
          {blog.status}
        </span>
        <span className="text-sm text-black/45">{blog.date}</span>
      </div>

      <h2 className="mt-4 text-xl font-semibold leading-snug tracking-tight text-black md:text-2xl">
        {blog.title}
      </h2>

      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-black/50">
        {blog.description}
      </p>

      {blog.tags?.length > 0 ? (
        <div className="mt-4 flex flex-wrap gap-2 border-t border-dashed border-neutral-200 pt-4">
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-sm border border-dashed border-neutral-300 bg-neutral-50 px-2.5 py-0.5 text-xs font-medium text-black/70"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </>
  );

  const className =
    "group block rounded-xl border border-dashed border-neutral-300 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md";

  if (blog.url) {
    return (
      <a
        href={blog.url}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {content}
      </a>
    );
  }

  return <article className={className}>{content}</article>;
}

export default function Blogs() {
  const { blogs } = blogsData;

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
        <h1 className="text-5xl font-medium tracking-tight text-black">Blogs</h1>
        <p className="text-sm text-black/60 max-w-xl">
          Long-form writing on frontend craft, product thinking, and lessons from
          building in public.
        </p>
      </div>

      <div className="flex flex-col w-full gap-6 bg-white rounded-2xl p-6 shadow-sm border border-dashed border-neutral-300">
        <div className="flex flex-col gap-4">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        <p className="text-sm text-black/40 text-center py-2 border-t border-dashed border-neutral-200">
          {blogs.length} {blogs.length === 1 ? "article" : "articles"}, more on the way...
        </p>
      </div>
    </div>
  );
}
