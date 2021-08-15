import React, {Component} from 'react';
import SearchBar from '../searchbar/searchbar';

import './app.scss';
import {NewsApiService} from '../../services/newsApiService/newsApiService';
import {NewsCardWrapper} from '../newsCard/newsCard';

export default class App extends Component {
  state = {
    articles: [],
  };

  private newsApiService: NewsApiService = new NewsApiService();

  componentDidMount(): void {
    const articles = this.newsApiService.getData().articles;
    this.setState({
      articles,
    });
  }

  render(): JSX.Element {
    return (
      <div className="app">
        <SearchBar buttonText="Search" placeholder="Enter search text" />
        <NewsCardWrapper articles={this.state.articles} />
      </div>
    );
  }
}
