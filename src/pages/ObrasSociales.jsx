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
];

export default function ObrasSociales() {
  return (
    <div className="obras-page">
      <h1>Obras Sociales</h1>
      <div className="grilla-obras">
        {obras.map((obra, index) => (
          <a
            href={obra.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="logo-obra"
          >
            <img src={obra.logo} alt={obra.nombre} />
          </a>
        ))}
      </div>

      {/* Botón de WhatsApp */}
      <div className="obras-footer">
        <a
          href="https://wa.me/5493512177711?text=Hola%21%20Quer%C3%ADa%20consultar%20si%20atienden%20por%20la%20obra%20social%20...."
          target="_blank"
          rel="noopener noreferrer"
          className="btn-wpp"
        >
          Consultar por más obras sociales
        </a>
      </div>
    </div>
  );
}
