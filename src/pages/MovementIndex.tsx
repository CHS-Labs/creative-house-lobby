import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const movements = [
  {
    title: 'I Drink Living Water',
    description: 'Water, health, environment, and the stories behind what we consume.',
    slug: 'idlw',
  },
  {
    title: 'The Simple Plan',
    description: 'Political reform through credible voices and clear narratives.',
    slug: 'simple-plan',
  },
  {
    title: 'Advo-Cassie',
    description: 'Justice advocacy for people navigating coercive systems.',
    slug: 'advo-cassie',
  },
];

export function MovementIndex() {
  return (
    <main className="min-h-screen bg-zinc-950 pt-32 pb-32 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-100 transition-colors text-sm mb-12 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Lobby
        </Link>
        <p className="text-xs tracking-[0.3em] text-zinc-500 uppercase mb-6">Story Universes</p>
        <h1 className="text-5xl md:text-7xl text-zinc-100 font-light mb-16">Movements</h1>

        <div className="flex flex-col divide-y divide-zinc-900">
          {movements.map((m) => (
            <Link
              key={m.slug}
              to={`/movements/${m.slug}`}
              className="group py-10 flex items-center justify-between hover:bg-zinc-900/20 transition-colors duration-300 -mx-4 px-4"
            >
              <div>
                <h2 className="text-3xl text-zinc-200 font-light mb-2 group-hover:text-zinc-50 transition-colors">{m.title}</h2>
                <p className="text-zinc-500 text-sm">{m.description}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-zinc-300 group-hover:translate-x-1 transition-all duration-300 shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
