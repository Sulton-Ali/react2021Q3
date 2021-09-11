import React, {useEffect} from 'react';
import {NewsApiService} from '../../services/newsApiService/newsApiService';
import SearchBar from '../../components/searchbar/searchbar';
import {NewsCardWrapper} from '../../components/newsCard/newsCard';
import Pagination from '../../components/pagination/pagination';
import {Response} from '../../services/newsApiService/newsApiServiceTypes';
import {
  initialState as initialData,
  setData,
} from '../../redux/reducers/dataSlice';

import './homePage.scss';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {setError} from '../../redux/reducers/errorSlice';
import {setLoading} from '../../redux/reducers/loadingSlice';

const HomePage = (): JSX.Element => {
  const searchWord = useAppSelector((state) => state.searchWord.searchWord);

  const newsApiService: NewsApiService = new NewsApiService();
  const dispatch = useAppDispatch();

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

  useEffect(() => {
    newsApiService
      .getTopHeadlines()
      .then((response: any) => response.json())
      .then((data: any) => {
        saveResponseData(data);
      })
      .catch((error: any) => console.log(error));
  }, []);

  const data = useAppSelector((state) => state.data);
  const loading = useAppSelector((state) => state.loading);

  return (
    <div className="home-page">
      <SearchBar buttonText="Search" placeholder="Enter search text" />
      <div className="home-page__content">
        <h2 className="home-page__title">
          Search results by: {searchWord ? searchWord : 'top headlines'}
        </h2>
        <NewsCardWrapper />
        {data.totalResults > 0 && !loading && <Pagination />}
      </div>
    </div>
  );
};

export default HomePage;
