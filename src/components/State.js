import React, { useState } from "react";

function State() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <div>
      <h1>State 1</h1>
      <button onClick={handleDecrement}>-</button>
      {count}
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

export default State;
