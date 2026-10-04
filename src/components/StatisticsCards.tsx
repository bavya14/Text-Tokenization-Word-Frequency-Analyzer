import { Type, AlignLeft, Minus, TrendingDown, Percent, FileType } from 'lucide-react';
import type { ProcessStats } from '@/types';

interface StatisticsCardsProps {
  stats: ProcessStats;
}

interface MetricCardProps {
  icon: typeof Type;
  label: string;
  value: number | string;
  variant: 'before' | 'after' | 'impact';
}

function MetricCard({ icon: Icon, label, value, variant }: MetricCardProps) {
  const colors = {
    before: {
      icon: 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300',
      border: 'border-gray-200 dark:border-gray-700',
    },
    after: {
      icon: 'bg-brand-100 text-brand-600 dark:bg-brand-900/40 dark:text-brand-400',
      border: 'border-brand-200 dark:border-brand-800',
    },
    impact: {
      icon: 'bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-400',
      border: 'border-purple-200 dark:border-purple-800',
    },
  };

  return (
    <div className={`rounded-xl border ${colors[variant].border} bg-white p-4 dark:bg-gray-800`}>
      <div className="flex items-center gap-3">
        <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${colors[variant].icon}`}>
          <Icon className="h-4 w-4" />
        </div>
        <div>
          <p className="text-xs font-medium text-gray-500 dark:text-gray-400">{label}</p>
          <p className="text-xl font-bold tabular-nums text-gray-900 dark:text-white">{value}</p>
        </div>
      </div>
    </div>
  );
}

export function StatisticsCards({ stats }: StatisticsCardsProps) {
  return (
    <div className="animate-fade-in space-y-6">
      {/* Before Processing */}
      <div>
        <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400">
          Before Processing
        </h4>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <MetricCard icon={Type} label="Characters" value={stats.original.characters} variant="before" />
          <MetricCard icon={FileType} label="Words" value={stats.original.words} variant="before" />
          <MetricCard icon={AlignLeft} label="Sentences" value={stats.original.sentences} variant="before" />
        </div>
      </div>

      {/* After Processing */}
      <div>
        <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400">
          After Processing
        </h4>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <MetricCard icon={Type} label="Characters" value={stats.cleaned.characters} variant="after" />
          <MetricCard icon={FileType} label="Words" value={stats.cleaned.words} variant="after" />
          <MetricCard icon={AlignLeft} label="Sentences" value={stats.cleaned.sentences} variant="after" />
        </div>
      </div>

      {/* Processing Impact */}
      <div>
        <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400">
          Processing Impact
        </h4>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <MetricCard icon={Minus} label="Characters Removed" value={stats.charsRemoved} variant="impact" />
          <MetricCard icon={TrendingDown} label="Words Removed" value={stats.wordsRemoved} variant="impact" />
          <MetricCard icon={Percent} label="Reduction" value={`${stats.reductionPercent}%`} variant="impact" />
        </div>
      </div>
    </div>
  );
}
