import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and {process.env.REACT_APP_WELCOME} {process.env.REACT_APP_SUBTITLE}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello World! We are Fiona and Sam! And we are having trouble with env variables.
        </a>
      </header>
    </div>
  );
}

export default App;
