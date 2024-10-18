import { useState, useEffect } from 'react';
import Tarjeta from '../components/Tarjeta';
import Filtro from './Filtro';

export default function ListaMascotas() {
  const [mascotas, setMascotas] = useState([]);
  const [filtro, setFiltro] = useState({
    tipo: '',
    estado: '',
    sexo: '',
    edad: '',
  });


  //estado del modal
  const [modalOpen, setIsModalOpen] = useState(false);
  const [selectedMascota, setSelectedMascota] = useState(null);

  // Función para descargar las mascotas de la API
  async function downloadMascotas() {
    try {
      const response = await fetch('https://huachitos.cl/api/animales');
      const result = await response.json();
      setMascotas(result.data); 
    } catch (e) {
      console.log('Error al descargar las mascotas: ' + e.message);
    }
  }


  useEffect(() => {
    downloadMascotas();
  }, []);

  const abreModal = (mascota) =>{
    setSelectedMascota(mascota);
    setIsModalOpen(true);
  };

  const cierraModal = () =>{
    setIsModalOpen(false);
  };


  const mascotasFiltradas = mascotas.filter((mascota) => {
    return (
      (filtro.tipo === '' || mascota.tipo === filtro.tipo) &&
      (filtro.estado === '' || mascota.estado === filtro.estado) &&
      (filtro.sexo === '' || mascota.genero === filtro.sexo) 
    );
  });

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
            />
          ))
        ) : (
          <p>No hay mascotas que coincidan con los filtros seleccionados.</p>
        )}
      </div>

      <Modal open={modalOpen} close={closeModal}>

        
      </Modal>
    </div>
  );
}
