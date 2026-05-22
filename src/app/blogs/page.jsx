"use client";

import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

export default function Blogs() {

  const blogs = [
    {
      id: 1,
      title: "Blog 1",
      description: "Description of Blog 1",
      image: "/images/blog1.jpg",
    },
    {
      id: 2,
      title: "Blog 1",
      description: "Description of Blog 1",
      image: "/images/blog1.jpg",
    },
    {
      id: 3,
      title: "Blog 1",
      description: "Description of Blog 1",
      image: "/images/blog1.jpg",
    },
  ];

  return (
    <>
      <div>
        <div className="w-full min-h-screen p-10 landing-grid-bg flex flex-col gap-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeftIcon className="w-4 h-4" />
              <p className="text-sm text-black/50">Back to Home</p>
            </Link>
          </div>
          <p className="text-5xl tracking-tight text-black">Blogs</p>
          <p className="text-sm text-black/50">
            Long-form writing on frontend craft, product thinking, and lessons
            from building in public.
          </p>
          <div className="flex flex-col w-full gap-4 bg-white rounded-2xl p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {blogs.map((blog) => (
                <div key={blog.id} className="bg-black/10 p-4 rounded-lg">
                  <p className="text-lg font-bold text-white">{blog.title}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-black/50 text-center py-4">More Blogs coming soon...</p>
          </div>
          <div className="flex justify-center w-full">
          </div>
        </div>
      </div>
    </>
  );
}
