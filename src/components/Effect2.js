import React, { useState, useEffect } from "react";
function Effect2() {
  const [counter, setCounter] = useState(0);
  const addCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  /*   //cleanUp gerektiren durumlarda return ile sagliyoruz
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Ben iki saniyede bir calisiyorum");
    }, 2000);

    return () => clearInterval(interval);
  }, []); */

  return (
    <div>
      <h1>Effect2</h1>
      <p>{counter}</p>
      <button onClick={addCounter} style={{ width: "1 30px" }}>
        Arttir
      </button>
    </div>
  );
}

export default Effect2;
