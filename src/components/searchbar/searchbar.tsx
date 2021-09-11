import React, {useState} from 'react';
import {Spring, animated} from 'react-spring';
import Lottie from 'react-lottie-player';
import DateElement from '../dateElement/dateElement';
import DropdownElement from '../dropdown/dropdownElement';
import {IFilter} from '../../models/stateModels';
import {languages, perPageList, sortBy} from '../../helpers/constants';

import filterLottie from '../../assets/lotties/filter.json';
import searchLottie from '../../assets/lotties/search.json';

import './searchbar.scss';
import {NewsApiService} from '../../services/newsApiService/newsApiService';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {
  setData,
  initialState as initialData,
} from '../../redux/reducers/dataSlice';
import {setLoading} from '../../redux/reducers/loadingSlice';
import {setError} from '../../redux/reducers/errorSlice';
import {setFilter} from '../../redux/reducers/filterSlice';
import {setSearchWord} from '../../redux/reducers/searchWordSlice';
import {setPerPage} from '../../redux/reducers/perPageSlice';
import {Response} from '../../services/newsApiService/newsApiServiceTypes';

interface ISearchbarProps {
  buttonText: string;
  placeholder?: string;
}

const SearchBar = (props: ISearchbarProps): JSX.Element => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const [lang, setLang] = useState<string>('');
  const [sortType, setSortType] = useState<string>('');
  const [from, setFrom] = useState<string>('');
  const [to, setTo] = useState<string>('');
  // const [perPage, setPerPage] = useState<string>('');

  const perPageFromState: string = useAppSelector(
    (state) => state.perPage.perPage,
  );
  const searchWord: string = useAppSelector(
    (state) => state.searchWord.searchWord,
  );
  const perPage: string = useAppSelector((state) => state.perPage.perPage);
  const filter = useAppSelector((state) => state.filter);

  const newsApiService: NewsApiService = new NewsApiService();
  const dispatch = useAppDispatch();

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

  const saveResponseData = (data: Response): void => {
    if (data?.status === 'ok') {
      dispatch(setData(data));
      dispatch(setLoading(false));
    } else {
      dispatch(setData(initialData));
      dispatch(setError(data));
      dispatch(setLoading(false));
    }
  };

  const onSearch = (value: string, filter: IFilter): void => {
    if (!value.trim()) {
      alert('Search field is incorrect');
      return;
    }

    dispatch(setLoading(true));
    dispatch(setSearchWord(value));
    dispatch(setFilter(filter));

    newsApiService
      .getNews(value, {filter, perPage: Number(perPageFromState)})
      .then((res: any) => res.json())
      .then((data: any) => saveResponseData(data))
      .catch((error) => console.log(error));
  };

  const onPerPageChange = (perPageCount: string): void => {
    if (!searchWord) {
      dispatch(setPerPage(perPageCount));
      return;
    }
    dispatch(setLoading(true));
    dispatch(setPerPage(perPageCount));
    newsApiService
      .getNews(searchWord, {
        filter: filter,
        page: 1,
        perPage: Number(perPageCount),
      })
      .then((res) => res.json())
      .then((data) => saveResponseData(data));
  };

  return (
    <aside className={`searchbar ${openSearch ? '' : 'searchbar--hide'}`}>
      <button
        className="searchbar__toggle"
        onClick={() => setOpenSearch(!openSearch)}>
        <span className="searchbar__toggle-text">Searchbar</span>
        <svg
          height="512pt"
          viewBox="0 0 512 512"
          width="512pt"
          xmlns="http://www.w3.org/2000/svg">
          <path d="m256 512c-68.378906 0-132.667969-26.628906-181.019531-74.980469-48.351563-48.351562-74.980469-112.640625-74.980469-181.019531s26.628906-132.667969 74.980469-181.019531c48.351562-48.351563 112.640625-74.980469 181.019531-74.980469s132.667969 26.628906 181.019531 74.980469c48.351563 48.351562 74.980469 112.640625 74.980469 181.019531s-26.628906 132.667969-74.980469 181.019531c-48.351562 48.351563-112.640625 74.980469-181.019531 74.980469zm0-472c-119.101562 0-216 96.898438-216 216s96.898438 216 216 216 216-96.898438 216-216-96.898438-216-216-216zm104.285156 216-138.285156-138.285156-28.285156 28.285156 110 110-110 110 28.285156 28.285156zm0 0" />
        </svg>
      </button>
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
                onSearch(searchValue, filterObj);
              }
            }}
          />
        </div>
        <div className="searchbar__buttons">
          <button
            type="button"
            className="btn search-button"
            onClick={() => {
              const filterObj = getFilterObj();
              onSearch(searchValue, filterObj);
            }}>
            {props.buttonText}
          </button>
          <DropdownElement
            items={perPageList}
            placeholder="news in page"
            label=""
            value={perPage}
            changeHandler={(value) => {
              setPerPage(value);
              onPerPageChange(value);
            }}
          />
          <button
            type="button"
            className={`btn filter-button ${openFilter ? 'btn--active' : ''}`}
            onClick={() => setOpenFilter(!openFilter)}>
            <Lottie
              loop
              play
              animationData={filterLottie}
              style={{
                width: 24,
                height: 24,
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
    </aside>
  );
};

export default SearchBar;
