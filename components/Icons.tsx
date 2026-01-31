/**
 * Icons Component
 * 
 * Provides a collection of SVG icon components for various AI model providers
 * and UI elements used throughout the benchmark dashboard.
 */
import React from 'react';

/**
 * Trophy icon component for displaying winner indicators
 * @param props - Component props
 * @param props.className - Optional CSS class for styling
 * @returns JSX.Element - SVG trophy icon
 */
export const TrophyIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path fillRule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.753 6.753 0 006.138 5.6 6.73 6.73 0 002.743 1.346A6.707 6.707 0 019.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 00-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 00.75-.75 2.25 2.25 0 00-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 01-1.112-3.173 6.73 6.73 0 002.743-1.347 6.753 6.753 0 006.139-5.6.75.75 0 00-.585-.858 47.077 47.077 0 00-3.07-.543V2.62a.75.75 0 00-.658-.744 49.22 49.22 0 00-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 00-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 013.16 5.337a45.6 45.6 0 012.006-.348Zm13.668 8.04a5.255 5.255 0 01-.856-3.294 5.267 5.267 0 012.863.39 45.6 45.6 0 002.006.348ZM14.152 15h-.664c.52-.775.876-1.66.989-2.61.113-.958.053-1.939-.172-2.883a47.501 47.501 0 00-4.609 0c-.224.944-.284 1.925-.172 2.883a6.75 6.75 0 00.99 2.61h-.665a.375.375 0 00-.375.375v2.625c0 .207.168.375.375.375h4.5c.207 0 .375-.168.375-.375v-2.625a.375.375 0 00-.375-.375Z" clipRule="evenodd" />
  </svg>
);

/**
 * OpenAI logo icon component
 * @returns JSX.Element - SVG OpenAI logo
 */
export const OpenAIIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.0462 6.0462 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a1.558 1.558 0 0 1 .6946 1.3365v5.38a4.49 4.49 0 0 1-5.1511 3.4125zm-6.9051-3.1821a4.5474 4.5474 0 0 1-.7994-4.8238l5.755 3.3256a.7879.7879 0 0 0 .7838 0l5.8354-3.3728v2.3324a1.5231 1.5231 0 0 1-.8328 1.3413l-4.7169 2.7163a4.532 4.532 0 0 1-6.0251-1.5188zm-1.5032-9.6176a4.526 4.526 0 0 1 3.8687-3.805l-.142.0805-4.7781 2.7582a.795.795 0 0 0-.3928.6813v6.7369l-2.02-1.1686a1.5577 1.5577 0 0 1-.6946-1.3365v-2.196a4.5165 4.5165 0 0 1 4.1588-1.7508zm10.7411-4.7836a1.5492 1.5492 0 0 1 1.5167.6743l2.4285 4.206a4.5126 4.5126 0 0 1-3.0518 6.4764l-5.755-3.3256a.7949.7949 0 0 0-.7838 0l-5.8354 3.3728v-2.3324a1.5252 1.5252 0 0 1 .8328-1.3413l4.7169-2.7162a4.5517 4.5517 0 0 1 5.9312-5.014zM13.2599.0048a4.5165 4.5165 0 0 1 4.1588 1.7508l-.1419.0804-4.7783 2.7582a.7948.7948 0 0 0-.3927.6813v6.7369l-2.02-1.1686a1.5579 1.5579 0 0 1-.6946-1.3365v-5.38a4.49 4.49 0 0 1 3.8687-4.1225zm-1.2504 10.6358 2.6841 1.5478-2.6841 1.5501V20.47l5.242-3.0246V11.416l-5.242-3.0223z"/>
  </svg>
);

/**
 * Anthropic logo icon component
 * @returns JSX.Element - SVG Anthropic logo
 */
export const AnthropicIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.74 3H4.26C3.56 3 3 3.56 3 4.26v15.48c0 .7.56 1.26 1.26 1.26h15.48c.7 0 1.26-.56 1.26-1.26V4.26c0-.7-.56-1.26-1.26-1.26zM12 17l-2.5-7h5L12 17z" />
  </svg>
);

/**
 * Google logo icon component
 * @returns JSX.Element - SVG Google logo
 */
export const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
  </svg>
);

/**
 * X (Twitter) logo icon component for xAI/Grok
 * @returns JSX.Element - SVG X logo
 */
export const XIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

/**
 * DeepSeek logo icon component
 * @returns JSX.Element - SVG DeepSeek logo
 */
export const DeepSeekIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.94-1.47L12 8.06l-2.94 1.47L12 11zm-5.38 1.69L2 10.31v5.38l10 5v-5.38l-4.62-2.31zm10.76 0l-4.62 2.31v5.38l10-5v-5.38l-4.62 2.31z" />
  </svg>
);

/**
 * Default model icon used when no specific provider icon is available
 * @returns JSX.Element - SVG default model icon
 */
export const DefaultModelIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

/**
 * Returns the appropriate icon component for a given model ID
 * Maps model IDs to their corresponding provider icons
 * 
 * @param id - The model ID string (e.g., 'gpt-4o', 'claude-3-5', 'gemini-1-5')
 * @returns JSX.Element - The corresponding provider icon component
 */
export const getIconForModel = (id: string) => {
  if (id.includes('gpt')) return <OpenAIIcon />;
  if (id.includes('claude')) return <AnthropicIcon />;
  if (id.includes('gemini')) return <GoogleIcon />;
  if (id.includes('grok')) return <XIcon />;
  if (id.includes('deepseek')) return <DeepSeekIcon />;
  return <DefaultModelIcon />;
};