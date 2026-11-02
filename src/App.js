import React, { useState } from "react";
import Home from "./pages/Home";
import ArrayPage from "./pages/Array";
import Contacto from "./pages/Contacto";
import "./index.css";

export default function App() {
  const [pantalla, setPantalla] = useState("home");

  return (
    <div className="pantallas">
      <nav className="nav">
        <button onClick={() => setPantalla("home")}>Inicio</button>
        <button onClick={() => setPantalla("Array")}>Servicios</button>
        <button onClick={() => setPantalla("contacto")}>Contacto</button>
      </nav>
      <div className="paginas">
        {pantalla === "home" && <Home />}
        {pantalla === "Array" && <ArrayPage />}
        {pantalla === "contacto" && <Contacto />}
      </div>
    </div>
  );
}
