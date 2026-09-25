import { enlaceTurnos } from '../config/contacto';
import { useEffect, useRef, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logoBaravalle.jpg';
import './Encabezado.css';

export default function Encabezado() {
  const [abierto, setAbierto] = useState(false);
  const boton = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => { setAbierto(false); }, [pathname]);

  function cerrarConEscape(event) {
    if (event.key === 'Escape' && abierto) {
      setAbierto(false);
      boton.current?.focus();
    }
  }

  return (
    <header className="header-fijo" onKeyDown={cerrarConEscape}>
      <a className="saltar-contenido" href="#contenido">Ir al contenido</a>
      <nav className="nav-bar" aria-label="Navegación principal">
        <Link to="/" className="logo-titulo" aria-label="Baravalle, inicio" onClick={() => setAbierto(false)}>
          <img src={logo} alt="Baravalle" className="logoBaravalle" />
        </Link>
        <button ref={boton} className="menu-toggle" type="button" aria-expanded={abierto} aria-controls="menu-principal" onClick={() => setAbierto(!abierto)}>
          {abierto ? 'Cerrar' : 'Menú'} <span aria-hidden="true">{abierto ? '×' : '☰'}</span>
        </button>
        <div id="menu-principal" className={`nav-links${abierto ? ' nav-links-abierto' : ''}`}>
          {[['/', 'Inicio'], ['/especialidades', 'Especialidades'], ['/obras-sociales', 'Obras sociales'], ['/contacto', 'Contacto']].map(([ruta, texto]) => (
            <NavLink key={ruta} to={ruta} end={ruta === '/'} onClick={() => setAbierto(false)} className={({ isActive }) => isActive ? 'activo' : ''}>{texto}</NavLink>
          ))}
          <a className="nav-turno" href={enlaceTurnos} target="_blank" rel="noopener noreferrer">Solicitar turno <span aria-hidden="true">↗</span></a>
        </div>
      </nav>
    </header>
  );
}
