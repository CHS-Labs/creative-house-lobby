import { Link } from 'react-router-dom';
import { ArrowRight, Mic, Camera, BookOpen } from 'lucide-react';

const roles = [
  { icon: Camera, label: 'Filmmakers' },
  { icon: Mic, label: 'Advocates' },
  { icon: BookOpen, label: 'Researchers' },
];

export function VoicesNetworkSection() {
  return (
    <section className="relative py-32 px-6 border-t border-zinc-900 bg-zinc-950">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* Role icons */}
          <div className="flex flex-col gap-6">
            {roles.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-6 group">
                <div className="w-14 h-14 border border-zinc-800 rounded-xl flex items-center justify-center group-hover:border-zinc-600 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-zinc-500 group-hover:text-zinc-300 transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <span className="text-xl text-zinc-500 font-light group-hover:text-zinc-300 transition-colors duration-300">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Text */}
          <div>
            <p className="text-xs tracking-[0.3em] text-zinc-500 uppercase mb-6">Creator Network</p>
            <h2 className="text-4xl md:text-5xl text-zinc-100 font-light mb-8 leading-tight">
              Voices for Good
            </h2>
            <p className="text-xl text-zinc-300 leading-relaxed font-light mb-4">
              Creative House works with filmmakers, researchers, and advocates who want their work to reach a wider audience.
            </p>
            <p className="text-base text-zinc-500 leading-relaxed font-light mb-12">
              We work with people who have already done the work — and need a system behind their voice.
            </p>
            <Link
              to="/voices"
              className="inline-flex items-center gap-3 px-8 py-4 border border-zinc-700 text-zinc-200 rounded-sm hover:bg-zinc-900 hover:border-zinc-500 transition-all duration-300 text-sm tracking-wide group"
            >
              Join the Network
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
