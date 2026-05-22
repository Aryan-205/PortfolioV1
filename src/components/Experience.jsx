import ExperienceCard from './ExperienceCard';

const experiences = [
  {
    id: 1,
    company: 'Brutanix Studio',
    role: 'Lead Frontend Developer',
    type: 'Internship turned Full Time',
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
    dateRange: 'April 2026',
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
    dateRange: 'June 2025 - Present',
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
      className="w-full relative p-10 overflow-hidden border-x border-dashed border-neutral-400/80 bg-white"
    >
      <div className="w-full">
        <div className="pt-8 md:pt-10">
          <p className="text-5xl md:text-4xl tracking-tight">
            Work Experience
          </p>

          <div className="mt-8 md:mt-10 flex flex-col gap-10 md:gap-12">
            {experiences.map((exp) => (
              <ExperienceCard key={exp.company} {...exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
