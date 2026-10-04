import { Sparkles, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-12 dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-purple-600">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <span className="text-base font-bold text-gray-900 dark:text-white">
              Text Preprocessing & Cleaning Studio
            </span>
          </div>

          <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            Academic Project • Text and Speech Analysis
          </p>
          <p className="max-w-md text-sm text-gray-500 dark:text-gray-500">
            Built for learning and demonstrating fundamental NLP preprocessing
            techniques.
          </p>

          <div className="mt-6 flex items-center gap-2 text-sm text-gray-400 dark:text-gray-500">
            <span>Built with</span>
            <Heart className="h-3.5 w-3.5 fill-red-400 text-red-400" />
            <span>using React, TypeScript & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
