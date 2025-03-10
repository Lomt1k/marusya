import './SearchButton.scss';
import ButtonIcon from '../../ui/ButtonIcon/ButtonIcon';
import IconSearch from '/src/assets/icons/search.svg?react';

const SearchButton = () => {
  return (
    <ButtonIcon className='search-button'
      icon={<IconSearch width={24} height={24}/>}
      onClick={() => {}}
    />
  )
}

export default SearchButton;