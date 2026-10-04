import type { PreprocessingState, ProcessStats, TextStats } from '@/types';

// A comprehensive set of English stopwords (NLTK-style list, embedded so the
// app needs no network access).
const STOPWORDS = new Set([
  'i', 'me', 'my', 'myself', 'we', 'our', 'ours', 'ourselves', 'you', "you're",
  "you've", "you'll", "you'd", 'your', 'yours', 'yourself', 'yourselves', 'he',
  'him', 'his', 'himself', 'she', "she's", 'her', 'hers', 'herself', 'it',
  "it's", 'its', 'itself', 'they', 'them', 'their', 'theirs', 'themselves',
  'what', 'which', 'who', 'whom', 'this', 'that', "that'll", 'these', 'those',
  'am', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has',
  'had', 'having', 'do', 'does', 'did', 'doing', 'a', 'an', 'the', 'and',
  'but', 'if', 'or', 'because', 'as', 'until', 'while', 'of', 'at', 'by',
  'for', 'with', 'about', 'against', 'between', 'into', 'through', 'during',
  'before', 'after', 'above', 'below', 'to', 'from', 'up', 'down', 'in',
  'out', 'on', 'off', 'over', 'under', 'again', 'further', 'then', 'once',
  'here', 'there', 'when', 'where', 'why', 'how', 'all', 'any', 'both',
  'each', 'few', 'more', 'most', 'other', 'some', 'such', 'no', 'nor', 'not',
  'only', 'own', 'same', 'so', 'than', 'too', 'very', 's', 't', 'can', 'will',
  'just', 'don', "don't", 'should', "should've", 'now', 'd', 'll', 'm', 'o',
  're', 've', 'y', 'ain', 'aren', "aren't", 'couldn', "couldn't", 'didn',
  "didn't", 'doesn', "doesn't", 'hadn', "hadn't", 'hasn', "hasn't", 'haven',
  "haven't", 'isn', "isn't", 'ma', 'mightn', "mightn't", 'mustn', "mustn't",
  'needn', "needn't", 'shan', "shan't", 'shouldn', "shouldn't", 'wasn',
  "wasn't", 'weren', "weren't", 'won', "won't", 'wouldn', "wouldn't",
]);

export function toLowercase(text: string): string {
  return text.toLowerCase();
}

export function removeUrls(text: string): string {
  return text.replace(/https?:\/\/\S+|ftp:\/\/\S+|www\.\S+/gi, '');
}

export function removeEmails(text: string): string {
  return text.replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, '');
}

export function removePunctuation(text: string): string {
  return text.replace(/[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/g, '');
}

export function removeNumbers(text: string): string {
  return text.replace(/\d+/g, '');
}

export function removeSpecialCharacters(text: string): string {
  return text.replace(/[^a-zA-Z0-9\s]/g, '');
}

export function removeExtraSpaces(text: string): string {
  return text.replace(/\s+/g, ' ').trim();
}

export function removeStopwords(text: string): string {
  return text
    .split(/\s+/)
    .filter((w) => !STOPWORDS.has(w.toLowerCase()))
    .join(' ');
}

export function preprocessText(text: string, options: PreprocessingState): string {
  let result = text;
  if (options.lowercase) result = toLowercase(result);
  if (options.urls) result = removeUrls(result);
  if (options.emails) result = removeEmails(result);
  if (options.punctuation) result = removePunctuation(result);
  if (options.numbers) result = removeNumbers(result);
  if (options.special) result = removeSpecialCharacters(result);
  if (options.spaces) result = removeExtraSpaces(result);
  if (options.stopwords) {
    result = removeStopwords(result);
    result = removeExtraSpaces(result);
  }
  return result;
}

export function getTextStats(text: string): TextStats {
  const trimmed = text.trim();
  const characters = text.length;
  const words = trimmed ? trimmed.split(/\s+/).length : 0;
  const sentenceMatches = trimmed.match(/[.!?]+/g);
  const sentences = sentenceMatches ? sentenceMatches.length : trimmed ? 1 : 0;
  return { characters, words, sentences };
}

export function getProcessStats(original: string, cleaned: string): ProcessStats {
  const originalStats = getTextStats(original);
  const cleanedStats = getTextStats(cleaned);
  const charsRemoved = originalStats.characters - cleanedStats.characters;
  const wordsRemoved = originalStats.words - cleanedStats.words;
  const reductionPercent =
    originalStats.characters > 0
      ? Math.round((charsRemoved / originalStats.characters) * 100)
      : 0;
  return {
    original: originalStats,
    cleaned: cleanedStats,
    charsRemoved,
    wordsRemoved,
    reductionPercent,
  };
}
