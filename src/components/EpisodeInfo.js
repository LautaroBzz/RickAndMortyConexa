import React from 'react';

const EpisodeInfo = ({ episodes, noResultText }) => {
  return (
    <div className='character-episodes-container'>
        {episodes?.length > 0 ? (
          <ul className='episode-list'>
            {episodes?.map((episode) => (
              <li key={episode.id} className='episode-item'>
                <div className='episode-info'>
                  <strong>{episode.episode}</strong>
                </div>
                <div className='episode-info'>{episode.name}</div>
                <div className='episode-info'>
                  <strong>Air Date:</strong> {episode.air_date}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>{noResultText}</p>
        )}
      </div>
  )
};

export default EpisodeInfo;