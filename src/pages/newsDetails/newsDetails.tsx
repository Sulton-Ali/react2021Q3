import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {initialArticle} from '../../models/newsModels';
import {NewsApiService} from '../../services/newsApiService/newsApiService';
import {Article} from '../../services/newsApiService/newsApiServiceTypes';
import {dateFormat} from '../../helpers/format';
import defaultImage from '../../assets/images/default_card_image.jpg';

import './newsDetails.scss';

export default function NewsDetails(): JSX.Element | null {
  const [article, setArticle] = useState<Article>(initialArticle);
  const params = useParams<{id: string; source: string}>();
  const newsApiService = new NewsApiService();

  useEffect(() => {
    newsApiService
      .getNewsByTitle(params.id)
      .then((response) => response.json())
      .then((data) => {
        if (data.articles.length > 1) {
          setArticle(data.articles[0]);
        } else {
          setArticle(data.articles[0]);
        }
      });
  }, []);

  return article?.title ? (
    <div className="news-details__wrapper">
      <div className="news-details">
        <div className="news-details__image-wrapper">
          {article.urlToImage ? (
            <img
              src={article.urlToImage}
              alt={article.source.name}
              className="news-details__image"
            />
          ) : (
            <img
              src={defaultImage}
              alt="default logo"
              className="news-details__image"
            />
          )}
        </div>
        <div className="news-details__content">
          <h3 className="news-details__title">{article.title}</h3>

          <p className="news-details__description">{article.description}</p>
        </div>
        <div className="news-details__footer">
          <div className="news-details__author">{article.author}</div>
          <div className="news-details__publishedAt">
            {dateFormat(article.publishedAt)}
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
