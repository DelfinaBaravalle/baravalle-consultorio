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

      <h1>Especialidades</h1>

      <div className="especialidades-grid">
        {especialidades.map((item, index) => (
          <div className="especialidad-card" key={index}>
            <div className="especialidad-card-inner">
              <div className="especialidad-front">
                <p>{item.nombre}</p>
              </div>
              <div className="especialidad-back">
                <p>{item.descripcion}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* TEXTO ABAJO COMO SECCIÓN */}
      <section className="seccion-bienvenida">
        <div className="texto-bienvenida">
          <h2>Tu sonrisa, en manos de expertos</h2>
          <p>
            En Consultorios Baravalle contamos con un equipo de profesionales
            comprometidos con tu bienestar bucal. Brindamos tratamientos
            personalizados y tecnología de última generación para que cada
            visita sea una experiencia confortable y efectiva.
          </p>
        </div>
      </section>

    </div>
  );
}