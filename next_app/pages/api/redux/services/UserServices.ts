import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IReqInfoUser } from 'pages/api/redux/store/reducers/userTypes';

const URI = process.env.NEXT_PUBLIC_API_URL;

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: URI,
  }),
  endpoints: (build) => ({
    registrationUser: build.mutation<IReqInfoUser, IReqInfoUser>({
      query: ({ ...reqUserInfo }) => ({
        url: '/user/registration',
        method: 'POST',
        body: reqUserInfo,
      }),
    }),
  }),
});
