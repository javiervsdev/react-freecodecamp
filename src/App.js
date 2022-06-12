import './App.css';
import logo from './images/click-logo.png'
import Boton from "./components/Boton";
import Contador from "./components/Contador";

function App() {

    const addClickHandler = () => {
        console.log("Click");
    }

    const resetCounterHandler = () => {
        console.log("Reiniciar");
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
                <Contador contadorValue='0' />
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
