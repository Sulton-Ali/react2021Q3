import {Article} from '../services/newsApiService/newsApiServiceTypes';

export type NewsCardWrapperProps = {
  articles: Article[];
};

export type NewsCardProps = {
  article: Article;
};
