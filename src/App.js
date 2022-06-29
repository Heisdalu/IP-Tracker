import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ShowMap from "./components/ShowMap/ShowMap";

const App = () => {
  return (
    <div className="main">
      <Header />
      <ShowMap />
    </div>
  );
};

export default App;
