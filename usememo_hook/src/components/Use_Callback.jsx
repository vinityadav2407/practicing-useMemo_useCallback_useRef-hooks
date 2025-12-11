import React, { useCallback, useState } from "react";
import fib from "../utils/helper";

const Use_Callback = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // it hold(memorised) the heavy calculation function using useCallback
  // useCallback does NOT run the callback
  // Stores the function itself
  // It only RETURNS the function on behalf of dependencies
  // second prameter we pass the dependencies on which we need to perform the heavey function  operations

  const fibonacci = useCallback(
    (n) => {
      if (n <= 1) return n;
      return fib(n - 1) + fib(n - 2);
    },
    [text]
  );
  // const fibonacci=fib(text);
  return (
    <div className="common">
      <h1>Pratice of useCallback(cb,[dependencies]) hook..</h1>

      <div
        className="container"
        style={{
          backgroundColor: isDarkTheme ? "black" : "white",
          color: isDarkTheme ? "white" : "black",
          padding: "20px",
        }}
      >
        <button className="btn" onClick={() => setIsDarkTheme(!isDarkTheme)}>
          Toggle Theme
        </button>
        <br />
        <input
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div className="result">
          <h3>
            The {text}th Fibonacci is: {fibonacci(text)}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Use_Callback;
