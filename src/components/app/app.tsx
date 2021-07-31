import React from 'react';
import SearchBar from '../searchbar/searchbar';

import './app.scss';

export default function App(): JSX.Element {
  return (
    <div className="app">
      <SearchBar buttonText="Search" placeholder="Enter search text" />
    </div>
  );
}
