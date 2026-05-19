import { motion } from "motion/react";
import Navbar from "../Navbar";
import PhotoStack from "./PhotoStack";
import GitHubActivityCard from "./GithubCard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const MeImages = ["/me/Me1.jpeg", "/me/Me3.jpeg", "/me/Me2.JPG"];

const roles = ["Full Stack Developer", "Design Engineer", "App Developer"];

const thingsILove = [
  {
    id: 1,
    image: "/thingsILove/book.png",
    name: "Books",
  },
  {
    id: 2,
    image: "/thingsILove/jets.jpg",
    name: "Airplanes",
  },
  {
    id: 3,
    image: "/thingsILove/space.jpg",
    name: "Space",
  },
  {
    id: 4,
    image: "/thingsILove/tech.png",
    name: "Tech",
  },
];

export default function LandingPage({
  scrollToAbout,
  scrollToProjects,
  scrollToContact,
}) {
  return (
    <div className="landing-grid-bg relative flex min-h-[90vh] flex-col md:min-h-screen">
      <Navbar
        scrollToAbout={scrollToAbout}
        scrollToProjects={scrollToProjects}
        scrollToContact={scrollToContact}
      />

      <main className="relative z-10 mx-4 mb-8 flex flex-1 flex-col rounded-3xl border border-dashed border-neutral-400/80 bg-[#f7f7f5]/90 px-5 py-8 md:mx-10 md:px-12 md:py-12">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[clamp(3rem,12vw,9rem)] font-black uppercase leading-[0.9] tracking-light flex items-center gap-2 text-neutral-900"
        >
          Aryan Bola<span className="text-neutral-500"></span>
        </motion.h1>

        <p className="mt-4 max-w-xl text-sm text-neutral-600 md:text-base">
          Helping startups go from 0 to 1
          <br />
          Building{" "}
          <span className="rounded-full border border-dashed border-neutral-400 bg-white px-2 py-0.5 text-neutral-800">
            Web
          </span>{" and "}
          <span className="rounded-full border border-dashed border-neutral-400 bg-white px-2 py-0.5 text-neutral-800">
            App
          </span>{" "}
          products with clean UI and solid backend architecture.
        </p>

        <div className="mt-10 flex justify-between items-center">
          <div className="flex flex-col items-center gap-8 lg:items-start">
            <div className="w-full rounded-2xl border border-dashed border-neutral-400 bg-white/60 p-4">
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-neutral-800">
                Things I love
              </p>
              <div className="flex justify-center items-center gap-4">
                {thingsILove.map((item) => (
                  <Dialog key={item.id}>
                    <DialogTrigger className="flex flex-col items-center justify-center gap-2 rounded-md outline-none transition-transform duration-300 hover:scale-110 focus-visible:ring-2 focus-visible:ring-neutral-400 cursor-pointer">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-20 w-16 rounded-md object-cover"
                      />
                      <p className="text-xs font-medium tracking-wide text-neutral-800">
                        {item.name}
                      </p>
                    </DialogTrigger>
                    <DialogContent className="overflow-hidden border-neutral-200 p-0">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="max-h-[70vh] w-full object-contain bg-neutral-100"
                        />
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </div>

            <div className="w-full h-full flex flex-col gap-2">
              {roles.map((role, index) => (
                <p
                  key={index}
                  className="text-xl font-medium uppercase leading-none tracking-wider text-neutral-900 text-left"
                >
                  &#8226; {role}
                </p>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex justify-center"
          >
            <PhotoStack
              images={MeImages}
              className="h-56 w-48 rounded-2xl md:h-64 md:w-56"
              containerClassName="py-6 px-14"
              alt="Aryan Bola"
            />
          </motion.div>

          <GitHubActivityCard />
        </div>
      </main>
    </div>
  );
}
