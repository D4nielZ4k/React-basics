import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Drugi from "./components/drugi";

function App() {
  let nazwisko = "nieborak";
  return (
    <div className="App">
      <div>
        <Drugi nazwisko={nazwisko} />
      </div>
    </div>
  );
}

export default App;
