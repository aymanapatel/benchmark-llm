import React, { useMemo } from 'react';
import { MODELS, BENCHMARK_DATA } from './constants';
import BenchmarkChart from './components/BenchmarkChart';
import Leaderboard from './components/Leaderboard';
import Playground from './components/Playground';
import { MedalCount } from './types';
import { Activity, Cpu, Image, Video } from 'lucide-react';

const App: React.FC = () => {
  // Calculate Medals (Wins)
  const medals: MedalCount[] = useMemo(() => {
    const counts: Record<string, MedalCount> = {};
    
    // Initialize
    MODELS.forEach(m => {
      counts[m.id] = { modelId: m.id, gold: 0, totalScore: 0 };
    });

    BENCHMARK_DATA.forEach(cat => {
      cat.tests.forEach(test => {
        // Find winner of test
        const winner = test.results.reduce((prev, curr) => (prev.score > curr.score ? prev : curr));
        if (counts[winner.modelId]) {
          counts[winner.modelId].gold += 1;
        }
        
        // Accumulate scores for tie-breaking or general interest (optional)
        test.results.forEach(r => {
            if(counts[r.modelId]) counts[r.modelId].totalScore += r.score;
        });
      });
    });

    return Object.values(counts);
  }, []);

  const getCategoryIcon = (id: string) => {
    switch(id) {
        case 'agents': return <Activity className="w-5 h-5" />;
        case 'coding': return <Cpu className="w-5 h-5" />;
        case 'image': return <Image className="w-5 h-5" />;
        case 'video': return <Video className="w-5 h-5" />;
        default: return <Activity className="w-5 h-5" />;
    }
  }

  return (
    <div className="min-h-screen bg-background text-gray-200 pb-20">
      {/* Header */}
      <header className="border-b border-border bg-[#0a0a0a]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold tracking-tight text-white">Ayman Benchmark Aggregator <span className="text-gray-500 font-mono text-sm">BENCHMARK 2026</span></h1>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono text-gray-500">
            {/* <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> LIVE DATA</span> */}
            <span>UPDATED: Feb 2026</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        
        {/* Leaderboard Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Global Leaderboard</h2>
            <div className="text-sm text-gray-500">Ranked by Total Gold Medals</div>
          </div>
          <Leaderboard medals={medals} models={MODELS} />
        </section>

        {/* Benchmarks Section */}
        <section className="space-y-16">
            {BENCHMARK_DATA.map((category) => (
                <div key={category.id} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="flex items-center gap-2 mb-6 border-b border-gray-800 pb-2">
                        <span className="text-blue-500">{getCategoryIcon(category.id)}</span>
                        <h2 className="text-2xl font-bold text-gray-100 uppercase tracking-wide">{category.title}</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 h-auto">
                        {category.tests.map((test) => (
                            <BenchmarkChart key={test.id} test={test} models={MODELS} />
                        ))}
                    </div>
                </div>
            ))}
        </section>

      </main>

      <footer className="border-t border-border mt-20 py-8 bg-[#050505]">
          <div className="max-w-7xl mx-auto px-4 text-center text-gray-600 text-sm font-mono">
              Ayman Benchmark Aggregator
          </div>
      </footer>
    </div>
  );
};

export default App;