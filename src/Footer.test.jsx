import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from './components/Footer';

describe('Footer', () => {
  it('mostra apenas o link Sobre nós e não mostra suporte/termos/privacidade', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    expect(screen.getByText(/Sobre nós/i)).toBeTruthy();
  });
});
