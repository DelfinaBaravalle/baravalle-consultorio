import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Encabezado from "./components/Encabezado";
import PiePagina from "./components/PiePagina";

import Inicio from "./pages/Inicio";
import Especialidades from "./pages/Especialidades";
import Contactos from "./pages/Contactos";
import ObrasSociales from "./pages/ObrasSociales";

import "./App.css";

function App() {
  return (
    <Router>
      <Encabezado />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/especialidades" element={<Especialidades />} />
          <Route path="/contacto" element={<Contactos />} />
          <Route path="/obras-sociales" element={<ObrasSociales />} />
        </Routes>
      </main>

      <PiePagina />
    </Router>
  );
}

export default App;