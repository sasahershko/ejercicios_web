import {useState} from 'react';
import FormularioSolicitud from '../components/FormularioSolicitud'
import '../styles/modal.css';

export default function Moda({mascota, onClose, cambiarEstadoAdoptado}){

    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    const handleOnClick = () =>{
        setMostrarFormulario(true);
    }

    const enviaData = (data) =>{
        console.log('Datos encviados' + data);

        cambiarEstadoAdoptado(mascota.id);
        //setMostrarFormulario(false);
    }

    function eliminarEtiquetasP(textoConEtiquetas){
      if(!textoConEtiquetas) return null;

      return textoConEtiquetas.replace(/<p>/g, '').replace(/<\/p>/g, ''); //con g aseguras que todas las etiquetas sean reemplazadas
    }

    return(
        <div className="modal-overlay">
            <div className="modal-content">
            {/* Contenedor izquierdo con la información del animal */}
            <div className="modal-info">
                <div className="modal-text">
                <h2>{mascota.nombre}</h2>
                <p><strong>Edad:</strong> {mascota.edad}</p>
                <p><strong>Género:</strong> {mascota.genero}</p>
                <p><strong>Personalidad:</strong> {eliminarEtiquetasP(mascota.desc_personalidad)}</p>
                <p><strong>Descripción adicional:</strong> {eliminarEtiquetasP(mascota.desc_adicional)}</p>
                <p><strong>Vacunas:</strong> {mascota.vacunas}</p>
                <p><strong>Comuna:</strong> {mascota.comuna}</p>
                </div>
                <div className="modal-image">
                <img src={mascota.imagen} alt={mascota.nombre} />
                <button className="adopt-button" onClick={handleOnClick}>Adoptar</button>
                </div>
            </div>
  
    
          {mostrarFormulario && (
            <div className="formulario-container">
              <FormularioSolicitud enviaData={enviaData} />
            </div>
          )}
  
          <button className="close-button" onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="24" height="24">
              <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
            </svg>
          </button>
        </div>
      </div>
    )
}