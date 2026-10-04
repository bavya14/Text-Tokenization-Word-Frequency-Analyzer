import {
  FileText,
  CaseSensitive,
  Link2,
  Mail,
  Type,
  Hash,
  Sparkles,
  Space,
  Filter,
  CheckCircle2,
  FileCheck2,
} from 'lucide-react';
import { PIPELINE_STEPS } from '@/config/preprocessing';
import type { PreprocessingState } from '@/types';

interface PipelineProps {
  activeOps: PreprocessingState;
}

const STEP_ICONS: Record<string, typeof FileText> = {
  raw: FileText,
  lowercase: CaseSensitive,
  urls: Link2,
  emails: Mail,
  punctuation: Type,
  numbers: Hash,
  special: Sparkles,
  spaces: Space,
  stopwords: Filter,
  clean: FileCheck2,
};

export function Pipeline({ activeOps }: PipelineProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <h3 className="mb-1 text-lg font-bold text-gray-900 dark:text-white">
        Preprocessing Pipeline
      </h3>
      <p className="mb-5 text-sm text-gray-500 dark:text-gray-400">
        Each step runs in order. Active steps are highlighted.
      </p>

      <div className="flex flex-col gap-0">
        {PIPELINE_STEPS.map((step, i) => {
          const Icon = STEP_ICONS[step.key] || FileText;
          const isEndpoint = step.key === 'raw' || step.key === 'clean';
          const isActive = isEndpoint || activeOps[step.key as keyof PreprocessingState];

          return (
            <div key={step.key}>
              <div
                className={`flex items-center gap-3 rounded-xl border p-3 transition-all ${
                  isActive
                    ? isEndpoint
                      ? 'border-green-300 bg-green-50 dark:border-green-700 dark:bg-green-900/20'
                      : 'border-brand-300 bg-brand-50 dark:border-brand-700 dark:bg-brand-900/20'
                    : 'border-gray-200 bg-gray-50 opacity-50 dark:border-gray-700 dark:bg-gray-800/50'
                }`}
              >
                <div
                  className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg ${
                    isActive
                      ? isEndpoint
                        ? 'bg-green-500 text-white'
                        : 'bg-brand-500 text-white'
                      : 'bg-gray-200 text-gray-400 dark:bg-gray-700 dark:text-gray-500'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </div>
                <span
                  className={`flex-1 text-sm font-semibold ${
                    isActive
                      ? 'text-gray-900 dark:text-white'
                      : 'text-gray-400 dark:text-gray-500'
                  }`}
                >
                  {step.label}
                </span>
                {isActive && (
                  <CheckCircle2
                    className={`h-4 w-4 ${
                      isEndpoint ? 'text-green-500' : 'text-brand-500'
                    }`}
                  />
                )}
              </div>
              {i < PIPELINE_STEPS.length - 1 && (
                <div className="flex justify-center py-1">
                  <div
                    className={`h-4 w-0.5 ${
                      isActive ? 'bg-brand-300 dark:bg-brand-700' : 'bg-gray-200 dark:bg-gray-700'
                    }`}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
