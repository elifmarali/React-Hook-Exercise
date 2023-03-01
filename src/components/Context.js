import React, { useContext } from "react";
import { ThemeContext } from "../App";
function Context() {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <div className="content" style={theme}>
        <div className="part_up">
          <p>
            Context; mevcut kullanıcıyı doğrulama, tema veya dil seçimi gibi
            React bileşen ağacında global olarak düşünülebilecek verileri
            paylaşmak için tasarlanmıştır.
          </p>
          <p>
            <strong>
              Context : Bağlamdaki değerleri tutar..
              <br />
              Provider: Bağlam içerisindeki değerleri sağlar.
              <br />
              Consumer: Bağlam içerisindeki değerleri herhangi bir düğüm
              içerisinden erişilebilir hale getirir.
            </strong>
          </p>
        </div>
      </div>
      <div>
        <p>
          <strong>Api</strong>
        </p>
      </div>
    </div>
  );
}

export default Context;
