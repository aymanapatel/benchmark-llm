/**
 * Playground Component
 * 
 * Interactive demo component that allows users to test prompts against
 * the Gemini AI model. Features a split-pane interface with input textarea
 * and output display, including loading states and error handling.
 */
import React, { useState } from 'react';
import { generateResponse } from '../services/geminiService';
import { GoogleIcon } from './Icons';
import { Loader2, Send, Terminal } from 'lucide-react';

/**
 * Renders an interactive playground for testing AI model responses.
 * Includes prompt input, response output, and loading state management.
 * 
 * @returns JSX.Element - The rendered playground interface
 */
const Playground: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  /**
   * Handles the prompt submission to the Gemini API.
   * Manages loading state and error handling during the request.
   */
  const handleRun = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setResponse("");
    try {
      const res = await generateResponse(prompt);
      setResponse(res);
    } catch (e) {
      setResponse("System Error: Unable to compute.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-12 bg-[#161616] border border-border rounded-xl overflow-hidden shadow-2xl relative">
      <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 absolute inset-0 pointer-events-none"></div>
      
      <div className="p-6 relative z-10">
        <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                <GoogleIcon />
            </div>
            <div>
                <h3 className="text-xl font-bold text-gray-100">Live Playground</h3>
                <p className="text-xs text-gray-500 font-mono">Powered by gemini-2.5-flash-preview-09-2025</p>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Input Section */}
            <div className="flex flex-col gap-4">
                <div className="relative group">
                    <textarea
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="Enter a complex reasoning task to test the model..."
                        className="w-full h-64 bg-[#0a0a0a] border border-gray-800 rounded-lg p-4 text-sm font-mono text-gray-300 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 resize-none transition-all"
                    />
                    <div className="absolute bottom-4 right-4">
                        <button
                            onClick={handleRun}
                            disabled={loading || !prompt.trim()}
                            className={`flex items-center gap-2 px-4 py-2 rounded-md font-bold text-sm transition-all ${
                                loading || !prompt.trim() 
                                ? 'bg-gray-800 text-gray-500 cursor-not-allowed' 
                                : 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20'
                            }`}
                        >
                            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                            {loading ? 'Processing...' : 'Run Simulation'}
                        </button>
                    </div>
                </div>
            </div>

            {/* Output Section */}
            <div className="relative rounded-lg overflow-hidden bg-[#050505] border border-gray-800 flex flex-col">
                <div className="flex items-center gap-2 px-4 py-2 bg-[#0f0f0f] border-b border-gray-800">
                    <Terminal className="w-3 h-3 text-green-500" />
                    <span className="text-[10px] uppercase font-mono text-gray-500">Output Stream</span>
                </div>
                <div className="flex-1 p-4 font-mono text-sm overflow-auto max-h-64 custom-scrollbar">
                    {loading && (
                        <div className="flex flex-col gap-2 animate-pulse">
                            <div className="h-2 bg-gray-800 rounded w-3/4"></div>
                            <div className="h-2 bg-gray-800 rounded w-1/2"></div>
                            <div className="h-2 bg-gray-800 rounded w-5/6"></div>
                        </div>
                    )}
                    {!loading && response && (
                        <div className="text-gray-300 whitespace-pre-wrap leading-relaxed animate-in fade-in duration-500">
                            <span className="text-green-500 mr-2">➜</span>
                            {response}
                        </div>
                    )}
                    {!loading && !response && (
                        <div className="h-full flex items-center justify-center text-gray-700 text-xs italic">
                            Awaiting input...
                        </div>
                    )}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Playground;