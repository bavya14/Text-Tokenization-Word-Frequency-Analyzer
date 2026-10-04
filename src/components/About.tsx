import { GraduationCap, BookOpen, Code2 } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="border-t border-gray-200 py-20 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-purple-600 shadow-lg shadow-brand-500/25">
            <GraduationCap className="h-7 w-7 text-white" />
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            About This Project
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            This application demonstrates fundamental text preprocessing
            techniques used in Natural Language Processing. Text preprocessing
            is an important first step in NLP pipelines because raw text often
            contains noise, inconsistent formatting, URLs, punctuation, numbers,
            and other elements that may affect downstream analysis.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            The project was developed for the academic subject{' '}
            <span className="font-semibold text-brand-600 dark:text-brand-400">
              Text and Speech Analysis
            </span>
            .
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
          {[
            { icon: BookOpen, title: 'Educational', desc: 'Learn NLP preprocessing hands-on with interactive controls.' },
            { icon: Code2, title: 'No Backend', desc: 'Everything runs in your browser — no servers, no APIs, no keys.' },
            { icon: GraduationCap, title: 'Academic', desc: 'Built for the Text and Speech Analysis college subject.' },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 text-center dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-600 dark:bg-brand-900/40 dark:text-brand-400">
                <card.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-base font-bold text-gray-900 dark:text-white">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
