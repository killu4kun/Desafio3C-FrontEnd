import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Routes from '../routes/index.routes';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

describe('Routes', () => {
  it('renders home page by default', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes />
      </MemoryRouter>
    );
    const homeElement = screen.getByText(/Home/i);
    expect(homeElement).toBeInTheDocument();
  });

  it('renders list page', () => {
    const pokemons = [
      { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
      { name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/' },
      { name: 'squirtle', url: 'https://pokeapi.co/api/v2/pokemon/7/' },
    ];
    const store = configureStore({
      reducer: {
        pokemons: () => ({
          pokemons,
          loading: false,
        }),
      },
      middleware: [],
    });
    store.dispatch = jest.fn();
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/list']}>
          <Routes />
        </MemoryRouter>
      </Provider>
    );
    const listElement = screen.getByText(/Lista de pokemons/i);
    expect(listElement).toBeInTheDocument();
  });

  it('renders favorites page', () => {
    const pokemons = [
      { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
      { name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/' },
      { name: 'squirtle', url: 'https://pokeapi.co/api/v2/pokemon/7/' },
    ];
    const store = configureStore({
      reducer: {
        pokemons: () => ({
          pokemons,
          loading: false,
        }),
      },
      middleware: [],
    });
    store.dispatch = jest.fn();
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/favorites']}>
          <Routes />
        </MemoryRouter>
      </Provider>
    );
    const favouritesElemente = screen.getByText(/Não há pokemons favoritos/i);
    expect(favouritesElemente).toBeInTheDocument();
  });
});
