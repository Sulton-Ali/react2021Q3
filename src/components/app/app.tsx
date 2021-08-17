import React, {Component} from 'react';
import SearchBar from '../searchbar/searchbar';

import './app.scss';
import {NewsApiService} from '../../services/newsApiService/newsApiService';
import {NewsCardWrapper} from '../newsCard/newsCard';
import {AppState, IFilter} from '../../models/stateModels';
import Pagination from '../pagination/pagination';

export default class App extends Component {
  state: AppState = {
    data: {
      status: '',
      totalResults: 0,
      articles: [],
    },
    error: {
      status: '',
      code: '',
      message: '',
    },
    loading: false,
    searchWord: '',
    filter: {
      language: '',
      sortType: '',
      from: '',
      to: '',
    },
  };

  private newsApiService: NewsApiService = new NewsApiService();

  onSearch = (value: string, filter: IFilter): void => {
    if (!value.trim()) {
      alert('Search field is incorrect');
      return;
    }
    this.setState({
      loading: true,
      searchWord: value,
      filter,
    });
    this.newsApiService
      .getNews(value, {filter})
      .then((res) => res.json())
      .then((data) => {
        if (data?.status === 'ok') {
          this.setState({
            data: data,
            error: {},
            loading: false,
          });
        } else {
          this.setState({
            articles: [],
            error: data,
            loading: false,
          });
        }
      });
  };

  onPageChange = (value: number): void => {
    this.setState({
      loading: true,
    });
    this.newsApiService
      .getNews(this.state.searchWord, {
        filter: this.state.filter,
        page: value,
      })
      .then((res) => res.json())
      .then((data) => {
        if (data?.status === 'ok') {
          this.setState({
            data: data,
            error: {},
            loading: false,
          });
        } else {
          this.setState({
            articles: [],
            error: data,
            loading: false,
          });
        }
      });
  };

  render(): JSX.Element {
    return (
      <div className="app">
        <SearchBar
          buttonText="Search"
          placeholder="Enter search text"
          onSearch={this.onSearch}
        />
        <NewsCardWrapper
          data={this.state.data}
          error={this.state.error}
          loading={this.state.loading}
        />
        {this.state.data.totalResults > 0 && (
          <Pagination
            totalResults={this.state.data.totalResults}
            perPage={20}
            onPageChange={this.onPageChange}
          />
        )}
      </div>
    );
  }
}
