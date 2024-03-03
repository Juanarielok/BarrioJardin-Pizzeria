
import Image from 'next/image' 
import './App.css';
import { leerLocalStorage } from '../localStorageService';



var facturita = leerLocalStorage<number[]>("pepito");


function Page2() {
  return (
    <div className="App">

<div>{facturita}</div>
   
<div className='titulito1'> BARRIO JARDIN





</div>


    </div>
  );
}

export default Page2;
