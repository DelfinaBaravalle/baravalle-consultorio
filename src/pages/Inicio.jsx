import './Inicio.css';
import videoFondo from '../assets/videos/fondo-video.mp4';
import whatsappIcon from '../assets/images/whatsapp-icon.png';
import mauro from '../assets/images/mauro.jpeg';
import salaespera from '../assets/images/salaespera.jpeg';

export default function Inicio() {
  return (
    <>
      <main className="inicio-hero">
        <video className="video-fondo" autoPlay loop muted playsInline>
          <source src={videoFondo} type="video/mp4" />
          Tu navegador no soporta el video.
        </video>

        <div className="hero-overlay">
          <h1>Baravalle Consultorios Odontológicos</h1>
          <p>
            Cuidamos tu sonrisa con tecnología avanzada y atención personalizada.
          </p>
          <a
            href="https://wa.me/3512680012?text=Hola%21%20Me%20gustar%C3%ADa%20agendar%20un%20turno%20en%20Baravalle%20Consultorios%20Odontol%C3%B3gicos"
            className="btn-turnos"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendá tu turno
          </a>
        </div>
      </main>

      <section className="seccion-equipo">
        <div className="odontologo">
          <img src={mauro} alt="Od. Mauro Luis Baravalle" />
          <h3>Od. Mauro Luis Baravalle</h3>
        </div>

        <div className="odontologo">
          <img src={salaespera} alt="Sala de espera" />
          <h3>Nuestra sala de espera</h3>
        </div>
      </section>

      <a
        href="https://wa.me/3512680012"
        className="btn-wpp-flotante"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={whatsappIcon} alt="WhatsApp" />
      </a>
    </>
  );
}