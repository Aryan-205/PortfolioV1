"use client";

import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

export default function Projects() {

    const projects = [
        {
        id: 1,
        title: "Project 1",
        description: "Description of Blog 1",
        image: "/images/blog1.jpg",
        },
        {
        id: 2,
        title: "Project 2",
        description: "Description of Blog 1",
        image: "/images/blog1.jpg",
        },
        {
        id: 3,
        title: "Project 3",
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
            <p className="text-5xl tracking-tight text-black">Projects</p>
            <p className="text-sm text-black/50">
                Full-stack applications with scalable backends, modern UI/UX, and production-ready architecture.
            </p>
            <div className="flex flex-col w-full gap-4 bg-white rounded-2xl p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <div key={project.id} className="bg-black/10 p-4 rounded-lg">
                    <p className="text-lg font-bold text-white">{project.title}</p>
                    </div>
                ))}
                </div>
                <p className="text-sm text-black/50 text-center py-4">More Projects coming soon...</p>
            </div>
            <div className="flex justify-center w-full">
            </div>
            </div>
        </div>
        </>
    );
}
