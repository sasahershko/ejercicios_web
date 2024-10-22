import {useState} from 'react';

export default function FormularioSolicitud({enviaData}){

    //vacunado esterilizado
    const [data, setData] = useState({
        nombre: '',
        correo: '',
        telefono: '',
        mensaje: ''
    });

    const handleOnClick = () =>{
        enviaData(data);
    }

    return(
        <div>
            <h2>Formulario de solicitud</h2>
            <input 
                type="text" 
                placeholder="Nombre" 
                value={data.nombre} 
                onChange={(e) => setData({...data, nombre: e.target.value})} 
            />
            <input 
                type="email" 
                placeholder="Correo" 
                value={data.correo} 
                onChange={(e) => setData({...data, correo: e.target.value})} 
            />
            <input 
                type="tel" 
                placeholder="Teléfono" 
                value={data.telefono} 
                onChange={(e) => setData({...data, telefono: e.target.value})} 
            />
            <textarea 
                placeholder="Mensaje" 
                value={data.mensaje} 
                onChange={(e) => setData({...data, mensaje: e.target.value})} 
            />
            <button onClick={handleOnClick}>Enviar</button>
        </div>

    )
    
}
