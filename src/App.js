import logo from './junk.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Do <u>NOT</u> go to this tire place.
        </p>
        <a
          className="App-link"
          href="https://www.pepboys.com"
        >
          POOP CAR PLACE
        </a>
      </header>
    </div>
  );
}

export default App;
