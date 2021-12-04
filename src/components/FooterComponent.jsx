import React from "react";
import LogoImg from "../assets/img/logo.jpg";

function FooterComponent() {
  return (
    <div className="bg-dark px-3">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
        <p className="col-md-4 mb-0 text-muted">
          &copy; Parque Botánico Panamá
        </p>

        <a
          href="/"
          className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <img src={LogoImg} style={{borderRadius: '50%', width: 60}} />
        </a>

        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              Vivero
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              Consevación
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              Contacto
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default FooterComponent;
