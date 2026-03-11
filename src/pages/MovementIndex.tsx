import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const movements = [
  {
    title: 'I Drink Living Water',
    description: 'Water, health, ecology, innovation',
    slug: 'idlw',
    video: '/001-IDLW.mp4',
  },
  {
    title: 'The Simple Plan',
    description: 'Recovery stories and healing music',
    slug: 'simple-plan',
    video: '/02-TheSimplePlan.mp4',
  },
  {
    title: 'Advo-Cassie',
    description: 'Stories and systems for people navigating coercive separation',
    slug: 'advo-cassie',
    video: '/03-Advo-Cassie.mp4',
  },
];

export function MovementIndex() {
  return (
    <main className="min-h-screen bg-zinc-950 pt-28 pb-24 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-100 transition-colors text-sm mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Lobby
        </Link>

        <p className="text-xs tracking-[0.3em] text-zinc-500 uppercase mb-4">Story Universes</p>
        <h1 className="text-5xl md:text-7xl text-zinc-100 font-light mb-16">Movements</h1>

        {/* ── CINEMATIC CARD GRID ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {movements.map((m) => (
            <Link
              key={m.slug}
              to={`/movements/${m.slug}`}
              className="group relative overflow-hidden rounded-sm aspect-[3/4] md:aspect-[2/3] block"
            >
              {/* Video background */}
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              >
                <source src={m.video} type="video/mp4" />
              </video>

              {/* Base dark overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500" />

              {/* Bottom gradient for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h2 className="text-xl md:text-2xl text-white font-light mb-1 leading-snug">
                  {m.title}
                </h2>
                <p className="text-sm text-white/60 font-light mb-4 leading-relaxed">
                  {m.description}
                </p>
                <span className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-white/80 group-hover:text-white group-hover:gap-3 transition-all duration-300 font-light">
                  Explore
                  <span className="text-base leading-none">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}
