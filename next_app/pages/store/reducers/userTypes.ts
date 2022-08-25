export interface IReqInfoUser {
  id?: number;
  username: string;
  email: string;
  // phone: string;
  password: string;
}

export interface IUserState {
  user: IReqInfoUser;
  isLoading: boolean;
  error: string;
}
