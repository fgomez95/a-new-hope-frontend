export interface LoginState {
  username: string;
  password: string;
}

export interface LoginProps {
  asyncLogin(username: string, password: string): void;
}