import frangoImage from '../assets/frango1.jpg';

const menuItems = [
  {
    name: 'Combo Tradicional',
    price: 'R$ 99,99',
    description: 'Meio frango crocante, batata rústica e refrigerante 500ml.',
  },
  {
    name: 'Porção Crocante',
    price: 'R$ 79,99',
    description: 'Oito coxinhas empanadas com molho especial da casa.',
  },
  {
    name: 'Asas Apimentadas',
    price: 'R$ 69,99',
    description: 'Asinhas douradas com tempero picante e acompanhamento de molho.',
  },
  {
    name: 'Combo Família',
    price: 'R$ 139,99',
    description: 'Dois frangos inteiros, dois acompanhamentos e refrigerante 1L.',
  },
  {
    name: 'Frango Sem Osso',
    price: 'R$ 84,99',
    description: 'Pedaços sem osso e super crocantes, perfeitos para compartilhar.',
  },
];

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
            <img src={frangoImage} alt={item.name} />
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
