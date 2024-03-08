"use client";

import "./App.scss";
import calcularTotalPedido from "./utilidades/calcularTotalPedido";
import { leerLocalStorage } from "../localStorageService";
import { useEffect, useState } from "react";
import { comidas } from "./carta";
import PedidoConfirmado from "./pedido-confirmado";

function Page2() {
  const [facturita, setFacturita] = useState<number[]>([]);
  const [botonClicado, setBotonClicado] = useState<string | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [direccion, setDireccion] = useState('');
  const [numero, setNumero] = useState('');
  const [numeroa, setNumeroa] = useState('');
  const [labelText, setLabelText] = useState('');
  const handleIngresar = () => {
    // Aquí puedes manejar la lógica de ingreso para el botón DEBITO
    console.log('Ingresar datos para DEBITO');
  };

  const handleIrAMercadoPago = () => {
    // Aquí puedes manejar la redirección a Mercado Pago
    window.location.href = 'URL_DE_TU_PAGINA_DE_MERCADO_PAGO';
  }

  

  const [pedidoConfirmado, setPedidoConfirmado] = useState<boolean>(false);


  const generarNumeroAleatorio = () => {
    const nuevoNumero = "00" + (Math.floor(Math.random() * 900000) + 100000);

    const letrasAleatorias = String.fromCharCode(65 + Math.floor(Math.random() * 26)) +
                       String.fromCharCode(65 + Math.floor(Math.random() * 26)) +
                       String.fromCharCode(65 + Math.floor(Math.random() * 26));
    const nuevoNumeroConLetras = letrasAleatorias + nuevoNumero.toString() ;
    setNumeroa(nuevoNumeroConLetras);
  };
  

  useEffect(() => {
    if (pedidoConfirmado) {
      generarNumeroAleatorio();
    }
  }, [pedidoConfirmado]);



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
        <tr>
          <td className="pop" key={index}>
            {titulo}
          </td>

          <td className="pop2 pop" key={index}>
            {" "}
            x {facturita[index]}{" "}
          </td>

          <td className="pop1" key={index}>
            {" "}
            $ {facturita[index] * precio}{" "}
          </td>
        </tr>
      ));
  }

  function handleClick(arg0: string): void {
    throw new Error("Function not implemented.");
  }

  const confirmarPedido = () => {
    setPedidoConfirmado(true);
  };

  return (
    <div className="App facturar">
      <div className="titulito1">
        {" "}
        <p>BARRIO JARDIN</p>
        <img src="divider.png" className="barra-divisora22" />
        <div className="detalles">
          <table className="tabla-detalles">
            {butacacomida()}
          </table>
        </div>
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

      {!pedidoConfirmado && (<section className="datos-pedido-sin-confirmar">
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


{botonClicado === 'DEBITO' && (
        <div>
          {/* Agrega los 4 inputs para DEBITO */}
          <input type="text" placeholder="Input 1" />
          <input type="text" placeholder="Input 2" />
          <input type="text" placeholder="Input 3" />
          <input type="text" placeholder="Input 4" />
          
          {/* Botón para ingresar los datos */}
          <button onClick={handleIngresar}>Ingresar</button>
        </div>
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

        <button onClick={confirmarPedido}>
          CONFIRMAR ENVIO
        </button>
      </section>)}
      {pedidoConfirmado && (
        <section className="info-pedido-confirmado">

          <PedidoConfirmado  direccion={direccion + numero}
                            numero={ numeroa}
                            detalles={labelText}
                            metodo={botonClicado ?? ''}
                              total= { calcularTotalPedido(facturita)}>



                            </PedidoConfirmado>
        </section>
      )}

    </div>
  );
}

export default Page2;
