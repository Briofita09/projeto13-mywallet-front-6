import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import './App.css';
import "./style.css";
import Corpo from "./Corpo";
import Cadastro from "./Cadastro";
import Inicio from "./Inicio";
import Entrada from "./Entrada";
import Saida from "./Saida";
export default  function App() {
  const [token,setToken] =useState(['','']);
  return (
    <div >
      <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Corpo token={token} setToken={setToken} />} /> 
        <Route path="/cadastrar" element={<Cadastro />} />
        <Route path="/Inicio" element={<Inicio token={token} setToken={setToken}/>} />
        <Route path="/Entrada" element={<Entrada />} />
        <Route path="/Saida" element={<Saida />} />
      </Routes>
      </BrowserRouter>
    </div>
   
  );
  
}