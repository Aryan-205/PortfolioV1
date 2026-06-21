import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-white px-6 text-center">
      <p className="text-6xl font-black tracking-tight text-neutral-900">404</p>
      <p className="max-w-sm text-sm text-neutral-500">
        This page doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="rounded-full border border-black px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white"
      >
        Back to Home
      </Link>
    </div>
  );
}
