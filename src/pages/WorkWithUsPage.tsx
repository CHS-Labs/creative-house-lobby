import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function WorkWithUsPage() {
  return (
    <div className="relative min-h-screen pt-24">
      {/* ── FIXED VIDEO BACKGROUND ─────────────────────────────────────────── */}
      <div className="fixed inset-0 overflow-hidden motion-reduce:hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'saturate(0.85)' }}
        >
          <source src="/05-Collaborate.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-zinc-950/75" />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(9, 9, 11, 0.3) 100%)' }}
        />
      </div>

      <div className="motion-reduce:block hidden fixed inset-0 bg-zinc-950" />

      <div className="relative">

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section className="py-32 px-6 md:px-12 max-w-[1000px] mx-auto">
          <div className="text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors font-light mb-10"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to the Lobby
            </Link>

            <h1 className="text-6xl md:text-7xl mb-6 text-zinc-50 font-light">
              Amplify Your Voice
            </h1>

            <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed max-w-2xl mx-auto">
              For builders, leaders, and creators with proof behind their work.<br /><br />
              If you've done the work, we help make it visible with care.
            </p>
          </div>
        </section>

        {/* ── WHAT WE HELP YOU BUILD ───────────────────────────────────────── */}
        <section className="py-20 px-6 md:px-12 max-w-[900px] mx-auto">
          <div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-800 rounded-sm p-10 md:p-12">
            <h2 className="text-3xl md:text-4xl text-zinc-100 font-light mb-8">
              What We Help You Build
            </h2>

            <div className="space-y-6 text-lg text-zinc-300 font-light leading-relaxed mb-10">
              <p>
                Creative House Studios works with people who already have real-world proof behind their work.
              </p>
              <p className="text-zinc-400">This may include:</p>
            </div>

            <div className="pl-6 border-l-2 border-zinc-800 space-y-4 mb-10">
              <p className="text-base text-zinc-400 font-light">Lived experience</p>
              <p className="text-base text-zinc-400 font-light">Professional results</p>
              <p className="text-base text-zinc-400 font-light">Creative output</p>
              <p className="text-base text-zinc-400 font-light">Cultural impact</p>
            </div>

            <p className="text-lg text-zinc-300 font-light leading-relaxed">
              We organize those signals into a credibility spine and amplify them through storytelling and distribution.
            </p>
          </div>
        </section>

        {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
        <section className="py-20 px-6 md:px-12 max-w-[900px] mx-auto border-t border-zinc-900">
          <h2 className="text-3xl md:text-4xl text-zinc-100 font-light mb-10">
            How It Works
          </h2>

          <div className="space-y-6">
            {[
              {
                title: 'Credibility Spine',
                description: 'We structure the proof behind your work into a clear narrative foundation.',
              },
              {
                title: 'Campaign Design',
                description: 'We design storytelling campaigns aligned with your voice and your audience.',
              },
              {
                title: 'Distribution Engine',
                description: 'We distribute through modern platforms with repetition and narrative consistency.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="backdrop-blur-md bg-white/[0.04] border border-zinc-800 rounded-sm p-8"
              >
                <div className="mb-4">
                  <div className="w-8 h-px bg-zinc-700" />
                </div>
                <h3 className="text-xl text-zinc-100 font-light mb-3">{item.title}</h3>
                <p className="text-base text-zinc-400 font-light leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── THIS IS A FIT IF ─────────────────────────────────────────────── */}
        <section className="py-20 px-6 md:px-12 max-w-[900px] mx-auto border-t border-zinc-900">
          <h2 className="text-3xl md:text-4xl text-zinc-100 font-light mb-10">
            This Is a Fit If
          </h2>

          <div className="pl-6 border-l-2 border-zinc-800 space-y-4">
            <p className="text-base text-zinc-400 font-light">You have real-world experience or results</p>
            <p className="text-base text-zinc-400 font-light">You care about credibility more than virality</p>
            <p className="text-base text-zinc-400 font-light">You want amplification without distortion</p>
            <p className="text-base text-zinc-400 font-light">You are ready for thoughtful collaboration</p>
          </div>
        </section>

        {/* ── WHAT WE DON'T DO ─────────────────────────────────────────────── */}
        <section className="py-20 px-6 md:px-12 max-w-[900px] mx-auto border-t border-zinc-900">
          <h2 className="text-3xl md:text-4xl text-zinc-100 font-light mb-8">
            What We Don't Do
          </h2>

          <div className="space-y-4 text-lg text-zinc-400 font-light leading-relaxed">
            <p>We do not manufacture credibility.</p>
            <p>We do not promise outcomes.</p>
            <p>We do not rush stories that require care.</p>
          </div>
        </section>

        {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
        <section className="py-24 px-6 md:px-12 max-w-[900px] mx-auto border-t border-zinc-900">
          <div className="text-center">
            <a
              href="mailto:creativehousestudios.sk@gmail.com"
              className="inline-block px-10 py-4 bg-zinc-100 text-zinc-950 rounded-sm hover:bg-white transition-colors text-lg font-light"
            >
              Start a Conversation
            </a>
            <p className="mt-4 text-sm text-zinc-500 font-light">
              creativehousestudios.sk@gmail.com
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
