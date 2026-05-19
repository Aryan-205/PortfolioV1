import { motion } from "motion/react";
import Navbar from "../Navbar";
import PhotoStack from "./PhotoStack";
import GitHubActivityCard from "./GithubCard";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FlipButton } from "./FlipButton";

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
    <motion.div className="landing-grid-bg relative flex min-h-[90vh] flex-col md:min-h-screen">
      <Navbar
        scrollToAbout={scrollToAbout}
        scrollToProjects={scrollToProjects}
        scrollToContact={scrollToContact}
      />

      <main className="relative z-10 mx-3 mb-6 flex flex-1 flex-col lg:justify-between gap-10 rounded-3xl border border-dashed border-neutral-400/80 bg-[#f7f7f5]/90 px-4 py-6 sm:mx-4 sm:px-5 sm:py-8 md:mx-10 md:gap-12 md:px-12 md:py-12">
        <div className="flex flex-col items-start gap-3 sm:gap-4">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[clamp(2.5rem,11vw,9rem)] font-black uppercase leading-[0.9] tracking-tight text-neutral-900"
          >
            Aryan Bola
          </motion.h1>

          <p className="max-w-xl text-sm leading-relaxed text-neutral-600 sm:text-base">
            Helping startups go from 0 to 1
            <br />
            Building{" "}
            <span className="rounded-full border border-dashed border-neutral-400 bg-white px-2 py-0.5 text-neutral-800">
              Web
            </span>{" "}
            and{" "}
            <span className="rounded-full border border-dashed border-neutral-400 bg-white px-2 py-0.5 text-neutral-800">
              App
            </span>{" "}
            products with clean UI and solid backend architecture.
          </p>
        </div>

        <div className="flex flex-col items-center gap-10 sm:gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          {/* Photo — first on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="order-1 flex w-full justify-center lg:order-2 lg:w-auto lg:shrink-0"
          >
            <PhotoStack
              images={MeImages}
              className="h-48 w-40 rounded-2xl sm:h-56 sm:w-48 md:h-64 md:w-56"
              containerClassName="py-4 px-8 sm:py-6 sm:px-14"
              alt="Aryan Bola"
            />
          </motion.div>

          {/* Things I love + roles */}
          <div className="order-2 flex w-full max-w-md flex-col items-center gap-6 sm:gap-8 lg:order-1 lg:max-w-xs lg:items-start">
            <div className="w-full rounded-2xl border border-dashed border-neutral-400 bg-white/60 p-3 sm:p-4">
              <p className="mb-3 text-center text-xs font-medium uppercase tracking-widest text-neutral-800 lg:text-left">
                Things I love
              </p>
              <motion.div className="grid grid-cols-4 gap-2 sm:gap-4">
                {thingsILove.map((item) => (
                  <Dialog key={item.id}>
                    <DialogTrigger className="flex cursor-pointer flex-col items-center justify-center gap-1.5 rounded-md outline-none transition-transform duration-300 hover:scale-105 focus-visible:ring-2 focus-visible:ring-neutral-400 sm:gap-2 sm:hover:scale-110">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-14 w-11 rounded-md object-cover sm:h-20 sm:w-16"
                      />
                      <p className="text-[10px] font-medium tracking-wide text-neutral-800 sm:text-xs">
                        {item.name}
                      </p>
                    </DialogTrigger>
                    <DialogContent className="max-w-[calc(100%-1.5rem)] overflow-hidden border-neutral-200 p-0 sm:max-w-lg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="max-h-[70vh] w-full object-contain bg-neutral-100"
                      />
                    </DialogContent>
                  </Dialog>
                ))}
              </motion.div>
            </div>

            <div className="flex w-full flex-col items-center gap-1 sm:gap-2 lg:items-start">
              {roles.map((role, index) => (
                <FlipButton
                  key={index}
                  text={role}
                  className="text-base sm:text-lg md:text-xl"
                  uppercase={false}
                />
              ))}
            </div>
          </div>

          {/* GitHub card */}
          <div className="order-3 flex w-full justify-center lg:order-3 lg:w-auto lg:justify-end">
            <GitHubActivityCard />
          </div>
        </div>
      </main>
    </motion.div>
  );
}
