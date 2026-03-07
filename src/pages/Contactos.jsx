import React from 'react';
import './Contacto.css';
import whatsappIcon from '../assets/images/whatsapp-icon.png';
import locationIcon from '../assets/images/location-icon.png';
import instagramIcon from '../assets/images/instagram-icon.png';

export default function Contacto() {
  return (
    <div className="contacto-page"> {/* ← ESTE FALTABA */}
      <div className="contacto-wrapper">
        <div className="contacto-container">

          <div className="info-box">
            <div className="info-item">
              <img src={whatsappIcon} alt="WhatsApp" />
              <div>
                <h3>WHATSAPP</h3>
                <a href="https://wa.me/5493512680012?text=Hola%21%20Me%20gustar%C3%ADa%20agendar%20un%20turno%20en%20Baravalle%20Odontolog%C3%ADa" target="_blank" rel="noopener noreferrer">
                  +54 3512680012
                </a>
              </div>
            </div>

            <div className="info-item">
              <img src={locationIcon} alt="Ubicación" />
              <div>
                <h3>UBICACIÓN</h3>
                <a
                  href="https://maps.app.goo.gl/hiEWmAyKLwKEkSN5A"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Gregorio Y. Gavier 1854 – Planta Baja B<br />
                  Córdoba Capital
                </a>
              </div>
            </div>

            <div className="info-item">
              <img src={instagramIcon} alt="Instagram" />
              <div>
                <h3>Instagram</h3>
                <a href="https://www.instagram.com/baravalleconsultorio/" target="_blank" rel="noopener noreferrer">
                  @baravalleconsultorio
                </a>
              </div>
            </div>
          </div>

          <div className="map-box">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.5669783965573!2d-64.23990972400615!3d-31.370926494055958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943299880a7cbc95%3A0xab773532a6aafaec!2sBARAVALLE%20CONSULTORIO%20ODONTOLOGICO%20ESPECIALIZADO!5e0!3m2!1ses-419!2sar!4v1764774431715!5m2!1ses-419!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              title="Ubicación de Baravalle"
            ></iframe>
          </div>

        </div>

        <a
          href="https://wa.me/3512680012?text=Hola%21%20Me%20gustar%C3%ADa%20agendar%20un%20turno%20en%20Baravalle%20Consultorios%20Odontol%C3%B3gicos"
          className="whatsapp-fixed"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={whatsappIcon} alt="WhatsApp" />
        </a>
      </div>
    </div>
  );
}