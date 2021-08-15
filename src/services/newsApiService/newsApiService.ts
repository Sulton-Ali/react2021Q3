// const BASE_URL = '';
// const API_KEY = '4fb903a2fd544303a68ef6d8fb1d5709';

import {mockResponse} from './mockData';
import {Response} from './newsApiServiceTypes';

export class NewsApiService {
  private API_KEY = '4fb903a2fd544303a68ef6d8fb1d5709';
  private BASE_URL = 'https://newsapi.org/v2/everything';

  getData(): Response {
    return mockResponse;
  }
}
