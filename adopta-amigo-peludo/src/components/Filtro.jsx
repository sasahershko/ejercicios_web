import { useState } from 'react';
import '../styles/filtro.css';

// Filtrar mascota por tipo, estado, edad, sexo, etc.
export default function Filtro({ setFiltro }) {
  const [tipo, setTipo] = useState('');
  const [estado, setEstado] = useState('');
  const [sexo, setSexo] = useState('');
  const [edad, setEdad] = useState();
  const [unidad, setUnidad] = useState(''); 
  const [color, setColor] = useState('');

  // Función para aplicar el filtro
  const filtrar = () => {
    let edadEnMeses;
    if (unidad === 'año') {
      edadEnMeses = parseInt(edad) * 12; //convertir años a meses
    } else {
      edadEnMeses = parseInt(edad); //mantener los meses
    }

    setFiltro({
      tipo: tipo,
      estado: estado,
      sexo: sexo,
      edad: edadEnMeses,
      color: color
    });
  };

  return (
    <div className="filtro-container">
      <select onChange={(e) => setTipo(e.target.value)}>
        <option value="">Tipo</option>
        <option value="Perro">Perro</option>
        <option value="Gato">Gato</option>
        <option value="Conejo">Conejo</option>
      </select>

      <select onChange={(e) => setEstado(e.target.value)}>
        <option value="">Estado</option>
        <option value="adopcion">En adopción</option>
        <option value="adoptado">Adoptado</option>
      </select>

      <select onChange={(e) => setSexo(e.target.value)}>
        <option value="">Sexo</option>
        <option value="macho">Macho</option>
        <option value="hembra">Hembra</option>
      </select>

      <select value={color} onChange={(e) => setColor(e.target.value)}>
        <option value="">Color</option>
        <option value="#F65B2A">Naranja</option>
        <option value="#9370DB">Violeta</option>
        <option value="#FFD700">Dorado</option>
      </select>

      <input 
        type="number" 
        placeholder={unidad === 'año' ? 'Ingresa el número de años' : 'Ingresa el número de meses'} 
        value={edad} 
        onChange={(e) => setEdad(e.target.value)} 
        min="0"
      />


      <select onChange={(e) => setUnidad(e.target.value)} value={unidad}>
        <option value="año">Años</option>
        <option value="mes">Meses</option>
      </select>

      <button onClick={filtrar}>FILTRA</button>
    </div>
  );
}
