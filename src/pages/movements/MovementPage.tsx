import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

export function MovementPage() {
  const { slug } = useParams<{ slug: string }>();

  if (slug === 'idlw') return <IDLWPage />;
  if (slug === 'simple-plan') return <TheSimplePlanPage />;
  if (slug === 'advo-cassie') return <AdvoCassiePage />;

  return (
    <main className="min-h-screen bg-zinc-950 pt-32 px-6">
      <div className="max-w-[1400px] mx-auto">
        <h1 className="text-4xl text-zinc-100 font-light mb-6">Movement not found</h1>
        <Link to="/movements" className="text-zinc-400 hover:text-zinc-100 transition-colors">← Back to Movements</Link>
      </div>
    </main>
  );
}

// ── I DRINK LIVING WATER ─────────────────────────────────────────────────────

function IDLWPage() {
  return (
    <div className="relative min-h-screen pt-24">
      <div className="fixed inset-0 overflow-hidden motion-reduce:hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" style={{ filter: 'saturate(0.85)' }}>
          <source src="/001-IDLW.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-zinc-950/75" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(9, 9, 11, 0.3) 100%)' }} />
      </div>
      <div className="motion-reduce:block hidden fixed inset-0 bg-zinc-950" />

      <div className="relative">
        {/* Hero */}
        <section className="py-32 px-6 md:px-12 max-w-[1000px] mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800/30 border border-zinc-700/50 rounded-full mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 bg-zinc-400 rounded-full" />
              <span className="text-sm text-zinc-300 font-light">Active Project — Evolving Platform</span>
            </div>
            <h1 className="text-6xl md:text-7xl mb-6 text-zinc-50 font-light">I Drink Living Water</h1>
            <Link to="/movements" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors font-light mb-16">
              <ArrowLeft className="w-4 h-4" />
              Back to Movements
            </Link>
          </div>
        </section>

        {/* Description */}
        <section className="py-20 px-6 md:px-12 max-w-[900px] mx-auto">
          <div className="space-y-8 text-lg text-zinc-300 leading-relaxed font-light">
            <p>I Drink Living Water is a long-form exploration of water as health, ecology, infrastructure, and culture.</p>
            <p>It began as an independent voice experiment and has grown into a multi-vertical platform spanning wellness, environmental justice, innovation, and emerging systems.</p>
            <p className="text-zinc-400">This project is currently evolving its structure, channels, and presentation.</p>
          </div>
        </section>

        {/* Links */}
        <section className="py-20 px-6 md:px-12 max-w-[900px] mx-auto border-t border-zinc-900">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://www.idrinklivingwater.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-100 text-zinc-950 rounded-sm hover:bg-white transition-colors text-lg font-light"
            >
              Visit Website
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="https://www.youtube.com/@IDrinkLivingWater_"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-zinc-700 text-zinc-100 rounded-sm hover:bg-zinc-900 hover:border-zinc-500 transition-all duration-300 text-lg font-light"
            >
              Watch on YouTube
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="https://idlw-lobby.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-zinc-700 text-zinc-100 rounded-sm hover:bg-zinc-900 hover:border-zinc-500 transition-all duration-300 text-lg font-light"
            >
              Visit the IDLW Lobby
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* Footer note */}
        <section className="py-20 px-6 md:px-12 max-w-[900px] mx-auto">
          <div className="text-center">
            <p className="text-zinc-500 font-light">This project is stewarded and distributed by Creative House Studios.</p>
          </div>
        </section>
      </div>
    </div>
  );
}

// ── THE SIMPLE PLAN ───────────────────────────────────────────────────────────

