import { useState } from 'react';
import { Copy, Check, Download } from 'lucide-react';

interface ResultsPanelProps {
  result: string;
  hasResult: boolean;
}

export function ResultsPanel({ result, hasResult }: ResultsPanelProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([result], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'preprocessed_text.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  if (!hasResult) {
    return null;
  }

  return (
    <div className="animate-fade-in rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="mb-1 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            Preprocessed Result
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Your cleaned text is ready for further NLP analysis.
          </p>
        </div>
      </div>

      {/* Output panel */}
      <div className="mt-4 rounded-xl border border-brand-200 bg-brand-50/50 p-4 dark:border-brand-800 dark:bg-brand-900/10">
        <p className="whitespace-pre-wrap break-words font-mono text-sm leading-relaxed text-gray-800 dark:text-gray-200">
          {result || '(empty result — try enabling fewer options)'}
        </p>
      </div>

      {/* Action buttons */}
      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <button
          onClick={handleCopy}
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition-all hover:border-brand-300 hover:bg-brand-50 hover:text-brand-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-brand-500 dark:hover:bg-gray-700"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 text-green-500" />
              <span className="text-green-600 dark:text-green-400">Copied to clipboard</span>
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              Copy Result
            </>
          )}
        </button>
        <button
          onClick={handleDownload}
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition-all hover:border-brand-300 hover:bg-brand-50 hover:text-brand-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-brand-500 dark:hover:bg-gray-700"
        >
          <Download className="h-4 w-4" />
          Download .TXT
        </button>
      </div>
    </div>
  );
}
