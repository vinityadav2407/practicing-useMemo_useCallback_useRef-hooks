import React, { useState } from 'react'

const Use_Ref = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <div
      className="common"
    >
      <h1>Pratice of useRef(cb,[dependencies]) hook..</h1>

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
          <h3>The {text}th Fibonacci is: {0}</h3>
        </div>
      </div>

    </div>
  );
}

export default Use_Ref