/**
 * Leaderboard Component
 * 
 * Displays a ranked grid of AI models based on their benchmark performance.
 * Shows medal counts and highlights the top-performing model with special styling.
 */
import React from 'react';
import { Model, MedalCount, CountryMedalCount } from '../types';
import { TrophyIcon, getIconForModel } from './Icons';

/**
 * Props for the Leaderboard component
 */
interface LeaderboardProps {
  /** Array of medal counts for each model */
  medals: MedalCount[];
  /** Array of model definitions for display information */
  models: Model[];
  /** Array of country medal counts */
  countryMedals: CountryMedalCount[];
}

/**
 * Renders a leaderboard grid showing model rankings based on gold medals won.
 * The first-place model receives special visual highlighting.
 * 
 * @param props - Component props containing medals and model data
 * @returns JSX.Element - The rendered leaderboard
 */
const Leaderboard: React.FC<LeaderboardProps> = ({ medals, models, countryMedals }) => {
  // Sort by gold medals desc
  const sortedMedals = [...medals].sort((a, b) => b.gold - a.gold);

  // Sort country medals by gold
  const sortedCountryMedals = [...countryMedals].sort((a, b) => b.gold - a.gold);

  return (
    <div className="space-y-6">
      {/* Country Leaderboard */}
      <div className="grid grid-cols-2 gap-4">
        {sortedCountryMedals.map((country, index) => {
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
                    <h4 className="font-bold text-gray-100 text-sm">{country.origin}</h4>
                    <span className="text-[10px] text-gray-500 font-mono">Total Wins</span>
                  </div>
                  {isFirst && <TrophyIcon className="w-5 h-5 text-gold animate-pulse" />}
                </div>
                
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex items-center gap-1 bg-yellow-500/10 px-2 py-0.5 rounded text-yellow-500 text-xs font-bold border border-yellow-500/20">
                    <TrophyIcon className="w-3 h-3" />
                    {country.gold} Wins
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Model Leaderboard */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {sortedMedals.map((medal, index) => {
        const model = models.find(m => m.id === medal.modelId);
        if (!model) return null;
        
        const isFirst = index === 0;

        return (
          <div 
            key={model.id}
            className={`relative p-5 rounded-xl border flex items-center gap-4 overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
              isFirst 
                ? 'bg-gradient-to-br from-[#161616] to-[#221f00] border-gold/30 shadow-glow-sm' 
                : 'bg-[#161616] border-border hover:border-gray-600'
            }`}
          >
            {/* Rank Number BG */}
            <div className="absolute -right-2 -bottom-4 text-6xl font-black text-white/5 z-0">
                #{index + 1}
            </div>

            <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-[#222] border border-[#333]">
               <div style={{ color: model.color }}>{getIconForModel(model.id)}</div>
            </div>

            <div className="relative z-10 flex-1">
                <div className="flex justify-between items-start">
                    <div>
                        <h4 className="font-bold text-gray-100 text-sm">{model.name}</h4>
                        <span className="text-[10px] text-gray-500 font-mono">{model.version}</span>
                    </div>
                    {isFirst && <TrophyIcon className="w-5 h-5 text-gold animate-pulse" />}
                </div>
                
                <div className="mt-3 flex items-center gap-2">
                    <div className="flex items-center gap-1 bg-yellow-500/10 px-2 py-0.5 rounded text-yellow-500 text-xs font-bold border border-yellow-500/20">
                        <TrophyIcon className="w-3 h-3" />
                        {medal.gold} Wins
                    </div>
                </div>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default Leaderboard;