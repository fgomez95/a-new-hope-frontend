export interface MessageFormProps {
  handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void;
  username: string;
  message: string;
}
