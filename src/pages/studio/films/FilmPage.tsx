import { useParams, Link } from 'react-router-dom';
import { StudioHeader } from '../../../components/studio/StudioHeader';
import { getProductionBySlug } from '../../../data/productions';

export function FilmPage() {
  const { slug } = useParams<{ slug: string }>();
  const production = slug ? getProductionBySlug(slug) : undefined;

  if (!production) {
    return (
      <div className="bg-zinc-950 min-h-screen pt-32 pb-32 px-6 md:px-12">
        <StudioHeader />
        <div className="max-w-[900px] mx-auto">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl text-zinc-100 font-light mb-6">
              Film not found
            </h1>
            <Link
              to="/studio"
              className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors tracking-wide"
            >
              ← Back to Studio
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-zinc-950 min-h-screen pt-32 pb-32 px-6 md:px-12">
      <StudioHeader />
      <div className="max-w-[900px] mx-auto">
        {/* Page Header */}
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-4">
            Creative House Studios
          </p>
          <p className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-4">
            {production.index}
          </p>
          <h1 className="text-5xl md:text-7xl text-zinc-100 font-light mb-4">
            {production.title}
          </h1>
          <p className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-6">
            {production.subtitle}
          </p>
          <span
            className={`text-xs tracking-[0.2em] uppercase px-3 py-1.5 border rounded-sm font-light ${production.statusColor}`}
          >
            {production.status}
          </span>
        </div>

        {/* Synopsis Section */}
        <div className="py-16 border-t border-zinc-900">
          <p className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-6">
            Synopsis
          </p>
          <p className="text-base text-zinc-400 font-light leading-relaxed max-w-2xl">
            {production.synopsis}
          </p>
        </div>

        {/* Details Section */}
        {production.details && production.details.length > 0 && (
          <div className="py-16 border-t border-zinc-900">
            <p className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-6">
              Details
            </p>
            <div className="pl-4 border-l border-zinc-800 space-y-3">
              {production.details.map((detail, index) => (
                <p key={index} className="text-sm text-zinc-400 font-light">
                  <span className="text-zinc-600">{detail.label}: </span>
                  {detail.value}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="py-16 border-t border-zinc-900">
          {production.cta.href.startsWith('/') ? (
            <Link
              to={production.cta.href}
              className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors tracking-wide"
            >
              {production.cta.label}
            </Link>
          ) : (
            <a
              href={production.cta.href}
              className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors tracking-wide"
            >
              {production.cta.label}
            </a>
          )}
          <Link
            to="/studio"
            className="text-sm text-zinc-600 hover:text-zinc-300 transition-colors tracking-wide mt-6 block"
          >
            ← Back to Studio
          </Link>
        </div>
      </div>
    </div>
  );
}
