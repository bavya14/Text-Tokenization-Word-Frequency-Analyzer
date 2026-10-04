import { FileText, Trash2 } from 'lucide-react';
import type { TextStats } from '@/types';

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  onLoadSample: () => void;
  onClear: () => void;
  stats: TextStats;
}

export function TextInput({ value, onChange, onLoadSample, onClear, stats }: TextInputProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="mb-1 flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Input Text</h3>
      </div>
      <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
        Paste or type the text you want to preprocess.
      </p>

      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Paste your text here..."
        className="h-48 w-full resize-none rounded-xl border border-gray-200 bg-gray-50 p-4 font-mono text-sm text-gray-800 transition-all focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200 scrollbar-custom dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:focus:ring-brand-800"
        aria-label="Input text area"
      />

      {/* Live stats */}
      <div className="mt-4 flex flex-wrap gap-4">
        <div className="flex items-center gap-1.5 text-sm">
          <span className="text-gray-500 dark:text-gray-400">Characters:</span>
          <span className="font-semibold tabular-nums text-brand-600 dark:text-brand-400">
            {stats.characters}
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-sm">
          <span className="text-gray-500 dark:text-gray-400">Words:</span>
          <span className="font-semibold tabular-nums text-brand-600 dark:text-brand-400">
            {stats.words}
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-sm">
          <span className="text-gray-500 dark:text-gray-400">Sentences:</span>
          <span className="font-semibold tabular-nums text-brand-600 dark:text-brand-400">
            {stats.sentences}
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-4 flex gap-2">
        <button
          onClick={onLoadSample}
          className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 transition-all hover:border-brand-300 hover:bg-brand-50 hover:text-brand-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-brand-500 dark:hover:bg-gray-700"
        >
          <FileText className="h-4 w-4" />
          Load Sample
        </button>
        <button
          onClick={onClear}
          className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 transition-all hover:border-red-300 hover:bg-red-50 hover:text-red-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-red-500 dark:hover:bg-gray-700"
        >
          <Trash2 className="h-4 w-4" />
          Clear
        </button>
      </div>
    </div>
  );
}
