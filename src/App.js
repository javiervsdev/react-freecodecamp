import './App.css';
import logo from './images/logo-calculator.png';
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header logo={logo} title="Calculator"/>
      <div className="calculator-container">

      </div>
    </div>
  );
}

export default App;