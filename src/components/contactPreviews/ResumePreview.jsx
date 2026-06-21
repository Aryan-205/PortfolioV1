const RESUME_PREVIEW_IMAGE = "/resume-preview.png";

export default function ResumePreview() {
  return (
    <div className="w-72 rounded-2xl border border-neutral-300 bg-white p-5 shadow-xl">
      <div className="rounded-xl border border-dashed border-neutral-300 bg-white">
        <img
          src={RESUME_PREVIEW_IMAGE}
          alt="Resume preview"
          className="aspect-[3/4] w-full rounded-lg object-cover object-top"
        />
      </div>
      <p className="mt-4 text-center text-sm font-medium text-neutral-700">
        Click icon to open resume
      </p>
    </div>
  );
}
