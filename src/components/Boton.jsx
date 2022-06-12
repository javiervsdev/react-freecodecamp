import '../css/Boton.css';

export default function Boton({texto, esBotonDeClick, clickHandler}) {
    return (
        <button
            className={
                esBotonDeClick
                    ? 'boton-click'
                    : 'boton-reiniciar'
            }
            onClick={clickHandler}>
            {texto}
        </button>
    )
}