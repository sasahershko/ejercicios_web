import '../styles/tarjeta.css'

export default function Tarjeta({nombre, imagen, tipo, edad, genero, onClick}){

    return(
        <div className="tarjetas-container" onClick={onClick}>
            <h1>{nombre}</h1>
            <img src={imagen} alt={`Imagen de ${nombre}`} />
            <p>{tipo}</p>
            <p>{edad}</p>
            <p>{genero}</p>
        </div>
    )
}