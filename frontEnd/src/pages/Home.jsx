import { Link } from 'react-router-dom';
import frangoImage from '../assets/frango1.jpg';
import notAvailableImage from '../assets/no_image_available.jpg';

const featuredItems = [
  {
    name:'Frango Crocante',
    price: 'R$ 99,99',
    image: frangoImage || notAvailableImage,

  },
  {
    name: 'Porção Especial',
    price: 'R$ 49,99',
    image: notAvailableImage,
  },
  {
    name: 'Combo Família',
    price: 'R$ 149,99',
    image: notAvailableImage,
  },
  {
    name: 'Coxinha Dourada',
    price: 'R$ 19,99',
    image: notAvailableImage,
  },
  {
    name: 'Asas Apimentadas',
    price: 'R$ 29,99',
    image: notAvailableImage,
  }
];

function Home() {
  return (
    <section className="home-page">
      <section className="hero-banner">
        <div className="hero-text">
          <p>Os melhores frangos fritos para delivery</p>
          <p>Aproveite nossas opções</p>
          <p>Ofertas especiais a partir de R$99,99</p>
          <Link to="/cardapio" className="button-link">
            Ver Cardápio
          </Link>
        </div>
      </section>

      <section className="destaque">
        <h3>Mais pedidos</h3>
        <div className="featured-grid">
          {featuredItems.map((item) => (
            <article key={item.name} className="featured-card">
              <img src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
              <p>{item.price}</p>
            </article>
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
