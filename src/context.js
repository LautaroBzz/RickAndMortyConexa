import React, {
  useState,
  useEffect,
  createContext,
  useCallback,
  useMemo,
} from 'react';
import axios from 'axios';
import Loader from "./components/Loader";

const RickAndMortyContext = createContext();

const RickAndMortyProvider = ({ children }) => {
  const baseUrl = 'https://rickandmortyapi.com/api';

  const resources = useMemo(() => ({
    characters: 'character',
    locations: 'location',
    episodes: 'episode',
  }), []);

  const fetchData = useCallback(async (resource) => {
    const allData = [];
    let nextUrl = `${baseUrl}/${resource}`;
    while (nextUrl) {
      const response = await axios.get(nextUrl);
      const data = response.data;
      allData.push(...data.results);
      nextUrl = data.info.next;
    }
    return allData;
  }, []);

  const [allData, setAllData] = useState({
    characters: [],
    locations: [],
    episodes: [],
  });

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const dataPromises = Object.values(resources).map(
          (resource) => fetchData(resource)
        );

        const [
          charactersData, 
          locationsData, 
          episodesData
        ] = await Promise.all(dataPromises);
  
        setAllData({
          characters: charactersData,
          locations: locationsData,
          episodes: episodesData,
        });
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    };

    fetchAllData();
  }, [resources, fetchData]);

  const allDataLoaded =
    allData.characters.length > 0 &&
    allData.locations.length > 0 &&
    allData.episodes.length > 0;

  return (
    <RickAndMortyContext.Provider value={{ 
      ...allData, 
      allDataLoaded 
    }}>
      {allDataLoaded ? children : <Loader />}
    </RickAndMortyContext.Provider>
  )
};

export { RickAndMortyProvider, RickAndMortyContext };
