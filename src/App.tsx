import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {" "}
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>insurance-form</h1>
      <div className="card">
        <div className="card flex-column gap">
          <h2>Dane właścicieli:</h2>
          <label className="input">
            Imię:
            <input type="text" />
          </label>
          <label className="input">
            Nazwisko:
            <input type="text" />
          </label>
          <label className="input">
            PESEL:
            <input type="text" />
          </label>
          <label className="input">
            Ulica:
            <input type="text" />
          </label>
          <label className="input">
            Kod-pocztowy:
            <input type="text" />
          </label>
          <label className="input-between">
            Współwłaściciel ?:
            <input type="checkbox" />
          </label>
        </div>
        <button onClick={() => setCount((count) => count + 1)}>Poprzedni</button>
        <button onClick={() => setCount((count) => count + 1)}>Następny</button>
        <p>
          <code>2023 insurance-form</code>
        </p>
      </div>
      <p className="read-the-docs">Learn more</p>
    </>
  );
}

export default App;
