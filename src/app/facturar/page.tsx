"use client"

import './App.css';
import { leerLocalStorage } from '../localStorageService';
import { useEffect, useState } from 'react';

function Page2() {

  const [facturita, setFacturita] = useState<number[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setFacturita(leerLocalStorage('pepito'));
    }
  }, []);

  return (
    <div className="App">

      <div>{facturita}</div>

      <div className='titulito1'> BARRIO JARDIN





      </div>


    </div>
  );
}

export default Page2;
