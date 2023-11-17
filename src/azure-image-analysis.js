// azure-image-analysis.js

const subscriptionKey = process.env.REACT_APP_ENDPOINTVISION_KEY_1; // Deberías poner esto en variables de entorno
const endpoint = 'https://endpointvision.cognitiveservices.azure.com/';

const analyzeImage = async (imageUrl) => {
  const features = 'Categories,Description,Color'; // Personaliza según sea necesario
  const url = `${endpoint}vision/v3.2/analyze?visualFeatures=${features}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Ocp-Apim-Subscription-Key': subscriptionKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ url: imageUrl })
    });
    
    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('Error calling Azure Vision API:', error);
    throw error;
  }
};

export default analyzeImage;
