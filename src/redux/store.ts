import dataReducer from './reducers/dataSlice';
import errorReducer from './reducers/errorSlice';
import loadingReducer from './reducers/loadingSlice';
import {configureStore} from '@reduxjs/toolkit';
import perPageReducer from './reducers/perPageSlice';
import searchWordReducer from './reducers/searchWordSlice';
import filterReducer from './reducers/filterSlice';

const store = configureStore({
  reducer: {
    data: dataReducer,
    error: errorReducer,
    filter: filterReducer,
    loading: loadingReducer,
    perPage: perPageReducer,
    searchWord: searchWordReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
