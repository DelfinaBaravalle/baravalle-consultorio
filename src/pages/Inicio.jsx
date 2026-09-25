import { enlaceTurnos, enlaceWhatsApp } from '../config/contacto';
import { Link } from 'react-router-dom';
import './Inicio.css';
import mauro from '../assets/images/mauro.jpeg';
import camila from '../assets/images/camila.jpeg';

const turno = enlaceTurnos;
const tratamientos = [
  ['01', 'Odontología general', 'Control, diagnóstico y cuidado integral de tu salud bucal.'],
  ['02', 'Ortodoncia', 'Tratamientos para mejorar la posición de los dientes y la mordida.'],
  ['03', 'Implantes y rehabilitación', 'Opciones para recuperar la función y la estética de tu sonrisa.'],
];

export default function Inicio() {
  return (
    <div className="inicio">
      <section className="inicio-hero" aria-labelledby="titulo-inicio">
        <div className="hero-texto">
          <p className="inicio-etiqueta">BARAVALLE · ODONTOLOGÍA EN CÓRDOBA</p>
          <h1 id="titulo-inicio">Tu sonrisa merece<br /><em>un cuidado personal.</em></h1>
          <p className="hero-descripcion">Un espacio para escucharte, acompañarte y cuidar tu salud bucal. Conocé a los profesionales detrás de tu sonrisa.</p>
          <div className="inicio-acciones">
            <a href={turno} className="inicio-boton" target="_blank" rel="noopener noreferrer">Solicitar turno <span aria-hidden="true">↗</span></a>
            <a href="#equipo" className="inicio-enlace">Conocé al equipo <span aria-hidden="true">↓</span></a>
          </div>
          <p className="hero-direccion">Gregorio Y. Gavier 1854 · Córdoba Capital</p>
        </div>
      </section>

      <section className="inicio-seccion inicio-tratamientos" aria-labelledby="titulo-tratamientos">
        <div className="inicio-seccion-cabecera">
          <div><p className="inicio-etiqueta">CUIDADO INTEGRAL</p><h2 id="titulo-tratamientos">Cada sonrisa, un tratamiento.</h2></div>
          <Link to="/especialidades" className="inicio-enlace">Todas las especialidades <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="inicio-tratamientos-grid">
          {tratamientos.map(([numero, nombre, descripcion]) => (
            <article className="inicio-tratamiento" key={numero}>
              <span className="tratamiento-numero" aria-hidden="true">{numero}</span>
              <h3>{nombre}</h3><p>{descripcion}</p>
              <a className="inicio-enlace" href={enlaceWhatsApp(`Hola, quisiera consultar por ${nombre.toLowerCase()}.`)} target="_blank" rel="noopener noreferrer" aria-label={`Consultar por ${nombre.toLowerCase()}`}>Consultar <span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>
      </section>

      <section id="equipo" className="inicio-seccion inicio-equipo" aria-labelledby="titulo-equipo">
        <div className="equipo-presentacion"><p className="inicio-etiqueta">CONOCEN TU SONRISA</p><h2 id="titulo-equipo">Profesionales.<br />Personas cercanas.</h2><p>Somos Mauro y Camila Baravalle. Te acompañamos con atención personalizada, desde la primera consulta y en cada etapa de tu tratamiento.</p><Link className="inicio-enlace" to="/contacto">Conocé dónde atendemos <span aria-hidden="true">↗</span></Link></div>
        <div className="inicio-profesionales">
          {[['Od. Mauro Luis Baravalle', mauro], ['Od. Camila Baravalle', camila]].map(([nombre, foto]) => (
            <figure className="inicio-profesional" key={nombre}><img src={foto} alt={nombre} loading="lazy" width="280" height="340" /><figcaption><h3>{nombre}</h3><p>Odontología</p></figcaption></figure>
          ))}
        </div>
      </section>

      <section className="inicio-cobertura" aria-labelledby="titulo-cobertura"><div><p className="inicio-etiqueta">OBRAS SOCIALES</p><h2 id="titulo-cobertura">Consultá por tu cobertura.</h2><p>Conocé las obras sociales con las que trabajamos y consultanos por tu plan.</p></div><Link className="inicio-boton inicio-boton-claro" to="/obras-sociales">Ver obras sociales <span aria-hidden="true">↗</span></Link></section>
      <section className="inicio-cierre"><p className="inicio-etiqueta">ESTAMOS PARA ACOMPAÑARTE</p><h2>El primer paso es una consulta.</h2><p>Escribinos para coordinar tu visita al consultorio.</p><a href={turno} className="inicio-boton" target="_blank" rel="noopener noreferrer">Solicitar turno por WhatsApp <span aria-hidden="true">↗</span></a></section>
    </div>
  );
}
