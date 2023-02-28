import React, { useState } from "react";

function State2() {
  const [kimlik, setKimlik] = useState({ isim: "elif", soyisim: "marali" });
  return (
    <div>
      <h1>State 2</h1>
      <input
        value={kimlik.isim}
        onChange={(e) => setKimlik({ ...kimlik, isim: e.target.value })}
        type="text"
        placeholder="isim giriniz..."
      />
      <input
        type="text"
        placeholder="soyisim giriniz..."
        value={kimlik.soyisim}
        onChange={(e) => setKimlik({ ...kimlik, soyisim: e.target.value })}
      />
      <div>isim :{kimlik.isim}</div>
      <div>soyisim :{kimlik.soyisim}</div>
    </div>
  );
}

export default State2;
