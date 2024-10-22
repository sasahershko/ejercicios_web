import {useState} from 'react';
import '../styles/modal.css';

export default function Moda({mascota, onClose}){

    const handleOnClick = () =>{
        console.log('Adoptar a ' + mascota.nombre);
    }

    return(
        <div className="modal-overlay">
            <div className="modal-content">
                <button onClick={onClose}>X</button>
                <h2>{mascota.nombre}</h2>
                <img src={mascota.imagen} alt={mascota.nombre}/>
                <p>Edad: {mascota.edad}</p>
                <p>Género: {mascota.genero}</p>
                <p>Personalidad: {mascota.desc_personalidad}</p>
                <p>Descripción adicional: {mascota.desc_adicional}</p>
                <p>Vacunas: {mascota.vacunas}</p>
                <p>Comuna: {mascota.comuna}</p>
                <button onClick={handleOnClick}>Adoptar</button>
            </div>
        </div>
    )
}