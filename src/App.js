import logo from "./logo.svg";
import "./App.css";

function App() {
  console.log(process.env);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{process.env.REACT_APP_SECRET}</h1>
      </header>
    </div>
  );
}

export default App;
