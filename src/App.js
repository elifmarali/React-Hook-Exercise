import "./App.css";
import State from "./components/State";
import State2 from "./components/State2";
import State3 from "./components/State3-kutuphane";
import Effect from "./components/Effect";
import Effect2 from "./components/Effect2";
import Effect3 from "./components/Effect3";
function App() {
  return (
    <div className="App">
      <Effect3></Effect3>
      <State />
      <State2 />
      <State3 />
      <Effect></Effect>
      <Effect2></Effect2>
    </div>
  );
}

export default App;
