export interface ILoginResponse {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
}

export interface ILoginData {
  email: string | undefined;
  password: string | undefined;
}
