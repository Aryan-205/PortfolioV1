function CompanyLogo({ src, company }) {
  if (src) {
    return (
      <img
        src={src}
        alt={`${company} logo`}
        className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-xl bg-black object-cover"
      />
    );
  }

  return (
    <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-xl bg-gray-200 text-black border flex items-center justify-center text-lg font-semibold">
      {company.charAt(0)}
    </div>
  );
}

export default function ExperienceCard({
  company,
  role,
  type,
  dateRange,
  description,
  logo,
  isCurrent = false,
}) {
  return (
    <article className="flex gap-4 md:gap-5">
      <CompanyLogo src={logo} company={company} />

      <div className="flex-1 min-w-0">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="font-semibold text-black text-base md:text-lg">{company}</span>
            <span className="text-neutral-300 select-none" aria-hidden>|</span>
            <span className="text-neutral-500 text-base md:text-lg">{role}</span>
            <span className="text-neutral-300 select-none" aria-hidden>|</span>
            <span className="text-neutral-500 text-base md:text-lg">{type}</span>
            {isCurrent && (
              <span
                className="w-2 h-2 rounded-full bg-lime-500 shrink-0"
                aria-label="Currently working"
              />
            )}
          </div>
          { isCurrent && (<p className="text-neutral-500 text-sm md:text-base sm:text-right shrink-0">
            {dateRange}
          </p>)}
        </div>

        <p className="mt-2 md:mt-3 text-neutral-500 text-sm md:text-[15px] leading-relaxed">
          {description}
        </p>
      </div>
    </article>
  );
}
