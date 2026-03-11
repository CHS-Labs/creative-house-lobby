import { Link } from 'react-router-dom';
import { StudioHeader } from '../../components/studio/StudioHeader';

const productions = [
  {
    index: '01',
    title: 'Blind Ambition',
    status: 'Released',
    statusColor: 'text-emerald-400 border-emerald-800/50 bg-emerald-950/30',
    synopsis:
      'A documentary following a remarkable group of Zimbabwean refugees who became the first team from their country to compete in the World Wine Tasting Championship. Their journey from displacement to an international stage is a story of identity, excellence, and extraordinary determination.',
    details: [
      { label: 'Locations', value: 'Zimbabwe, South Africa, France' },
      { label: 'Partners', value: 'International wine community, refugee advocacy networks' },
    ],
    cta: { label: 'View Film', href: '#' },
  },
  {
    index: '02',
    title: 'Blind Adventures',
    status: 'In Development',
    statusColor: 'text-amber-400 border-amber-800/50 bg-amber-950/30',
    synopsis:
      'Following the journey of visually impaired adventurers as they navigate extraordinary physical and emotional challenges — redefining what is possible. The project explores accessibility, courage, and the recalibration of what it means to explore the world.',
    details: [
      { label: 'Status', value: 'Development — seeking production partners' },
    ],
    cta: { label: 'Express Interest', href: '/collaborate' },
  },
  {
    index: '03',
    title: 'Thirst',
    status: 'In Development',
    statusColor: 'text-sky-400 border-sky-800/50 bg-sky-950/30',
    synopsis:
      'A cinematic investigation into the global water crisis — following the stories of communities, scientists, and advocates working to restore access to clean water. Thirst connects local struggles to global systems, profiling the people building solutions at every scale.',
    details: [
      { label: 'Themes', value: 'Water health, environmental justice, technology, community' },
      { label: 'Companion Project', value: 'I Drink Living Water' },
    ],
    cta: { label: 'Express Interest', href: '/collaborate' },
  },
];

export function ProductionsPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <StudioHeader />

      <main className="pt-32 pb-32 px-6 md:px-12">
        <div className="max-w-[900px] mx-auto">

          {/* Page header */}
          <div className="mb-24">
            <p className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-4">Creative House Studios</p>
            <h1 className="text-5xl md:text-7xl text-zinc-100 font-light mb-6">Productions</h1>
            <p className="text-lg text-zinc-500 font-light leading-relaxed">
              Films and documentaries produced or in development by Creative House Studios.
            </p>
          </div>

          {/* Stacked production sections */}
          <div className="flex flex-col gap-0">
            {productions.map(({ index, title, status, statusColor, synopsis, details, cta }) => (
              <div key={index} className="py-16 border-t border-zinc-900">
                <div className="flex items-start justify-between gap-6 mb-8 flex-wrap">
                  <div>
                    <p className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-3">{index}</p>
                    <h2 className="text-3xl md:text-4xl text-zinc-100 font-light leading-tight">{title}</h2>
                  </div>
                  <span className={`text-xs tracking-[0.2em] uppercase px-3 py-1.5 border rounded-sm font-light ${statusColor}`}>
                    {status}
                  </span>
                </div>

                <p className="text-base text-zinc-400 font-light leading-relaxed mb-8">
                  {synopsis}
                </p>

                {details.length > 0 && (
                  <div className="flex flex-col gap-2 mb-8 pl-4 border-l border-zinc-800">
                    {details.map(({ label, value }) => (
                      <p key={label} className="text-sm text-zinc-500 font-light">
                        <span className="text-zinc-600">{label}: </span>{value}
                      </p>
                    ))}
                  </div>
                )}

                {cta.href.startsWith('/') ? (
                  <Link
                    to={cta.href}
                    className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors tracking-wide"
                  >
                    {cta.label} →
                  </Link>
                ) : (
                  <a
                    href={cta.href}
                    className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors tracking-wide"
                  >
                    {cta.label} →
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div className="pt-16 border-t border-zinc-900">
            <p className="text-sm text-zinc-600 font-light leading-relaxed max-w-xl">
              Creative House Studios develops films that work in tandem with its story amplification infrastructure — ensuring each production reaches the audience it was made for.
            </p>
            <div className="mt-8 flex flex-wrap gap-6">
              <Link
                to="/movements"
                className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors tracking-wide"
              >
                View Story Universes →
              </Link>
              <Link
                to="/collaborate"
                className="text-sm text-zinc-600 hover:text-zinc-300 transition-colors tracking-wide"
              >
                Collaborate with us →
              </Link>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
