import logo from './logo.svg';
import './App.css';
import FromViewToComp from './componentClass';
import DynamicCalc from './DynamicCalc';
import FactorialDyno from './FactorialDyno'
import UserDetails from './UserDetails';
import RadioEventHandler from './RadioEventHandling'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}
       <FromViewToComp data="success"></FromViewToComp>
       <DynamicCalc num1="12" num2="12"></DynamicCalc>
       <FactorialDyno></FactorialDyno>
       <RadioEventHandler></RadioEventHandler>
       <UserDetails></UserDetails>
      
      </header>
    </div>
  );
}

export default App;
