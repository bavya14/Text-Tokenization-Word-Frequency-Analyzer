import {
  CaseSensitive,
  Link2,
  Mail,
  Type,
  Hash,
  Sparkles,
  Space,
  Filter,
} from 'lucide-react';

export interface PreprocessingOption {
  key: PreprocessingKey;
  label: string;
  description: string;
  icon: typeof CaseSensitive;
}

export type PreprocessingKey =
  | 'lowercase'
  | 'urls'
  | 'emails'
  | 'punctuation'
  | 'numbers'
  | 'special'
  | 'spaces'
  | 'stopwords';

export const PREPROCESSING_OPTIONS: PreprocessingOption[] = [
  {
    key: 'lowercase',
    label: 'Convert to lowercase',
    description: 'Normalizes case so "The" and "the" are treated equally.',
    icon: CaseSensitive,
  },
  {
    key: 'urls',
    label: 'Remove URLs',
    description: 'Strips web addresses like https://example.com.',
    icon: Link2,
  },
  {
    key: 'emails',
    label: 'Remove email addresses',
    description: 'Removes email patterns such as user@domain.com.',
    icon: Mail,
  },
  {
    key: 'punctuation',
    label: 'Remove punctuation',
    description: 'Removes marks like . , ! ? : ; " \' from the text.',
    icon: Type,
  },
  {
    key: 'numbers',
    label: 'Remove numbers',
    description: 'Strips all digit characters (0–9).',
    icon: Hash,
  },
  {
    key: 'special',
    label: 'Remove special characters',
    description: 'Removes symbols like @, #, ©, ★, and emojis.',
    icon: Sparkles,
  },
  {
    key: 'spaces',
    label: 'Remove extra whitespace',
    description: 'Collapses multiple spaces, tabs, and newlines into one.',
    icon: Space,
  },
  {
    key: 'stopwords',
    label: 'Remove English stopwords',
    description: 'Filters common words: the, is, in, at, and, of, etc.',
    icon: Filter,
  },
];

export const DEFAULT_ENABLED: PreprocessingKey[] = [
  'lowercase',
  'urls',
  'emails',
  'punctuation',
  'numbers',
  'special',
  'spaces',
  'stopwords',
];

export const PIPELINE_STEPS: { key: PreprocessingKey | 'raw' | 'clean'; label: string }[] = [
  { key: 'raw', label: 'Raw Text' },
  { key: 'lowercase', label: 'Lowercase' },
  { key: 'urls', label: 'URL Removal' },
  { key: 'emails', label: 'Email Removal' },
  { key: 'punctuation', label: 'Punctuation Removal' },
  { key: 'numbers', label: 'Number Removal' },
  { key: 'special', label: 'Special Character Removal' },
  { key: 'spaces', label: 'Whitespace Normalization' },
  { key: 'stopwords', label: 'Stopword Removal' },
  { key: 'clean', label: 'Clean Text' },
];

export const SAMPLE_TEXT =
  'Natural Language Processing is a fascinating field of Artificial Intelligence. It helps computers understand human language, analyze text, and extract useful information. Visit https://example.com or contact nlp@example.com for more information. In 2026, NLP applications are becoming increasingly powerful!';

export const HOW_IT_WORKS: { num: string; title: string; description: string }[] = [
  {
    num: '01',
    title: 'Lowercasing',
    description:
      'Converts uppercase letters to lowercase so words can be processed consistently across the entire corpus.',
  },
  {
    num: '02',
    title: 'URL Removal',
    description:
      'Removes web addresses that may not contribute useful linguistic information to the analysis.',
  },
  {
    num: '03',
    title: 'Email Removal',
    description:
      'Removes email addresses from the text, which are typically noise for NLP tasks like classification.',
  },
  {
    num: '04',
    title: 'Punctuation Removal',
    description:
      'Removes punctuation marks when they are not required for the downstream analysis task.',
  },
  {
    num: '05',
    title: 'Number Removal',
    description:
      'Removes numeric values when they are irrelevant to the specific NLP task being performed.',
  },
  {
    num: '06',
    title: 'Special Character Removal',
    description:
      'Removes unnecessary symbols and special characters that add noise to the text data.',
  },
  {
    num: '07',
    title: 'Whitespace Normalization',
    description:
      'Converts multiple spaces, tabs, and newlines into a single space for clean formatting.',
  },
  {
    num: '08',
    title: 'Stopword Removal',
    description:
      'Removes common English words such as "the", "is", "and", and "of" when appropriate.',
  },
];
