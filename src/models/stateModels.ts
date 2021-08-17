import {Error, Response} from '../services/newsApiService/newsApiServiceTypes';

export type AppState = {
  data: Response;
  error: Error;
  loading: boolean;
  searchWord: string;
  filter: IFilter;
};

export interface IFilter {
  language: string;
  sortType: string;
  from: string;
  to: string;
}
