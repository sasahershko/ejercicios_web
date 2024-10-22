import './App.css';
import ListaMascotas from './components/ListaMascotas';
import { useState, useEffect } from 'react';
import Filtro from './components/Filtro';

export default function App() {
 
  const [mascotas, setMascotas] = useState([]);

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

  return (
    <div>
      <h1>¡Adopta a un amigo peludo!</h1>
      <ListaMascotas mascotas={mascotas} setMascotas={setMascotas}/>
    </div>
  );
}
