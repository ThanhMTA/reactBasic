import Kiet from './example/myComponent';
import logo from './logo.svg';
import './App.scss';
// import Header from '../components/Header';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>

          <Kiet />

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
