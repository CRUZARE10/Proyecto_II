
import {Nav} from '../nav';
import {Link} from 'react-router-dom';



export const Inicio = () => {
  return (
    <div>
      <nav>
        <Nav />
      </nav>
      <p>Realiza tu diagnóstico <Link className="nav-link" aria-current="page" to="/Formulario">Aquí</Link></p>
    </div>
  );
} 