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
    description: `500g de frango crocante; Porção P de batata frita; Molho e refrigerante de 350ml.`,
    price: 'R$ ??,??',
    images: [comboIndividual || notAvailableImage]
  },
  {
    name: 'Combo Casal',
    description: '1kg de frango crocante; Porção M de batata frita; 2 Molhos e 1 Bebida grande.',
    price: 'R$ ??,??',
    images: [comboCasal || notAvailableImage]
  },
  {
    name: 'Combo Família',
    description: '1,5kg de frango crocante; Porção G de batata frita; 4 Molhos e 1 Bebida grande.',
    price: 'R$ ??,??',
    images: [comboFamilia || notAvailableImage],
  },
  {
    name: 'Coxinha da Asa',
    description: 'Pedaços super crocantes, perfeitos para compartilhar.',
    price: 'R$ ??,??',
    images: [coxinhaDaAsa || notAvailableImage],
  },
  {
    name: 'Filé de Peito',
    description: 'Pedaços suculentos e crocantes de filé de peito.',
    price: 'R$ ??,??',
    images: [cortePeito || notAvailableImage],
  },
  {
    name: 'Sobre Coxa',
    description: 'Pedaços de sobre coxa, ideais para qualquer refeição.',
    price: 'R$ ??,??',
    images: [sobreCoxa || notAvailableImage],
  },
  {
    name: 'Filé tipo sassami',
    description: 'Pedaços suculentos e crocantes do corte Sassami.',
    price: 'R$ ??,??',
    images: [corteSassami || notAvailableImage],
  }
];

export default menuItems;
