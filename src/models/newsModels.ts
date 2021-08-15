import {
  Article,
  Error,
  Response,
} from '../services/newsApiService/newsApiServiceTypes';

export type NewsCardWrapperProps = {
  data: Response;
  error: Error;
  loading: boolean;
};

export type NewsCardProps = {
  article: Article;
};
