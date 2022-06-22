import './App.css';
import logo from './images/logo-calculator.png';
import Header from "./components/Header";
import Calculator from "./components/Calculator";

function App() {
  return (
    <div className="App">
      <Header logo={logo} title="Calculator"/>
      <Calculator />
    </div>
  );
}

export default App;