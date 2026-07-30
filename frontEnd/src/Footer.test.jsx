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

    // Sobre nós deve existir
    expect(screen.getByText(/Sobre nós/i)).toBeTruthy();

    // Links removidos não devem existir
    expect(screen.queryByText(/Suporte ao cliente/i)).toBeNull();
    expect(screen.queryByText(/Termos de uso/i)).toBeNull();
    expect(screen.queryByText(/Políticas de privacidade/i)).toBeNull();
  });
});
