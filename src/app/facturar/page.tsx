"use client"

import './App.css';
import { leerLocalStorage } from '../localStorageService';
import { useEffect, useState } from 'react';
import { comidas } from './carta';

function Page2() {

  const [facturita, setFacturita] = useState<number[]>([]);
  const [facturita1, setFacturita1] = useState<[]>([]);


  useEffect(() => {
    if (typeof window !== 'undefined') {
      setFacturita(leerLocalStorage('pepito'));
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setFacturita1(leerLocalStorage('pepiton'));
    }
  }, []);



function butacacomida () {
return comidas.map((comida, index)  => (

 
   <h4 className='pop' key={index}>{comida.titulo }<> {facturita[index]}</></h4>
    )
    
    
    );
}








  return (
    <div className="App">

      <div>{facturita}</div>
      <div>{butacacomida()}</div>
      <div className='titulito1'> BARRIO JARDIN





      </div>


    </div>
  );
}

export default Page2;
