interface ComparisonPanelProps {
  original: string;
  cleaned: string;
}

export function ComparisonPanel({ original, cleaned }: ComparisonPanelProps) {
  return (
    <div className="animate-fade-in grid gap-4 lg:grid-cols-2">
      {/* Before */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
        <div className="mb-3 flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gray-100 text-xs font-bold text-gray-600 dark:bg-gray-700 dark:text-gray-300">
            B
          </span>
          <h4 className="text-sm font-bold text-gray-900 dark:text-white">Before Processing</h4>
        </div>
        <div className="max-h-48 overflow-y-auto rounded-xl bg-gray-50 p-4 scrollbar-custom dark:bg-gray-900/50">
          <p className="whitespace-pre-wrap break-words font-mono text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            {original}
          </p>
        </div>
      </div>

      {/* After */}
      <div className="rounded-2xl border border-brand-200 bg-white p-5 dark:border-brand-800 dark:bg-gray-800">
        <div className="mb-3 flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-500 text-xs font-bold text-white">
            A
          </span>
          <h4 className="text-sm font-bold text-gray-900 dark:text-white">After Processing</h4>
        </div>
        <div className="max-h-48 overflow-y-auto rounded-xl bg-brand-50/50 p-4 scrollbar-custom dark:bg-brand-900/10">
          <p className="whitespace-pre-wrap break-words font-mono text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            {cleaned}
          </p>
        </div>
      </div>
    </div>
  );
}
