import React, { useState } from 'react';
import './App.css';

function App() {
  const [isBackgroundDark, setIsBackgroundDark] = useState(false);

  const toggleBackgroundColor = () => {
    setIsBackgroundDark((prev) => !prev);
  };

  return (
    <div className={`App ${isBackgroundDark ? 'dark' : 'light'}`}>
      <h1>Color Toggle App</h1>
      <button onClick={toggleBackgroundColor}>Toggle Background Color from light mode to dark mode.</button>
    </div>
  );
}

export default App;
