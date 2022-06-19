import './App.css';
import logo from './images/click-logo.png'
import Boton from "./components/Boton";
import Contador from "./components/Contador";
import {useState} from "react";

function App() {

    const INITIAL_NUM_CLICKS = 0;

    const [numClicks, setNumClicks] = useState(INITIAL_NUM_CLICKS);

    const addClickHandler = () => {
        setNumClicks(numClicks + 1);
    }

    const resetCounterHandler = () => {
        setNumClicks(INITIAL_NUM_CLICKS);
    }

    return (
        <div className="App">
            <div className="logo-contenedor">
                <img className="logo"
                     src={logo}
                     alt="logo del contador" />
                <span className='logo-nombre-app'>Click-me</span>
            </div>
            <div className='contenedor-principal'>
                <Contador contadorValue={numClicks} />
                <Boton
                    texto='Click'
                    esBotonDeClick={true}
                    clickHandler={addClickHandler} />
                <Boton
                    texto='Reiniciar'
                    esBotonDeClick={false}
                    clickHandler={resetCounterHandler} />
            </div>
        </div>
    );
}

export default App;
