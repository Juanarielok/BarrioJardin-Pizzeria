"use client";

import "./App.css";
import calcularTotalPedido from "./utilidades/calcularTotalPedido";
import { leerLocalStorage } from "../localStorageService";
import { useEffect, useState } from "react";
import { comidas } from "./carta";

function Page2() {
  const [facturita, setFacturita] = useState<number[]>([]);

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
            $ {precio}{" "}
          </h4>
        </h4>
      ));
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

      <div className="container33">
        <button className="a61"> EFECTIVO ☞ (contra entrega) </button>
        <button className="a62">DEBITO (tarjeta de debito) </button>
        <button className="a63">CONFIRMAR DOMICILIO</button>
        <button className="a64"> IMPRIMIR COMPROBANTE </button>
      </div>
    </div>
  );
}

export default Page2;
