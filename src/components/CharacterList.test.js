import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CharacterList from './CharacterList';
import { RickAndMortyProvider } from '../hooks/useRickAndMortyContext';

const mockCharacters = [
  {
    id: 1,
    name: 'Rick Sanchez',
    species: 'Human',
    status: 'Alive',
    image: 'rick_sanchez.jpg',
  },
  {
    id: 2,
    name: 'Morty Smith',
    species: 'Human',
    status: 'Alive',
    image: 'morty_smith.jpg',
  },
];

jest.mock('../hooks/useRickAndMortyContext', () => ({
  useRickAndMortyContext: () => ({
    characters: mockCharacters,
    allDataLoaded: true,
  }),
}));

describe('CharacterList', () => {
  test('renders the characters correctly', () => {
    render(
      <RickAndMortyProvider>
        <CharacterList onSelectCharacter={() => {}} />
      </RickAndMortyProvider>
    );

    // Check if characters are rendered
    const characterNames = screen.getAllByTestId('character-name');
    expect(characterNames[0].textContent).toBe('Rick Sanchez');
    expect(characterNames[1].textContent).toBe('Morty Smith');

    // Check if click event works
    fireEvent.click(characterNames[0]);
    fireEvent.click(characterNames[1]);
  });
});
