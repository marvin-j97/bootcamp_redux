import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { GlobalCounterContext } from "./global_counter";
import { Counter } from "./Counter";
import { useMouse } from "./use_mouse";

function App() {
  const [count, setCount] = useState(0);
  const { x, y } = useMouse();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div>
          Mouse: {x} {y}
        </div>

        <GlobalCounterContext.Provider value={{ count, setCount }}>
          <Counter />
          <Counter />
          <Counter />
          <Counter />
          <Counter />
        </GlobalCounterContext.Provider>
      </header>
    </div>
  );
}

export default App;
