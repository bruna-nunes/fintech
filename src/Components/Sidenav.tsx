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
          <a href="">Resumo</a>
        </li>
        <li>
          <span>
            <img src={vendas} alt="" />
          </span>
          <a href="">Vendas</a>
        </li>
      </ul>
    </nav>
  )
}

export default Sidenav