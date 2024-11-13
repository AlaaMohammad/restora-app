import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = 'AIzaSyC-lZ4dJB7fxhT0FBkhOE2M7SYKw5AWw0Q'

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    // Define a refined prompt to encourage short, emotional responses
    const prompt = `You are a friendly her name elara and empathetic AI companion. Please respond warmly and briefly, like a supportive friend. Question: "${message}"`;
    
    const result = await model.generateContent(prompt);

    // Ensure short, emotionally resonant output
    const botReply = result.response.text() || 'I’m here for you 😊. Anything else on your mind?';

    return botReply;
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    return 'Sorry, something went wrong. Please try again later.';
  }
};
