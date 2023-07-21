import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders welcome modal initially', () => {
    render(<App />);
    const welcomeModal = screen.getByTestId('welcome-modal');
    expect(welcomeModal).toBeInTheDocument();
  });

  test('closes welcome modal on close button click', () => {
    render(<App />);
    const closeButton = screen.getByTestId('close-button');
    fireEvent.click(closeButton);
    const welcomeModal = screen.queryByTestId('welcome-modal');
    expect(welcomeModal).not.toBeInTheDocument();
  });

  test('selects characters and shows EpisodesSection when both characters are selected', () => {
    render(<App />);
    const character1 = screen.getByText('Character #1');
    fireEvent.click(character1);
    const character2 = screen.getByText('Character #2');
    fireEvent.click(character2);
    const episodesSection = screen.getByTestId('episodes-section');
    expect(episodesSection).toBeInTheDocument();
  });

  test('does not show EpisodesSection when only one character is selected', () => {
    render(<App />);
    const character1 = screen.getByText('Character #1');
    fireEvent.click(character1);
    const episodesSection = screen.queryByTestId('episodes-section');
    expect(episodesSection).not.toBeInTheDocument();
  });
});
