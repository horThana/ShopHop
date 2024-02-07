
import "./App.css";
import Posts from "./Posts";

function App() {
  return (
    <div className="App">
        <header className="App-header">
        <img src="/logo.svg" className="App-logo" alt="logo" />
        <h1>React Posts Sharer</h1>
      </header>
      <Posts />
    </div>
  );
}

export default App;