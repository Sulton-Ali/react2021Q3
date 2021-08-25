import React from 'react';
import Lottie from 'react-lottie-player';
import {dateFormat} from '../../helpers/format';
import {NewsCardProps, NewsCardWrapperProps} from '../../models/newsModels';
import defaultImage from '../../assets/images/default_card_image.jpg';

import './newsCard.scss';
import loadingLottie from '../../assets/lotties/loading.json';
import {Link} from 'react-router-dom';

export function NewsCardWrapper(props: NewsCardWrapperProps): JSX.Element {
  const articles = props.data.articles;
  const error = props.error;
  let errorContent = null;

  if (error?.status) {
    errorContent = (
      <div className="news-card-wrapper__error">{error.message}</div>
    );
  }
  return (
    <div className="news-card-wrapper">
      {errorContent && errorContent}
      {props.loading && (
        <div className="news-card-wrapper__loading">
          <Lottie
            loop
            play
            animationData={loadingLottie}
            style={{
              width: 100,
              height: 100,
              alignSelf: 'center',
            }}
          />
        </div>
      )}
      {!errorContent && !props.loading && (
        <div className="news-card-wrapper__body">
          {articles.map((article, idx) => (
            <NewsCard article={article} key={idx} />
          ))}
        </div>
      )}
    </div>
  );
}

export function NewsCard(props: NewsCardProps): JSX.Element {
  const article = props.article;
  return (
    <div className="news-card">
      <div className="news-card__image-wrapper">
        {article.urlToImage ? (
          <img
            src={article.urlToImage}
            alt={article.source.name}
            className="news-card__image"
          />
        ) : (
          <img
            src={defaultImage}
            alt="default logo"
            className="news-card__image"
          />
        )}
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
          <Link
            to={`/details/${article.title}/${
              article.source.id ? article.source.id : article.source.name
            }`}
            rel="noreferrer">
            See fully
          </Link>
        </div>
      </div>
    </div>
  );
}
