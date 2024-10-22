import { useState, useEffect } from 'react';
import Tarjeta from '../components/Tarjeta';
import Filtro from './Filtro';
import Modal from './Modal';

export default function ListaMascotas({mascotas}) {

  const [filtro, setFiltro] = useState({
    tipo: '',
    estado: '',
    sexo: '',
    edad: '',
    color: ''
  });


  const mascotasFiltradas = mascotas.filter((mascota) => {
    return (
      (filtro.tipo === '' || mascota.tipo === filtro.tipo) &&
      (filtro.estado === '' || mascota.estado === filtro.estado) &&
      (filtro.sexo === '' || mascota.genero === filtro.sexo) &&
      (filtro.color) === '' || mascota.color === filtro.color && 
      (filtro.edad === '' || mascota.edad === filtro.edad)
    );
  });

  const [modalOpen, setModalOpen] = useState(false); 
  const [selectedMascota, setSelectedMascota] = useState(null);

  const openModal = (mascota) => {
    setSelectedMascota(mascota);
    setModalOpen(true);
    document.body.classList.add('body-no-scroll');
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedMascota(null);
    document.body.classList.remove('body-no-scroll');
  };

  return (
    <div>
            <Filtro setFiltro={setFiltro} />
      <div className="tarjeta-container-principal">
        {mascotasFiltradas.length > 0 ? (
          mascotasFiltradas.map((mascota) => (
            <Tarjeta
              key={mascota.id}
              id={mascota.id}
              nombre={mascota.nombre}
              tipo={mascota.tipo}
              edad={mascota.edad}
              imagen={mascota.imagen}
              estado={mascota.estado}
              genero={mascota.genero}
              onClick={() => openModal(mascota)}
            />
          ))
        ) : (
          <p>No hay mascotas que coincidan con los filtros seleccionados.</p>
        )}
      </div>

      {modalOpen && (
        <Modal 
          mascota={selectedMascota} 
          onClose={closeModal} 
        />
      )}

    </div>
  );
}
