import React, { useState } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

function GifListContainer() {
  //To initialize the gifs state
  const [gifs, setGifs] = useState([]);

  function handleSearch(query) {
    const apiKey = 'p7fd4qz7eLoT5GGIcFkqj4AKGGkNOFdO';
    const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&rating=g&limit=3`;//Image display set to maximum of 3
    
    //Fetch the GIFs from the API
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => 
      setGifs(data.data))
      .catch((error) => console.error('Error fetching GIFs:', error));
  }

  return (
    <div>
      <GifSearch onSubmit={handleSearch} />
      <GifList gifs={gifs} />
    </div>
  );
}

export default GifListContainer;