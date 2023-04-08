import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Favoritos from '../../pages/Favoritos';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

const mockStore = configureStore([]);

describe('Favoritos', () => {
  it('renders the heading', () => {
    const store = mockStore({
      pokemons: {
        loading: false,
      },
    });
    render(
      <Provider store={store}>
        <Favoritos />
      </Provider>
    );
    const headingElement = screen.getByText('Favoritos');
    expect(headingElement).toBeInTheDocument();
  });

  it('renders the "Não há pokemons favoritos" message when there are no favorites', () => {
    const store = mockStore({
      pokemons: {
        loading: false,
      },
    });
    render(
      <Provider store={store}>
        <Favoritos />
      </Provider>
    );
    const messageElement = screen.getByText('Não há pokemons favoritos');
    expect(messageElement).toBeInTheDocument();
  });

  it('renders the favorite pokemons', () => {
    const store = mockStore({
      pokemons: {
        loading: false,
      },
    });
    const favourites = [
      {
        name: 'pikachu',
        url: 'https://pokeapi.co/api/v2/pokemon/25/',
      },
      {
        name: 'charizard',
        url: 'https://pokeapi.co/api/v2/pokemon/6/',
      },
    ];
    localStorage.setItem('favorites', JSON.stringify(favourites));
    render(
      <Provider store={store}>
        <Favoritos />
      </Provider>
    );
    const pikachuElement = screen.getByText('pikachu');
    const charizardElement = screen.getByText('charizard');
    expect(pikachuElement).toBeInTheDocument();
    expect(charizardElement).toBeInTheDocument();
  });
});
