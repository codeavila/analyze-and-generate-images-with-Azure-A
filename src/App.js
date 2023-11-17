import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState(''); // Estado para la URL o el prompt

  const handleInputChange = (event) => {
    setInputValue(event.target.value); // Actualiza el estado con el valor del input
  };

  const handleAnalyzeImage = () => {
    // Aquí irá la lógica para analizar la imagen
    console.log('Analyze image with URL:', inputValue);
  };

  const handleGenerateImage = () => {
    // Aquí irá la lógica para generar la imagen
    console.log('Generate image with prompt:', inputValue);
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
      <button onClick={handleAnalyzeImage}>Analyze Image</button>
      <button onClick={handleGenerateImage}>Generate Image</button>
    </div>
  );
}

export default App;
