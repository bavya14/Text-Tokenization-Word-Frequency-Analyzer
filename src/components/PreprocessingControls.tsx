import { CheckSquare, Square } from 'lucide-react';
import { PREPROCESSING_OPTIONS } from '@/config/preprocessing';
import type { PreprocessingState } from '@/types';
import type { PreprocessingKey } from '@/config/preprocessing';

interface PreprocessingControlsProps {
  state: PreprocessingState;
  onToggle: (key: PreprocessingKey) => void;
  onSelectAll: () => void;
  onClearAll: () => void;
}

export function PreprocessingControls({
  state,
  onToggle,
  onSelectAll,
  onClearAll,
}: PreprocessingControlsProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
        Preprocessing Operations
      </h3>
      <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
        Select the operations you want to apply.
      </p>

      {/* Select All / Clear All */}
      <div className="mb-4 flex gap-2">
        <button
          onClick={onSelectAll}
          className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-gray-700 transition-all hover:border-brand-300 hover:bg-brand-50 hover:text-brand-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-brand-500 dark:hover:bg-gray-700"
        >
          <CheckSquare className="h-3.5 w-3.5" />
          Select All
        </button>
        <button
          onClick={onClearAll}
          className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-gray-700 transition-all hover:border-red-300 hover:bg-red-50 hover:text-red-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-red-500 dark:hover:bg-gray-700"
        >
          <Square className="h-3.5 w-3.5" />
          Clear All
        </button>
      </div>

      {/* Operation toggles */}
      <div className="space-y-2">
        {PREPROCESSING_OPTIONS.map((option) => {
          const Icon = option.icon;
          const isEnabled = state[option.key];
          return (
            <button
              key={option.key}
              onClick={() => onToggle(option.key)}
              className={`flex w-full items-start gap-3 rounded-xl border p-3 text-left transition-all ${
                isEnabled
                  ? 'border-brand-300 bg-brand-50 dark:border-brand-600 dark:bg-brand-900/20'
                  : 'border-gray-200 bg-white hover:border-gray-300 dark:border-gray-700 dark:bg-gray-800/50 dark:hover:border-gray-600'
              }`}
              role="switch"
              aria-checked={isEnabled}
            >
              <div
                className={`mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg transition-colors ${
                  isEnabled
                    ? 'bg-brand-500 text-white'
                    : 'bg-gray-100 text-gray-400 dark:bg-gray-700 dark:text-gray-500'
                }`}
              >
                <Icon className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`text-sm font-semibold ${
                      isEnabled
                        ? 'text-brand-700 dark:text-brand-300'
                        : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {option.label}
                  </span>
                  <div
                    className={`relative h-5 w-9 flex-shrink-0 rounded-full transition-colors ${
                      isEnabled ? 'bg-brand-500' : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  >
                    <div
                      className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-transform ${
                        isEnabled ? 'translate-x-4' : 'translate-x-0.5'
                      }`}
                    />
                  </div>
                </div>
                <p className="mt-0.5 text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                  {option.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
