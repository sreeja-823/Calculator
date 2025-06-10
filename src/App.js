import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      // eslint-disable-next-line no-eval
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  };

  return (
    <div className="calculator">
      <h2>Calculator App</h2>
      <input type="text" value={input} readOnly />
      <div className="buttons">
        {['7','8','9','/','4','5','6','*','1','2','3','-','0','.','=','+'].map((btn, i) => (
          <button
            key={i}
            onClick={() => {
              if (btn === '=') handleCalculate();
              else handleClick(btn);
            }}
          >
            {btn}
          </button>
        ))}
        <button onClick={handleClear} className="clear">C</button>
      </div>
    </div>
  );
}

export default App;
