import { Link } from 'react-router-dom';

export function CollaborateSection() {
  return (
    <section className="relative py-40 px-6 border-t border-zinc-900 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900/30 to-zinc-950 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.3em] text-zinc-500 uppercase mb-6">Partners & Clients</p>
          <h2 className="text-5xl md:text-6xl text-zinc-100 font-light mb-8 leading-tight">
            Work With Creative House
          </h2>
          <p className="text-xl text-zinc-300 leading-relaxed font-light mb-4">
            If your organization has a story the world should hear, Creative House can help amplify it.
          </p>
          <p className="text-base text-zinc-500 leading-relaxed font-light mb-14">
            We build the infrastructure — the credibility spine, the distribution system, the lobby — so your story reaches the people who need to hear it.
          </p>
          <Link
            to="/collaborate"
            className="inline-block px-10 py-5 bg-zinc-50 text-zinc-950 rounded-sm hover:bg-zinc-200 transition-all duration-300 text-base font-medium"
          >
            Work With Creative House
          </Link>
        </div>
      </div>
    </section>
  );
}