function TheSimplePlanPage() {
  return (
    <div className="relative min-h-screen pt-24">
      <div className="fixed inset-0 overflow-hidden motion-reduce:hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" style={{ filter: 'saturate(0.85)' }}>
          <source src="/02-TheSimplePlan.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-zinc-950/75" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(9, 9, 11, 0.3) 100%)' }} />
      </div>
      <div className="motion-reduce:block hidden fixed inset-0 bg-zinc-950" />

      <div className="relative">
        {/* Hero */}
        <section className="py-32 px-6 md:px-12 max-w-[1000px] mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 bg-emerald-500 rounded-full" />
              <span className="text-sm text-emerald-200 font-light">Active Project — Sponsored by the Misty Foundation</span>
            </div>
            <h1 className="text-6xl md:text-7xl mb-6 text-zinc-50 font-light">The Simple Plan</h1>
            <Link to="/movements" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors font-light mb-16">
              <ArrowLeft className="w-4 h-4" />
              Back to Movements
            </Link>
          </div>
        </section>

        {/* Description */}
        <section className="py-20 px-6 md:px-12 max-w-[900px] mx-auto">
          <div className="space-y-8 text-lg text-zinc-300 leading-relaxed font-light">
            <p>The Simple Plan is a quiet recovery practice rooted in reflection, music, and lived experience.</p>
            <p>It exists as a mobile app, a body of writing, and an expanding music catalog — all designed to support steadiness, not urgency.</p>
          </div>
        </section>

        {/* Primary CTA */}
        <section className="py-20 px-6 md:px-12 max-w-[900px] mx-auto border-t border-zinc-900">
          <div className="text-center">
            <a
              href="https://thesimpleplan.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-12 py-5 bg-zinc-100 text-zinc-950 rounded-sm hover:bg-white transition-colors text-xl font-light"
            >
              Open the App
              <ExternalLink className="w-5 h-5" />
            </a>
            <p className="text-zinc-400 mt-6 font-light">The app is the heart of the project.</p>
          </div>
        </section>

        {/* The Book */}
        <section className="py-20 px-6 md:px-12 max-w-[900px] mx-auto border-t border-zinc-900">
          <div className="text-center">
            <h3 className="text-3xl mb-6 text-zinc-100 font-light">The Book</h3>
            <p className="text-lg text-zinc-300 leading-relaxed mb-8 font-light max-w-2xl mx-auto">
              The book that inspired the project is available through the app, where readers can move directly from reading into practice.
            </p>
            <a
              href="https://thesimpleplan.app/book"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-zinc-700 text-zinc-100 rounded-sm hover:bg-zinc-900 hover:border-zinc-500 transition-all duration-300 text-lg font-light"
            >
              View the Book
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* Music & Sound */}
        <section className="py-20 px-6 md:px-12 max-w-[900px] mx-auto border-t border-zinc-900">
          <div className="text-center">
            <h3 className="text-3xl mb-6 text-zinc-100 font-light">Music & Sound</h3>
            <p className="text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto font-light">
              The project includes an expanding catalog of healing music designed to support reflection and presence. Each composition is created to accompany the practices without distraction.
            </p>
          </div>
        </section>

        {/* Sponsor */}
        <section className="py-20 px-6 md:px-12 max-w-[900px] mx-auto border-t border-zinc-900">
          <div className="text-center">
            <p className="text-zinc-400 leading-relaxed max-w-2xl mx-auto font-light">
              The Simple Plan is supported by the Misty Foundation, a charitable organization committed to recovery and healing.
            </p>
          </div>
        </section>

        {/* Footer note */}
        <section className="py-20 px-6 md:px-12 max-w-[900px] mx-auto">
          <div className="text-center">
            <p className="text-zinc-500 font-light">This project is stewarded and distributed by Creative House Studios.</p>
          </div>
        </section>
      </div>
    </div>
  );
}

// ── ADVO-CASSIE ───────────────────────────────────────────────────────────────

