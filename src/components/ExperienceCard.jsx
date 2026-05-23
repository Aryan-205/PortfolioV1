function CompanyLogo({ src, company }) {
  if (src) {
    return (
      <img
        src={src}
        alt={`${company} logo`}
        className="h-10 w-10 shrink-0 rounded-lg bg-black object-cover md:h-14 md:w-14 md:rounded-xl"
      />
    );
  }

  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border bg-gray-200 text-base font-semibold text-black md:h-14 md:w-14 md:rounded-xl md:text-lg">
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
    <article className="flex gap-3 md:gap-5">
      <CompanyLogo src={logo} company={company} />

      <div className="min-w-0 flex-1">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-2">
          <div className="min-w-0">
            <p className="text-sm font-semibold text-black md:text-lg">{company}</p>
            <div className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-neutral-500 md:text-base">
              <span>{role}</span>
              <span className="hidden text-neutral-300 sm:inline" aria-hidden>
                |
              </span>
              <span className="flex items-center gap-1.5">
                {type}
                {isCurrent ? (
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-lime-500"
                    aria-label="Currently working"
                  />
                ) : null}
              </span>
            </div>
          </div>
          {dateRange ? (
            <p className="shrink-0 text-xs text-neutral-500 md:text-sm">{dateRange}</p>
          ) : null}
        </div>

        <p className="mt-2 text-xs leading-relaxed text-neutral-500 md:mt-3 md:text-[15px]">
          {description}
        </p>
      </div>
    </article>
  );
}
