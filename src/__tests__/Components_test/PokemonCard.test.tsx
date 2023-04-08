import { render, screen, fireEvent } from '@testing-library/react';
import PokemonCard from '@components/PokemonCard';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

describe('PokemonCard component', () => {
  const pokemon = {
    name: 'Charizard',
    url: 'https://pokeapi.co/api/v2/pokemon/6/',
  };

  it('should render the pokemon name', () => {
    render(<PokemonCard pokemon={pokemon} liked={false} setLiked={() => {}} />);
    const pokemonName = screen.getByText('Charizard');
    expect(pokemonName).toBeInTheDocument();
  });

  it('should render the View more link', () => {
    render(<PokemonCard pokemon={pokemon} liked={false} setLiked={() => {}} />);
    const viewMoreLink = screen.getByTestId('link');
    expect(viewMoreLink).toBeInTheDocument();
    expect(viewMoreLink).toHaveAttribute('href', pokemon.url);
  });

  it('should toggle the liked state when heart icon is clicked', () => {
    const setLiked = jest.fn();
    render(<PokemonCard pokemon={pokemon} liked={false} setLiked={setLiked} />);
    const heartIcon = screen.getByTestId('heart-icon');

    fireEvent.click(heartIcon);

    expect(setLiked).toHaveBeenCalledTimes(1);
  });
});
