import comboIndividual from '../assets/comboIndividual.png';
import comboCasal from '../assets/comboCasal.png';
import comboFamilia from '../assets/comboFamilia.png';
import notAvailableImage from '../assets/no_image_available.jpg';

const featuredItems = [
  {
    name: 'Combo Individual',
    description: 'Sabor e conveniência em um combo!',
    price: 'R$ ??,??',
    image: comboIndividual || notAvailableImage,
  },
  {
    name: 'Combo Casal',
    description: 'Perfeito para compartilhar e multiplicar sabores!',
    price: 'R$ ??,??',
    image: comboCasal || notAvailableImage,
  },
  {
    name: 'Combo Família',
    description: 'Ideal para reunir a família!',
    price: 'R$ ??,??',
    image: comboFamilia || notAvailableImage,
  }
];

export default featuredItems;
