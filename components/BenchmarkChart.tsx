/**
 * BenchmarkChart Component
 * 
 * Displays a bar chart visualization for benchmark test results, comparing
 * scores across different AI models. Highlights the winning model with a
 * trophy icon and special styling.
 */
import React from 'react';
import { BenchmarkTest, Model } from '../types';
import { TrophyIcon, getIconForModel } from './Icons';

/**
 * Props for the BenchmarkChart component
 */
interface BenchmarkChartProps {
  /** The benchmark test data containing results for each model */
  test: BenchmarkTest;
  /** Array of model definitions for display and color mapping */
  models: Model[];
}

/**
 * Renders a bar chart comparing benchmark scores across AI models.
 * Automatically calculates the winner and scales the chart based on max score.
 * 
 * @param props - Component props containing test data and model definitions
 * @returns JSX.Element - The rendered benchmark chart
 */
const BenchmarkChart: React.FC<BenchmarkChartProps> = ({ test, models }: BenchmarkChartProps) => {
  // Find max score for scaling
  const maxScore = Math.max(...test.results.map((r) => r.score));
  // Round up to nearest 10 for y-axis top
  const scaleMax = Math.ceil(maxScore / 10) * 10;
  
  // Find winner
  const winner = test.results.reduce((prev, current) => 
    (prev.score > current.score) ? prev : current
  );

  return (
    <div className="bg-[#161616] p-6 rounded-xl border border-border flex flex-col w-full h-full min-h-[400px]">
      <div className="mb-6 flex justify-between items-center">
        <h3 className="text-xl font-bold text-gray-100">{test.name}</h3>
        <span className="text-xs font-mono text-gray-500 tracking-widest">{test.description}</span>
      </div>

      <div className="flex-1 w-full flex items-end justify-between gap-2 sm:gap-4 relative pt-12">
        {/* Grid lines background */}
        <div className="absolute inset-0 pointer-events-none flex flex-col justify-between text-gray-800 opacity-20 z-0 pb-20 pt-12">
             {[0, 0.25, 0.5, 0.75, 1].map((tick) => (
                 <div key={tick} className="w-full h-px bg-gray-700 relative">
                     <span className="absolute -top-3 -left-0 text-[10px]">{Math.round((1 - tick) * scaleMax)}</span>
                 </div>
             ))}
        </div>

        {models.map((model) => {
          const result = test.results.find(r => r.modelId === model.id);
          const score = result ? result.score : 0;
          const heightPercent = (score / scaleMax) * 100;
          const isWinner = winner.modelId === model.id;

          return (
            <div key={model.id} className="group relative flex flex-col items-center justify-end h-full flex-1 z-10">
              
              {/* Score Label (Permanent) */}
              <div 
                className={`mb-2 font-mono text-xs sm:text-sm font-bold transition-all ${
                  isWinner ? 'text-gold' : 'text-gray-400 group-hover:text-white'
                }`}
              >
                {score && score.toFixed(1)}
                {!score && "NA"}
              </div>

              {/* Trophy for Winner */}
              {isWinner && (
                <div className="absolute -top-12 animate-bounce z-20">
                  <div className="bg-gradient-to-b from-yellow-300 to-yellow-600 rounded-full p-1.5 shadow-glow">
                    <TrophyIcon className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                  </div>
                </div>
              )}

              {/* The Bar */}
              <div 
                className={`w-full max-w-[40px] rounded-t-sm transition-all duration-700 ease-out relative ${
                  isWinner ? 'shadow-glow-sm' : 'opacity-80 hover:opacity-100'
                }`}
                style={{ 
                  height: `${heightPercent}%`, 
                  backgroundColor: model.color 
                }}
              >
                {/* Glossy overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent pointer-events-none"></div>
              </div>

              {/* Label Area */}
              <div className="mt-4 flex flex-col items-center gap-1 h-16 w-full">
                <div className={`p-1.5 rounded-full bg-[#222] border border-[#333] ${isWinner ? 'ring-1 ring-gold/50' : ''}`}>
                    <div className={isWinner ? 'text-gold' : 'text-gray-400'}>
                        {getIconForModel(model.id)}
                    </div>
                </div>
                <div className="text-[10px] sm:text-xs text-center font-medium text-gray-300 leading-tight">
                    {model.name}
                </div>
                <div className="text-[9px] text-gray-600 scale-90">
                    {model.version}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BenchmarkChart;