import ExperienceCard from './ExperienceCard';

const experiences = [
  {
    id: 1,
    company: 'Brutanix Studio',
    role: 'Full Time',
    type: 'Lead Frontend Developer',
    dateRange: 'Dec 2025 - Present',
    isCurrent: true,
    logo: '',
    description:
      'As Lead Frontend Developer, I own the product surface end to end—from architecture through shipping. I built AI integrations with custom outputs, a live event board, and a full card template builder single-handedly, handling responsive UI, API wiring, and production polish.',
  },
  {
    id: 2,
    company: 'Mazuri Freelance Projects',
    role: 'Full Stack Developer',
    type: 'Freelance',
    dateRange: 'April 2026 - Present',
    isCurrent: true,
    logo: '',
    description:
      'Delivered a restaurant website on the frontend and wired up integrations so the team can update menus, pricing, and content on their own. Focused on a clean, mobile-friendly experience they can maintain without a developer for every small change.',
  },
  {
    id: 3,
    company: 'Croco Studio',
    role: 'Full Stack Developer',
    type: 'Freelance',
    dateRange: 'April 2026 - Present',
    isCurrent: true,
    logo: '',
    description:
      'Collaborated with a design studio to build their landing page—working closely on layout, motion, and brand details to match their vision. Handled the frontend implementation end to end and shipped a responsive, polished site ready for production.',
  },
  {
    id: 4,
    company: 'Real World Sales Pitch Experience',
    role: 'Full Time',
    type: 'Sales',
    dateRange: '',
    isCurrent: true,
    logo: '',
    description:
      'Met potential clients in person to deliver real-world sales pitches for studio work—presenting projects, walking through value and timelines, and answering technical and business questions on the spot. Learned how to build trust and turn interest into committed work face to face.',
  },
];

export default function PreChoise() {
  return (
    <section
      id="section"
      className="w-full bg-white relative px-4 md:px-24 py-12 md:py-20 overflow-hidden"
    >
      <div className="border-x border-dashed border-neutral-300 px-4 md:px-8">
        <div className="border-t border-dashed border-neutral-300 pt-8 md:pt-10">
          <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight">
            Work Experience
          </h2>

          <div className="mt-8 md:mt-10 flex flex-col gap-10 md:gap-12">
            {experiences.map((exp) => (
              <ExperienceCard key={exp.company} {...exp} />
            ))}
          </div>
        </div>

        <div className="border-t border-dashed border-neutral-300 mt-8 md:mt-10" />
      </div>
    </section>
  );
}
