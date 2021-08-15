import React from 'react';
import {dateFormat} from '../../helpers/format';
import {NewsCardProps, NewsCardWrapperProps} from '../../models/newsModels';

import './newsCard.scss';

export function NewsCardWrapper(props: NewsCardWrapperProps): JSX.Element {
  return (
    <div className="news-card-wrapper">
      <div className="news-card-wrapper__body">
        {props.articles.map((article, idx) => (
          <NewsCard article={article} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default function NewsCard(props: NewsCardProps): JSX.Element {
  const article = props.article;
  return (
    <div className="news-card">
      <div className="news-card__image-wrapper">
        <img
          src={article.urlToImage}
          alt={article.source.name}
          className="news-card__image"
        />
      </div>
      <div className="news-card__content">
        <h3 className="news-card__title">{article.title}</h3>

        <p className="news-card__description">{article.description}</p>
      </div>
      <div className="news-card__footer">
        <div className="news-card__footer-left">
          <div className="news-card__author">{article.author}</div>
          <div className="news-card__publishedAt">
            {dateFormat(article.publishedAt)}
          </div>
        </div>
        <div className="news-card__footer-right">
          <a href={article.url} target="_blank" rel="noreferrer">
            See fully
          </a>
        </div>
      </div>
    </div>
  );
}
