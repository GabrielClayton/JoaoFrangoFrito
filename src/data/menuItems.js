import combo1 from '../assets/combo1.png';
import combo2 from '../assets/combo2.png';
import combo3 from '../assets/combo3.png';
import notAvailableImage from '../assets/no_image_available.jpg';


const menuItems = [
  {
    name: 'Combo Individual',
    description: `500g de frango crocante; Porção P de batata frita; Molho e refrigerante de 350ml.`,
    price: 'R$ ??,??',
    images: [combo1 || notAvailableImage],
  },
  {
    name: 'Combo Casal',
    description: '1kg de frango crocante; Porção M de batata frita; 2 Molhos e 1 Bebida grande.',
    price: 'R$ ??,??',
    images: [combo2 || notAvailableImage],
  },
  {
    name: 'Combo Família',
    description: '1,5kg de frango crocante; Porção G de batata frita; 4 Molhos e 1 Bebidas grandes.',
    price: 'R$ ??,??',
    images: [combo3 || notAvailableImage],
  }
];

export default menuItems;
