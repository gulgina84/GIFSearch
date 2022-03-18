import NoResults from './NoResults';

const SearchResults = ({ results, adjacentWords, searchTerm, setSearchTerm }) => {

  console.log("results-----------", results, "adjacentWords----------", adjacentWords, "searchTerm-------", searchTerm)

  const adjacentWordSuggestion = () => {
    return adjacentWords.length > 0 && results.length ?
    <>
      See More {adjacentWords.map(word =>
        <span
          key={word.score}
          className="suggestWord"
          onClick={() => {setSearchTerm(word.word)}}
        >
            {word.word}
        </span>)}
    </> :
    <></>
  }

  return (
    <>
     <div className="suggestWords">
       {adjacentWordSuggestion()}
    </div>
    {
       results && results.length === 3 ?
    <ul data-testid="searchResult">
      {results.map((item =>
        <li
        key={item.id}
        >
          <img
            src={item.images.downsized.url}
            alt={item.title}
            className='card'
            data-testid="gifCard"
          />
        </li>

      ))}
    </ul>
    : !adjacentWords.length && searchTerm ?
    <NoResults /> : null
    }
    </>
)
}

export default SearchResults;