"use client";

import Listacomida from "./comidas";
import Image from "next/image";
import "./App.css";

function Page() {
  return (
    <div className="App">
      <div className="titulito">
        {" "}
        BARRIO JARDIN
        <Image
          className="logazo2"
          src="/pizzitas.png"
          width={120}
          height={120}
          alt="Picture of the author"
        />
        <div className="subtitulo"> PIZZA</div>
        <div className="subtitulo22"> &</div>
        <div className="subtitulo23"> Lomitos</div>
      </div>
      <div className="titulocomidas">
        {" "}
        COMIDAS
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
