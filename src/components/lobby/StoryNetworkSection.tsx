import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function StoryNetworkSection() {
  return (
    <section className="relative py-32 px-6 border-t border-zinc-900 overflow-hidden">
      {/* Background pulse */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02),transparent_70%)]" />
      </div>

      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.3em] text-zinc-500 uppercase mb-6">The Archive</p>
            <h2 className="text-4xl md:text-5xl text-zinc-100 font-light mb-8 leading-tight">
              Story Network
            </h2>
            <p className="text-xl text-zinc-300 leading-relaxed font-light mb-4">
              Creative House amplifies credible stories across movements, research communities, and global conversations.
            </p>
            <p className="text-base text-zinc-500 leading-relaxed font-light mb-12">
              Every story is verified, structured, and built to travel — across platforms, audiences, and time.
            </p>
            <Link
              to="/stories"
              className="inline-flex items-center gap-3 group text-zinc-300 hover:text-zinc-50 transition-colors text-sm tracking-widest uppercase"
            >
              Explore Stories
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Visual grid */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'Water & Environment', color: 'border-sky-900/50 hover:border-sky-700/50' },
              { label: 'Recovery & Healing', color: 'border-amber-900/50 hover:border-amber-700/50' },
              { label: 'Advocacy & Justice', color: 'border-rose-900/50 hover:border-rose-700/50' },
              { label: 'Long-Form Films', color: 'border-zinc-700/50 hover:border-zinc-500/50' },
              { label: 'Short Documentaries', color: 'border-zinc-700/50 hover:border-zinc-500/50' },
              { label: 'Creator Voices', color: 'border-zinc-700/50 hover:border-zinc-500/50' },
            ].map((item) => (
              <div
                key={item.label}
                className={`py-6 px-5 border ${item.color} bg-zinc-900/30 hover:bg-zinc-900/60 transition-all duration-300 rounded-lg`}
              >
                <span className="text-sm text-zinc-400">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
