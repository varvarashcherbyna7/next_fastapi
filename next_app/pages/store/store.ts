import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userApi } from '../services/UserServices';
// import UserReducer from './reducers/userSlice';

const rootReducer = combineReducers({
  // UserReducer,
  [userApi.reducerPath]: userApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(userApi.middleware);
    },
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
