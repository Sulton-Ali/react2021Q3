// const BASE_URL = '';
// const API_KEY = '4fb903a2fd544303a68ef6d8fb1d5709';

// import {mockResponse, mockError} from './mockData';

export class NewsApiService {
  private API_KEY = '4fb903a2fd544303a68ef6d8fb1d5709';
  private BASE_URL = 'https://newsapi.org/v2/everything';

  getNews(title: string): Promise<Response> {
    //   const randomNumber = Math.random();
    //   console.log(randomNumber);

    //   let result: Response | Error;
    //   if (randomNumber <= 0.7) {
    //     result = mockResponse;
    //   } else {
    //     result = mockError;
    //   }
    //   return result;
    // }
    return fetch(`${this.BASE_URL}?q=${title}&apiKey=${this.API_KEY}`);
  }
}
