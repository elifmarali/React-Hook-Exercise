import React, { useState } from "react";

function State3() {
  const [kutuphane, setKutuphane] = useState([
    { adi: "Istanbul Hatirasi", yazar: "Ahmet Umit", basim: "2010" },
    { adi: "1984", yazar: "George Orwell", basim: "2010" },
    { adi: "Seker Portakali", yazar: "Vasconcelos", basim: "1990" },
  ]);

  const [kitap, setKitap] = useState({ adi: "", yazar: "", basin: "" });

  return (
    <div>
      <h1>State 3</h1>
      <div>
        <input
          type="text"
          placeholder="Kitap adi..."
          value={kitap.adi}
          style={{ marginRight: "10px" }}
        />
        <input
          type="text"
          placeholder="Kitap Yazari..."
          value={kitap.yazar}
          style={{ marginRight: "10px" }}
        />
        <input type="text" placeholder="Kitap Basini..." value={kitap.basin} />
      </div>
      <div>
        <button style={{ width: " 190px", height: "40px", marginTop: "10px" }}>
          Kutuphaneye Kaydet
        </button>
      </div>
    </div>
  );
}

export default State3;
