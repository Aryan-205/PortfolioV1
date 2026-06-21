import { MapPin } from "lucide-react";

const AVATAR = "https://github.com/Aryan-205.png";
const NAME = "Aryan Bola";
const USERNAME = "Aryan-205";
const DESCRIPTION = "My curiosity to learn never stops";
const LOCATION = "Delhi, India";
const REPOSITORIES = 58;
const FOLLOWERS = 25;

export default function GitHubPreview() {
  return (
    <div className="w-72 overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-xl">
      <div className="flex items-center gap-3 p-4">
        <img
          src={AVATAR}
          alt="Aryan Bola"
          className="h-14 w-14 shrink-0 rounded-full border border-neutral-300 object-cover"
        />
        <div className="min-w-0">
          <p className="truncate text-base font-bold text-neutral-900">{NAME}</p>
          <p className="truncate text-sm text-neutral-500">{USERNAME}</p>
        </div>
      </div>
      <div className="space-y-2 px-4 pb-3">
        <p className="text-sm text-neutral-800">
          {DESCRIPTION}
        </p>
        <p className="flex items-center gap-1 text-xs text-neutral-500">
          <MapPin size={12} />
          {LOCATION}
        </p>
      </div>
      <div className="flex gap-6 border-t border-neutral-100 px-4 py-3 text-sm">
        <p>
          <span className="font-bold text-neutral-900">{REPOSITORIES}</span>{" "}
          <span className="text-neutral-500">Repositories</span>
        </p>
        <p>
          <span className="font-bold text-neutral-900">{FOLLOWERS}</span>{" "}
          <span className="text-neutral-500">Followers</span>
        </p>
      </div>
    </div>
  );
}
