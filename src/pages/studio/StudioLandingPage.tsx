import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { StudioHeader } from '../../components/studio/StudioHeader';

const productions = [
  {
    title: 'Blind Ambition',
    subtitle: 'Adventure Documentary Series',
    description:
      'An international documentary series following blind athlete Chad Foster as he takes on extreme challenges across the world.',
    locations: ['Rome', 'Paris', 'Dubai', 'Kilimanjaro'],
    status: 'Development',
    statusColor: 'text-amber-400 border-amber-800 bg-amber-950/30',
  },
  {
    title: 'Blind Adventures',
    subtitle: 'Documentary Series',
    description:
      'A documentary adventure series exploring resilience, accessibility, and global exploration.',
    locations: [],
    status: 'Broadcast',
    statusColor: 'text-emerald-400 border-emerald-800 bg-emerald-950/30',
  },
  {
    title: 'Thirst',
    subtitle: 'Investigative Documentary',
    description:
      'Investigative documentary exploring water sovereignty and systemic failures in water infrastructure.',
    locations: [],
    status: 'Development',
    statusColor: 'text-amber-400 border-amber-800 bg-amber-950/30',
  },
];

export function StudioLandingPage() {
  return (
    <div className="relative min-h-screen">
      <StudioHeader />

      {/* ── FIXED VIDEO BACKGROUND ─────────────────────────────────────────── */}
      <div className="fixed inset-0 overflow-hidden motion-reduce:hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'saturate(0.6) brightness(0.7)' }}
        >
          <source src="/00-Hero-cover.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-zinc-950/80" />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(9, 9, 11, 0.4) 100%)' }}
        />
      </div>

      <div className="motion-reduce:block hidden fixed inset-0 bg-zinc-950" />

      <div className="relative">

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section className="pt-48 pb-32 px-6 md:px-12 max-w-[1000px] mx-auto">
          <div className="text-center">
            <p className="text-xs tracking-[0.4em] text-zinc-500 uppercase mb-8">
              Creative House Studios
            </p>
            <h1 className="text-6xl md:text-7xl mb-6 text-zinc-50 font-light leading-tight">
              Creative House Productions
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed max-w-2xl mx-auto">
              Stories that move people.<br />
              Systems that move culture.
            </p>
          </div>
        </section>

        {/* ── CURRENT SLATE ────────────────────────────────────────────────── */}
        <section className="py-16 px-6 md:px-12 border-t border-zinc-900">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-12">
              <p className="text-xs tracking-[0.3em] text-zinc-600 uppercase">Current Slate</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {productions.map((p) => (
                <div
                  key={p.title}
                  className="group backdrop-blur-md bg-white/[0.04] border border-zinc-800 rounded-sm p-8 hover:border-zinc-600 hover:bg-white/[0.07] transition-all duration-300 flex flex-col justify-between min-h-[340px]"
                >
                  {/* Status badge */}
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-8 h-px bg-zinc-700 group-hover:bg-zinc-500 transition-colors duration-300 mt-3" />
                    <span className={`text-xs tracking-widest uppercase px-3 py-1 border rounded-sm font-light ${p.statusColor}`}>
                      {p.status}
                    </span>
                  </div>

                  {/* Title block */}
                  <div className="flex-1">
                    <h3 className="text-2xl text-zinc-100 font-light mb-1 group-hover:text-white transition-colors duration-300">
                      {p.title}
                    </h3>
                    <p className="text-xs tracking-[0.2em] text-zinc-600 uppercase mb-5 font-light">
                      {p.subtitle}
                    </p>
                    <p className="text-sm text-zinc-400 font-light leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                      {p.description}
                    </p>
                  </div>

                  {/* Locations */}
                  {p.locations.length > 0 && (
                    <div className="mt-8 pt-6 border-t border-zinc-900 flex flex-wrap gap-3">
                      {p.locations.map((loc) => (
                        <span key={loc} className="text-xs text-zinc-600 tracking-widest uppercase font-light">
                          {loc}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── THE STUDIO ───────────────────────────────────────────────────── */}
        <section className="py-24 px-6 md:px-12 border-t border-zinc-900">
          <div className="max-w-[900px] mx-auto">
            <div className="mb-12">
              <p className="text-xs tracking-[0.3em] text-zinc-600 uppercase">The Studio</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* What we combine */}
              <div>
                <p className="text-lg text-zinc-400 font-light mb-8 leading-relaxed">
                  Creative House Productions combines:
                </p>
                <div className="pl-6 border-l-2 border-zinc-800 space-y-4">
                  <p className="text-base text-zinc-300 font-light">Documentary filmmaking</p>
                  <p className="text-base text-zinc-300 font-light">AI-assisted production workflows</p>
                  <p className="text-base text-zinc-300 font-light">Lightweight global production crews</p>
                  <p className="text-base text-zinc-300 font-light">Digital distribution infrastructure</p>
                </div>
              </div>

              {/* Leadership */}
              <div>
                <p className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-8">Leadership</p>
                <div className="space-y-8">
                  <div>
                    <p className="text-xl text-zinc-100 font-light mb-1">Glen Kerby</p>
                    <p className="text-sm text-zinc-500 font-light tracking-wide">Director · Producer</p>
                  </div>
                  <div>
                    <p className="text-xl text-zinc-100 font-light mb-1">Shelly Frank</p>
                    <p className="text-sm text-zinc-500 font-light tracking-wide">Executive Producer · Systems Architect</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FOOTER ───────────────────────────────────────────────────────── */}
        <footer className="py-12 px-6 md:px-12 border-t border-zinc-900">
          <div className="max-w-[1400px] mx-auto flex items-center justify-between">
            <p className="text-zinc-700 text-sm">© {new Date().getFullYear()} Creative House Studios</p>
            <Link to="/" className="inline-flex items-center gap-2 text-zinc-600 hover:text-zinc-300 text-sm transition-colors">
              <ArrowLeft className="w-3 h-3" />
              Back to Lobby
            </Link>
          </div>
        </footer>

      </div>
    </div>
  );
}
