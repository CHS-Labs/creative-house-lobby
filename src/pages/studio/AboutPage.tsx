import { Link } from 'react-router-dom';
import { StudioHeader } from '../../components/studio/StudioHeader';

const sections = [
  {
    label: 'About the Studio',
    heading: 'Creative House Studios',
    body: [
      'Creative House Studios is not a traditional production company and not a marketing agency. It is a story amplification infrastructure designed to help important movements, creators, and investigations reach the world.',
      'The studio was built around a simple observation: credible stories often fail not because they lack quality, but because they lack infrastructure. Creative House exists to fix that.',
    ],
  },
  {
    label: 'The Creative House Mission',
    heading: 'Amplify stories that matter.',
    body: [
      'Creative House exists to amplify stories that matter and build the infrastructure that helps them reach the world.',
      'We focus on movements, investigations, and communities that already have credibility behind their work — and need a system to ensure that work is discovered, verified, and distributed at scale.',
      'We are not a platform. We are not an agency. We are infrastructure.',
    ],
  },
  {
    label: 'How the Network Works',
    heading: 'The three-layer model.',
    body: [
      'Every Creative House story universe is built on three interconnected layers: the Credibility Spine (the data layer), the Lobby Engine (the cinematic entry point), and the Distribution System (the amplification layer).',
      'Stories enter through the Credibility Spine, are surfaced through dedicated Lobby environments, and are distributed outward through automated multi-platform channels.',
      'This architecture ensures that every story we build for has a persistent, structured path to reach its intended audience — regardless of individual platform changes or algorithm shifts.',
    ],
  },
  {
    label: 'The Production Studio',
    heading: 'How we make films.',
    body: [
      'Creative House Productions combines documentary filmmaking with AI-assisted production workflows, lightweight global production crews, and digital distribution infrastructure.',
      'The result is a production model built for the next era of storytelling — where independent voices can reach global audiences without sacrificing quality or creative control.',
    ],
  },
];

export function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <StudioHeader />

      <main className="pt-32 pb-32 px-6 md:px-12">
        <div className="max-w-[900px] mx-auto">
          {/* Page header */}
          <div className="mb-24">
            <p className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-4">Creative House Studios</p>
            <h1 className="text-5xl md:text-7xl text-zinc-100 font-light mb-6">About</h1>
            <p className="text-xl text-zinc-400 font-light italic leading-relaxed">
              &ldquo;We don&rsquo;t just make films. We build the systems that help stories reach the world.&rdquo;
            </p>
            <p className="text-sm tracking-[0.2em] text-zinc-500 uppercase mt-6">
              Stories that move people. Systems that move culture.
            </p>
          </div>

          {/* Sections */}
          <div className="flex flex-col gap-0">
            {sections.map(({ label, heading, body }) => (
              <div key={label} className="py-16 border-t border-zinc-900">
                <p className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-6">{label}</p>
                <h2 className="text-3xl md:text-4xl text-zinc-100 font-light mb-8 leading-tight">{heading}</h2>
                <div className="flex flex-col gap-5">
                  {body.map((paragraph) => (
                    <p key={paragraph} className="text-base text-zinc-400 font-light leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Leadership */}
          <div className="py-16 border-t border-zinc-900">
            <p className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-6">Leadership</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="text-xl text-zinc-100 font-light mb-1">Glen Kerby</p>
                <p className="text-sm text-zinc-500 font-light tracking-wide">Director · Producer</p>
              </div>
              <div>
                <p className="text-xl text-zinc-100 font-light mb-1">Shelly Frank</p>
                <p className="text-sm text-zinc-500 font-light tracking-wide">Executive Producer · Systems Architect</p>
              </div>
            </div>
          </div>

          {/* Closing CTA */}
          <div className="pt-16 border-t border-zinc-900 flex flex-col sm:flex-row gap-6 items-start">
            <Link
              to="/studio/systems"
              className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors tracking-wide"
            >
              Explore the Systems →
            </Link>
            <Link
              to="/collaborate"
              className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors tracking-wide"
            >
              Work With Creative House →
            </Link>
            <Link
              to="/"
              className="text-sm text-zinc-600 hover:text-zinc-300 transition-colors tracking-wide"
            >
              Back to the Lobby →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
