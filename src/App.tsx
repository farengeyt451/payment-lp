import React, { SyntheticEvent } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Button } from './components/button';
function App() {
  function handleButtonAction(e: SyntheticEvent) {
    console.log(e);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button onButtonAction={handleButtonAction}></Button>
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
