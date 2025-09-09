import { NavLink } from 'react-router-dom';
import FintechSVG from '../assets/FintechSVG';
import resumo from '../assets/icons/resumo.svg';
import vendas from '../assets/icons/vendas.svg';

function Sidenav() {
  return (
    <nav className="sidenav box bg-3">
      <FintechSVG title="Fintech Logo" />
      <ul>
        <li>
          <span>
            <img src={resumo} alt="" />
          </span>
          <NavLink to="/">Resumo</NavLink>
        </li>
        <li>
          <span>
            <img src={vendas} alt="" />
          </span>
          <NavLink to="/vendas">Vendas</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Sidenav