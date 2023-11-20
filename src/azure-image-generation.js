// azure-image-generation.js

const apiKey = process.env.REACT_APP_DALLE_KEY; // Asegúrate de tener esta variable en tus variables de entorno
const endpoint = 'https://api.openai.com/v1/images/generate'; // Usa el endpoint correcto

const generateImage = async (prompt) => {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ prompt: prompt })
    });

    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    throw error;
  }
};

export default generateImage;
