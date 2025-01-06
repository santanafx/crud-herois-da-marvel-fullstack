import { Control } from "react-hook-form";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  isLoading?: boolean;
  control: Control<any>;
  name: string;
  label?: string;
}
