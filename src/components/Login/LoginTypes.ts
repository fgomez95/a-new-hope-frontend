export interface LoginFormProps {
  username: string;
  password: string;
  handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void;
  handleFormSubmit(event: React.FormEvent<HTMLFormElement>): void;
}
