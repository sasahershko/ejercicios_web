import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import ListaMascotas from './components/ListaMascotas';
import Filtro from './components/Filtro';

export default function App() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div>
      <ListaMascotas />
    </div>
  );
}
