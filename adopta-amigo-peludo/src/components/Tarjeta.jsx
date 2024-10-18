import '../styles/tarjeta.css'
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function Tarjeta(props){

    return(
        // <div class="tarjetas-container">
        //     <h1>{props.nombre}</h1>
        //     <img src={props.imagen} alt={`Imagen de ${props.nombre}`} />
        //     <p>{props.tipo}</p>
        //     <p>{props.edad}</p>
        // </div>
        
        <div className="tarjetas-container">
            <h1>{props.nombre}</h1> 
            <Image alt={`Imagen de ${props.nombre}`}  className="object-cover rounded-xl" src={props.imagen || "https://via.placeholder.com/270"}   />
            <p className="edad">Edad: {props.edad}</p> 
            <p className="estado">Estado: {props.estado}</p>

      </div>
    )
}