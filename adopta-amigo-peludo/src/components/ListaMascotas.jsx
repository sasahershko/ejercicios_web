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


  const mascotasFiltradas = mascotas.filter((mascota) => {
    return (
      (filtro.tipo === '' || mascota.tipo === filtro.tipo) &&
      (filtro.estado === '' || mascota.estado === filtro.estado) &&
      (filtro.sexo === '' || mascota.sexo === filtro.sexo) 
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
            />
          ))
        ) : (
          <p>No hay mascotas que coincidan con los filtros seleccionados.</p>
        )}
      </div>
    </div>
  );
}
