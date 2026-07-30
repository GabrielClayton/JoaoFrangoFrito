import logo from '../assets/joaofrango.png';

function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src={logo} alt="João Frango Frito" />
        </div>
        <nav className="footer-nav">
          <a href="/sobre">Sobre nós</a>
        </nav>
        <p>&copy; 2026-27 João Frango Frito. Todos os direitos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;
