import '../styles/tarjeta.css'

export default function Card(props){

    return(
        <div class="tarjetas-container">
            <h1>{props.nombre}</h1>
            <img src={props.imagen} alt={`Imagen de ${props.nombre}`} />
            <p>{props.tipo}</p>
            <p>{props.edad}</p>
        </div>
        
    )
}