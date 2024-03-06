"use client";

import "./App.css";
import calcularTotalPedido from "./utilidades/calcularTotalPedido";
import { leerLocalStorage } from "../localStorageService";
import { useEffect, useState } from "react";
import { comidas } from "./carta";

function Page2() {
  const [facturita, setFacturita] = useState<number[]>([]);
  const [botonClicado, setBotonClicado] = useState<string | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [almacenarMode, setAlmacenarMode] = useState(false);
  const [direccion, setDireccion] = useState('');
  const [numero, setNumero] = useState('');
  const [labelText, setLabelText] = useState('');

  const handleAgregarEditarClick = () => {
    if (editMode) {
     
      setLabelText(`${direccion}, ${numero}`);
      setDireccion('');
      setNumero('');
    }

   
    setEditMode(!editMode);
  };
  
  
    const handleClick1 = (nombreBoton: string) => {
      setBotonClicado(nombreBoton);
    }



  

  useEffect(() => {
    if (typeof window !== "undefined") {
      setFacturita(leerLocalStorage("pepito"));
    }
  }, []);

  function butacacomida() {
    let seleccionItems: Object = leerLocalStorage("pepito");

    return comidas
      .map((comida, index) => ({ ...comida, index }))
      .filter(({ index }) => facturita[index] != 0)
      .map(({ titulo, precio, index }) => (
        <h4 className="pop" key={index}>
          {titulo}

          <h4 className="pop2" key={index}>
            {" "}
            x {facturita[index]}{" "}
          </h4>
         
          <h4 className="pop1" key={index}>
            {" "}
            $ {facturita[index]*precio}{" "}
          </h4>
        </h4>
      ));
  }

  function handleClick(arg0: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="App">
      <div className="titulito1">
        {" "}
        BARRIO JARDIN
        <img src="divider.png" className="barra-divisora22" />
        <div className="detalles">{butacacomida()}</div>
        <img src="divider1.png" className="barra-divisora23" />
        <h4 className="pop5">TOTAL: $ {calcularTotalPedido(facturita)}</h4>
      </div>

      <img src="divider.png" className="barra-divisora22" />

      <div className="containerD">
        <iframe
          className="containerDD"
          title="My HTML Content2"
          src={"led2.html"}
          style={{ overflow: "hidden" }}
        ></iframe>
      </div>

      <div className="titulitopago"> CONFIRMA EL PEDIDO </div>

      <div className="titulitometodo1"> Metodo de pago </div>

      <div className="container33">
      {botonClicado ? (
        <label>{botonClicado}</label>
      ) : (
        <>
          <button className="a61" onClick={() => handleClick1('EFECTIVO')}>
            <img src="" className="efectivo" /> EFECTIVO (contra entrega)
          </button>

          <button className="a62" onClick={() => handleClick1('DEBITO')}>
            <img src="" className="debito" /> DEBITO (tarjeta de débito)
          </button>

          <button className="a63" onClick={() => handleClick1('MERCADO PAGO')}>
            <img src="" className="mp" /> MERCADO PAGO
          </button>

          <button className="a64" onClick={() => handleClick1('UALA')}>
            <img src="" className="uala" /> UALA
          </button>
        </>
      )}

      </div>
      
      <div className="titulitometodo1"> Direccion de envio </div>
      <div>
      {editMode ? (
        <div>
       <input
            type="text"
            placeholder="Dirección"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
          />
          <input
            type="text"
            placeholder="Número"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
          />
        </div>
      ) : null}

      <button onClick={handleAgregarEditarClick}>
        {editMode && labelText ? 'Aceptar' : 'Modificar direccion'}
      </button>

      {!editMode ? <label>{labelText}</label> : null}
    </div>

    <button >
       CONFIRMAR ENVIO
      </button>
    </div>
  );
}

export default Page2;
