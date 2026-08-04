import combo1 from '../assets/combo1.png';
import combo2 from '../assets/combo2.png';
import combo3 from '../assets/combo3.png';
import notAvailableImage from '../assets/no_image_available.jpg';

const featuredItems = [
  {
    name: 'Combo Individual',
    description: 'Sabor e conveniência em um combo!',
    price: 'R$ ??,??',
    image: combo1 || notAvailableImage,
  },
  {
    name: 'Combo Casal',
    description: 'Perfeito para compartilhar e multiplicar sabores!',
    price: 'R$ ??,??',
    image: combo2 || notAvailableImage,
  },
  {
    name: 'Combo Família',
    description: 'Ideal para reunir a família!',
    price: 'R$ ??,??',
    image: combo3 || notAvailableImage,
  }
];

export default featuredItems;
