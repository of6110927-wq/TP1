import React from "react";
import Formulario from "../data/Formulario";
import Mapa from "../data/mapa";
export default function Contacto() {
  return (
    <div className="contactoPagina">
      <h2>Contacto y Ubicación</h2>
      <div className="contactoColumnas">
        <div className="columnaFormulario">
          <h3>contactanos</h3>
          <Formulario />
        </div>
        <Mapa />
      </div>
    </div>
  );
}
