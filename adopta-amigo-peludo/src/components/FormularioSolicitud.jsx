import {useState} from 'react';

export default function FormularioSolicitud({enviaData}){

    //vacunado esterilizado
    const [data, setData] = useState({
        nombre: '',
        correo: '',
        telefono: '',
        mensaje: ''
    });

    const [formularioEnviado, setFormularioEnviado] = useState(false);


    const handleOnSubmit = (e) =>{
        e.preventDefault(); //previene que la página se recarge
        enviaData(data);
        setFormularioEnviado(true);
    }

    return (
        <div>
          {!formularioEnviado ? (
            <form onSubmit={handleOnSubmit}>
              <h2>Formulario de solicitud</h2>
              <input
                type="text"
                placeholder="Nombre"
                value={data.nombre}
                onChange={(e) => setData({ ...data, nombre: e.target.value })}
                required
              />
              <input
                type="email"
                placeholder="Correo"
                value={data.correo}
                onChange={(e) => setData({ ...data, correo: e.target.value })}
                required
              />
              <input
                type="tel"
                placeholder="Teléfono"
                value={data.telefono}
                onChange={(e) => setData({ ...data, telefono: e.target.value })}
                required
              />
              <textarea
                placeholder="Mensaje"
                value={data.mensaje}
                onChange={(e) => setData({ ...data, mensaje: e.target.value })}
              />
              <button type="submit">Enviar</button>
            </form>
          ) : (
            <div className="form-enviado">
              <div className="tick-animacion">&#10003;</div> 
              <p>Formulario enviado con éxito!</p>
            </div>
          )}
        </div>
      );
    
}
