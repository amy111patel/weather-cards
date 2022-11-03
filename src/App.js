import React from "react";
import './App.css';
//import sunIcon from "./sun.png';"

function App() {

  return (
    <div className="container">

      <div className="weather-card">
        <div className="title-and-temprature">

          <div className="title">Indore MP(India)<br/>01:00 PM</div>
          <div className="temprature"><img src="/sun.png" alt="sun"/></div>

        </div>
        <h1>
          <span className="temp-reading">36</span><span>c</span>
        </h1>

      </div>

    </div>
  )
}

export default App;
