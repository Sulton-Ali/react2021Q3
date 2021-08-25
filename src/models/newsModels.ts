import {
  Article,
  Error,
  Response,
} from '../services/newsApiService/newsApiServiceTypes';
import {IFilter} from './stateModels';

export type NewsCardWrapperProps = {
  data: Response;
  error: Error;
  loading: boolean;
};

export type NewParams = {
  filter: IFilter;
  page?: number;
  perPage?: number;
};

export type NewsCardProps = {
  article: Article;
};

export type NewsDetailsProps = {
  // getNewsByTitle?: (value: string) => Promise<Response>;
};

export const initialArticle = {
  source: {
    id: '',
    name: '',
  },
  author: '',
  title: '',
  description: '',
  url: '',
  urlToImage: '',
  publishedAt: '',
  content: '',
};
