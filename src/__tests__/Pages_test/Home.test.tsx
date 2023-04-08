import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import Home from '../../pages/Home';

describe('Home', () => {
  it('should render the page title', () => {
    render(<Home />, { wrapper: MemoryRouter });
    const pageTitle = screen.getByText('Pokemonlist');
    expect(pageTitle).toBeInTheDocument();
  });

  it('should render the welcome message', () => {
    render(<Home />, { wrapper: MemoryRouter });
    const welcomeMessage = screen.getByText(/seja bem vindo/i);
    expect(welcomeMessage).toBeInTheDocument();
  });

  it('should render the button to access the pokemon list', () => {
    render(<Home />, { wrapper: MemoryRouter });
    const pokemonListButton = screen.getByRole('button', {
      name: /lista pokemons/i,
    });
    expect(pokemonListButton).toBeInTheDocument();
  });
});
