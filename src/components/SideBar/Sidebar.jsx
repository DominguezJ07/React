import React, { useState } from 'react';
import './Sidebar.css';

export const Sidebar = () => {
  const [active, setActive] = useState("inicio");

  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li className={active === "inicio" ? "active" : ""} onClick={() => setActive("inicio")}>
            <a href="#inicio">Inicio</a>
          </li>
          <li className={active === "servicios" ? "active" : ""} onClick={() => setActive("servicios")}>
            <a href="#servicios">Servicios</a>
          </li>
          <li className={active === "contacto" ? "active" : ""} onClick={() => setActive("contacto")}>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
