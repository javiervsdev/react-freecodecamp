import '../css/Contador.css';

export default function Contador({ contadorValue }) {
    return (
        <div className="contador">
            {contadorValue}
        </div>
    )
}