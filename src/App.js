import './App.css';
import Testimonio from './components/Testimonio';
import testimonios from './data/TestimonioContent';


function App() {

    return (
        <div className="App">
            <div className="contenedor-principal">
                <h1>Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp:</h1>
                {
                    testimonios.map(({nombre, pais, imagen, cargo, empresa, testimonio}) => {
                        return (
                            <Testimonio
                                key={imagen}
                                nombre={nombre}
                                pais={pais}
                                imagen={imagen}
                                cargo={cargo}
                                empresa={empresa}
                                testimonio={testimonio}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default App;
