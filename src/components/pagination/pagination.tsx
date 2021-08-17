import React, {useState} from 'react';

import './pagination.scss';
import {Validator} from '../../helpers/validator';

export type PaginationProps = {
  totalResults: number;
  perPage: number;
  onPageChange: (value: number) => void;
};

function Pagination(props: PaginationProps) {
  const [page, setPage] = useState<number>(1);
  const [pagesCount, setPagesCount] = useState<number>(
    Math.floor(props.totalResults / props.perPage) + 1,
  );
  console.log(props, pagesCount);
  const setPageCount = (value: number): void => {
    setPage(value);
    props.onPageChange(value);
  };

  if (pagesCount <= 1) {
    return null;
  }

  return (
    <div className="pagination">
      <div className="pagination__content">
        <div className="pagination__start" onClick={() => setPageCount(1)}>
          &#10094;&#10094;
        </div>
        <div
          className="pagination__prev"
          onClick={() => setPageCount(Math.max(page - 1, 1))}>
          &#10094;
        </div>
        <div className="pagination__page">{page}</div>
        <div className="pagination__pages-count">{pagesCount}</div>
        <div
          className="pagination__next"
          onClick={() => setPageCount(Math.min(page + 1, pagesCount))}>
          &#10095;
        </div>
        <div
          className="pagination__end"
          onClick={() => setPageCount(pagesCount)}>
          &#10095;&#10095;
        </div>
      </div>
    </div>
  );
}

export default Pagination;
