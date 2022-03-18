import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import Error from './Error';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [adjacentWords, setAdjacentWords] = useState([]);

  const handleUserInput = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value.replace(/\s+/g,' ').trim());
  }

 useEffect(()=> {
  setIsLoading(true);
  const debounceFn = setTimeout(() => {
    let getGifsUrl = 'http://localhost:8000';
    //more query option:
    let getAdjacentWordsUrl = `https://api.datamuse.com/words?ml=${searchTerm}&max=2`;

    let params =  { searchTerm };
    axios.all([
      axios.get(getGifsUrl, { params }),
      axios.get(getAdjacentWordsUrl),
    ])
    .then(axios.spread((data1, data2) => {
      setResults(data1.data.data);
      setAdjacentWords(data2.data);
      setIsLoading(false);
    }))
    .catch(err => {
        setIsLoading(false);
        setHasError(true);
    })

}, 800);
    return () => clearTimeout(debounceFn);
},[searchTerm])

  return (
    <div>
      <div>
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleUserInput={handleUserInput}
          />
      </div>
      <div className="searchResult">
         {isLoading ?
         <Spinner />
         :hasError ?
         <Error />
         : <SearchResults
            results={results}
            adjacentWords={adjacentWords}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
         />
         }
      </div>
   </div>

  );
}

export default SearchPage;