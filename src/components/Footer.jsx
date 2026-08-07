import { Link } from 'react-router-dom';
import logo from '../assets/joaofrango.png';

function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src={logo} alt="João Frango Frito" />
        <nav className="footer-nav">
          <Link to="/sobre">Sobre nós</Link>
        </nav>
        <p>| &copy; 2026-27 João Frango Frito | Todos os direitos reservados | Desenvolvido por gabriel.clayton.lima@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
