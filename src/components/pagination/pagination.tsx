import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {
  setData,
  initialState as initialData,
} from '../../redux/reducers/dataSlice';
import {setError} from '../../redux/reducers/errorSlice';
import {setLoading} from '../../redux/reducers/loadingSlice';
import {NewsApiService} from '../../services/newsApiService/newsApiService';
import {Response} from '../../services/newsApiService/newsApiServiceTypes';

import './pagination.scss';

export type PaginationProps = {
  totalResults: number;
  perPage: number;
  onPageChange: (value: number) => void;
};

function Pagination(): JSX.Element | null {
  const [page, setPage] = useState<number>(1);

  const dispatch = useAppDispatch();
  const totalResults = useAppSelector((state) => state.data.totalResults);
  const filter = useAppSelector((state) => state.filter);
  const perPage = useAppSelector((state) => state.perPage.perPage);
  const searchWord = useAppSelector((state) => state.searchWord.searchWord);

  const pagesCount = Math.floor(totalResults / Number(perPage)) + 1;

  const newsApiService: NewsApiService = new NewsApiService();

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

  const onPageChange = (value: number): void => {
    if (!searchWord) {
      return;
    }
    dispatch(setLoading(true));
    newsApiService
      .getNews(searchWord, {
        filter: filter,
        page: value,
        perPage: Number(perPage),
      })
      .then((res: any) => res.json())
      .then((data: any) => saveResponseData(data))
      .catch((error: any) => console.log(error));
  };

  const setPageCount = (value: number): void => {
    setPage(value);
    onPageChange(value);
  };

  if (pagesCount <= 1) {
    return null;
  }

  return (
    <div className="pagination">
      <div className="pagination__content">
        <div
          className="pagination__start"
          onClick={() => {
            if (page > 1) {
              setPageCount(1);
            }
          }}>
          &#10094;&#10094;
        </div>
        <div
          className="pagination__prev"
          onClick={() => {
            if (page > 1) {
              setPageCount(Math.max(page - 1, 1));
            }
          }}>
          &#10094;
        </div>
        <div className="pagination__page">{page}</div>
        <div className="pagination__pages-count">{pagesCount}</div>
        <div
          className="pagination__next"
          onClick={() => {
            if (page < pagesCount) {
              setPageCount(Math.min(page + 1, pagesCount));
            }
          }}>
          &#10095;
        </div>
        <div
          className="pagination__end"
          onClick={() => {
            if (page < pagesCount) {
              setPageCount(pagesCount);
            }
          }}>
          &#10095;&#10095;
        </div>
      </div>
    </div>
  );
}

export default Pagination;
