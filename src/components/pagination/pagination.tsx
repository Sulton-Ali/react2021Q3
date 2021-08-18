import React, {useState} from 'react';

import './pagination.scss';

export type PaginationProps = {
  totalResults: number;
  perPage: number;
  onPageChange: (value: number) => void;
};

function Pagination(props: PaginationProps): JSX.Element | null {
  const [page, setPage] = useState<number>(1);
  const pagesCount = Math.floor(props.totalResults / props.perPage) + 1;
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
