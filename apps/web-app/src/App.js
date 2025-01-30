import { add } from '@monorepo/utils';
import logo from './logo.svg';
import './App.css';

function App() {

  const result = add(2, 3);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Addition of 2 and 3 is <h1> {result}</h1>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
