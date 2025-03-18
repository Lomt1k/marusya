import IconSearch from '/src/assets/icons/search.svg?react';
import IconCancel from '/src/assets/icons/cancel.svg?react';
import { useMoviesBySearch } from '../../hooks/useMoviesBySearch';
import { useCallback, useState } from 'react';
import SearchResults from './SearchResults';
import ButtonIcon from '../ui/ButtonIcon/ButtonIcon';
import './Search.scss';

const Search = () => {
  const { movies, isFetching, setSearchRequest } = useMoviesBySearch();
  const [showResults, setShowResults] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleInput = (value: string) => {
    setInputValue(value);
    setSearchRequest(value);
    setShowResults(value.length > 0);
  }

  const handleReset = () => {
    setInputValue('');
    setSearchRequest(undefined);
    setShowResults(false);
  }

  const onClickMovie = useCallback(() => {
    setInputValue('');
    setSearchRequest(undefined);
    setShowResults(false);
  }, []);

  return (
    <div className='search'>
      <input
        className='search__field'
        type='search'
        placeholder='Поиск'
        value={inputValue}
        onInput={(e) => handleInput(e.currentTarget.value)}
      />
      <span className='search__icon'>{<IconSearch aria-hidden={true} />}</span>
      {inputValue &&
        <ButtonIcon
          className='search__reset-btn'
          icon={<IconCancel aria-hidden={true} />}
          onClick={handleReset}
          ariaLabel='Сбросить поиск' />
      }
      {showResults && <SearchResults movies={movies} isFetching={isFetching} onClickMovie={onClickMovie} />}
    </div>
  )
}

export default Search;