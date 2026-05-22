import { BadgeCheck } from "lucide-react";

const AVATAR = "https://pbs.twimg.com/profile_images/2055985643894009856/P_DVOYZ2_400x400.jpg";
const BANNER = "https://pbs.twimg.com/profile_banners/1854779226257604610/1767259151/1500x500";
const FOLLOWERS = "1k+";
const FOLLOWING = "356+";
const DESCRIPTION = "21 | Designer | Developer | Aircraft | Travel";
const HANDLE = "@BolatwtX";

export default function TwitterPreview() {
  return (
    <div className="w-72 overflow-hidden rounded-xl border border-neutral-300 bg-white shadow-xl">
      <div className="relative h-24 w-full">
        <img src={BANNER} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="relative px-4 pb-4">
        <img
          src={AVATAR}
          alt="Aryan Bola"
          className="-mt-8 mb-2 h-16 w-16 rounded-full border-4 border-white object-cover"
        />
        <div className="flex items-center gap-1">
          <p className="text-base font-bold text-neutral-900">Aryan Bola</p>
          <BadgeCheck size={16} className="fill-sky-500 text-white" />
        </div>
        <p className="text-sm text-neutral-500">{HANDLE}</p>
        <p className="mt-2 text-sm text-neutral-800">
          {DESCRIPTION}
        </p>
        <div className="mt-3 flex gap-4 text-sm">
          <p>
            <span className="font-bold text-neutral-900">{FOLLOWING}</span>{" "}
            <span className="text-neutral-500">Following</span>
          </p>
          <p>
            <span className="font-bold text-neutral-900">{FOLLOWERS}</span>{" "}
            <span className="text-neutral-500">Followers</span>
          </p>
        </div>
      </div>
    </div>
  );
}
