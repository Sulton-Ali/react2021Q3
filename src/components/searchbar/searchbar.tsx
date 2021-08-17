import React, {useState} from 'react';
import {Spring, animated} from 'react-spring';
import Lottie from 'react-lottie-player';
import DateElement from '../dateElement/dateElement';
import DropdownElement from '../dropdown/dropdownElement';
import {IFilter} from '../../models/stateModels';
import {languages, sortBy} from '../../helpers/constants';

import newsLottie from '../../assets/lotties/news.json';
import filterLottie from '../../assets/lotties/filter.json';
import searchLottie from '../../assets/lotties/search.json';

import './searchbar.scss';

interface ISearchbarProps {
  buttonText: string;
  placeholder?: string;
  onSearch: (value: string, filter: IFilter) => void;
}

const SearchBar = (props: ISearchbarProps): JSX.Element => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const [lang, setLang] = useState<string>('');
  const [sortType, setSortType] = useState<string>('');
  const [from, setFrom] = useState<string>('');
  const [to, setTo] = useState<string>('');

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

  const getFilterObj = () => {
    return {
      language: lang,
      sortType: sortType,
      from,
      to,
    };
  };

  const resetFilter = () => {
    setLang('');
    setSortType('');
    setFrom('');
    setTo('');
  };

  return (
    <div className="searchbar">
      <div className="searchbar__logo">
        <Lottie
          loop
          play
          animationData={newsLottie}
          style={{
            width: 100,
            height: 50,
            alignSelf: 'center',
          }}
          className="news-lottie"
        />
        <h1 className="searchbar__logo-text">News</h1>
      </div>
      <div className="searchbar__content">
        <div className="searchbar__input">
          <div className="searchbar__icon">
            <Lottie
              loop
              play
              animationData={searchLottie}
              style={{
                width: 25,
                height: 25,
                alignSelf: 'center',
              }}
            />
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
                const filterObj = getFilterObj();
                props.onSearch(searchValue, filterObj);
              }
            }}
          />
        </div>
        <div className="searchbar__buttons">
          <button
            type="button"
            className="btn"
            onClick={() => {
              const filterObj = getFilterObj();
              props.onSearch(searchValue, filterObj);
            }}>
            {props.buttonText}
          </button>
          <button
            type="button"
            className={`btn filter-button ${openFilter ? 'btn--active' : ''}`}
            onClick={() => setOpenFilter(!openFilter)}>
            <Lottie
              loop
              play
              animationData={filterLottie}
              style={{
                width: 15,
                height: 15,
                alignSelf: 'center',
              }}
            />
          </button>
        </div>
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
