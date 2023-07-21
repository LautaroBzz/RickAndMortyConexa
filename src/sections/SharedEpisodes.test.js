import React from 'react';
import { render, screen } from '@testing-library/react';
import SharedEpisodes from './SharedEpisodes';

describe('SharedEpisodes', () => {
  const mockEpisodes = [
    {
      id: 1,
      episode: 'S01E01',
      name: 'Pilot',
      air_date: 'December 2, 2013',
      url: 'https://rickandmortyapi.com/api/episodes/1',
    },
  ];

  test('renders shared episodes correctly', () => {
    const selectedCharacter1 = {
      name: 'Rick Sanchez',
      episode: [mockEpisodes[0].url],
    };
    const selectedCharacter2 = {
      name: 'Morty Smith',
      episode: [mockEpisodes[0].url],
    };
    const number = 1;
    const noResultText = "No shared episodes for these characters";

    render(
      <SharedEpisodes
        selectedCharacter1={selectedCharacter1}
        selectedCharacter2={selectedCharacter2}
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

    // Check characters' names
    const charactersShared = screen.getByText(/Rick Sanchez & Morty Smith/i);
    expect(charactersShared).toBeInTheDocument();
  });

  test('renders noResultText when there are no shared episodes', () => {
    const selectedCharacter1 = {
      name: 'Rick Sanchez',
      episode: [mockEpisodes[0].url],
    };
    const selectedCharacter2 = {
      name: 'Summer Smith',
      episode: [],
    };
    const number = 2;
    const noResultText = "No shared episodes for these characters";

    render(
      <SharedEpisodes
        selectedCharacter1={selectedCharacter1}
        selectedCharacter2={selectedCharacter2}
        number={number}
        noResultText={noResultText}
      />
    );

    const noResultTextElement = screen.getByText(noResultText);
    expect(noResultTextElement).toBeInTheDocument();
  });
});
