import { SyntheticEvent } from 'react';
import './App.scss';
import DownloadIcon from './assets/icons/arrow-down-circle.svg';
import { StyledButton } from './components/button';
import logo from './logo.svg';

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

        <div
          style={{
            display: 'flex',
          }}
        >
          <StyledButton
            onButtonAction={handleButtonAction}
            $accent
            $weight={700}
          >
            Log In
          </StyledButton>
          <StyledButton
            onButtonAction={handleButtonAction}
            $accent
            $weight={700}
          >
            Sign Up
          </StyledButton>
          <StyledButton
            onButtonAction={handleButtonAction}
            $accent
            icon={DownloadIcon}
            $weight={700}
          >
            Download
          </StyledButton>
        </div>
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
