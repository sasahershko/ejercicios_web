import { useState } from 'react';
import FormularioSolicitud from '../components/FormularioSolicitud.jsx';
import '../styles/modal.css';

export default function Modal({ mascota, onClose, cambiarEstadoAdoptado }) {

  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const handleOnClick = () => {
    if(mascota.estado === 'adoptado'){
      console.log('NO');
    }else{
      setMostrarFormulario(true); // Muestra el formulario  
    }
  };

  const enviaData = (data) => {
    console.log('Datos enviados:', data);
    cambiarEstadoAdoptado(mascota.id);
  };

  const eliminarTextoConP = (stringP) =>{
    return stringP.replace(/<p>/g, '').replace(/<\/p>/g, '');
  }

  return (
    <div className="modal-overlay">
      <div className={`modal-content ${mostrarFormulario ? 'expand' : ''}`}>
        <button className="close-button" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 50 50">
            <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
          </svg>
        </button>

        <div className="modal-info">
          <h2>{mascota.nombre}</h2>
          <p><strong>Edad:</strong> {mascota.edad}</p>
          <p><strong>Género:</strong> {mascota.genero}</p>
          <p><strong>Personalidad:</strong> {eliminarTextoConP(mascota.desc_personalidad)}</p>
          <p><strong>Descripción adicional:</strong> {eliminarTextoConP(mascota.desc_adicional)}</p>
          <p><strong>Vacunas:</strong> {mascota.vacunas}</p>
          <p><strong>Comuna:</strong> {mascota.comuna}</p>
        </div>

        <div className="modal-image">
          <img src={mascota.imagen} alt={mascota.nombre} />
          <button className={`adopt-button ${mascota.estado==='adoptado' ? 'disabled' : ''}`} onClick={handleOnClick} >{mascota.estado === 'adoptado' ? 'Ya adoptado' : 'Adoptar'}</button>
        </div>

        
        <div className={`formulario-container ${mostrarFormulario ? 'visible' : 'hidden'}`}>
          <FormularioSolicitud enviaData={enviaData} />
        </div>
      </div>
    </div>
  );
}
