import {languages} from '../../helpers/constants';
import {NewParams} from '../../models/newsModels';

export class NewsApiService {
  private API_KEY = '4fb903a2fd544303a68ef6d8fb1d5709';
  private BASE_URL = 'https://newsapi.org/v2/everything';

  getNews(title: string, params: NewParams): Promise<Response> {
    const filter = params.filter;
    let filterQuery = '';
    if (filter.language) {
      const lang = languages.find(
        (lang) => lang.value === filter?.language,
      )?.key;
      filterQuery += `&language=${lang}`;
    }
    if (filter.sortType) {
      filterQuery += `&sortBy=${filter.sortType}`;
    }
    if (filter.from) {
      filterQuery += `&from=${filter.from}`;
    }
    if (filter.to) {
      filterQuery += `&to=${filter.to}`;
    }
    if (params.page) {
      filterQuery += `&page=${params.page}`;
    }
    if (params.perPage) {
      filterQuery += `&pageSize=${params.perPage}`;
    }
    if (filterQuery) {
      return fetch(
        `${this.BASE_URL}?q=${title}${filterQuery}&apiKey=${this.API_KEY}`,
      );
    }
    return fetch(`${this.BASE_URL}?q=${title}&apiKey=${this.API_KEY}`);
  }

  getTopHeadlines(): Promise<Response> {
    return fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.API_KEY}`,
    );
  }
}
