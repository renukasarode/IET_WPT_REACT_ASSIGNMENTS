import logo from './logo.svg';
import './App.css';
import FromViewToComp from './componentClass';
import DynamicCalc from './DynamicCalc';
import FactorialDyno from './FactorialDyno'
import UserDetails from './UserDetails';
import RadioEventHandler from './RadioEventHandling'
import Counter from './Counter';
import Table from './Table';
import UserData from './acceptData';
import LoadDataOnClick from './LoadDataOnClick';
import PasswordGenerator from './passwordGenerator';
// import ErrorBoundary from './errorBoundry';
import Counter1 from './Counter1';
import DemoCallBack from './demoWithoutCallback';
import DemoWithCallBack from './demoWithCallback';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
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
        <>
        {/* <Counter></Counter> */}
        {/* <PasswordGenerator></PasswordGenerator>
        <Counter1></Counter1> */}
        {/* <DemoCallBack></DemoCallBack> */}
        <DemoWithCallBack></DemoWithCallBack>
        </>
        {/* <div className="container"> */}
        {/* <Table ></Table></div>
        <UserData></UserData>
        <LoadDataOnClick />
       <FromViewToComp data="success"></FromViewToComp>
       <DynamicCalc num1="12" num2="12"></DynamicCalc>
       <FactorialDyno></FactorialDyno>
       <RadioEventHandler></RadioEventHandler>
       <UserDetails></UserDetails> */}
       {/* <axiosget></axiosget> */}

      
      {/* </header> */}
    </div>
  );
}

export default App;
