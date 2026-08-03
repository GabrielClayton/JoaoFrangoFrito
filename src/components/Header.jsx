import { NavLink } from 'react-router-dom';
import logo from '../assets/joaofrango.png';

function Header() {
  return (
    <header className="site-header" role="banner">
      <div className="container header-inner">
        <div className="logo">
          <img src={logo} alt="João Frango Frito logo" />
        </div>
        <div className="brand">
          <p>João Frango Frito</p>
          <nav className="site-nav" aria-label="Main navigation">
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/cardapio">Cardápio</NavLink>
            <NavLink to="/sobre">Sobre Nós</NavLink>
            <NavLink to="/fale-conosco">Fale Conosco</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
