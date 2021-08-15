import React, {useState} from 'react';
import {Spring, animated} from 'react-spring';
import DateElement from '../dateElement/dateElement';
import DropdownElement from '../dropdown/dropdownElement';

import './searchbar.scss';

interface ISearchbarProps {
  buttonText: string;
  placeholder?: string;
  onSearch: (value: string) => void;
}

const SearchBar = (props: ISearchbarProps): JSX.Element => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const [lang, setLang] = useState<string>('');
  const [sortType, setSortType] = useState<string>('');
  const [from, setFrom] = useState<string>('');
  const [to, setTo] = useState<string>('');

  const languages = [
    {key: 'ar', value: 'Arabic'},
    {key: 'de', value: 'Deutsch'},
    {key: 'en', value: 'English'},
    {key: 'es', value: 'Spain'},
    {key: 'fr', value: 'French'},
    {key: 'ru', value: 'Russian'},
  ];

  const sortBy = [
    {
      key: 'relevancy',
      value: 'relevancy',
    },
    {
      key: 'popularity',
      value: 'popularity',
    },
    {
      key: 'publishedAt',
      value: 'publishedAt',
    },
  ];

  const openStyles = {
    height: 'auto',
    padding: 10,
    opacity: 1,
  };

  const closedStyles = {
    height: 0,
    padding: 0,
    opacity: 0,
  };

  return (
    <div className="searchbar">
      <div className="searchbar__content">
        <div className="searchbar__icon">
          <svg
            fill="#000000"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24px"
            height="24px">
            <path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z" />
          </svg>
        </div>
        <input
          className="input"
          type="text"
          name="search"
          id="search"
          placeholder={props.placeholder}
          value={searchValue}
          onChange={(evt) => setSearchValue(evt.target.value)}
          onKeyPress={(evt) => {
            if (evt.key.toUpperCase() === 'ENTER') {
              props.onSearch(searchValue);
            }
          }}
        />
        <button
          type="button"
          className="btn"
          onClick={() => props.onSearch(searchValue)}>
          {props.buttonText}
        </button>
        <button
          type="button"
          className={`btn ${openFilter ? 'btn--active' : ''}`}
          onClick={() => setOpenFilter(!openFilter)}>
          <svg
            height="393pt"
            viewBox="-4 0 393 393.99003"
            width="393pt"
            xmlns="http://www.w3.org/2000/svg">
            <path d="m368.3125 0h-351.261719c-6.195312-.0117188-11.875 3.449219-14.707031 8.960938-2.871094 5.585937-2.3671875 12.3125 1.300781 17.414062l128.6875 181.28125c.042969.0625.089844.121094.132813.183594 4.675781 6.3125 7.203125 13.957031 7.21875 21.816406v147.796875c-.027344 4.378906 1.691406 8.582031 4.777344 11.6875 3.085937 3.105469 7.28125 4.847656 11.65625 4.847656 2.226562 0 4.425781-.445312 6.480468-1.296875l72.3125-27.574218c6.480469-1.976563 10.78125-8.089844 10.78125-15.453126v-120.007812c.011719-7.855469 2.542969-15.503906 7.214844-21.816406.042969-.0625.089844-.121094.132812-.183594l128.683594-181.289062c3.667969-5.097657 4.171875-11.820313 1.300782-17.40625-2.832032-5.511719-8.511719-8.9726568-14.710938-8.960938zm-131.53125 195.992188c-7.1875 9.753906-11.074219 21.546874-11.097656 33.664062v117.578125l-66 25.164063v-142.742188c-.023438-12.117188-3.910156-23.910156-11.101563-33.664062l-124.933593-175.992188h338.070312zm0 0" />
          </svg>
        </button>
      </div>

      <Spring from={openStyles} to={openFilter ? openStyles : closedStyles}>
        {(style) => (
          <animated.div style={style} className="searchbar__filter">
            <DropdownElement
              items={languages}
              placeholder="Choose language"
              label="language"
              value={lang}
              changeHandler={(value) => setLang(value)}
            />
            <DropdownElement
              items={sortBy}
              placeholder="Choose sort type"
              label="sort by"
              value={sortType}
              changeHandler={(value) => setSortType(value)}
            />
            <DateElement
              label="from"
              value={from}
              placeholder="Choose from date"
              changeHandler={(value) => setFrom(value)}
            />
            <DateElement
              label="to"
              value={to}
              placeholder="Choose to date"
              changeHandler={(value) => setTo(value)}
            />
          </animated.div>
        )}
      </Spring>
    </div>
  );
};

export default SearchBar;
