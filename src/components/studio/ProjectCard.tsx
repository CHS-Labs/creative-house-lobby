import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  movementSlug: string;
  accentColor?: string;
}

export function ProjectCard({ title, description, movementSlug, accentColor = 'border-zinc-800 hover:border-zinc-600' }: ProjectCardProps) {
  return (
    <Link
      to={`/movements/${movementSlug}`}
      className={`group block p-8 border ${accentColor} bg-zinc-900/30 hover:bg-zinc-900/60 rounded-sm transition-all duration-300 hover:-translate-y-1`}
    >
      <h3 className="text-2xl text-zinc-100 font-light mb-3 group-hover:text-zinc-50 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-zinc-500 leading-relaxed font-light mb-8">
        {description}
      </p>
      <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-zinc-600 group-hover:text-zinc-300 transition-colors">
        Enter Universe
        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
