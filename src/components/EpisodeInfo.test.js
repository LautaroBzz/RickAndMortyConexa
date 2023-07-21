import React from 'react';
import { render, screen } from '@testing-library/react';
import EpisodeInfo from './EpisodeInfo';

describe('EpisodeInfo', () => {
  test('renders episodes correctly', () => {
    const mockEpisodes = [
      {
        id: 1,
        episode: 'S01E01',
        name: 'Pilot',
        air_date: 'December 2, 2013',
      },
      {
        id: 2,
        episode: 'S01E02',
        name: 'Lawnmower Dog',
        air_date: 'December 9, 2013',
      },
    ];

    render(<EpisodeInfo episodes={mockEpisodes} noResultText="No episodes found" />);

    // Check if episodes are rendered
    const episodeItems = screen.getAllByTestId('episode-item');
    expect(episodeItems).toHaveLength(2);

    // Check episode information
    const firstEpisode = episodeItems[0];
    expect(firstEpisode).toHaveTextContent('S01E01');
    expect(firstEpisode).toHaveTextContent('Pilot');
    expect(firstEpisode).toHaveTextContent('Air Date: December 2, 2013');

    const secondEpisode = episodeItems[1];
    expect(secondEpisode).toHaveTextContent('S01E02');
    expect(secondEpisode).toHaveTextContent('Lawnmower Dog');
    expect(secondEpisode).toHaveTextContent('Air Date: December 9, 2013');
  });

  test('renders noResultText when there are no episodes', () => {
    render(<EpisodeInfo episodes={[]} noResultText="No episodes found" />);

    const noResultTextElement = screen.getByText('No episodes found');
    expect(noResultTextElement).toBeInTheDocument();
  });
});
