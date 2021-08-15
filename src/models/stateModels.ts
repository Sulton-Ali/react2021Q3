import {Error, Response} from '../services/newsApiService/newsApiServiceTypes';

export type AppState = {
  data: Response;
  error: Error;
  loading: boolean;
};
