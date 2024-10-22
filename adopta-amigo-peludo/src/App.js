import './App.css';
import ListaMascotas from './components/ListaMascotas';
import { useState, useEffect } from 'react';
import Filtro from './components/Filtro';

export default function App() {
 
  const [filtro, setFiltro] = useState({
    tipo: '',
    estado: '',
    sexo: '',
    edad: '',
    color: ''
  });


  const [mascotas, setMascotas] = useState([]);

  const convertirEdadAMeses = (edadString) =>{
    const edad = edadString.toLowerCase().trim();

    if(edad.includes('cachorro')) return 12;
    //si es adulto tendrá 10 años
    if(edad.includes('adulto')) return 12*10;

    const partes = edad.split(' ');
    const numero = partes[0];

    if(partes[1].includes('año')){
      return numero*12;
    }
    else if(partes[1].includes('mes')){
      return numero;
    }
    //si no pues nada
    return 0;
  }

  const mascotasFiltradas = mascotas.filter((mascota) => {
    const edadMascotasFiltradas = convertirEdadAMeses(mascota.edad);
    return (
      (filtro.tipo === '' || mascota.tipo === filtro.tipo) &&
      (filtro.estado === '' || mascota.estado === filtro.estado) &&
      (filtro.sexo === '' || mascota.genero === filtro.sexo) &&
      (filtro.color === '' || mascota.color === filtro.color) && 
      (filtro.edad === 0 || filtro.edad === '' || edadMascotasFiltradas === filtro.edad)
    );
  }) || []; //asegura que es un array

  //CAMBIAR ESTADO A ADOPTADO
  const cambiarEstadoAdoptado = (idMascota) =>{
    const nuevasMascotas = mascotas.map((mascota) => 
      mascota.id === idMascota ? {...mascota, estado:'adoptado'} : mascota
    );

    setMascotas(nuevasMascotas);
  }

  //función para descargar las mascotas de la API
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

  return (
    <div>
      <h1>¡Adopta a un amigo peludo!</h1>
      <Filtro setFiltro={setFiltro} />
      <ListaMascotas mascotasFiltradas={mascotasFiltradas} cambiarEstadoAdoptado={cambiarEstadoAdoptado}/>
    </div>
  );
}

