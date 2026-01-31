import { BenchmarkCategory, Model } from './types';

// Models
export const MODELS: Model[] = [
  // Closed Source
  { id: 'chatgpt', name: 'ChatGPT', latestVersion: '2025-V2', provider: 'OpenAI', color: '#10a37f', type: 'closed' }, // Green
  { id: 'claude', name: 'Claude', latestVersion: '3.5 Sonnet', provider: 'Anthropic', color: '#d97757', type: 'closed' }, // Orange
  { id: 'google', name: 'Gemini', latestVersion: '1.5 Pro', provider: 'Google', color: '#4285F4', type: 'closed' }, // Blue
  { id: 'xAI', name: 'Grok', latestVersion: '3 Beta', provider: 'xAI', color: '#ffffff', type: 'closed' }, // White

  // Open Weight
  { id: 'deepseek', name: 'DeepSeek', latestVersion: 'V3', provider: 'DeepSeek', color: '#3b82f6', type: 'open' }, // Blue-500
  { id: 'kimi', name: 'Kimi', latestVersion: 'K2 Thinking', provider: 'Moonshot', color: '#ec4899', type: 'open' }, // Pink
  { id: 'minimax', name: 'Minimax', latestVersion: 'M2', provider: 'Minimax', color: '#06b6d4', type: 'open' }, // Cyan
  { id: 'z.ai', name: 'Arcee', latestVersion: 'SuperNova', provider: 'Arcee', color: '#8b5cf6', type: 'open' }, // Violet
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
        name: 'Humanity last exam',
        description: 'Consist of questions across physics, medicine, humanities, computer science, engineering etc.',
        results: [
            { modelId: 'chatgpt', score: 31.6, version: '5.2' },
            { modelId: 'claude', score: 25.2, version: '3.5 Sonnet' }, 
            { modelId: 'google', score: 37.52, version: '1.5 Pro' },
            { modelId: 'xAI', score: 17.6, version: '3 Beta' },
            { modelId: 'deepseek', score: 22.2, version: 'V3' },
            { modelId: 'kimi', score: 22.3, version: 'K2 Thinking' },
            { modelId: 'minimax', score: 22.2, version: 'M2' },
            { modelId: 'z.ai', score: 25.1, version: 'SuperNova' },
        ]
      },
      {
        id: 'browse-comp',
        name: 'BrowseComp',
        description: 'Test',
        results: [
            { modelId: 'chatgpt', score: 78.2, version: '5.1' },
            { modelId: 'claude', score: 76.5, version: '3.5 Sonnet' },
            { modelId: 'google', score: null, version: '1.5 Pro' }, // Winner (Gemini usually good at browsing/long context)
            { modelId: 'xAI', score: 70.1, version: '3 Beta' },
            { modelId: 'deepseek', score: 74.5, version: 'V3' },
            { modelId: 'kimi', score: 68.2, version: 'K2 Thinking' },
            { modelId: 'minimax', score: 65.4, version: 'M2' },
            { modelId: 'z.ai', score: 62.1, version: 'SuperNova' },
        ]
      },
      {
        id: 'deepsearch-qa',
        name: 'DeepSearchQA',
        description: 'Test',
        results: [
            { modelId: 'chatgpt', score: 85.1, version: '2025-V2' },
            { modelId: 'claude', score: 83.2, version: '3.5 Sonnet' },
            { modelId: 'google', score: 84.8, version: '1.5 Pro' }, 
            { modelId: 'xAI', score: 80.5, version: '3 Beta' },
            { modelId: 'deepseek', score: 86.2, version: 'V3' }, // Winner (DeepSeek V3 strong reasoning)
            { modelId: 'kimi', score: 79.9, version: 'K2 Thinking' },
            { modelId: 'minimax', score: 75.3, version: 'M2' },
            { modelId: 'z.ai', score: 72.1, version: 'SuperNova' },
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
            { modelId: 'chatgpt', score: 52.1, version: '2025-V2' },
            { modelId: 'claude', score: 56.4, version: '3.5 Sonnet' }, // Winner
            { modelId: 'google', score: 49.8, version: '1.5 Pro' },
            { modelId: 'xAI', score: 45.2, version: '3 Beta' },
            { modelId: 'deepseek', score: 53.0, version: 'V3' },
            { modelId: 'kimi', score: 48.5, version: 'K2 Thinking' },
            { modelId: 'minimax', score: 44.1, version: 'M2' },
            { modelId: 'z.ai', score: 42.0, version: 'SuperNova' },
        ]
      },
      {
        id: 'swe-bench-multi',
        name: 'SWE-Bench Multilingual',
        description: 'Test',
        results: [
            { modelId: 'chatgpt', score: 48.2, version: '2025-V2' },
            { modelId: 'claude', score: 49.5, version: '3.5 Sonnet' },
            { modelId: 'google', score: 47.1, version: '1.5 Pro' },
            { modelId: 'xAI', score: 40.2, version: '3 Beta' },
            { modelId: 'deepseek', score: 51.2, version: 'V3' }, // Winner
            { modelId: 'kimi', score: 49.8, version: 'K2 Thinking' }, // Strong competitor
            { modelId: 'minimax', score: 45.3, version: 'M2' },
            { modelId: 'z.ai', score: 38.9, version: 'SuperNova' },
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
            { modelId: 'chatgpt', score: 72.1, version: '2025-V2' },
            { modelId: 'claude', score: 68.4, version: '3.5 Sonnet' },
            { modelId: 'google', score: 74.5, version: '1.5 Pro' }, // Winner
            { modelId: 'xAI', score: 65.2, version: '3 Beta' },
            { modelId: 'deepseek', score: 62.0, version: 'V3' },
            { modelId: 'kimi', score: 58.5, version: 'K2 Thinking' },
            { modelId: 'minimax', score: 55.1, version: 'M2' },
            { modelId: 'z.ai', score: 52.0, version: 'SuperNova' },
        ]
      },
      {
        id: 'mathvision',
        name: 'MathVision',
                description: 'Test',
        results: [
            { modelId: 'chatgpt', score: 68.2, version: '2025-V2' },
            { modelId: 'claude', score: 65.5, version: '3.5 Sonnet' },
            { modelId: 'google', score: 63.1, version: '1.5 Pro' },
            { modelId: 'xAI', score: 71.2, version: '3 Beta' }, // Winner (Grok strong at math)
            { modelId: 'deepseek', score: 60.2, version: 'V3' },
            { modelId: 'kimi', score: 62.8, version: 'K2 Thinking' }, 
            { modelId: 'minimax', score: 50.3, version: 'M2' },
            { modelId: 'z.ai', score: 48.9, version: 'SuperNova' },
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
            { modelId: 'chatgpt', score: 65.1, version: '2025-V2' },
            { modelId: 'claude', score: 58.4, version: '3.5 Sonnet' },
            { modelId: 'google', score: 69.5, version: '1.5 Pro' }, // Winner (Gemini video native)
            { modelId: 'xAI', score: 55.2, version: '3 Beta' },
            { modelId: 'deepseek', score: 42.0, version: 'V3' },
            { modelId: 'kimi', score: 38.5, version: 'K2 Thinking' },
            { modelId: 'minimax', score: 45.1, version: 'M2' },
            { modelId: 'z.ai', score: 32.0, version: 'SuperNova' },
        ]
      }
    ]
  }
];
