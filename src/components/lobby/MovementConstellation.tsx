import { useNavigate } from 'react-router-dom';
import { Droplets, Scale, Film } from 'lucide-react';

const movements = [
  {
    id: 1,
    title: 'I Drink Living Water',
    description: 'Water, health, environment, and the stories behind what we consume.',
    icon: Droplets,
    slug: 'idlw',
    accent: 'from-sky-900/40 to-cyan-900/20',
    iconColor: 'text-sky-400',
    glowColor: 'rgba(56,189,248,0.15)',
    borderHover: 'hover:border-sky-700/50',
  },
  {
    id: 2,
    title: 'The Simple Plan',
    description: 'Addiction recovery through credible voices and clear narratives.',
    icon: Scale,
    slug: 'simple-plan',
    accent: 'from-amber-900/30 to-yellow-900/10',
    iconColor: 'text-amber-400',
    glowColor: 'rgba(251,191,36,0.12)',
    borderHover: 'hover:border-amber-700/50',
  },
  {
    id: 3,
    title: 'Advo-Cassie',
    description: 'Justice advocacy for people navigating coercive systems.',
    icon: Film,
    slug: 'advo-cassie',
    accent: 'from-rose-900/30 to-pink-900/10',
    iconColor: 'text-rose-400',
    glowColor: 'rgba(251,113,133,0.12)',
    borderHover: 'hover:border-rose-700/50',
  },
];

export function MovementConstellation() {
  const navigate = useNavigate();

  return (
    <section className="relative py-28 px-6 overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.05),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.03),transparent_60%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] text-zinc-500 uppercase mb-4">Story Universes</p>
          <h2 className="text-4xl md:text-5xl text-zinc-100 font-light mb-4">
            Movement Constellation
          </h2>
          <p className="text-lg text-zinc-400 font-light">
            Each movement is a universe. Enter one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {movements.map((movement, index) => {
            const Icon = movement.icon;
            return (
              <button
                key={movement.id}
                onClick={() => navigate(`/movements/${movement.slug}`)}
                className={`group relative bg-zinc-900/60 backdrop-blur-sm p-14 rounded-xl border border-zinc-800 ${movement.borderHover} transition-all duration-500 hover:-translate-y-2 text-left overflow-hidden`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${movement.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon */}
                <div className="relative mb-10">
                  <div
                    className="absolute -inset-4 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: movement.glowColor }}
                  />
                  <Icon
                    className={`relative w-14 h-14 ${movement.iconColor} transition-all duration-500 group-hover:scale-110`}
                    strokeWidth={1.5}
                  />
                </div>

                {/* Content */}
                <h3 className="relative text-3xl text-zinc-100 font-light mb-4 group-hover:text-white transition-colors duration-300">
                  {movement.title}
                </h3>
                <p className="relative text-base text-zinc-500 font-light leading-relaxed group-hover:text-zinc-400 transition-colors duration-300">
                  {movement.description}
                </p>

                {/* Bottom arrow */}
                <div className="relative mt-10 flex items-center gap-2 text-xs tracking-widest uppercase text-zinc-600 group-hover:text-zinc-300 transition-colors duration-300">
                  Enter Universe
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
