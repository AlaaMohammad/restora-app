import axios from 'axios';

const gemmaApiKey = "YOUR_GEMMA_API_KEY";  // Replace with your Gemma API key

// Function to send a message to Gemma and get a response
export const sendMessageToGemma = async (message: string): Promise<string> => {
  try {
    const response = await axios.post(
      'https://gemma.googleapis.com/v1/projects/YOUR_PROJECT_ID/locations/global/models/YOUR_MODEL_ID:predict',
      {
        instances: [
          {
            content: message,
            languageCode: 'en',
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${gemmaApiKey}`,
          Accept: 'application/json',
        },
      }
    );
    
    return response.data.predictions[0].content;
  } catch (error) {
    console.error("Error connecting to Gemma:", error);
    return "Sorry, I couldn't understand that. Can you rephrase?";
  }
};