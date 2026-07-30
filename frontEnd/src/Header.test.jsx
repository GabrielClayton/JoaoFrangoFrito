import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './components/Header';

describe('Header', () => {
  it('renderiza o header com marca e navegação', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByText(/João Frango Frito/i)).toBeTruthy();
    expect(screen.getByText(/Home/i)).toBeTruthy();
    expect(screen.getByText(/Cardápio/i)).toBeTruthy();
    expect(screen.getByText(/Sobre Nós/i)).toBeTruthy();
    expect(screen.getByText(/Fale Conosco/i)).toBeTruthy();
  });
});
