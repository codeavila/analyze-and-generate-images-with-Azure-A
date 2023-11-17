// App.js
import React, { useState } from 'react';
import analyzeImage from './azure-image-analysis';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [analysisResults, setAnalysisResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAnalyzeClick = async () => {
    setIsLoading(true);
    try {
      const results = await analyzeImage(inputValue);
      setAnalysisResults(results);
    } catch (error) {
      console.error(error);
      // Aquí manejarías el error, quizás estableciendo un estado de error
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
        placeholder="Enter image URL"
      />
      <button onClick={handleAnalyzeClick} disabled={isLoading}>
        {isLoading ? 'Analyzing...' : 'Analyze Image'}
      </button>
      {analysisResults && <DisplayResults results={analysisResults} imageUrl={inputValue} />}
    </div>
  );
}

function DisplayResults({ results, imageUrl }) {
  // Aquí formatearías los resultados de la API para mostrarlos en la UI
  return (
    <div>
      <h2>Analysis Results</h2>
      <img src={imageUrl} alt="Analyzed" />
      {/* Mostrar los resultados de forma legible aquí */}
      <pre>{JSON.stringify(results, null, 2)}</pre>
    </div>
  );
}

export default App;
