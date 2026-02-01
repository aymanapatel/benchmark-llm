import { BenchmarkCategory, Model } from './types';

// Models
export const MODELS: Model[] = [
  // Closed Source - USA
  { id: 'chatgpt', name: 'ChatGPT', latestVersion: '2025-V2', provider: 'OpenAI', color: '#10a37f', type: 'closed', origin: 'USA' }, // Green
  { id: 'claude', name: 'Claude', latestVersion: '3.5 Sonnet', provider: 'Anthropic', color: '#d97757', type: 'closed', origin: 'USA' }, // Orange
  { id: 'google', name: 'Gemini', latestVersion: '1.5 Pro', provider: 'Google', color: '#4285F4', type: 'closed', origin: 'USA' }, // Blue
  { id: 'xAI', name: 'Grok', latestVersion: '3 Beta', provider: 'xAI', color: '#ffffff', type: 'closed', origin: 'USA' }, // White

  // Open Weight - Chinese
  { id: 'deepseek', name: 'DeepSeek', latestVersion: 'V3', provider: 'DeepSeek', color: '#3b82f6', type: 'open', origin: 'Chinese' }, // Blue-500
  { id: 'kimi', name: 'Kimi', latestVersion: 'K2 Thinking', provider: 'Moonshot', color: '#ec4899', type: 'open', origin: 'Chinese' }, // Pink
  { id: 'minimax', name: 'Minimax', latestVersion: 'M2', provider: 'Minimax', color: '#06b6d4', type: 'open', origin: 'Chinese' }, // Cyan
  { id: 'z.ai', name: 'Z.ai', latestVersion: 'GLM 4.7', provider: 'Z.AI', color: '#8b5cf6', type: 'open', origin: 'Chinese' }, // Violet
];


