import "./NavBar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav className="flex justify-between px-20 py-2 bg-gray-800 text-slate-50">
        <div className=" cursor-pointer">
          <Link to={`/`}>
            <img
              src="/src/assets/images/logo-pc-parts.png"
              alt="Logo"
              className="h-[65px]"
            />
          </Link>
        </div>
        <div className="text-lg flex justify-center space-x-8 my-auto font-light">
          <div className="cursor-pointer hover-naranja">
            <Link to={`/`}>
              <i className="bi bi-house"></i> INICIO
            </Link>
          </div>
          <div className="cursor-pointer hover-naranja">
            <Link to={`/category/Periferico`}>
              <i className="bi bi-mouse"></i> PERIFERICOS
            </Link>
          </div>
          <div className="cursor-pointer hover-naranja">
            <Link to={`/category/Procesador`}>
              <i className="bi bi-cpu"></i> PROCESADORES
            </Link>
          </div>
          <div className="cursor-pointer hover-naranja">
            <Link to={`/category/Disco_Duro`}>
              <i className="bi bi-hdd"></i> ALMACENAMIENTO
            </Link>
          </div>
          <div className="cursor-pointer hover-naranja">
            <Link to={`/category/Memoria_RAM`}>
              <i className="bi bi-memory"></i> MEMORIAS
            </Link>
          </div>
          <div className="cursor-pointer hover-naranja">
            <Link to={`/category/Tarjeta_Grafica`}>
              <i className="bi bi-controller"></i> GRÁFICAS
            </Link>
          </div>
          <div className="cursor-pointer hover-naranja">
            <Link to={`/category/Monitor`}>
              <i className="bi bi-display"></i> MONITORES
            </Link>
          </div>
        </div>
        <div>
          <CartWidget />
        </div>
      </nav>
    </>
  );
}
