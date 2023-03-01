import React, { useState } from "react";

function State3() {
  const [kutuphane, setKutuphane] = useState([
    { adi: "Istanbul Hatirasi", yazar: "Ahmet Umit", basim: "2010" },
    { adi: "1984", yazar: "George Orwell", basim: "2010" },
    { adi: "Seker Portakali", yazar: "Vasconcelos", basim: "1990" },
  ]);

  const [kitap, setKitap] = useState({ adi: "", yazar: "", basim: "" });

  const kitapEkle = () => {
    setKutuphane([...kutuphane, kitap]);
    setKitap({ adi: "", yazar: "", basim: "" });
  };
  return (
    <div>
      <h1>State 3</h1>
      <div>
        <input
          type="text"
          placeholder="Kitap adi..."
          value={kitap.adi}
          style={{ marginRight: "10px" }}
          onChange={(e) => {
            setKitap({ ...kitap, adi: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Kitap Yazari..."
          value={kitap.yazar}
          style={{ marginRight: "10px" }}
          onChange={(e) => {
            setKitap({ ...kitap, yazar: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Kitap Basini..."
          value={kitap.basim}
          onChange={(e) => {
            setKitap({ ...kitap, basim: e.target.value });
          }}
        />
      </div>
      <div>
        <button
          style={{ width: " 190px", height: "40px", marginTop: "10px" }}
          onClick={kitapEkle}
        >
          Kutuphaneye Kaydet
        </button>
      </div>

      <div>
        <ul>
          {kutuphane.map((kitap, index) => {
            return (
              <li key={index} style={{ listStyle: "none", display: "flex" }}>
                <h3 style={{ marginRight: "10px" }}>Kitap Adi: {kitap.adi}</h3>
                <h6 style={{ marginRight: "10px" }}>
                  Kitap Yazari: {kitap.yazar}
                </h6>
                <h6>Kitap Basimi: {kitap.basim}</h6>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default State3;
