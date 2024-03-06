"use client";

import Listacomida from "./comidas";
import Image from "next/image";
import "./App.scss";

function Page() {
  return (
    <div className="App carta">
      <div className="titulito">
        <p>
          BARRIO JARDIN
        </p>
        <div className="titulo-y-imagen">
          <Image
            className="logazo2"
            src="/pizzitas.png"
            width={120}
            height={120}
            alt="Picture of the author"
          />
          <div className="titulo">
            <div className="subtitulo"> PIZZA</div>
            <div className="subtitulo22"> &</div>
            <div className="subtitulo23"> Lomitos</div>
          </div>
        </div>
      </div>
      <div className="titulocomidas">
        <p>COMIDAS</p>
        <img
          className="divisor04"
          src={"/divider.png"}
          width="300"
          height="6"
          alt="divi04"
        />
      </div>
      <Listacomida />
    </div>
  );
}

export default Page;
