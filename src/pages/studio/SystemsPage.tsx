import { StudioHeader } from '../../components/studio/StudioHeader';
import { SystemSection } from '../../components/studio/SystemSection';
import { Link } from 'react-router-dom';

const systems = [
  {
    index: '01',
    title: 'Credibility Spine',
    subtitle: 'The data layer.',
    description:
      'The Credibility Spine collects, organizes, and structures stories, sources, research, and creator contributions into a verified database. Stories are mapped geographically and categorized by theme — allowing movements to demonstrate both reach and legitimacy.',
    details: [
      'Ingests stories from multiple sources — editorial, community, research.',
      'Maps stories geographically by location and impact.',
      'Categorizes by theme, movement, and credibility signal.',
      'Powers the Credibility Constellation visible on each Lobby.',
      'Read-only access for public Lobbies — editorial control stays with the studio.',
    ],
    accentColor: 'text-sky-300',
  },
  {
    index: '02',
    title: 'Lobby Engines',
    subtitle: 'The entry point into a storytelling universe.',
    description:
      'A Lobby is the cinematic entry point into a Creative House story universe. Visitors arrive in a designed environment where they can explore stories, projects, and movements. Each Lobby routes visitors into themed verticals — and is connected to the Credibility Spine for live story data.',
    details: [
      'Cinematic hero with video background and branded identity.',
      'Movement constellation — visual navigation across story verticals.',
      'Live integration with the Credibility Spine.',
      'Themed verticals routed by topic, geography, or community.',
      'Each Lobby is independently deployable as its own domain.',
    ],
    accentColor: 'text-amber-300',
  },
  {
    index: '03',
    title: 'Distribution Systems',
    subtitle: 'Automated amplification across platforms.',
    description:
      'Creative House builds automated distribution systems that publish and amplify stories across multiple channels — ensuring credible stories do not remain hidden. Distribution is designed to be persistent, scalable, and platform-agnostic.',
    details: [
      'Automated publishing to YouTube, social media, and blog networks.',
      'Creator network integration — distributing through trusted voices.',
      'Newsletter and subscriber systems for long-term story reach.',
      'Analytics integration to track story impact across channels.',
      'Platform-agnostic — built to survive algorithm changes.',
    ],
    accentColor: 'text-rose-300',
  },
];

export function SystemsPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <StudioHeader />

      <main className="pt-32 pb-32 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          {/* Page header */}
          <div className="mb-8">
            <p className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-4">Creative House Studios</p>
            <h1 className="text-5xl md:text-7xl text-zinc-100 font-light mb-6">Systems</h1>
            <p className="text-lg text-zinc-500 font-light max-w-xl leading-relaxed">
              Three interconnected layers that power every Creative House story universe.
            </p>
          </div>

          {/* System sections */}
          <div>
            {systems.map((system) => (
              <SystemSection key={system.index} {...system} />
            ))}
          </div>

          {/* Architecture note */}
          <div className="mt-16 pt-16 border-t border-zinc-900 max-w-2xl">
            <h3 className="text-xl text-zinc-300 font-light mb-4">The Architecture Together</h3>
            <p className="text-sm text-zinc-500 font-light leading-relaxed mb-6">
              The three systems are designed to work as a single pipeline. A story enters through the Credibility Spine, is surfaced inside a Lobby Engine, and is distributed outward through automated channels. Each layer reinforces the others.
            </p>
            <Link
              to="/studio/about"
              className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors tracking-wide"
            >
              Learn about the philosophy →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
