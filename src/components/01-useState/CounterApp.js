import React, { useState } from "react";
import "./counter.css";
export default function CounterApp() {
  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
  });
  const { counter1, counter2 } = state;
  return (
    <div>
      {/* <h1>Counter {counter}</h1> */}
      <h1>Counter1 {counter1}</h1>
      <h1>Counter2 {counter2}</h1>
      <button
        className="btn btn-primary"
        onClick={() => {
          setState({ ...state, counter1: counter1 + 1, counter2: counter2 });
        }}
      >
        Sumar
      </button>
    </div>
  );
}
