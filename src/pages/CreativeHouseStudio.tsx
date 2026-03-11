import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function CreativeHouseStudio() {
  return (
    <main className="min-h-screen bg-zinc-950 pt-32 pb-32 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-100 transition-colors text-sm mb-12 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Lobby
        </Link>
        <p className="text-xs tracking-[0.3em] text-zinc-500 uppercase mb-6">Production</p>
        <h1 className="text-5xl md:text-7xl text-zinc-100 font-light mb-8">Creative House Studio</h1>
        <p className="text-xl text-zinc-400 font-light max-w-2xl leading-relaxed">
          Films, projects, and production. The studio arm of Creative House is coming soon.
        </p>
      </div>
    </main>
  );
}
