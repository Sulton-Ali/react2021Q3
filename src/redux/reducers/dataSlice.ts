import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Response} from '../../services/newsApiService/newsApiServiceTypes';

export const initialState: Response = {
  status: '',
  totalResults: 0,
  articles: [],
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Response>) => {
      state.status = action.payload.status;
      state.totalResults = action.payload.totalResults;
      state.articles = action.payload.articles;
    },
  },
});

export const {setData} = dataSlice.actions;

export default dataSlice.reducer;
