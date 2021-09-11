import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export const searchWordSlice = createSlice({
  name: 'searchWord',
  initialState: {
    searchWord: '',
  },
  reducers: {
    setSearchWord: (state, action: PayloadAction<string>) => {
      state.searchWord = action.payload;
    },
  },
});

export const {setSearchWord} = searchWordSlice.actions;

export default searchWordSlice.reducer;
