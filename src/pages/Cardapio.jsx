import MenuCarousel from '../components/MenuCarousel';
import menuItems from '../data/menuItems';

function Cardapio() {
  return (
    <section className="cardapio-page">
      <div className="page-header">
        <h2>Cardápio</h2>
        <p>Escolha entre nossas opções de frango frito, porções e combos.</p>
      </div>
      <div className="menu-grid">
        {menuItems.map((item) => (
          <article key={item.name} className="menu-item">
            <MenuCarousel images={item.images} altText={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <span>{item.price}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Cardapio;
