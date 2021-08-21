import React, {Component} from 'react';
import {AppState, IFilter} from '../../models/stateModels';
import {NewsApiService} from '../../services/newsApiService/newsApiService';
import SearchBar from '../../components/searchbar/searchbar';
import {NewsCardWrapper} from '../../components/newsCard/newsCard';
import Pagination from '../../components/pagination/pagination';

import './homePage.scss';
import {Response} from '../../services/newsApiService/newsApiServiceTypes';

class HomePage extends Component {
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
    perPage: '',
    filter: {
      language: '',
      sortType: '',
      from: '',
      to: '',
    },
  };

  private newsApiService: NewsApiService = new NewsApiService();

  componentDidMount(): void {
    this.setState({
      loading: true,
    });
    this.newsApiService
      .getTopHeadlines()
      .then((response) => response.json())
      .then((data) => this.saveResponseData(data))
      .catch((error) => console.log(error));
  }

  saveResponseData = (data: Response): void => {
    if (data?.status === 'ok') {
      this.setState({
        data: data,
        error: {},
        loading: false,
      });
    } else {
      this.setState({
        data: {
          status: '',
          totalResults: 0,
          articles: [],
        },
        error: data,
        loading: false,
      });
    }
  };

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
      .getNews(value, {filter, perPage: Number(this.state.perPage)})
      .then((res) => res.json())
      .then((data) => this.saveResponseData(data))
      .catch((error) => console.log(error));
  };

  onPageChange = (value: number): void => {
    if (!this.state.searchWord) {
      return;
    }
    this.setState({
      loading: true,
    });
    this.newsApiService
      .getNews(this.state.searchWord, {
        filter: this.state.filter,
        page: value,
        perPage: Number(this.state.perPage),
      })
      .then((res) => res.json())
      .then((data) => this.saveResponseData(data))
      .catch((error) => console.log(error));
  };

  onPerPageChange = (perPageCount: string): void => {
    if (!this.state.searchWord) {
      this.setState({
        perPage: perPageCount,
      });
      return;
    }
    this.setState({
      perPage: perPageCount,
      loading: true,
    });
    this.newsApiService
      .getNews(this.state.searchWord, {
        filter: this.state.filter,
        page: 1,
        perPage: Number(perPageCount),
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
      <div className="home-page">
        <SearchBar
          buttonText="Search"
          placeholder="Enter search text"
          onSearch={this.onSearch}
          onPerPageChange={(value: string) => this.onPerPageChange(value)}
        />
        <div className="home-page__content">
          <h2 className="home-page__title">
            Search results by:{' '}
            {this.state.searchWord ? this.state.searchWord : 'top headlines'}
          </h2>
          <NewsCardWrapper
            data={this.state.data}
            error={this.state.error}
            loading={this.state.loading}
          />
          {this.state.data.totalResults > 0 && (
            <Pagination
              totalResults={this.state.data.totalResults}
              perPage={Number(this.state.perPage) || 20}
              onPageChange={this.onPageChange}
            />
          )}
        </div>
      </div>
    );
  }
}

export default HomePage;