function AdvoCassiePage() {
  const mediaTypes = ['short films and documentaries', 'survivor-informed storytelling', 'grounding music and soundscapes', 'carefully selected readings'];

  return (
    <div className="relative min-h-screen pt-24">
      <div className="fixed inset-0 overflow-hidden motion-reduce:hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" style={{ filter: 'saturate(0.85)' }}>
          <source src="/03-Advo-Cassie.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-zinc-950/75" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(9, 9, 11, 0.3) 100%)' }} />
      </div>
      <div className="motion-reduce:block hidden fixed inset-0 bg-zinc-950" />

      <div className="relative">
        {/* Hero */}
        <section className="py-32 px-6 md:px-12 max-w-[1000px] mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 bg-amber-500 rounded-full" />
              <span className="text-sm text-amber-200 font-light">In Development – Seeking an Aligned Sponsor</span>
            </div>
            <h1 className="text-6xl md:text-7xl mb-6 text-zinc-50 font-light">Advo-Cassie</h1>
            <h2 className="text-3xl md:text-4xl mb-12 text-zinc-300 font-light">A calm space for orientation and clarity</h2>
            <p className="text-xl text-zinc-400 leading-relaxed max-w-3xl mx-auto font-light">
              Advo-Cassie is designed for people navigating prolonged, confusing, or emotionally complex situations. It offers tools for documentation, regulation, and steady communication without interpretation, urgency, or pressure.
            </p>
            <div className="mt-10">
              <Link to="/movements" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors font-light">
                <ArrowLeft className="w-4 h-4" />
                Back to Movements
              </Link>
            </div>
          </div>
        </section>

        {/* What This Project Is */}
        <section className="py-20 px-6 md:px-12 max-w-[900px] mx-auto">
          <div className="border border-zinc-800 rounded-sm p-12 bg-zinc-900/30">
            <h3 className="text-3xl mb-6 text-zinc-100 font-light">What This Project Is</h3>
            <p className="text-lg text-zinc-300 leading-relaxed mb-6 font-light">
              Advo-Cassie helps people stay oriented when situations feel foggy or overwhelming. It creates space to slow down, organize what's happening, and remain grounded before decisions or communication take place.
            </p>
            <p className="text-lg text-zinc-300 leading-relaxed mb-6 font-light">
              This is not a program you commit to. It is a space you can return to when clarity feels difficult.
            </p>
            <p className="text-base text-zinc-400 leading-relaxed mb-10 font-light">
              The application experience for this project will live at advo-cassie.app when released.
            </p>
            <div className="border-t border-zinc-800 pt-8">
              <h4 className="text-lg mb-4 text-zinc-400 font-medium">What this project is not</h4>
              <ul className="space-y-3 text-zinc-400 font-light">
                <li>• Not therapy or mental health treatment</li>
                <li>• Not legal advice or representation</li>
                <li>• Not crisis intervention</li>
                <li>• Not a substitute for human support</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Sponsorship */}
        <section className="py-20 px-6 md:px-12 max-w-[900px] mx-auto">
          <div className="border border-zinc-800 rounded-sm p-12 bg-zinc-900/30">
            <h3 className="text-3xl mb-6 text-zinc-100 font-light">Sponsorship & Stewardship</h3>
            <p className="text-lg text-zinc-300 leading-relaxed mb-6 font-light">Advo-Cassie is being developed as a free public resource, stewarded by Creative House Studios.</p>
            <p className="text-lg text-zinc-300 leading-relaxed mb-6 font-light">Sponsors make access possible by supporting:</p>
            <ul className="space-y-3 text-zinc-300 mb-8 font-light ml-6">
              <li>• original sound and music</li>
              <li>• survivor-informed storytelling</li>
              <li>• ethical design and distribution</li>
            </ul>
            <p className="text-lg text-zinc-300 leading-relaxed mb-4 font-light">Sponsors do not influence content, users, or outcomes.</p>
            <p className="text-lg text-zinc-300 leading-relaxed font-light">Creative House curates credibility so this space remains steady, respectful, and safe.</p>
          </div>
        </section>

        {/* Stories & Media */}
        <section className="py-20 px-6 md:px-12 max-w-[1400px] mx-auto border-t border-zinc-900">
          <div className="text-center mb-16">
            <h3 className="text-4xl mb-6 text-zinc-100 font-light">Stories & Media</h3>
            <p className="text-lg text-zinc-400 font-light">This project will curate:</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaTypes.map((type) => (
              <div key={type} className="aspect-[3/4] border border-zinc-800 bg-zinc-900/20 rounded-sm p-8 flex items-end">
                <p className="text-lg text-zinc-300 font-light">{type}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-zinc-500 mt-10 font-light italic">This section previews the kinds of stories intended for this space.</p>
        </section>

        {/* Credibility Spine */}
        <section className="py-20 px-6 md:px-12 max-w-[900px] mx-auto border-t border-zinc-900">
          <div className="text-center">
            <p className="text-lg text-zinc-400 leading-relaxed mb-8 font-light">Creative House Studios exists to protect trust.</p>
            <p className="text-lg text-zinc-400 leading-relaxed font-light mb-6">Every project is guided by:</p>
            <div className="flex flex-wrap justify-center gap-4">
              {['clear ethical boundaries', 'audience dignity', 'sponsor transparency', 'restrained distribution', 'no extraction or manipulation'].map((principle) => (
                <span key={principle} className="px-4 py-2 border border-zinc-800 text-zinc-400 text-sm rounded-full font-light">{principle}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Footer note */}
        <section className="py-20 px-6 md:px-12 max-w-[900px] mx-auto">
          <div className="text-center">
            <p className="text-zinc-500 mb-8 font-light">This project is stewarded and distributed by Creative House Studios.</p>
            <Link to="/movements" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors font-light">
              <ArrowLeft className="w-4 h-4" />
              Back to Movements
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
