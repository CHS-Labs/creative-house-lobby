interface SystemSectionProps {
  index: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  accentColor?: string;
}

export function SystemSection({ index, title, subtitle, description, details, accentColor = 'text-zinc-400' }: SystemSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 py-16 border-t border-zinc-900">
      {/* Left — label */}
      <div>
        <p className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-3">Layer {index}</p>
        <h3 className={`text-3xl font-light mb-2 ${accentColor}`}>{title}</h3>
        <p className="text-sm text-zinc-600 italic font-light">{subtitle}</p>
      </div>

      {/* Right — content */}
      <div>
        <p className="text-lg text-zinc-300 leading-relaxed font-light mb-8">
          {description}
        </p>
        <ul className="flex flex-col gap-3">
          {details.map((detail) => (
            <li key={detail} className="flex items-start gap-3 text-sm text-zinc-500 font-light">
              <span className="text-zinc-700 mt-0.5 shrink-0">—</span>
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
