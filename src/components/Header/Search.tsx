import './Search.scss';
import IconSearch from '/src/assets/icons/search.svg?react';
import Input from '../ui/Input/Input';
import { useMoviesBySearch } from '../../hooks/useMoviesBySearch';
import { useCallback, useState } from 'react';
import SearchResults from './SearchResults';

const Search = () => {
  const { movies, isFetching, setSearchRequest } = useMoviesBySearch();
  const [inputText, setInputText] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleInput = useCallback((value: string) => {
    setInputText(value);
    setSearchRequest(value);
    setShowResults(value.length > 0);
  }, [])

  const onClickMovie = useCallback(() => {
    setInputText('');
    setSearchRequest(undefined);
    setShowResults(false);
  }, [])

  return (
    <div className='search'>
      <Input dark
        type='search'
        name='search'
        placeholder='Поиск'
        icon={<IconSearch width={24} height={24} aria-hidden={true} />}
        value={inputText}
        onInput={handleInput}
      />
      {showResults && <SearchResults movies={movies} isFetching={isFetching} onClickMovie={onClickMovie} />}
    </div>
  )
}

export default Search;