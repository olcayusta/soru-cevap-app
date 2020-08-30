export interface User {
  id?: number;
  displayName: string;
  picture: string;
  email: string;
  password?: string;
  signupDate?: Date;
  token?: string;
}
