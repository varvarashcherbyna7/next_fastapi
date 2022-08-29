import { createAsyncThunk } from '@reduxjs/toolkit';
import { userApi } from 'pages/api/backend_fastapi/userInstanse';
// import { AppDispatch } from '../store';
// import { userSlice } from './userSlice';
import { IReqInfoUser } from './userTypes';

// the first method of implementation

// export const registrationUser =
//   (reqUserInfo: IReqInfoUser) => async (dispatch: AppDispatch) => {
//     try {
//       dispatch(userSlice.actions.userRegistration());
//       const response = await userApi.registrationUser(reqUserInfo);
//       dispatch(userSlice.actions.userRegistrationSuccess(response.data));
//     } catch (e: any) {
//       dispatch(userSlice.actions.userRegistrationError(e.message));
//     }
//   };

// the second method of implementation

export const registrationUser = createAsyncThunk(
  'user/registration',
  async (reqUserInfo: IReqInfoUser, thunkAPI) => {
    try {
      const data = await userApi.registrationUser(reqUserInfo);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(
        'Error! the user could not be registered '
      );
    }
  }
);