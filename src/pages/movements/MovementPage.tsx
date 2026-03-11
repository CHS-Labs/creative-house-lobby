import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const movements: Record<string, {
  title: string;
  tagline: string;
  description: string;
  video: string;
  externalUrl?: string;
  externalLabel?: string;
}> = {
  idlw: {
    title: 'I Drink Living Water',
    tagline: 'Water, health, and ecology.',
    description: 'A global movement restoring access to living water. IDLW explores the science, the stories, and the systems behind clean, structured hydration.',
    video: '/001-IDLW.mp4',
    externalUrl: 'https://idlw-lobby.vercel.app',
    externalLabel: 'Visit the IDLW Lobby',
  },
  'simple-plan': {
    title: 'The Simple Plan',
    tagline: 'Political reform through credible voices.',
    description: 'The Simple Plan documents the stories of people working toward systemic political change — through transparency, accountability, and real-world action.',
    video: '/02-TheSimplePlan.mp4',
  },
  'advo-cassie': {
    title: 'Advo-Cassie',
    tagline: 'Justice advocacy for people navigating coercive systems.',
    description: 'Advo-Cassie amplifies the stories of individuals and families navigating coercive legal and institutional systems, and advocates for the infrastructure needed to protect them.',
    video: '/03-Advo-Cassie.mp4',
  },
};

export function MovementPage() {
  const { slug } = useParams<{ slug: string }>();
  const movement = slug ? movements[slug] : null;

  if (!movement) {
    return (
      <main className="min-h-screen bg-zinc-950 pt-32 px-6">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-4xl text-zinc-100 font-light mb-6">Movement not found</h1>
          <Link to="/movements" className="text-zinc-400 hover:text-zinc-100 transition-colors">← Back to Movements</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-950">
      <div className="relative h-screen overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src={movement.video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-zinc-950/30 to-zinc-950/90" />
        <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-16 pb-28 max-w-[1400px] mx-auto">
          <Link
            to="/movements"
            className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-100 transition-colors text-sm mb-10 group w-fit"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            All Movements
          </Link>
          <p className="text-xs tracking-[0.3em] text-zinc-400 uppercase mb-4">Story Universe</p>
          <h1 className="text-5xl md:text-7xl text-zinc-50 font-light mb-4 leading-tight">{movement.title}</h1>
          <p className="text-xl text-zinc-300 font-light italic mb-6">{movement.tagline}</p>
          <p className="text-base text-zinc-400 font-light max-w-xl leading-relaxed mb-10">{movement.description}</p>
          {movement.externalUrl && (
            <a
              href={movement.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-50/10 border border-zinc-50/20 backdrop-blur-sm text-zinc-100 rounded-sm hover:bg-zinc-50/20 transition-all duration-300 text-sm w-fit"
            >
              {movement.externalLabel}
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </main>
  );
}
