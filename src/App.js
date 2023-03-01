import "./App.css";
import React, { useState } from "react";
import State from "./components/State";
import State2 from "./components/State2";
import State3 from "./components/State3-kutuphane";
import Effect from "./components/Effect";
import Effect2 from "./components/Effect2";
import Effect3 from "./components/Effect3";
import Context from "./components/Context";
const themes = {
  dark: { background: "#383838", color: "#fff" },
  light: { background: "#fff", color: "#000" },
};
//1. Adim = Context olustur
export const ThemeContext = React.createContext(themes.light);
//2. Adim = theme i saglayan bir provider olustur
//3. Adim = constume edicez
function App() {
  const [theme, setTheme] = useState(themes.dark);
  const toogleTheme = () => {
    if (theme === themes.dark) {
      setTheme(themes.light);
    } else {
      setTheme(themes.dark);
    }
  };
  return (
    <div className="App">
      <div>
        <button style={{ width: "90px" }} onClick={toogleTheme}>
          {theme === themes.dark ? "Dark Theme" : "Light Theme"}
        </button>
        <ThemeContext.Provider value={theme}>
          <Context></Context>
        </ThemeContext.Provider>
      </div>
      {/*      <State />
      <State2 />
      <State3 />
      <Effect></Effect>
      <Effect2></Effect2>
      <Effect3></Effect3> */}
    </div>
  );
}

export default App;
