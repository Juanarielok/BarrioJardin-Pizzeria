
"use client";
import { useState } from 'react';
import './App.css';
import { useRouter } from 'next/navigation' 
import router from 'next/router';
import Link from 'next/link';
import { escribirLocalStorage } from './localStorageService';


const Listacomida = () => {
  var preciosign = "PRECIO";
  const comidas = [
    {
      titulo: 'MUZZARELLA CLASICA GRANDE',
      subtitulo: 'Pizza clasica de muzzarella',
      imagen: './muzza1.png',
      tituloAbajo: preciosign,
      precio: '$7.000,00',
    },
    {
      titulo: 'EMPANADA DE CARNE',
      subtitulo: 'Empanadas de carne cortadas a cuchillo',
      imagen: './emp1.png',
      tituloAbajo: preciosign,
      precio: '$970,00',
    },
    {
      titulo: 'LOMITO CLASICO',
      subtitulo: 'Sanguche de lomito, con jamon, queso y pan pebete',
      imagen: './lomo1.png',
      tituloAbajo: preciosign,
      precio: '$6.000,00',
    },
  ];


  const [inputValues, setInputValues] = useState(
    comidas.map(() => 0)
  );



  const handleOrdenarClick = (index: number) => {
    setInputValues((prev: any) => {
      const updatedVisible = [...prev];
      updatedVisible[index] = 1;
      return updatedVisible;
    });

    
  }

  const handleCancelarClick = (index: number) => {
    setInputValues((prev: any) => {
      const updatedVisible = [...prev];
      updatedVisible[index] = 0;
      return updatedVisible;
    });
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = parseInt(event.target.value);
    setInputValues((prev: any) => {
      const updatedValues = [...prev];
      updatedValues[index] = isNaN(value) ? 1 : Math.max(1, value);
      return updatedValues;
    });
    
  };

  const handleIncrement = (index: number) => {
    setInputValues((prev: number[]) => {
      const updatedValues = [...prev];
      updatedValues[index] = prev[index] + 1;
      return updatedValues;
    });
  };

  const handleDecrement = (index: number) => {
    setInputValues((prev: number[]) => {
      const updatedValues = [...prev];
      updatedValues[index] = Math.max(1, prev[index] - 1);
      return updatedValues;
    });
  };

  

  function condicioncarrito () {
    for (let i = 0; i < inputValues.length; i++) {
      if (inputValues[i] > 0 ) {

return true;
      } 


    }
    return false;
  }



 escribirLocalStorage(inputValues,"pepito");









  return (
    <div className="lista-comidas">
      {comidas.map((comida, index) => (
        <div key={index} className="comida-container">
          <h2 className="comida-titulo">{comida.titulo}</h2>
          <h3 className="comida-subtitulo">{comida.subtitulo}</h3>
          <img
            className="comida-imagen"
            src={comida.imagen}
            alt={`Imagen ${index + 1}`}
            width="120"
            height="120"
          />
          <div className="comida-precio">
            <h4 className="comida-titulo-abajo">{comida.tituloAbajo}</h4>
            <p>{comida.precio}</p>

            {inputValues[index]==0 ? (
              <div>
                <button className="boti" onClick={() => handleOrdenarClick(index)}>
                  ORDENAR
                </button>
              </div>
            ) : (
              <div>
                <button className="cancelar" onClick={() => handleCancelarClick(index)}>
                  X
                </button>

                <button className="decrement" onClick={() => handleDecrement(index)}>
                  -
                </button>

                <input
                  type="number"
                  min="1"
                  value={inputValues[index]}
                  onChange={(e) => handleInputChange(e, index)}
                />

                <button className="increment" onClick={() => handleIncrement(index)}>
                  +
                </button>
              </div>
            )}

            {index < comidas.length - 1 && (
              <img
                src="divider.png"
                alt={`Barra divisora ${index + 1}`}
                className="barra-divisora"
              />
            )}
          </div>
        </div>
      ))}

    


{condicioncarrito () ? (
<Link className="enlace" href="/facturar"> 
      <button className="ir-al-carrito"> 
        IR AL CARRITO 
        ➥ 
      </button> 
      </Link>
) : (
  <></>
)
}
    </div>
  );
};

export default Listacomida;
