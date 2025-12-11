import React, { useState, useMemo } from 'react'
import fib from '../utils/helper';

const Use_Memo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // heavy calculation using useMemo
  const fibonacci = useMemo(() => fib((text)), [text]);
  // const fibonacci=fib(text);

  return (
    <div
      className="common"
    >
      <h1>Use_Memo</h1>


      <div className="container"
      style={{
        backgroundColor: isDarkTheme ? "black" : "white",
        color: isDarkTheme ? "white" : "black",
        padding: "20px"
      }}
      >
        
      <button className='btn' onClick={() => setIsDarkTheme(!isDarkTheme)}>
        Toggle Theme
      </button>
      <br />
        <input
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div className="result">
          <h3>The {text}th Fibonacci is: {fibonacci}</h3>
        </div>
      </div>

    </div>
  );
};

export default Use_Memo;
