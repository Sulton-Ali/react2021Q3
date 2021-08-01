import React from 'react';
import Card, {ICard} from '../card/card';
import SearchBar from '../searchbar/searchbar';

import './app.scss';

import cardImage from '../../images/beautiful_scenery_05.jpeg';

const cards: Array<ICard> = [
  {
    imgUrl: cardImage,
    title: 'Card title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, aperiam quia veritatis reprehenderit quisquam aut amet animi. Beatae, ad aliquam.',
    author: 'John Doe',
    tags: ['Design', 'Sport', 'Animation'],
    likes: 543,
    views: 10000,
  },
  {
    imgUrl: cardImage,
    title: 'Card title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, aperiam quia veritatis reprehenderit quisquam aut amet animi. Beatae, ad aliquam.',
    author: 'John Doe',
    tags: ['Design', 'Sport', 'Animation'],
    likes: 543,
    views: 10000,
  },
  {
    imgUrl: cardImage,
    title: 'Card title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, aperiam quia veritatis reprehenderit quisquam aut amet animi. Beatae, ad aliquam.',
    author: 'John Doe',
    tags: ['Design', 'Sport', 'Animation'],
    likes: 543,
    views: 10000,
  },
  {
    imgUrl: cardImage,
    title: 'Card title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, aperiam quia veritatis reprehenderit quisquam aut amet animi. Beatae, ad aliquam.',
    author: 'John Doe',
    tags: ['Design', 'Sport', 'Animation'],
    likes: 543,
    views: 10000,
  },
  {
    imgUrl: cardImage,
    title: 'Card title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, aperiam quia veritatis reprehenderit quisquam aut amet animi. Beatae, ad aliquam.',
    author: 'John Doe',
    tags: ['Design', 'Sport', 'Animation'],
    likes: 543,
    views: 10000,
  },
];

export default function App(): JSX.Element {
  return (
    <div className="app">
      <SearchBar buttonText="Search" placeholder="Enter search text" />
      <div className="cards">
        {cards.map((cardItem, idx) => (
          <Card key={idx} item={cardItem} />
        ))}
      </div>
    </div>
  );
}
