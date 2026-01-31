import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize the client
// Note: We create the client lazily or inside the function to ensure process.env is ready, 
// though typically it's fine at module level if env is loaded.
// Ideally, we'd handle the missing key UI in the component, but here we'll just log.

export const generateResponse = async (prompt: string): Promise<string> => {
  if (!apiKey) {
    throw new Error("API Key not found. Please set process.env.API_KEY");
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    
    // Using the specific preview model as requested
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-preview-09-2025',
      contents: prompt,
      config: {
        systemInstruction: "You are a helpful AI assistant. Keep responses concise and relevant for a dashboard demo.",
        thinkingConfig: { thinkingBudget: 0 } // Disable thinking for faster response in this playground demo
      }
    });

    return response.text || "No response generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    if (error instanceof Error) {
        return `Error: ${error.message}`;
    }
    return "An unexpected error occurred while contacting the model.";
  }
};