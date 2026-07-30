import { describe, it, expect, beforeAll } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import MenuItemsCarousel from './MenuItemsCarousel';

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }),
  });
});

describe('MenuItemsCarousel', () => {
  it('renderiza um card por prato e permite trocar entre imagens do mesmo item', () => {
    const items = [
      {
        name: 'Combo 1',
        price: 'R$ 10',
        description: 'Descrição 1',
        images: ['combo-1.jpg', 'combo-1-alt.jpg'],
      },
      {
        name: 'Combo 2',
        price: 'R$ 20',
        description: 'Descrição 2',
        images: ['combo-2.jpg'],
      },
      {
        name: 'Combo 3',
        price: 'R$ 30',
        description: 'Descrição 3',
        images: ['combo-3.jpg'],
      },
      {
        name: 'Combo 4',
        price: 'R$ 40',
        description: 'Descrição 4',
        images: ['combo-4.jpg'],
      },
      {
        name: 'Combo 5',
        price: 'R$ 50',
        description: 'Descrição 5',
        images: ['combo-5.jpg'],
      },
    ];

    const { container } = render(<MenuItemsCarousel items={items} />);
    const cards = container.querySelectorAll('.menu-item-card');

    expect(cards).toHaveLength(items.length);
    expect(container.textContent).toContain('Combo 1');
    expect(container.textContent).toContain('Combo 5');

    const firstCard = cards[0];
    const mainImage = firstCard.querySelector('.menu-item-card__main-image');
    const thumbnailButtons = firstCard.querySelectorAll('.image-selector__button');

    expect(mainImage?.getAttribute('src')).toBe('combo-1.jpg');
    expect(thumbnailButtons.length).toBe(2);

    fireEvent.click(thumbnailButtons[1]);
    expect(mainImage?.getAttribute('src')).toBe('combo-1-alt.jpg');
  });
});
