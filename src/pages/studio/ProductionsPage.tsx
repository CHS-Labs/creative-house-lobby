import { Link } from 'react-router-dom';
import { StudioHeader } from '../../components/studio/StudioHeader';
import { ProductionCard } from '../../components/studio/ProductionCard';

const productions = [
  {
    title: 'Blind Ambition',
    description: 'A documentary following a remarkable group of Zimbabwean refugees who became the first team from their country to compete in the World Wine Tasting Championship.',
    status: 'Released' as const,
    posterColor: 'from-amber-950 to-stone-900',
  },
  {
    title: 'Blind Adventures',
    description: 'Following the journey of visually impaired adventurers as they navigate extraordinary challenges — redefining what is possible.',
    status: 'Development' as const,
    posterColor: 'from-zinc-900 to-zinc-800',
  },
  {
    title: 'Thirst',
    description: 'A cinematic investigation into the global water crisis — following the stories of communities, scientists, and advocates working to restore access to clean water.',
    status: 'Development' as const,
    posterColor: 'from-sky-950 to-zinc-900',
  },
];

export function ProductionsPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <StudioHeader />

      <main className="pt-32 pb-32 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          {/* Page header */}
          <div className="mb-20">
            <p className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-4">Creative House Studios</p>
            <h1 className="text-5xl md:text-7xl text-zinc-100 font-light mb-6">Productions</h1>
            <p className="text-lg text-zinc-500 font-light max-w-xl leading-relaxed">
              Films and documentaries produced or in development by Creative House Studios.
            </p>
          </div>

          {/* Productions grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {productions.map((production) => (
              <ProductionCard key={production.title} {...production} />
            ))}
          </div>

          {/* Divider */}
          <div className="mt-24 pt-16 border-t border-zinc-900">
            <p className="text-sm text-zinc-600 font-light max-w-xl leading-relaxed">
              Creative House Studios develops films that work in tandem with its story amplification infrastructure — ensuring each production reaches the audience it was made for.
            </p>
            <div className="mt-8 flex gap-4">
              <Link
                to="/studio/projects"
                className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors tracking-wide"
              >
                View Projects →
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
