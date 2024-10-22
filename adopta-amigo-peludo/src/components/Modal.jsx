import { useState } from 'react';
import FormularioSolicitud from '../components/FormularioSolicitud.jsx';
import '../styles/modal.css';

export default function Modal({ mascota, onClose, cambiarEstadoAdoptado }) {

  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const handleOnClick = () => {
    setMostrarFormulario(true); // Muestra el formulario
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
          <p>Edad: {mascota.edad}</p>
          <p>Género: {mascota.genero}</p>
          <p>Personalidad: {eliminarTextoConP(mascota.desc_personalidad)}</p>
          <p>Descripción adicional: {eliminarTextoConP(mascota.desc_adicional)}</p>
          <p>Vacunas: {mascota.vacunas}</p>
          <p>Comuna: {mascota.comuna}</p>
        </div>

        <div className="modal-image">
          <img src={mascota.imagen} alt={mascota.nombre} />
          <button className="adopt-button" onClick={handleOnClick}>Adoptar</button>
        </div>

        {/* Mostrar el formulario con animación */}
        <div className={`formulario-container ${mostrarFormulario ? 'visible' : 'hidden'}`}>
          <FormularioSolicitud enviaData={enviaData} />
        </div>
      </div>
    </div>
  );
}
