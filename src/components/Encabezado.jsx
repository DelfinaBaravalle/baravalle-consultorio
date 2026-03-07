import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/images/logoBaravalle.jpg';
import './Encabezado.css';

export default function Encabezado() {
  return (
    <header className="header-fijo">
      <nav className="nav-bar">
        <div className="logo-titulo">
          <Link to="/">
            <img src={logo} alt="Logo Baravalle" className="logoBaravalle" />
          </Link>
        </div>

        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => isActive ? "activo" : ""}>
            INICIO
          </NavLink>
          <NavLink to="/especialidades" className={({ isActive }) => isActive ? "activo" : ""}>
            ESPECIALIDADES
          </NavLink>
          <NavLink to="/contacto" className={({ isActive }) => isActive ? "activo" : ""}>
            CONTACTO
          </NavLink>
          <NavLink to="/obras-sociales" className={({ isActive }) => isActive ? "activo" : ""}>
            OBRAS SOCIALES
          </NavLink>
        </div>
      </nav>
    </header>
  );
}