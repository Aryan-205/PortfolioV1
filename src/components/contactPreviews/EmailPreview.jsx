const AVATAR = "/me/Me1.jpeg";

export default function EmailPreview() {
  return (
    <div className="w-72 overflow-hidden rounded-xl border border-neutral-300 bg-white shadow-xl">
      <div className="bg-gradient-to-br from-red-50 to-white p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
            {/* <Mail size={24} className="text-red-500" /> */}
            <img
              src={AVATAR}
              alt="Aryan Bola"
              className="rounded-full border border-neutral-200 object-cover"
            />
          </div>
          <div className="min-w-0">
            <p className="text-base font-bold text-neutral-900">Email</p>
            <p className="truncate text-sm text-red-500">aaryann5002@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="space-y-3 px-4 pb-4">
        <p className="text-sm text-neutral-800">Drop me a message anytime.</p>
        <p className="text-xs text-neutral-500">Usually replies within 24 hours.</p>
      </div>
    </div>
  );
}
