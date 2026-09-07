import comboIndividual from '../assets/comboIndividual.png';
import comboCasal from '../assets/comboCasal.png';
import comboFamilia from '../assets/comboFamilia.png';

import corteSassami from '../assets/corte-sassami.png';
import cortePeito from '../assets/corte-peito.png';
import coxinhaDaAsa from '../assets/coxinha-da-asa.png';
import sobreCoxa from '../assets/sobre-coxa.png';

import notAvailableImage from '../assets/no_image_available.jpg';


const menuItems = [
  {
    name: 'Combo Individual',
    slogan: 'Sabor e conveniência em um combo!',
    description: `500g de frango crocante; Porção P de batata frita; Molho e refrigerante de 350ml.`,
    price: 60.00,
    images: [comboIndividual || notAvailableImage]
  },
  {
    name: 'Combo Casal',
    slogan: 'Perfeito para compartilhar e multiplicar sabores!',
    description: '1kg de frango crocante; Porção M de batata frita; 2 Molhos e 1 Bebida grande.',
    price: 80.00,
    images: [comboCasal || notAvailableImage]
  },
  {
    name: 'Combo Família',
    slogan: 'Ideal para reunir a família!',
    description: '1,5kg de frango crocante; Porção G de batata frita; 4 Molhos e 1 Bebida grande.',
    price: 100.00,
    images: [comboFamilia || notAvailableImage],
  },
  {
    name: 'Coxinha da Asa',
    description: 'Pedaços super crocantes, perfeitos para compartilhar.',
    price: 39.90,
    isByWeight: true,
    weight: 1.0,
    images: [coxinhaDaAsa || notAvailableImage],
  },
  {
    name: 'Filé de Peito',
    description: 'Pedaços suculentos e crocantes de filé de peito.',
    price: 39.90,
    isByWeight: true,
    weight: 1.0,
    images: [cortePeito || notAvailableImage],
  },
  {
    name: 'Sobre Coxa',
    description: 'Pedaços de sobre coxa, ideais para qualquer refeição.',
    price: 39.90,
    isByWeight: true,
    weight: 1.0,
    images: [sobreCoxa || notAvailableImage],
  },
  {
    name: 'Filé tipo sassami',
    description: 'Pedaços suculentos e crocantes do corte Sassami.',
    price: 39.90,
    isByWeight: true,
    weight: 1.0,
    images: [corteSassami || notAvailableImage],
  }
];

export default menuItems;
