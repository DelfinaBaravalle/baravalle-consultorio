import { useState } from 'react';
import { enlaceWhatsApp } from '../config/contacto';
// src/pages/ObrasSociales.jsx
import './ObrasSociales.css';

const obras = [
  {
    nombre: 'OSDE',
    logo: require('../assets/obras/osde.png'),
    link: 'https://www.osde.com.ar/',
  },
  {
    nombre: 'Swiss Medical',
    logo: require('../assets/obras/swiss.png'),
    link: 'https://www.swissmedical.com.ar/',
  },
  {
    nombre: 'Galeno',
    logo: require('../assets/obras/galeno.png'),
    link: 'https://www.galeno.com.ar/',
  },
  {
    nombre: 'Medife',
    logo: require('../assets/obras/medife.png'),
    link: 'https://www.medife.com.ar/',
  },
  {
    nombre: 'Federada Salud',
    logo: require('../assets/obras/federada.png'),
    link: 'https://www.federada.com/',
  },
  {
    nombre: 'OSMEDICA',
    logo: require('../assets/obras/osmedica.png'),
    link: 'https://www.osmedica.com.ar/',
  },
  {
    nombre: 'CPCE',
    logo: require('../assets/obras/cpce.png'),
    link: 'https://web.cpcecba.org.ar/',
  },
  {
    nombre: 'APOSS',
    logo: require('../assets/obras/apos.png'),
    link: 'https://aposlr.gob.ar/',
  },
  {
    nombre: 'AVALIAN',
    logo: require('../assets/obras/avalian.png'),
    link: 'https://www.avalian.com.ar/',
  },
  {
    nombre: 'PREVENCIÓN SALUD',
    logo: require('../assets/obras/prevencion.png'),
    link: 'https://www.prevencionsalud.com.ar/',
  },
  {
    nombre: 'CAJA DE ABOGADOS',
    logo: require('../assets/obras/cajaabogados.png'),
    link: 'https://www.caja-abogados.org.ar/',
  },
  {
    nombre: 'PRENSA',
    logo: require('../assets/obras/prensa.png'),
    link: 'https://www.prensaobrasocial.com/',
  },
  {
    nombre: 'JERARQUICOS SALUD',
    logo: require('../assets/obras/jerarquicos.png'),
    link: 'https://jerarquicos.com/',
  },
  {
    nombre: 'IOSFA',
    logo: require('../assets/obras/iosfa.png'),
    link: 'https://iosfa.gob.ar/',
  },
  {
    nombre: 'OMINT',
    logo: require('../assets/obras/omint.png'),
    link: 'https://www.omint.com.ar/',
  },
  {
    nombre: 'APROSS',
    logo: require('../assets/obras/apross.jpg'),
    link: 'https://www.apross.gov.ar/',
  },
  {
    nombre: 'MET',
    logo: require('../assets/obras/met.jpeg'),
    link: 'http://metmedicinaprivada.com/',
  },
];

function normalizar(texto) {
  return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
}

export default function ObrasSociales() {
  const [busqueda, setBusqueda] = useState('');
  const filtradas = obras.filter((obra) => normalizar(obra.nombre).includes(normalizar(busqueda)));

  return (
    <div className="obras-page">
      <header className="obras-intro">
        <p className="obras-etiqueta">TU COBERTURA</p>
        <h1>Obras sociales</h1>
        <p>Encontrá tu obra social y escribinos para consultar la cobertura de tu plan.</p>
      </header>

      <div className="obras-buscador">
        <label htmlFor="buscar-obra">Buscá tu obra social</label>
        <div className="obras-buscador-campo">
          <input id="buscar-obra" type="search" value={busqueda} onChange={(event) => setBusqueda(event.target.value)} placeholder="Por ejemplo: OSDE, Galeno o Swiss Medical" aria-describedby="obras-resultados" />
          {busqueda && <button type="button" onClick={() => setBusqueda('')}>Limpiar</button>}
        </div>
        <p id="obras-resultados" role="status" aria-live="polite">{filtradas.length === 1 ? '1 obra social encontrada' : `${filtradas.length} obras sociales encontradas`}</p>
      </div>

      {filtradas.length > 0 ? (
        <div className="grilla-obras">
          {filtradas.map((obra) => (
            <article className="obra-card" key={obra.nombre}>
              <div className="obra-logo"><img src={obra.logo} alt="" loading="lazy" width="160" height="90" /></div>
              <h2>{obra.nombre}</h2>
              <a className="obra-consulta" href={enlaceWhatsApp(`Hola, tengo ${obra.nombre} y quisiera consultar la cobertura de mi plan.`)} target="_blank" rel="noopener noreferrer" aria-label={`Consultar cobertura de ${obra.nombre}`}>Consultar cobertura <span aria-hidden="true">↗</span></a>
              <a className="obra-sitio" href={obra.link} target="_blank" rel="noopener noreferrer" aria-label={`Sitio web de ${obra.nombre}`}>Sitio de la obra social <span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>
      ) : (
        <div className="obras-sin-resultados"><h2>No encontramos esa obra social en la lista.</h2><p>Podés probar con otro nombre o escribirnos para consultar.</p></div>
      )}

      <section className="obras-ayuda" aria-labelledby="obras-ayuda-titulo">
        <div><h2 id="obras-ayuda-titulo">¿No encontrás tu obra social?</h2><p>Escribinos con el nombre de tu obra social y tu plan para consultar.</p></div>
        <a href={enlaceWhatsApp(busqueda.trim() ? `Hola, quisiera consultar si atienden por ${busqueda.trim()} y la cobertura de mi plan.` : 'Hola, quisiera consultar si atienden por mi obra social y plan.')} target="_blank" rel="noopener noreferrer">Consultar por WhatsApp <span aria-hidden="true">↗</span></a>
      </section>
    </div>
  );
}
