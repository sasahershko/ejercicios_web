import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import ListaMascotas from './components/ListaMascotas';
import Filtro from './components/Filtro';

function App() {

  return (
    <div className="App">
      <h1>¡Adopta un amigo peludo!</h1>
      <ListaMascotas />
    </div>
  );
}

export default App;
