import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import List from '../../pages/List';

const mockStore = configureMockStore([thunk]);

describe('List component', () => {
  it('renders heading correctly', () => {
    const store = mockStore({
      pokemons: {
        pokemons: [],
        loading: false,
      },
    });
    render(
      <Provider store={store}>
        <List />
      </Provider>
    );
    const heading = screen.getByRole('heading', { name: /Lista de pokemons/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders spinner when loading is true', () => {
    const store = mockStore({
      pokemons: {
        pokemons: [],
        loading: true,
      },
    });
    render(
      <Provider store={store}>
        <List />
      </Provider>
    );
    const spinner = screen.getByRole('status');
    expect(spinner).toBeInTheDocument();
  });

  it('renders pokemons correctly', async () => {
    const pokemons = [
      { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
      { name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/' },
      { name: 'squirtle', url: 'https://pokeapi.co/api/v2/pokemon/7/' },
    ];
    const store = mockStore({
      pokemons: {
        pokemons,
        loading: false,
      },
    });
    render(
      <Provider store={store}>
        <List />
      </Provider>
    );
    const pokemonNames = await screen.findAllByTestId('pokemons-names');
    expect(pokemonNames).toHaveLength(pokemons.length);
  });
});
