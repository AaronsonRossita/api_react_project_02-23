
import { useEffect, useState } from 'react';
import './App.css';
import { SongList } from './components/SongList';

function App() {

  console.log("app is rendered")

  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [artist, setArtist] = useState("");
  const [isFetch, setIsFetch] = useState(true);

  const LAST_FM_API_KEY = "7ae4ff775c4512c4fa3cec05de128eda";
  const LAST_FM_METHOD_TOP_TRACKS = "artist.gettoptracks";
  const LAST_FM_FORMAT_JSON = "json";
  const LAST_FM_ARTIST = artist;

  const baseUrl = new URL("https://ws.audioscrobbler.com/2.0/");
  const params = {
    api_key: LAST_FM_API_KEY,
    method: LAST_FM_METHOD_TOP_TRACKS,
    format: LAST_FM_FORMAT_JSON,
    artist: LAST_FM_ARTIST
  }
  
  for (let key in params){
    baseUrl.searchParams.append(key,params[key]);
  }
  
  const fetchSongs = () => {
    fetch(baseUrl)
      .then( (res) => res.json())
      .then( (data) => setSongs(data.toptracks.track))
      .catch( (err) => console.log(err.message))
  }

  useEffect( () => {
    fetchSongs();
    setIsLoading(false);
    setArtist("");
  },[isFetch])

  const handleClick = () => {
    setIsFetch(!isFetch);
  }

  const handleChange = (event) => {
    setArtist(event.target.value)
  }

  return (
    <div>
      <input type='text' onChange={handleChange} value={artist}/>
      <br></br>
      <button onClick={handleClick}>Fetch</button>
      {isLoading ? <p>Loading...</p> : songs.length == 0 ? <p>Type artist..</p> : <SongList songs={songs}/>}
    </div>
  );
}

export default App;
