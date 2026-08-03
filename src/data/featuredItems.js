import frangoImage from '../assets/frango1.jpg';
import notAvailableImage from '../assets/no_image_available.jpg';

const featuredItems = [
  {
    name: 'Frango Crocante',
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
  },
];

export default featuredItems;
