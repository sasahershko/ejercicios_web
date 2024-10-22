import '../styles/tarjeta.css'

export default function Tarjeta({nombre, imagen, edad, genero, onClick}){

    return(
        <div className="tarjetas-container" onClick={onClick}>
            <h1>{nombre}</h1>
            <img src={imagen} alt={`Imagen de ${nombre}`} />
            <p>{edad}</p>
            <p className={`genero ${genero === 'macho' ? 'macho' : 'hembra'}`}>{genero}</p>
        </div>
    )
}