import { Link } from 'react-router-dom';
import menuItems from '../data/menuItems';

function Home() {
  return (
    <section className="home-page">
      <section className="hero-banner">
        <div className="hero-text">
          <p>Os melhores frangos fritos para delivery!</p>
          <p>Aproveite nossas opções</p>
          <p>Ofertas especiais no combo que cabe no seu dia!</p>
          <Link to="/cardapio" className="button-link">
            Ver Cardápio
          </Link>
        </div>
      </section>

      <section className="destaque">
        <h3>Mais pedidos</h3>
        <div className="featured-grid">
          {menuItems.slice(0, 3).map((item) => (
            <Link key={item.name} to="/cardapio" className="featured-link">
              <article className="featured-card">
                <img src={item.images[0]} alt={item.name} />
                <h4>{item.name}</h4>
                <p>{item.slogan}</p>
                <p>{item.price}</p>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <section className="hero-banner secondary">
        <div className="hero-text">
          <p>Entre em contato para mais informações e realizar seu pedido</p>
          <p>Já estamos nos aplicativos de delivery favoritos</p>
          <Link to="/fale-conosco" className="button-link">
            Fale Conosco
          </Link>
        </div>
      </section>
    </section>
  );
}

export default Home;
