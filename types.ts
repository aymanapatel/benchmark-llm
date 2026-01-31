export interface Model {
  id: string;
  name: string;
  version: string;
  provider: string;
  color: string;
  type: 'open' | 'closed';
}

export interface BenchmarkResult {
  modelId: string;
  score: number;
}

export interface BenchmarkTest {
  id: string;
  name: string;
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