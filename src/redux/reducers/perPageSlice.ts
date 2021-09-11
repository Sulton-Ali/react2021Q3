import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export const perPageSlice = createSlice({
  name: 'perPage',
  initialState: {
    perPage: '',
  },
  reducers: {
    setPerPage: (state, action: PayloadAction<string>) => {
      state.perPage = action.payload;
    },
  },
});

export const {setPerPage} = perPageSlice.actions;

export default perPageSlice.reducer;
