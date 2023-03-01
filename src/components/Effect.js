import React, { useState, useEffect } from "react";
function Effect() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");
  const addCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };
  //all componentDidMount
  useEffect(() => {
    console.log("Mount");
  }, []);
  //Name componentDidMount and name componentDidUpdate
  useEffect(() => {
    console.log("Name Mount");
  }, [name]);

  //componentDidMount and componentDidUpdate
  useEffect(() => {
    document.title = `${counter} kez tiklandi`;
  });
  return (
    <div>
      <h1>Effect</h1>
      <h5 style={{ fontSize: "25px" }}>{counter}</h5>
      <button onClick={addCounter} style={{ width: "90px" }}>
        Arttir
      </button>
      <br />
      <br />
      <input
        type="text"
        value={name}
        placeholder="isim giriniz"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <div>isim: {name}</div>
    </div>
  );
}

export default Effect;
