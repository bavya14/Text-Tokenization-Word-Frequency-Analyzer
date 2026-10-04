export interface TextStats {
  characters: number;
  words: number;
  sentences: number;
}

export interface ProcessStats {
  original: TextStats;
  cleaned: TextStats;
  charsRemoved: number;
  wordsRemoved: number;
  reductionPercent: number;
}

export type PreprocessingState = Record<
  'lowercase' | 'urls' | 'emails' | 'punctuation' | 'numbers' | 'special' | 'spaces' | 'stopwords',
  boolean
>;
