import logo from './logo.svg'; /* import for logo */
import './App.css';

function App() {
  const greeting = "Hello"
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Adies!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Adding a child element in APP</p>
        <p className="greeting">{greeting} from me</p>
      </header>
    </div>
  );
}


export default App;