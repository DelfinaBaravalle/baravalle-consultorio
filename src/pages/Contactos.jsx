import FlechaExterna from '../components/FlechaExterna';
import { enlaceTurnos } from '../config/contacto';
import './Contacto.css';

const ubicacion = 'https://maps.app.goo.gl/hiEWmAyKLwKEkSN5A';

export default function Contacto() {
  return (
    <div className="contacto-page">
      <header className="contacto-intro">
        <div><p className="contacto-etiqueta">CERCA TUYO</p><h1>Contacto</h1></div>
        <p>Coordiná tu próxima visita o escribinos para resolver tus dudas.</p>
      </header>

      <div className="contacto-grid">
        <section className="contacto-datos" aria-labelledby="contacto-datos-titulo">
          <h2 id="contacto-datos-titulo">Hablemos de tu sonrisa.</h2>
          <a className="contacto-boton" href={enlaceTurnos} target="_blank" rel="noopener noreferrer">Solicitar turno por WhatsApp <FlechaExterna /></a>
          <div className="contacto-dato">
            <h3>CONSULTORIO</h3>
            <address>Gregorio Y. Gavier 1854<br />Planta Baja B · Córdoba Capital</address>
          </div>
          <div className="contacto-dato">
            <h3>INSTAGRAM</h3>
            <a href="https://www.instagram.com/baravalleconsultorio/" target="_blank" rel="noopener noreferrer">@baravalleconsultorio <FlechaExterna /></a>
          </div>
        </section>

        <section className="contacto-ubicacion" aria-labelledby="contacto-mapa-titulo">
          <div className="contacto-mapa-cabecera"><h2 id="contacto-mapa-titulo">Te esperamos en Córdoba.</h2></div>
          <iframe
            className="contacto-mapa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.5669783965573!2d-64.23990972400615!3d-31.370926494055958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943299880a7cbc95%3A0xab773532a6aafaec!2sBARAVALLE%20CONSULTORIO%20ODONTOLOGICO%20ESPECIALIZADO!5e0!3m2!1ses-419!2sar!4v1764774431715!5m2!1ses-419!2sar"
            loading="lazy"
            title="Mapa de ubicación de Baravalle Consultorios Odontológicos"
            allowFullScreen
          />
          <div className="contacto-mapa-pie"><p>Gregorio Y. Gavier 1854 · Planta Baja B</p><a href={ubicacion} target="_blank" rel="noopener noreferrer">Cómo llegar <FlechaExterna /></a></div>
        </section>
      </div>

      <section className="contacto-visita" aria-labelledby="contacto-visita-titulo">
        <p className="contacto-etiqueta">TU PRÓXIMA VISITA</p>
        <h2 id="contacto-visita-titulo">Empezamos con una conversación.</h2>
        <p>Contanos el motivo de tu consulta. Si tenés obra social, indicá cuál es y el nombre de tu plan para que podamos orientarte.</p>
      </section>
    </div>
  );
}
