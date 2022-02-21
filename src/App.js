import './App.css';
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";

import ironhackLogo from "./images/ironhack-logo-xs.png";
import topMenu from "./images/menu-top-xs.png";

function App() {
  return (
    <div className="App">
      <div className="main-section">
        <header>
          <img id="logo" src={ironhackLogo} alt="Logo"/>
          <img src={topMenu} alt="Menu"/>
        </header>
        <div>
          <h1>Say hello to ReactJS</h1>
          <h5>You will learn how to use the most popular frontend library and become a super Ninja developer</h5>
          <button>Awesome!</button>
        </div>
      </div>
      <div className="overview">
        <div className="card">
          <img src={icon1} alt="Declarative"/>
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className="card">
          <img src={icon2} alt="Components"/>
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className="card">
          <img src={icon3} alt="Single-Way"/>
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the components.</p>
        </div>
        <div className="card">
          <img src={icon4} alt="JSX"/>
          <h3>JSX</h3>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
