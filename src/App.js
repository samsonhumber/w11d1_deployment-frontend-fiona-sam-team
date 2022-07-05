import logo from './logo.svg';
import './App.css';
import NetlifyForm from './netlifyForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and {process.env.REACT_APP_WELCOME} {process.env.REACT_APP_SUBTITLE}
        </p>
      <NetlifyForm/>
      </header>
    </div>
  );
}

export default App;
