import { HOW_IT_WORKS } from '@/config/preprocessing';

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-gray-200 bg-gray-50/50 py-20 dark:border-gray-800 dark:bg-gray-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            How It Works
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600 dark:text-gray-400">
            Each preprocessing technique serves a specific purpose in the NLP pipeline.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HOW_IT_WORKS.map((item) => (
            <div
              key={item.num}
              className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-brand-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-brand-600"
            >
              <div className="mb-3 text-3xl font-extrabold text-brand-200 dark:text-brand-800">
                {item.num}
              </div>
              <h3 className="mb-2 text-base font-bold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
