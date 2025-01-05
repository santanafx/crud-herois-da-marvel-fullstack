import { Control } from "react-hook-form";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  control: Control<any>;
  name: string;
  label?: string;
}
