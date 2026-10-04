import { Sparkles } from 'lucide-react';

interface ProcessButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export function ProcessButton({ onClick, disabled }: ProcessButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="group flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-brand-600 via-purple-600 to-brand-600 bg-[length:200%_auto] px-8 py-4 text-base font-bold text-white shadow-lg shadow-brand-500/25 transition-all hover:bg-[position:right_center] hover:shadow-xl hover:shadow-brand-500/30 disabled:cursor-not-allowed disabled:opacity-50"
    >
      <Sparkles className="h-5 w-5 transition-transform group-hover:rotate-12" />
      PREPROCESS TEXT
    </button>
  );
}
