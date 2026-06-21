const AVATAR = "/me/Me1.jpeg";
const BANNER = "https://media.licdn.com/dms/image/v2/D5616AQGRh6tQxyPKtw/profile-displaybackgroundimage-shrink_350_1400/B56ZetPWrRG0Ac-/0/1750958173597?e=1781136000&v=beta&t=zwKHfWOucIb_vLIaKLvcOuhZh0JhHn9nCDPkMexH-KA";
const NAME = "Aryan Bola";
const DESCRIPTION = "Software Engineer. Building cool stuff on the web";
const LOCATION = "Delhi, India";
const CONNECTIONS = 100;

export default function LinkedInPreview() {
  return (
    <div className="w-72 overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-xl">
      <div className="relative h-20 bg-[#b8c5d4]">
        <img src={BANNER} alt="Aryan Bola" className="h-full w-full object-cover" />
      </div>
      <div className="relative px-4 pb-4 pt-10">
        <img
          src={AVATAR}
          alt="Aryan Bola"
          className="absolute -top-8 left-4 h-16 w-16 rounded-full border-4 border-white bg-neutral-100 object-cover"
        />
        <p className="text-base font-bold text-neutral-900">{NAME}</p>
        <p className="mt-1 text-sm text-neutral-600">
          {DESCRIPTION}
        </p>
        <p className="mt-1 text-xs text-neutral-500">{LOCATION}</p>
        <p className="mt-2 text-sm font-semibold text-[#0a66c2]">{CONNECTIONS}+ connections</p>
      </div>
    </div>
  );
}
