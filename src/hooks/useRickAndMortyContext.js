import { useContext } from 'react';
import { RickAndMortyContext } from '../context';

export const useRickAndMortyContext = () => {
  const context = useContext(RickAndMortyContext);
  if (!context) {
    throw new Error(
      'useRickAndMortyContext must be used within a RickAndMortyProvider'
    );
  }
  return context;
};
