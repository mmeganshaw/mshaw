import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import SectionOne from './components/SectionOne.js';
import SectionTwo from './components/SectionTwo.js';
import SectionThree from './components/SectionThree.js';
import SectionFour from './components/SectionFour.js';
import SectionFive from './components/SectionFive.js';



function App() {
  return (
    <div className="App">
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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