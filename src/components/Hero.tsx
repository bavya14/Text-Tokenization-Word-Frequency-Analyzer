import { ArrowRight, FileText, Zap, Shield } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
  onSample: () => void;
}

export function Hero({ onStart, onSample }: HeroProps) {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-gray-200 bg-gradient-to-b from-brand-50/50 via-white to-white dark:border-gray-800 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900"
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-brand-200/30 blur-3xl dark:bg-brand-900/20" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-purple-200/20 blur-3xl dark:bg-purple-900/10" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: content */}
          <div className="animate-fade-in">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 dark:border-brand-800 dark:bg-brand-900/30">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              <span className="text-xs font-semibold tracking-wide text-brand-700 dark:text-brand-300">
                TEXT & SPEECH ANALYSIS • NLP TOOL
              </span>
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
              Clean Your Text.{' '}
              <span className="gradient-text">Prepare It for NLP.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              Transform noisy, unstructured text into clean and analysis-ready
              data using essential Natural Language Processing techniques.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={onStart}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 to-purple-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-all hover:shadow-xl hover:shadow-brand-500/30 hover:brightness-110"
              >
                Start Preprocessing
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={onSample}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3.5 text-sm font-semibold text-gray-700 transition-all hover:border-brand-300 hover:bg-brand-50 hover:text-brand-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-brand-500 dark:hover:bg-gray-700"
              >
                <FileText className="h-4 w-4" />
                Try Sample Text
              </button>
            </div>
          </div>

          {/* Right: visual pipeline */}
          <div className="relative animate-slide-up lg:pl-8">
            <div className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-xl shadow-gray-200/50 dark:border-gray-700 dark:bg-gray-800/50 dark:shadow-black/20">
              {/* Pipeline flow */}
              <div className="flex flex-col items-center gap-3">
                {['Raw Text', 'Clean', 'Analyze'].map((step, i) => (
                  <div key={step} className="flex w-full flex-col items-center">
                    <div
                      className={`flex w-full items-center justify-center rounded-xl px-6 py-4 text-sm font-bold ${
                        i === 0
                          ? 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200'
                          : i === 1
                          ? 'bg-gradient-to-r from-brand-500 to-purple-500 text-white'
                          : 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                      }`}
                    >
                      {step}
                    </div>
                    {i < 2 && (
                      <div className="my-1 text-2xl text-brand-400">↓</div>
                    )}
                  </div>
                ))}
              </div>

              {/* Floating cards */}
              <div className="mt-6 grid grid-cols-1 gap-3">
                {[
                  { icon: Zap, label: '8 preprocessing operations' },
                  { icon: Shield, label: 'Real-time processing' },
                  { icon: FileText, label: 'No API required' },
                ].map((card) => (
                  <div
                    key={card.label}
                    className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 dark:border-gray-700 dark:bg-gray-800/50"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-100 text-brand-600 dark:bg-brand-900/40 dark:text-brand-400">
                      <card.icon className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {card.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
