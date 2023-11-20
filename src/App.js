// App.js
import React, { useState } from 'react';
import analyzeImage from './azure-image-analysis';
import generateImage from './azure-image-generation'; // Importar la nueva función
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [analysisResults, setAnalysisResults] = useState(null);
  const [generationResults, setGenerationResults] = useState(null); // Estado para los resultados de la generación
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAnalyzeClick = async () => {
    setIsLoading(true);
    try {
      const results = await analyzeImage(inputValue);
      setAnalysisResults(results);
      setGenerationResults(null); // Limpiar los resultados de generación si hubiera
    } catch (error) {
      console.error(error);
      // Manejo del error
    }
    setIsLoading(false);
  };

  const handleGenerateClick = async () => {
    setIsLoading(true);
    try {
      const results = await generateImage(inputValue);
      setGenerationResults(results);
      setAnalysisResults(null); // Limpiar los resultados de análisis si hubiera
    } catch (error) {
      console.error(error);
      // Manejo del error
    }
    setIsLoading(false);
  };

  return (
    <div className="App">
      <h1>Image Analysis and Generation</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter image URL or prompt"
      />
      <button onClick={handleAnalyzeClick} disabled={isLoading}>
        {isLoading ? 'Analyzing...' : 'Analyze Image'}
      </button>
      <button onClick={handleGenerateClick} disabled={isLoading}>
        {isLoading ? 'Generating...' : 'Generate Image'}
      </button>
      {analysisResults && <DisplayResults results={analysisResults} type="analysis" imageUrl={inputValue} />}
      {generationResults && <DisplayResults results={generationResults} type="generation" />}
    </div>
  );
}

function DisplayResults({ results, type, imageUrl }) {
  return (
    <div>
      <h2>{type === 'analysis' ? 'Analysis Results' : 'Generated Image'}</h2>
      {type === 'analysis' && <img src={imageUrl} alt="Analyzed" />}
      {/* Mostrar los resultados de forma legible aquí */}
      <pre>{JSON.stringify(results, null, 2)}</pre>
    </div>
  );
}

export default App;
