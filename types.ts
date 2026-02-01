export interface Model {
  id: string;
  name: string;
  latestVersion: string;
  provider: string;
  color: string;
  type: 'open' | 'closed';
  origin: 'USA' | 'Chinese';
}

export interface BenchmarkResult {
  modelId: string;
  score: number | null;
  version: string;
}

export interface BenchmarkTest {
  id: string;
  name: string;
  description: string;
  results: BenchmarkResult[];
}

export interface BenchmarkCategory {
  id: string;
  title: string;
  tests: BenchmarkTest[];
}

export interface MedalCount {
  modelId: string;
  gold: number;
  totalScore: number;
}

export interface CountryMedalCount {
  origin: 'USA' | 'Chinese';
  gold: number;
}