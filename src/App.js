
import { useEffect, useState } from 'react';
import './App.css';
import { SongList } from './components/SongList';

function App() {

  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const API_KEY = "7ae4ff775c4512c4fa3cec05de128eda";
  const myUrl = "https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&api_key=7ae4ff775c4512c4fa3cec05de128eda&artist=cher&format=json";

  const getSongs = (url) => {
    fetch(url)
      .then( (response) => response.json())
      .then( (data) => setSongs(data.toptracks.track))
      .catch( (err) => console.log(err.message))
  }

  useEffect( () => {
    getSongs(myUrl);
    setIsLoading(false);
  }, [])

  return (
    <div>
      {isLoading ? <p>Loading...</p> : <SongList songs={songs}/>}
    </div>
  );
}

export default App;
