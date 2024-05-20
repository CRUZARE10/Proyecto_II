
import { Link } from 'react-router-dom';


export const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Inicio</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
      <li className="nav-item">
          <Link className="nav-link" to="/Menu">Menú</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Productos">Productos</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Testimonios">Testimonios</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Nosotros">Nosotros</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
} 

