import { BenchmarkCategory, Model } from './types';

// Models
export const MODELS: Model[] = [
  // Closed Source
  { id: 'chatgpt', name: 'GPT-4o', version: '2025-V2', provider: 'OpenAI', color: '#10a37f', type: 'closed' }, // Green
  { id: 'claude', name: 'Claude', version: '3.5 Sonnet', provider: 'Anthropic', color: '#d97757', type: 'closed' }, // Orange
  { id: 'google', name: 'Gemini', version: '1.5 Pro', provider: 'Google', color: '#4285F4', type: 'closed' }, // Blue
  { id: 'xAI', name: 'Grok', version: '3 Beta', provider: 'xAI', color: '#ffffff', type: 'closed' }, // White

  // Open Weight
  { id: 'deepseek', name: 'DeepSeek', version: 'V3', provider: 'DeepSeek', color: '#3b82f6', type: 'open' }, // Blue-500
  { id: 'kimi', name: 'Kimi', version: 'K2 Thinking', provider: 'Moonshot', color: '#ec4899', type: 'open' }, // Pink
  { id: 'minimax', name: 'Minimax', version: 'M2', provider: 'Minimax', color: '#06b6d4', type: 'open' }, // Cyan
  { id: 'arcee-supernova', name: 'Arcee', version: 'SuperNova', provider: 'Arcee', color: '#8b5cf6', type: 'open' }, // Violet
];

// Helper to generate a random score range for realism
const s = (min: number, max: number) => Number((Math.random() * (max - min) + min).toFixed(1));

// Hardcoded somewhat realistic futuristic stats
// We ensure winners vary slightly to make the dashboard interesting.
export const BENCHMARK_DATA: BenchmarkCategory[] = [
  {
    id: 'agents',
    title: 'Agents',
    tests: [
      {
        id: 'hle-full',
        name: 'HLE-Full',
        description: 'Test',
        results: [
            { modelId: 'chatgpt', score: 62.4 },
            { modelId: 'claude', score: 65.1 }, // Winner
            { modelId: 'google', score: 59.8 },
            { modelId: 'xAI', score: 55.2 },
            { modelId: 'deepseek', score: 60.1 },
            { modelId: 'kimi', score: 54.5 },
            { modelId: 'minimax', score: 51.0 },
            { modelId: 'arcee-supernova', score: 48.9 },
        ]
      },
      {
        id: 'browse-comp',
        name: 'BrowseComp',
        description: 'Test',
        results: [
            { modelId: 'chatgpt', score: 78.2 },
            { modelId: 'claude', score: 76.5 },
            { modelId: 'google', score: 81.3 }, // Winner (Gemini usually good at browsing/long context)
            { modelId: 'xAI', score: 70.1 },
            { modelId: 'deepseek', score: 74.5 },
            { modelId: 'kimi', score: 68.2 },
            { modelId: 'minimax', score: 65.4 },
            { modelId: 'arcee-supernova', score: 62.1 },
        ]
      },
      {
        id: 'deepsearch-qa',
        name: 'DeepSearchQA',
        description: 'Test',
        results: [
            { modelId: 'chatgpt', score: 85.1 },
            { modelId: 'claude', score: 83.2 },
            { modelId: 'google', score: 84.8 }, 
            { modelId: 'xAI', score: 80.5 },
            { modelId: 'deepseek', score: 86.2 }, // Winner (DeepSeek V3 strong reasoning)
            { modelId: 'kimi', score: 79.9 },
            { modelId: 'minimax', score: 75.3 },
            { modelId: 'arcee-supernova', score: 72.1 },
        ]
      }
    ]
  },
  {
    id: 'coding',
    title: 'Coding',
    tests: [
      {
        id: 'swe-bench-verified',
        name: 'SWE-Bench Verified',
        description: 'Test',
        results: [
            { modelId: 'chatgpt', score: 52.1 },
            { modelId: 'claude', score: 56.4 }, // Winner
            { modelId: 'google', score: 49.8 },
            { modelId: 'xAI', score: 45.2 },
            { modelId: 'deepseek', score: 53.0 },
            { modelId: 'kimi', score: 48.5 },
            { modelId: 'minimax', score: 44.1 },
            { modelId: 'arcee-supernova', score: 42.0 },
        ]
      },
      {
        id: 'swe-bench-multi',
        name: 'SWE-Bench Multilingual',
        description: 'Test',
        results: [
            { modelId: 'chatgpt', score: 48.2 },
            { modelId: 'claude', score: 49.5 },
            { modelId: 'google', score: 47.1 },
            { modelId: 'xAI', score: 40.2 },
            { modelId: 'deepseek', score: 51.2 }, // Winner
            { modelId: 'kimi', score: 49.8 }, // Strong competitor
            { modelId: 'minimax', score: 45.3 },
            { modelId: 'arcee-supernova', score: 38.9 },
        ]
      }
    ]
  },
  {
    id: 'image',
    title: 'Image',
    tests: [
      {
        id: 'mmmu-pro',
        name: 'MMMU Pro',
                description: 'Test',
        results: [
            { modelId: 'chatgpt', score: 72.1 },
            { modelId: 'claude', score: 68.4 },
            { modelId: 'google', score: 74.5 }, // Winner
            { modelId: 'xAI', score: 65.2 },
            { modelId: 'deepseek', score: 62.0 },
            { modelId: 'kimi', score: 58.5 },
            { modelId: 'minimax', score: 55.1 },
            { modelId: 'arcee-supernova', score: 52.0 },
        ]
      },
      {
        id: 'mathvision',
        name: 'MathVision',
                description: 'Test',
        results: [
            { modelId: 'chatgpt', score: 68.2 },
            { modelId: 'claude', score: 65.5 },
            { modelId: 'google', score: 63.1 },
            { modelId: 'xAI', score: 71.2 }, // Winner (Grok strong at math)
            { modelId: 'deepseek', score: 60.2 },
            { modelId: 'kimi', score: 62.8 }, 
            { modelId: 'minimax', score: 50.3 },
            { modelId: 'arcee-supernova', score: 48.9 },
        ]
      }
    ]
  },
  {
    id: 'video',
    title: 'Video',
    tests: [
      {
        id: 'video-mmmu',
        name: 'VideoMMMU',
                description: 'Test',
        results: [
            { modelId: 'chatgpt', score: 65.1 },
            { modelId: 'claude', score: 58.4 },
            { modelId: 'google', score: 69.5 }, // Winner (Gemini video native)
            { modelId: 'xAI', score: 55.2 },
            { modelId: 'deepseek', score: 42.0 },
            { modelId: 'kimi', score: 38.5 },
            { modelId: 'minimax', score: 45.1 },
            { modelId: 'arcee-supernova', score: 32.0 },
        ]
      }
    ]
  }
];