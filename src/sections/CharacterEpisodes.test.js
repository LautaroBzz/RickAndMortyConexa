import React from 'react';
import { render, screen } from '@testing-library/react';
import CharacterEpisodes from './CharacterEpisodes';

describe('CharacterEpisodes', () => {
  const mockEpisodes = [
    {
      id: 1,
      episode: 'S01E01',
      name: 'Pilot',
      air_date: 'December 2, 2013',
      url: 'https://rickandmortyapi.com/api/episodes/1',
    },
  ];

  test('renders episodes correctly', () => {
    const selectedCharacter = {
      name: 'Rick Sanchez',
      episode: [mockEpisodes[0].url],
    };
    const number = 1;
    const noResultText = "No episodes, Morty! We're in a TV-less reality here...";

    render(
      <CharacterEpisodes
        selectedCharacter={selectedCharacter}
        number={number}
        noResultText={noResultText}
      />
    );

    // Check if episodes are rendered
    const episodeItems = screen.getAllByTestId('episode-item');
    expect(episodeItems).toHaveLength(1);

    // Check episode information
    const firstEpisode = episodeItems[0];
    expect(firstEpisode).toHaveTextContent('S01E01');
    expect(firstEpisode).toHaveTextContent('Pilot');
    expect(firstEpisode).toHaveTextContent('Air Date: December 2, 2013');
  });

  test('renders noResultText when there are no episodes', () => {
    const selectedCharacter = {
      name: 'Morty Smith',
      episode: [],
    };
    const number = 2;
    const noResultText = "Geez, Rick! No episodes for this character, you know?";

    render(
      <CharacterEpisodes
        selectedCharacter={selectedCharacter}
        number={number}
        noResultText={noResultText}
      />
    );

    const noResultTextElement = screen.getByText(noResultText);
    expect(noResultTextElement).toBeInTheDocument();
  });
});
