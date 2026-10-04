import { useCallback, useMemo, useRef, useState } from 'react';
import { AlertCircle, BarChart3, GitCompare, Workflow } from 'lucide-react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { TextInput } from '@/components/TextInput';
import { PreprocessingControls } from '@/components/PreprocessingControls';
import { ProcessButton } from '@/components/ProcessButton';
import { ResultsPanel } from '@/components/ResultsPanel';
import { StatisticsCards } from '@/components/StatisticsCards';
import { ComparisonPanel } from '@/components/ComparisonPanel';
import { Pipeline } from '@/components/Pipeline';
import { HowItWorks } from '@/components/HowItWorks';
import { About } from '@/components/About';
import { Footer } from '@/components/Footer';
import { useTheme } from '@/hooks/useTheme';
import { DEFAULT_ENABLED, SAMPLE_TEXT } from '@/config/preprocessing';
import type { PreprocessingState, ProcessStats } from '@/types';
import type { PreprocessingKey } from '@/config/preprocessing';
import { preprocessText, getTextStats, getProcessStats } from '@/utils/preprocessing';

function buildInitialState(): PreprocessingState {
  const state = {} as PreprocessingState;
  for (const key of DEFAULT_ENABLED) {
    state[key] = true;
  }
  return state;
}

function App() {
  const { theme, toggleTheme } = useTheme();
  const [inputText, setInputText] = useState('');
  const [ops, setOps] = useState<PreprocessingState>(buildInitialState);
  const [result, setResult] = useState('');
  const [hasResult, setHasResult] = useState(false);
  const [error, setError] = useState('');
  const [processStats, setProcessStats] = useState<ProcessStats | null>(null);
  const [originalText, setOriginalText] = useState('');
  const workspaceRef = useRef<HTMLDivElement>(null);

  const liveStats = useMemo(() => getTextStats(inputText), [inputText]);

  const toggleOp = useCallback((key: PreprocessingKey) => {
    setOps((prev) => ({ ...prev, [key]: !prev[key] }));
  }, []);

  const selectAll = useCallback(() => {
    setOps({
      lowercase: true,
      urls: true,
      emails: true,
      punctuation: true,
      numbers: true,
      special: true,
      spaces: true,
      stopwords: true,
    });
  }, []);

  const clearAll = useCallback(() => {
    setOps({
      lowercase: false,
      urls: false,
      emails: false,
      punctuation: false,
      numbers: false,
      special: false,
      spaces: false,
      stopwords: false,
    });
  }, []);

  const loadSample = useCallback(() => {
    setInputText(SAMPLE_TEXT);
    setError('');
  }, []);

  const clearInput = useCallback(() => {
    setInputText('');
    setError('');
  }, []);

  const scrollToWorkspace = useCallback(() => {
    workspaceRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const handlePreprocess = useCallback(() => {
    setError('');

    if (!inputText.trim()) {
      setError('Please enter some text before preprocessing.');
      return;
    }

    const anyEnabled = Object.values(ops).some((v) => v);
    if (!anyEnabled) {
      setError('Select at least one preprocessing operation.');
      return;
    }

    try {
      const cleaned = preprocessText(inputText, ops);
      const stats = getProcessStats(inputText, cleaned);
      setOriginalText(inputText);
      setResult(cleaned);
      setProcessStats(stats);
      setHasResult(true);
    } catch {
      setError('An unexpected error occurred during preprocessing.');
    }
  }, [inputText, ops]);

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <Header theme={theme} onToggleTheme={toggleTheme} />

      <Hero onStart={scrollToWorkspace} onSample={() => { loadSample(); scrollToWorkspace(); }} />

      {/* Main workspace */}
      <section
        id="preprocessing"
        ref={workspaceRef}
        className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Preprocessing Workspace
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600 dark:text-gray-400">
            Enter your text, choose your operations, and process — all in real time.
          </p>
        </div>

        {/* Error message */}
        {error && (
          <div className="mb-6 flex animate-fade-in-fast items-center gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-medium text-amber-700 dark:border-amber-800 dark:bg-amber-900/20 dark:text-amber-400">
            <AlertCircle className="h-5 w-5 flex-shrink-0" />
            {error}
          </div>
        )}

        {/* Two-column layout */}
        <div className="grid gap-6 lg:grid-cols-2">
          <TextInput
            value={inputText}
            onChange={setInputText}
            onLoadSample={loadSample}
            onClear={clearInput}
            stats={liveStats}
          />
          <PreprocessingControls
            state={ops}
            onToggle={toggleOp}
            onSelectAll={selectAll}
            onClearAll={clearAll}
          />
        </div>

        {/* Process button */}
        <div className="mt-6">
          <ProcessButton onClick={handlePreprocess} />
        </div>

        {/* Results */}
        {hasResult && (
          <div className="mt-10 space-y-8">
            <ResultsPanel result={result} hasResult={hasResult} />

            {/* Statistics */}
            {processStats && (
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-brand-500" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Text Analytics
                  </h3>
                </div>
                <StatisticsCards stats={processStats} />
              </div>
            )}

            {/* Before/After comparison */}
            <div>
              <div className="mb-4 flex items-center gap-2">
                <GitCompare className="h-5 w-5 text-brand-500" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Before / After Comparison
                </h3>
              </div>
              <ComparisonPanel original={originalText} cleaned={result} />
            </div>

            {/* Pipeline */}
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Workflow className="h-5 w-5 text-brand-500" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Active Pipeline
                </h3>
              </div>
              <Pipeline activeOps={ops} />
            </div>
          </div>
        )}
      </section>

      <HowItWorks />
      <About />
      <Footer />
    </div>
  );
}

export default App;
