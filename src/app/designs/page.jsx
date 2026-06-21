"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeftIcon, XIcon } from "lucide-react";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import designsData from "@/data/designs.json";

function layoutIdFor(id) {
  return `design-image-${id}`;
}

export default function Designs() {
  const { designs } = designsData;
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (!selected) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selected]);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

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
        <h1 className="text-5xl font-medium tracking-tight text-black">Designs</h1>
        <p className="text-sm text-black/60 max-w-xl">
          UI explorations, brand work, and visual experiments from freelance and side projects.
        </p>
      </div>

      <LayoutGroup>
        <div className="flex flex-col w-full gap-6 bg-white rounded-2xl p-6 shadow-sm border border-black/5">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 [column-fill:balance]">
            {designs.map((design) => {
              const isSelected = selected?.id === design.id;
              return (
                <figure
                  key={design.id}
                  className="break-inside-avoid mb-4 group"
                >
                  <button
                    type="button"
                    onClick={() => setSelected(design)}
                    className="relative w-full overflow-hidden rounded-xl bg-neutral-100 border border-neutral-200/80 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 focus-visible:ring-offset-2"
                    aria-label={`View ${design.title}`}
                  >
                    <motion.div
                      layoutId={layoutIdFor(design.id)}
                      className="relative w-full overflow-hidden rounded-xl"
                      style={{ visibility: isSelected ? "hidden" : "visible" }}
                      transition={{
                        type: "spring",
                        stiffness: 320,
                        damping: 32,
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={design.image}
                        alt={design.title}
                        loading="lazy"
                        decoding="async"
                        className="block w-full h-auto"
                      />
                    </motion.div>
                    <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-linear-to-t from-black/75 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <p className="text-sm font-medium text-white tracking-tight">
                        {design.title}
                      </p>
                      {design.description ? (
                        <p className="text-xs text-white/70 line-clamp-2 mt-0.5">
                          {design.description}
                        </p>
                      ) : null}
                    </figcaption>
                  </button>
                </figure>
              );
            })}
          </div>

          <p className="text-sm text-black/40 text-center py-2 border-t border-neutral-100">
            {designs.length} designs
          </p>
        </div>

        <AnimatePresence>
          {selected ? (
            <motion.div
              key="design-lightbox"
              role="dialog"
              aria-modal="true"
              aria-label={selected.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm cursor-pointer"
              onClick={() => setSelected(null)}
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 rounded-full p-2 text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Close preview"
              >
                <XIcon className="h-5 w-5" />
              </button>

              <motion.div
                layoutId={layoutIdFor(selected.id)}
                className="relative overflow-hidden rounded-xl pointer-events-none"
                transition={{
                  type: "spring",
                  stiffness: 320,
                  damping: 32,
                }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="h-[60vh] w-auto max-w-[92vw] object-contain"
                />
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </LayoutGroup>
    </div>
  );
}
