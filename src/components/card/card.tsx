import React from 'react';

import './card.scss';

export interface ICard {
  imgUrl: string;
  title: string;
  description: string;
  author: string;
  tags: string[];
  likes: number;
  views: number;
}

export interface ICardProps {
  item: ICard;
}

const Card = (props: ICardProps): JSX.Element => {
  const {item} = props;
  return (
    <div className="card">
      <div className="card__img-wrapper">
        <img src={item.imgUrl} alt="beautiful bg" className="card__img" />
      </div>
      <div className="card__content">
        <h3 className="card__title">{item.title}</h3>
        <p className="card__description">{item.description}</p>
        <p className="card__author">
          by <strong>{item.author}</strong>
        </p>
        <hr className="card__divider" />
        <div className="card__tags">
          {item.tags.map((tag, index) => (
            <span key={index} className="card__tag">{`#${tag} `}</span>
          ))}
        </div>
        <hr className="card__divider" />
        <div className="card__stat">
          <div className="card__likes">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
              <path d="M 23 3 C 22.448 3 22 3.448 22 4 L 22 11.75 L 18 22 L 18 43 C 18.413 44.164 19.696 45 21 45 L 40 45 C 42.206 45 44 43.206 44 41 C 44 40.177 43.7395 39.41825 43.3125 38.78125 C 44.8695 38.23425 46 36.742 46 35 C 46 34.021 45.6475 33.1325 45.0625 32.4375 C 46.2235 31.7365 47 30.452 47 29 C 47 28.021 46.6475 27.1325 46.0625 26.4375 C 47.2235 25.7365 48 24.453 48 23 C 48 20.794 46.206 19 44 19 L 29.375 19 C 29.984 17.07 31 13.616 31 12 C 31 8.236 28.24125 3 25.53125 3 L 23 3 z M 3 19 C 2.713 19 2.44 19.12875 2.25 19.34375 C 2.06 19.55875 1.965 19.84 2 20.125 L 5 44.125 C 5.063 44.625 5.496 45 6 45 L 15 45 C 15.552 45 16 44.553 16 44 L 16 20 C 16 19.448 15.552 19 15 19 L 3 19 z M 11.5 38 C 12.328 38 13 38.672 13 39.5 C 13 40.328 12.328 41 11.5 41 C 10.672 41 10 40.328 10 39.5 C 10 38.672 10.672 38 11.5 38 z" />
            </svg>
            {item.likes}
          </div>
          <div className="card__views">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24">
              <path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z" />
            </svg>
            {item.views}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
