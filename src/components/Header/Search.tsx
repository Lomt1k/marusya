import './Search.scss';
import IconSearch from '/src/assets/icons/search.svg?react';
import Input from '../ui/Input/Input';

const Seacrh = () => {
  const handleInput = (value: string) => {
    // TODO
  }

  return (
    <div className='search'>
      <Input dark
        type='search'
        name='search'
        placeholder='Поиск'
        icon={<IconSearch width={21} height={21} />}
        onInput={handleInput}
      />
    </div>
  )
}

export default Seacrh;