import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export const loadingSlice = createSlice({
  name: 'filter',
  initialState: {
    loading: false,
  },
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const {setLoading} = loadingSlice.actions;

export default loadingSlice.reducer;
