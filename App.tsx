import React, { useMemo } from 'react';
import { MODELS, BENCHMARK_DATA } from './constants';
import BenchmarkChart from './components/BenchmarkChart';
import Leaderboard from './components/Leaderboard';
import Playground from './components/Playground';
import { MedalCount, CountryMedalCount } from './types';
import { Activity, Book, Cpu, DollarSign, Image } from 'lucide-react';

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
        // Find winner of test (higher is better by default, lower is better for price)
        const winner = test.results.reduce((prev, curr) => {
          if (test.lowerIsBetter) {
            return (prev.score < curr.score) ? prev : curr;
          }
          return (prev.score > curr.score) ? prev : curr;
        });
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

  // Calculate country totals
  const countryMedals: CountryMedalCount[] = useMemo(() => {
    const usaTotal = medals
      .filter(m => MODELS.find(model => model.id === m.modelId)?.origin === 'USA')
      .reduce((sum, m) => sum + m.gold, 0);
    
    const chineseTotal = medals
      .filter(m => MODELS.find(model => model.id === m.modelId)?.origin === 'Chinese')
      .reduce((sum, m) => sum + m.gold, 0);

    return [
      { origin: 'USA', gold: usaTotal },
      { origin: 'Chinese', gold: chineseTotal }
    ];
  }, [medals]);

  const getCategoryIcon = (id: string) => {
    switch(id) {
        case 'agents': return <Activity className="w-5 h-5" />;
        case 'coding': return <Cpu className="w-5 h-5" />;
        case 'knowledge': return <Book className="w-5 h-5" />;
        case 'visual-language': return <Image className="w-5 h-5" />;
        case 'price': return <DollarSign className="w-5 h-5" />;
        default: return <Activity className="w-5 h-5" />;
    }
  }

  return (
    <div className="min-h-screen bg-background text-gray-200 pb-20">
      {/* Header */}
      <header className="border-b border-border bg-[#0a0a0a]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold tracking-tight text-white">Ayman Benchmark Aggregator <span className="text-gray-500 font-mono text-sm">benchmark aggregator</span></h1>
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
          
          {/* Country Totals */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {countryMedals.sort((a, b) => b.gold - a.gold).map((country, index) => {
              const isFirst = index === 0;
              const countryFlag = country.origin === 'USA' ? '🇺🇸' : '🇨🇳';
              
              return (
                <div 
                  key={country.origin}
                  className={`relative p-4 rounded-xl border flex items-center gap-4 overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                    isFirst 
                      ? 'bg-gradient-to-br from-[#161616] to-[#221f00] border-gold/30 shadow-glow-sm' 
                      : 'bg-[#161616] border-border hover:border-gray-600'
                  }`}
                >
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-[#222] border border-[#333] text-2xl">
                    {countryFlag}
                  </div>

                  <div className="relative z-10 flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-gray-100 text-lg">{country.origin}</h4>
                        <span className="text-xs text-gray-500 font-mono">Total Wins</span>
                      </div>
                      {isFirst && <span className="text-gold text-xl">🏆</span>}
                    </div>
                    
                    <div className="mt-2 flex items-center gap-2">
                      <div className="flex items-center gap-1 bg-yellow-500/10 px-3 py-1 rounded text-yellow-500 text-sm font-bold border border-yellow-500/20">
                        {country.gold} Wins
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Segregated Leaderboards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* USA Leaderboard */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">🇺🇸</span>
                <h3 className="text-2xl font-bold text-white">USA Models</h3>
              </div>
              <Leaderboard 
                medals={medals.filter(m => MODELS.find(model => model.id === m.modelId)?.origin === 'USA')} 
                models={MODELS.filter(m => m.origin === 'USA')} 
              />
            </div>

            {/* Chinese Leaderboard */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">🇨🇳</span>
                <h3 className="text-2xl font-bold text-white">Chinese Models</h3>
              </div>
              <Leaderboard 
                medals={medals.filter(m => MODELS.find(model => model.id === m.modelId)?.origin === 'Chinese')} 
                models={MODELS.filter(m => m.origin === 'Chinese')} 
              />
            </div>
          </div>
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