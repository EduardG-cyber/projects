import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import Header from './componenents/Header'
import CharacterContainer from './componenents/CharacterContainer'
import SearchBar from './componenents/SearchBar';


function App() {
  const [actors, setActors] = useState([]);
  const [isLogging, setIsLogging] = useState(true);
  const [value, setValue] = useState('');
  
  useEffect(() => {
    const apiKey = null; // the key for making a request to the api
    const tvID = 60574; //  peaky blinders id
    const baseUrl = `https://api.themoviedb.org/3/tv/${tvID}/credits?api_key=${apiKey}`;

    function parseData({id, character, gender, name, profile_path}) {
      return {id, character, gender: (gender === 2 ? 'Male' : 'Female'),
              name, profile_img: `https://image.tmdb.org/t/p/w500/${profile_path}`};
    }

    async function getPeakyBlinders(tvID) {
      const serial = await axios.get(baseUrl);
      const actors = serial.data.cast.map(parseData);
      console.log(actors);
      setActors(actors);
      setIsLogging(false);
    }

    getPeakyBlinders(tvID);
  }, []);

  function handleInputChange(newValue) {
    setValue(newValue);
  }

  return (
    <div>
      <Header/>
      <SearchBar value={value} onInputChange={handleInputChange}/>
      {isLogging ? ("Logging....") : <CharacterContainer actors={actors} value={value}/>}
    </div>
  );
}

export default App;
