import { Link } from 'react-router-dom';
import { ArrowRight, Film, Layers, Radio } from 'lucide-react';
import { StudioHeader } from '../../components/studio/StudioHeader';

const pillars = [
  {
    icon: Film,
    label: 'Film Production',
    description: 'Documentaries, long-form films, and story-driven content.',
  },
  {
    icon: Radio,
    label: 'Story Amplification',
    description: 'Distribution systems that move credible stories across platforms.',
  },
  {
    icon: Layers,
    label: 'Credibility Infrastructure',
    description: 'The data layer that organizes, maps, and verifies every story.',
  },
];

export function StudioLandingPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <StudioHeader />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Background texture */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(255,255,255,0.03),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(255,255,255,0.02),transparent_60%)] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24">
          <p className="text-xs tracking-[0.4em] text-zinc-500 uppercase mb-8">
            Creative House Studios
          </p>
          <h1 className="text-6xl md:text-8xl text-zinc-50 font-light tracking-tight leading-none mb-6 max-w-4xl">
            The Studio
          </h1>
          <p className="text-2xl md:text-3xl text-zinc-400 font-light italic mb-8 max-w-2xl leading-relaxed">
            "The infrastructure behind story movements."
          </p>
          <p className="text-lg text-zinc-400 font-light leading-relaxed max-w-2xl mb-16">
            Creative House Studios is a hybrid of film production, story amplification, and credibility infrastructure. We don't just make films — we build the systems that help stories reach the world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/studio/productions"
              className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-50 text-zinc-950 rounded-sm hover:bg-zinc-200 transition-all duration-300 text-sm font-medium group"
            >
              View Productions
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/studio/projects"
              className="inline-flex items-center gap-2 px-8 py-4 border border-zinc-700 text-zinc-200 rounded-sm hover:bg-zinc-900 hover:border-zinc-500 transition-all duration-300 text-sm font-light group"
            >
              Explore Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/studio/about"
              className="inline-flex items-center gap-2 px-8 py-4 border border-zinc-800 text-zinc-400 rounded-sm hover:bg-zinc-900 hover:border-zinc-600 hover:text-zinc-200 transition-all duration-300 text-sm font-light group"
            >
              About the Studio
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── THREE PILLARS ── */}
      <section className="py-24 px-6 md:px-12 border-t border-zinc-900">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-16">What Creative House Builds</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map(({ icon: Icon, label, description }) => (
              <div key={label} className="group p-8 border border-zinc-900 hover:border-zinc-700 rounded-sm hover:bg-zinc-900/30 transition-all duration-300">
                <Icon className="w-8 h-8 text-zinc-600 group-hover:text-zinc-400 mb-6 transition-colors" strokeWidth={1.5} />
                <h3 className="text-xl text-zinc-200 font-light mb-3">{label}</h3>
                <p className="text-sm text-zinc-600 font-light leading-relaxed group-hover:text-zinc-500 transition-colors">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUICK LINKS ── */}
      <section className="py-24 px-6 md:px-12 border-t border-zinc-900">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-900">
          {[
            { to: '/studio/productions', label: 'Productions', sub: 'Films & documentaries' },
            { to: '/studio/systems', label: 'Systems', sub: 'The infrastructure layer' },
            { to: '/studio/about', label: 'About', sub: 'Philosophy & mission' },
          ].map(({ to, label, sub }) => (
            <Link
              key={to}
              to={to}
              className="group flex flex-col justify-between p-10 bg-zinc-950 hover:bg-zinc-900 transition-colors duration-300"
            >
              <div>
                <h3 className="text-2xl text-zinc-300 font-light mb-2 group-hover:text-zinc-100 transition-colors">{label}</h3>
                <p className="text-sm text-zinc-600 font-light">{sub}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-zinc-700 group-hover:text-zinc-400 group-hover:translate-x-1 transition-all duration-300 mt-8" />
            </Link>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-12 px-6 md:px-12 border-t border-zinc-900">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <p className="text-zinc-700 text-sm">© {new Date().getFullYear()} Creative House Studios</p>
          <Link to="/" className="text-zinc-600 hover:text-zinc-300 text-sm transition-colors">← Back to Lobby</Link>
        </div>
      </footer>
    </div>
  );
}
