interface ProductionCardProps {
  title: string;
  description: string;
  status: 'Development' | 'Production' | 'Released';
  video?: string;
  posterColor?: string;
}

const statusStyles: Record<ProductionCardProps['status'], string> = {
  Development: 'bg-amber-950/60 text-amber-400 border-amber-800/50',
  Production: 'bg-sky-950/60 text-sky-400 border-sky-800/50',
  Released: 'bg-emerald-950/60 text-emerald-400 border-emerald-800/50',
};

export function ProductionCard({ title, description, status, video, posterColor = 'from-zinc-900 to-zinc-800' }: ProductionCardProps) {
  return (
    <div className="group cursor-default">
      {/* Poster / video frame */}
      <div className="relative aspect-[2/3] overflow-hidden mb-5 rounded-sm bg-zinc-900">
        {video ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          >
            <source src={video} type="video/mp4" />
          </video>
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${posterColor} flex items-end p-6`}>
            {/* Placeholder poster — cinematic texture */}
            <div className="w-full h-full absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
              }}
            />
          </div>
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80" />

        {/* Status badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-2 py-1 text-xs border rounded-sm font-light tracking-wide ${statusStyles[status]}`}>
            {status}
          </span>
        </div>

        {/* Title on card */}
        <div className="absolute bottom-5 left-5 right-5">
          <h3 className="text-xl text-zinc-50 font-light leading-snug">{title}</h3>
        </div>
      </div>

      {/* Description below card */}
      <p className="text-sm text-zinc-500 leading-relaxed font-light">{description}</p>
    </div>
  );
}
