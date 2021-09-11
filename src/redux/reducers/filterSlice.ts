import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IFilter} from '../../models/stateModels';

const initialState: IFilter = {
  language: '',
  sortType: '',
  from: '',
  to: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<IFilter>) => {
      state.language = action.payload.language;
      state.sortType = action.payload.sortType;
      state.from = action.payload.from;
      state.to = action.payload.to;
    },
  },
});

export const {setFilter} = filterSlice.actions;

export default filterSlice.reducer;
