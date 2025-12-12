import React, { useRef, useState } from 'react'

const Use_Ref = () => {
  const [y, setY] = useState(0);
  let x = 0;
  const Ref = useRef(0);
  // it's not normal variable it's hold as an object(Ref={curret:0})
  
  return (
    <div className="common">
      <div className="container">

        {/* STATE */}
        <div style={{ marginTop: '50px' }}>
          <button
            style={{
              margin: '10px',
              padding: '10px',
              backgroundColor: 'lightblue',
              borderRadius: '15px',
              fontSize: 'large',
              fontWeight: 'bold'
            }}
            onClick={() => {
              setY(y + 1);
              console.log("Y =", y + 1);   // LOG HERE
            }}
          >
            Increase State y
          </button>
          <span>State = {y}</span>
        </div>

        {/* LET VARIABLE */}
        <div>
          <button
            style={{
              margin: '10px',
              padding: '10px',
              backgroundColor: 'lightblue',
              borderRadius: '15px',
              fontSize: 'large',
              fontWeight: 'bold'
            }}
            onClick={() => {
              x += 1;
              console.log("X =", x); // LOG HERE
            }}
          >
            Increase X
          </button>
          <span>Let = {x}</span>
        </div>

        {/* REF
        // it's not normal variable it's hald as an object(Ref={curret:0})
        // and it's not re-render but hold(remember the value)
         */}
        <div>
          <button
            style={{
              margin: '10px',
              padding: '10px',
              backgroundColor: 'lightblue',
              borderRadius: '15px',
              fontSize: 'large',
              fontWeight: 'bold'
            }}
            onClick={() => {
              Ref.current += 1;
              console.log("Ref =", Ref.current); // LOG HERE
            }}
          >
            Increase Ref
          </button>
          <span>Ref = {Ref.current}</span>
        </div>

      </div>
    </div>
  );
}

export default Use_Ref;
