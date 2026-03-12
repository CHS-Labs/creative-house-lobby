import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const studioNav = [
  { to: '/studio', label: 'Studio' },
  { to: '/studio/systems', label: 'Systems' },
  { to: '/studio/about', label: 'About' },
];

export function StudioHeader() {
  const { pathname } = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/90 backdrop-blur-sm border-b border-zinc-900">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between gap-8">
        {/* Back to lobby */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-100 transition-colors text-sm group shrink-0"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="hidden md:inline">Lobby</span>
        </Link>

        {/* Studio nav */}
        <nav className="flex items-center gap-1 overflow-x-auto">
          {studioNav.map(({ to, label }) => {
            const isActive = pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={`px-4 py-2 rounded-sm text-sm whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'bg-zinc-800 text-zinc-100'
                    : 'text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900'
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Studio label */}
        <span className="text-xs tracking-[0.2em] text-zinc-600 uppercase shrink-0 hidden md:inline">
          Studio
        </span>
      </div>
    </header>
  );
}