// Hardcoded somewhat realistic futuristic stats
// We ensure winners vary slightly to make the dashboard interesting.
export const BENCHMARK_DATA: BenchmarkCategory[] = [
  {
    id: 'agents',
    title: 'Agents',
    tests: [
      {
        id: 'browse-comp',
        name: 'BrowseComp',
        description: 'Evaluates the internet searching capability of the model.',
        results: [
            { modelId: 'chatgpt', score: 65.8, version: '5.2' },
            { modelId: 'claude', score: 57.8, version: '4.5 Opus' },
            { modelId: 'google', score: 59.2, version: '3 Pro' },
            { modelId: 'xAI', score: 70.1, version: '3 Beta' },
            { modelId: 'deepseek', score: 67.6, version: 'V3' },
            { modelId: 'kimi', score: 74.9, version: 'K2 Thinking' },
            { modelId: 'minimax', score: null, version: 'M2' },
            { modelId: 'z.ai', score: null, version: '4.7' },
        ]
      },
      {
        id: 'deepsearch-qa',
        name: 'DeepSearchQA',
        description: 'Deep Research tasks that help to research extensively and present a report to the user.',
        results: [
            { modelId: 'chatgpt', score: 65.18, version: 'GPT 5 Pro Reasoning' },
            { modelId: 'claude', score: 24.01, version: '4.5 Opus' },
            { modelId: 'google', score: 66.09, version: 'Deep Research Agent' }, 
            { modelId: 'xAI', score: null, version: '4' },
            { modelId: 'deepseek', score: null, version: 'V3' }, 
            { modelId: 'kimi', score: null, version: 'K2 Thinking' },
            { modelId: 'minimax', score: null, version: 'M2' },
            { modelId: 'z.ai', score: null, version: 'SuperNova' },
        ]
      }
    ]
  },
    {
    id: 'knowledge',
    title: 'Knowledge',
    tests: [
      {
        id: 'hle-full',
        name: 'Humanity last exam',
        description: 'Consist of questions across physics, medicine, humanities, computer science, engineering etc.',
        results: [
            { modelId: 'chatgpt', score: 31.6, version: '5.2 XHigh' },
            { modelId: 'claude', score: 25.2, version: '4.5 Opus' }, 
            { modelId: 'google', score: 37.52, version: '3 Pro' },
            { modelId: 'xAI', score: 17.6, version: '4.1 fast' },
            { modelId: 'deepseek', score: 22.2, version: 'V3.2' },
            { modelId: 'kimi', score: 22.3, version: 'K2.5' },
            { modelId: 'minimax', score: 22.2, version: 'M2.1' },
            { modelId: 'z.ai', score: 25.1, version: 'GLM-4.7' },
        ]
      },
      {
        id: 'gpqa',
        name: 'GPQA diamond',
        description: 'Multiple choice questions with questions in STEM. Questions are written by PHD candidate in relevant fields.',
        results: [
            { modelId: 'chatgpt', score: 90.3, version: '5.2 XHigh' },
            { modelId: 'claude', score: 86.6, version: '4.5 Opus' }, 
            { modelId: 'google', score: 90.8, version: '3 Pro' },
            { modelId: 'xAI', score: 87.7, version: '4' },
            { modelId: 'deepseek', score: 84, version: 'V3.2' },
            { modelId: 'kimi', score: 87.9, version: 'K2.5' },
            { modelId: 'minimax', score: 83, version: 'M2.1' },
            { modelId: 'z.ai', score: 85.9, version: 'GLM-4.7' },
        ]
      }
    ]
  },
  {
    id: 'coding',
    title: 'Coding',
    tests: [
      {
        id: 'swe-bench-pro',
        name: 'SWE-Bench Pro (Public dataset)',
        description: 'Realistic evaluation of AI agents for software engineering. More sophisticated from the SWE bench with harder tasks using private repos and overfitting checks ',
        results: [
            { modelId: 'chatgpt', score: 41.78, version: '5 High' },
            { modelId: 'claude', score: 45.89, version: 'Opus 3.5' }, 
            { modelId: 'google', score: 43.3, version: '3 Pro' },
            { modelId: 'xAI', score: null, version: '4' },
            { modelId: 'deepseek', score: 15.56, version: 'V3.2' },
            { modelId: 'kimi', score: 27.67, version: 'K2 Thinking' },
            { modelId: 'minimax', score: 36.81, version: 'M2' },
            { modelId: 'z.ai', score: 9.67, version: 'glm-4.6' },
        ]
      },
      {
        id: 'terminal-bench',
        name: 'Terminal Bench',
        description: 'Testing AI agents in terminals. These are coding task that function inside a terminal with TUI/CLI tools such as Factory, Codex etc.',
        results: [
            { modelId: 'chatgpt', score: 60.4, version: '5.1-Codex-Max (Codex CLI)' },
            { modelId: 'claude', score: 63.1, version: '4.5 Opus (Factory CLI)' },
            { modelId: 'google', score: 64.7, version: '3 Pro (Ante Antigma Labs)' },
            { modelId: 'xAI', score: 27.2, version: '4 (Openhands)' },
            { modelId: 'deepseek', score: null, version: 'V3' }, 
            { modelId: 'kimi', score: 27.8, version: 'K2 Instruct (Terminus 2)' }, 
            { modelId: 'minimax', score: 45.3, version: 'M2' },
            { modelId: 'z.ai', score: 33.4, version: 'GLM 4.7 (Terminus 2)' },
        ]
      }
    ]
  },
  {
    id: 'visual-language',
    title: 'Visual and Language Reasoning',
    tests: [
      {
        id: 'mmlu-pro',
        name: 'MMLU Pro',
        description: '12k questions for 14 subject areas. These are graduate level questions, hence it requires reasoning to get the correct answer.',
        results: [
            { modelId: 'chatgpt', score: 87.4, version: '5.2 XHigh' },
            { modelId: 'claude', score: 89.5, version: '4.5 Opus' }, 
            { modelId: 'google', score: 89.8, version: '3 Pro' },
            { modelId: 'xAI', score: 85.4, version: '4.1 fast' },
            { modelId: 'deepseek', score: 86.2, version: 'V3.2' },
            { modelId: 'kimi', score: 84.8, version: 'K2.5' },
            { modelId: 'minimax', score: 87.5, version: 'M2.1' },
            { modelId: 'z.ai', score: 85.6, version: 'GLM-4.7' },
        ]
      },
      {
        id: 'mmmu-pro',
        name: 'MMMU Pro',
        description: 'Similar to MMMU but with both visual and textual questions',
        results: [
            { modelId: 'chatgpt', score: 76, version: '5.2 Codex' },
            { modelId: 'claude', score: 65, version: '4.5 Opus' }, 
            { modelId: 'google', score: 80, version: '3 Pro' },
            { modelId: 'xAI', score: 69, version: '4' },
            { modelId: 'deepseek', score: null, version: 'V3.2' },
            { modelId: 'kimi', score: 75, version: 'K2.5' },
            { modelId: 'minimax', score: null, version: 'M2.1' },
            { modelId: 'z.ai', score: 49, version: 'GLM-4.6 V' },
        ]
      }
    ]
  },
    {
    id: 'price',
    title: 'Pricing',
    tests: [
      {
        id: 'output-price',
        name: 'Output price: USD per 1Million token (Lower is better)',
        description: 'Cheap price wins!',
        lowerIsBetter: true,
        results: [
            { modelId: 'chatgpt', score: 14, version: '5.2 XHigh' },
            { modelId: 'claude', score: 25, version: '4.5 Opus' }, 
            { modelId: 'google', score: 12, version: '3 Pro' },
            { modelId: 'xAI', score: 15, version: '4.1' },
            { modelId: 'deepseek', score: 0.42, version: 'V3.2' },
            { modelId: 'kimi', score: 2.5, version: 'K2.5' },
            { modelId: 'minimax', score: 1.2, version: 'M2.1' },
            { modelId: 'z.ai', score: 2.1, version: 'GLM-4.7' },
        ]
      }
    ]
  },
];
