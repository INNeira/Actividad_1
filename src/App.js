//Importando los componentes
import React from 'react'
import {Saludo} from './components/Saludo'


import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Saludo name={"Ignacio"} secondname={"Nicolás"} surname={"Neira"} />
  );
}

export default App;
