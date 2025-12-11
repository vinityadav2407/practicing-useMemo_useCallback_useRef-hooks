import React from "react";

const Home = () => {
  return (
    <div className="" style={{ padding: "10px",textAlign:'center' }}>
      <h1> Home</h1>
      <p>
        <h3> ✅ useMemo:-</h3> What it does: useMemo caches the result of a
        heavy calculation so it doesn't re-run on every re-render. It only
        recalculates when its dependencies change.
      </p>
      <p>
        <h3> ✅ useCallback:-</h3> What it does: useCallback caches a function
        so React doesn't create a new function on every render. Useful when
        passing functions to child components (prevents unnecessary re-renders).
      </p>
      <p>
        <h3> ✅ useRef:-</h3>
        What it does: useRef gives you a box/container that stores a value which
        does NOT cause re-render when changed. Also used for accessing DOM
        elements directly.
      </p>
    </div>
  );
};

export default Home;
