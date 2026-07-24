import logo from '../assets/joaofrango.png';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src={logo} alt="João Frango Frito" />
        </div>
        <nav className="footer-nav">
          <a href="#about">Sobre nós</a>
          <a href="#support">Suporte ao cliente</a>
          <a href="#terms">Termos de uso</a>
          <a href="#privacy">Políticas de privacidade</a>
        </nav>
        <p>&copy; 2026-27 João Frango Frito. Todos os direitos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;
