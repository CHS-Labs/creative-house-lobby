import { StudioHeader } from '../../components/studio/StudioHeader';
import { ProjectCard } from '../../components/studio/ProjectCard';

const projects = [
  {
    title: 'I Drink Living Water',
    description: 'A global movement restoring access to living water. IDLW is a full storytelling universe covering water health, ecology, technology, and community.',
    movementSlug: 'idlw',
    accentColor: 'border-sky-900/50 hover:border-sky-700/60',
  },
  {
    title: 'The Simple Plan',
    description: 'Documenting the stories of people working toward systemic political change through transparency, accountability, and credible civic action.',
    movementSlug: 'simple-plan',
    accentColor: 'border-amber-900/50 hover:border-amber-700/60',
  },
  {
    title: 'Advo-Cassie',
    description: 'Amplifying the stories of individuals and families navigating coercive legal and institutional systems — and building the advocacy infrastructure to protect them.',
    movementSlug: 'advo-cassie',
    accentColor: 'border-rose-900/50 hover:border-rose-700/60',
  },
];

export function ProjectsPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <StudioHeader />

      <main className="pt-32 pb-32 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          {/* Page header */}
          <div className="mb-20">
            <p className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-4">Creative House Studios</p>
            <h1 className="text-5xl md:text-7xl text-zinc-100 font-light mb-6">Projects</h1>
            <p className="text-lg text-zinc-500 font-light max-w-xl leading-relaxed">
              The major Creative House initiatives — each a story universe with its own lobby, community, and distribution system.
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>

          {/* Context note */}
          <div className="mt-24 pt-16 border-t border-zinc-900 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl text-zinc-300 font-light mb-4">What is a Creative House Project?</h3>
              <p className="text-sm text-zinc-500 font-light leading-relaxed">
                Each project is a fully-realized storytelling ecosystem — built on the Creative House Credibility Spine, delivered through a dedicated Lobby Engine, and amplified through automated distribution systems.
              </p>
            </div>
            <div>
              <h3 className="text-xl text-zinc-300 font-light mb-4">Proposing a Project</h3>
              <p className="text-sm text-zinc-500 font-light leading-relaxed">
                Creative House builds project universes for movements, causes, and investigations that have credibility behind them. If you have a story, <a href="/collaborate" className="text-zinc-300 hover:text-zinc-100 transition-colors">start a conversation</a>.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
