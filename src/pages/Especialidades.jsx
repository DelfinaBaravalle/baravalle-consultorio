import { enlaceTurnos, enlaceWhatsApp } from '../config/contacto';
// src/pages/Especialidades.jsx
import './Especialidades.css';

const especialidades = [
  {
    nombre: "Odontología General",
    descripcion: "Control, diagnóstico y tratamiento integral de la salud bucal."
  },
  {
    nombre: "Cirugía",
    descripcion: "Extracciones dentales simples y complejas, incluyendo terceros molares y quistes."
  },
  {
    nombre: "Endodoncia",
    descripcion: "Tratamiento de conducto para eliminar infecciones y conservar la pieza dental."
  },
  {
    nombre: "Rehabilitación Oral",
    descripcion: "Recuperación funcional y estética de la boca mediante diversos tratamientos."
  },
  {
    nombre: "Implantes",
    descripcion: "Colocación de implantes dentales para reemplazar piezas perdidas."
  },
  {
    nombre: "Prótesis",
    descripcion: "Reemplazo de dientes ausentes con estructuras removibles o fijas."
  },
  {
    nombre: "Periodoncia",
    descripcion: "Prevención, diagnóstico y tratamiento de enfermedades de encías y tejidos."
  },
  {
    nombre: "Ortodoncia",
    descripcion: "Corrección de malposiciones dentarias y problemas de mordida."
  }
];

export default function Especialidades() {
  return (
    <div className="especialidades-page">
      <header className="especialidades-intro">
        <p className="especialidades-etiqueta">CUIDADO INTEGRAL</p>
        <h1>Especialidades</h1>
        <p>Distintos tratamientos, una misma dedicación: cuidar tu salud bucal con atención personalizada.</p>
      </header>

      <div className="especialidades-grid">
        {especialidades.map((item, index) => (
          <article className="especialidad-card" key={item.nombre}>
            <span className="especialidad-numero" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
            <h2>{item.nombre}</h2>
            <p>{item.descripcion}</p>
            <a
              href={enlaceWhatsApp(`Hola, quisiera consultar por ${item.nombre.toLowerCase()}.`)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Consultar por ${item.nombre.toLowerCase()}`}
            >
              Consultar por este tratamiento <span aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </div>

      <section className="especialidades-orientacion" aria-labelledby="orientacion-titulo">
        <div>
          <h2 id="orientacion-titulo">¿No sabés por dónde empezar?</h2>
          <p>Coordiná una primera consulta para que podamos evaluar tu caso y orientarte.</p>
        </div>
        <a href={enlaceTurnos} target="_blank" rel="noopener noreferrer">Solicitar turno <span aria-hidden="true">↗</span></a>
      </section>
    </div>
  );
}
