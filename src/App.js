import logo from "./logo.svg";
import "./App.css";
import { Button, ButtonClass } from "./components/Button/Button";

const name = "Alex";
const className = "App-header";
function App() {
  const buttonLabel = "BUTTON";

  const handleClick = (text) => {
    alert(`Hello from btn: ${text}`);
  };

  return (
    <div className="App">
      <header className={className}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h3>HELLO {name}</h3>
        <Button onButtonClick={handleClick} title={buttonLabel} anyProp={123} />
      </header>
    </div>
  );
}

const element = <h1>REACT</h1>;

export default App;

const foo = {
  x: 1,
  y: 2,
};

console.log({ ...foo, y: 4 });
