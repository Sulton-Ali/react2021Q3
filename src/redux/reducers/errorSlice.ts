import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Error} from '../../services/newsApiService/newsApiServiceTypes';

export const initialState: Error = {
  status: '',
  code: '',
  message: '',
};

export const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<any>) => {
      state.status = action.payload.status;
      state.code = action.payload.code;
      state.message = action.payload.message;
    },
  },
});

export const {setError} = errorSlice.actions;

export default errorSlice.reducer;
